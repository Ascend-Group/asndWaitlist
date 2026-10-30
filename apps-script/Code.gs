/**
 * ASND waitlist — Google Apps Script Web App backend.
 *
 * Receives POSTs from the waitlist form (src/app/pages/landing/WaitlistForm.tsx)
 * and appends one row per signup to the ASND Waitlist Sheet in the configured
 * Drive folder. Deploy this as a Web App (execute as: Me · who has access:
 * Anyone). See apps-script/README.md.
 *
 * The form sends Content-Type: text/plain so the browser skips the CORS
 * preflight; the JSON body is parsed from e.postData.contents.
 */

var FOLDER_ID = '1XyF9zY1CCvT_xIp8l-O22SllP6elGeaF';
var SPREADSHEET_NAME = 'ASND Waitlist';
var SHEET_NAME = 'Waitlist';
var HEADERS = [
  'submitted_at', // client timestamp (ISO)
  'role', // creator | brand | agency
  'first_name',
  'last_name',
  'email',
  'organisation',
  'designation',
  'whatsapp',
  'instagram',
  'message',
  'source',
  'received_at', // server timestamp
];

function doPost(e) {
  try {
    var body = JSON.parse((e && e.postData && e.postData.contents) || '{}');

    // Shared-token check (deters casual abuse; not a real secret).
    var expected = PropertiesService.getScriptProperties().getProperty('TOKEN') || '';
    if (expected && String(body.token || '') !== expected) {
      return json({ ok: false, error: 'unauthorized' });
    }

    var email = String(body.email || '').trim();
    if (!email) return json({ ok: false, error: 'email_required' });

    var sheet = getSheet();

    // Dedupe by email (case-insensitive) — treat a repeat as success, no new row.
    if (emailExists(sheet, email)) {
      return json({ ok: true, duplicate: true });
    }

    sheet.appendRow([
      String(body.submitted_at || ''),
      String(body.role || ''),
      String(body.first_name || '').trim(),
      String(body.last_name || '').trim(),
      email,
      String(body.organisation || '').trim(),
      String(body.designation || '').trim(),
      String(body.whatsapp || '').trim(),
      String(body.instagram || '').replace(/^@+/, '').trim(),
      String(body.message || '').trim(),
      String(body.source || 'waitlist-web'),
      new Date().toISOString(),
    ]);

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

// Health check — open the /exec URL in a browser to confirm it's live.
function doGet() {
  return json({ ok: true, service: 'asnd-waitlist' });
}

function getSheet() {
  var ss = getSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
  } else if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }
  return sheet;
}

function getSpreadsheet() {
  var properties = PropertiesService.getScriptProperties();
  var configuredId = properties.getProperty('SPREADSHEET_ID') || '';
  if (configuredId) return SpreadsheetApp.openById(configuredId);

  var folder = DriveApp.getFolderById(FOLDER_ID);
  var files = folder.getFilesByName(SPREADSHEET_NAME);
  while (files.hasNext()) {
    var file = files.next();
    if (file.getMimeType() === MimeType.GOOGLE_SHEETS) {
      properties.setProperty('SPREADSHEET_ID', file.getId());
      return SpreadsheetApp.openById(file.getId());
    }
  }

  var created = SpreadsheetApp.create(SPREADSHEET_NAME);
  var createdFile = DriveApp.getFileById(created.getId());
  createdFile.moveTo(folder);
  properties.setProperty('SPREADSHEET_ID', created.getId());
  return created;
}

function emailExists(sheet, email) {
  var last = sheet.getLastRow();
  if (last < 2) return false;
  // Column 5 = email (1-indexed): submitted_at, role, first_name, last_name, email.
  var values = sheet.getRange(2, 5, last - 1, 1).getValues();
  var needle = email.toLowerCase();
  for (var i = 0; i < values.length; i++) {
    if (String(values[i][0]).trim().toLowerCase() === needle) return true;
  }
  return false;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
