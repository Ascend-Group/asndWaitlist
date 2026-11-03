/**
 * ASND Waitlist — Google Apps Script Backend
 *
 * Appends signups to your exact Google Sheet:
 * https://docs.google.com/spreadsheets/d/1v2C0wsKV0bdCR31XeVSRb35TU7UaDO-hLMRPH4UM7ws/edit
 *
 * Styled with ASND brand colors (#012F4F), bold white typography,
 * frozen headers, and auto-sized column widths.
 */

var SPREADSHEET_ID = '1v2C0wsKV0bdCR31XeVSRb35TU7UaDO-hLMRPH4UM7ws';
var SHEET_NAME = 'Waitlist';

var HEADERS = [
  'Submitted At',
  'Role',
  'First Name',
  'Last Name',
  'Email',
  'Phone Number',
  'Portfolio / Link',
  'Message',
  'Source'
];

function doPost(e) {
  try {
    var body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    var email = String(body.email || '').trim();
    if (!email) return json({ ok: false, error: 'email_required' });

    var sheet = getSheet();

    // Dedupe by email (case-insensitive) — returns duplicate: true so repeat signups don't clutter the sheet
    if (emailExists(sheet, email)) {
      return json({ ok: true, duplicate: true });
    }

    // Append new signup row
    sheet.appendRow([
      formatDate(body.submitted_at),
      formatRole(body.role),
      String(body.first_name || '').trim(),
      String(body.last_name || '').trim(),
      email,
      formatPhone(body),
      String(body.instagram || body.link || '').replace(/^@+/, '').trim(),
      String(body.message || '').trim(),
      String(body.source || 'Website Waitlist')
    ]);

    // Format new row (comfortable row height, vertical middle)
    var newRow = sheet.getLastRow();
    sheet.setRowHeight(newRow, 34);
    var rowRange = sheet.getRange(newRow, 1, 1, HEADERS.length);
    rowRange.setVerticalAlignment('middle');
    rowRange.setFontFamily('Inter');
    rowRange.setFontSize(10);
    sheet.getRange(newRow, 6).setNumberFormat('@');

    return json({ ok: true, action: 'added' });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

// Health check and header formatter on GET
function doGet() {
  var sheet = getSheet();
  formatSheetHeader(sheet);
  return json({ ok: true, service: 'asnd-waitlist', spreadsheet_id: SPREADSHEET_ID });
}

function getSheet() {
  var ss;
  try {
    ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  } catch (err) {
    ss = SpreadsheetApp.getActiveSpreadsheet();
  }

  // Look for 'Waitlist' (case-insensitive)
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    var sheets = ss.getSheets();
    for (var i = 0; i < sheets.length; i++) {
      if (sheets[i].getName().toLowerCase() === SHEET_NAME.toLowerCase()) {
        sheet = sheets[i];
        break;
      }
    }
  }
  if (!sheet) sheet = ss.getSheets()[0];

  // If empty or has old snake_case headers, apply styled header row
  var lastRow = sheet.getLastRow();
  if (lastRow === 0) {
    formatSheetHeader(sheet);
  } else {
    var firstVal = sheet.getRange(1, 1).getValue();
    if (String(firstVal).toLowerCase().includes('submitted_at')) {
      formatSheetHeader(sheet);
    }
  }

  return sheet;
}

// Applies ASND Navy (#012F4F), crisp white text, frozen top row, and modern column widths
function formatSheetHeader(sheet) {
  var range = sheet.getRange(1, 1, 1, HEADERS.length);
  range.setValues([HEADERS]);
  range.setBackground('#012F4F'); // ASND Deep Navy
  range.setFontColor('#FFFFFF');  // Clean white
  range.setFontFamily('Inter');
  range.setFontSize(11);
  range.setFontWeight('bold');
  range.setHorizontalAlignment('left');
  range.setVerticalAlignment('middle');
  sheet.setRowHeight(1, 44);
  sheet.setFrozenRows(1);

  // Set proportional column widths
  var widths = [170, 110, 130, 130, 220, 165, 220, 280, 140];
  for (var i = 0; i < widths.length; i++) {
    sheet.setColumnWidth(i + 1, widths[i]);
  }

  // Ensure Phone Number column (Col 6) is formatted as Plain Text '@'
  var maxRows = Math.max(sheet.getMaxRows() - 1, 1);
  sheet.getRange(2, 6, maxRows, 1).setNumberFormat('@');
}

// Menu inside Google Sheets to easily re-apply header styling anytime
function onOpen() {
  try {
    SpreadsheetApp.getUi()
      .createMenu('ASND Waitlist')
      .addItem('Apply Brand Styling to Header', 'formatSheet')
      .addToUi();
  } catch (e) {}
}

function formatSheet() {
  var sheet = getSheet();
  formatSheetHeader(sheet);
}

function emailExists(sheet, email) {
  var last = sheet.getLastRow();
  if (last < 2) return false;
  // Column 5 = Email
  var values = sheet.getRange(2, 5, last - 1, 1).getValues();
  var needle = email.toLowerCase();
  for (var i = 0; i < values.length; i++) {
    if (String(values[i][0]).trim().toLowerCase() === needle) return true;
  }
  return false;
}

function formatDate(isoString) {
  if (!isoString) return new Date().toLocaleString();
  try {
    var d = new Date(isoString);
    if (isNaN(d.getTime())) return new Date().toLocaleString();
    return Utilities.formatDate(d, Session.getScriptTimeZone() || 'GMT', 'yyyy-MM-dd HH:mm:ss');
  } catch(e) {
    return isoString;
  }
}

function formatRole(role) {
  if (!role) return 'Creator';
  var r = String(role).trim().toLowerCase();
  if (r === 'creator') return 'Creator';
  if (r === 'brand') return 'Brand';
  if (r === 'agency') return 'Agency';
  return role.charAt(0).toUpperCase() + role.slice(1);
}

function formatPhone(body) {
  var p = String(body.whatsapp || body.phone || body.phone_number || '').trim();
  if (!p) return '';
  // If already starts with apostrophe, keep it
  if (p.charAt(0) === "'") return p;
  // If starts with +, prepend apostrophe so Google Sheets treats it as plain text and not a formula
  if (p.charAt(0) === '+') return "'" + p;
  return p;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
