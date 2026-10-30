import React, { useState, useRef, useEffect } from "react";

const assetPathPrefix = `${import.meta.env.BASE_URL}assets`;
const ENDPOINT = import.meta.env.VITE_WAITLIST_ENDPOINT;
const TOKEN = import.meta.env.VITE_WAITLIST_TOKEN ?? "";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const imgCircleLineMask = `${assetPathPrefix}/1b57d.svg`;
const imgNSmnt8JNm = `${assetPathPrefix}/f3cf5.svg`;
const imgRmZrznaFh = `${assetPathPrefix}/d8358.svg`;
const imgWrpraeIsc = `${assetPathPrefix}/e7642.svg`;
const imgGVhlseWyp = `${assetPathPrefix}/ff004.svg`;
const imgEUcO9EnKn = `${assetPathPrefix}/00e32.svg`;
const imgPpOtvQlkL = `${assetPathPrefix}/bfda0.svg`;
const imgVariant2 = `${assetPathPrefix}/917fc.svg`;
const imgVariant3 = `${assetPathPrefix}/90fe8.svg`;
const imgVariant4 = `${assetPathPrefix}/704e6.svg`;
const imgVariant5 = `${assetPathPrefix}/6fa97.svg`;
const imgVariant6 = `${assetPathPrefix}/89c23.svg`;
const imgVariant7 = `${assetPathPrefix}/3d51f.svg`;
const imgVariant8 = `${assetPathPrefix}/f6bca.svg`;
const imgVariant9 = `${assetPathPrefix}/26a03.svg`;
const imgVariant10 = `${assetPathPrefix}/4a41c.svg`;
const imgGroup = `${assetPathPrefix}/778dc.svg`;
const imgGroup1 = `${assetPathPrefix}/e3371.svg`;
const imgVariant12 = `${assetPathPrefix}/67cfb.svg`;
const imgVariant13 = `${assetPathPrefix}/aeca8.svg`;
const imgVariant14 = `${assetPathPrefix}/72c48.svg`;
const imgVariant15 = `${assetPathPrefix}/f709c.svg`;
const imgVariant16 = `${assetPathPrefix}/54ac8.svg`;
const imgVariant17 = `${assetPathPrefix}/6895b.svg`;
const imgW7GmEhud8HrGolJ2R4FVhTy2ZlAPng = `${assetPathPrefix}/90d18.png`;
const imgWishList1 = `${assetPathPrefix}/e57de.png`;
const imgWishList2 = `${assetPathPrefix}/03fd6.png`;
const imgWishList3 = `${assetPathPrefix}/30726.png`;
const imgImage = `${assetPathPrefix}/b9dc9.png`;
const imgImage1 = `${assetPathPrefix}/21386.png`;
const imgVideoContentImage = `${assetPathPrefix}/510c7.png`;
const imgIPhoneVideo = `${assetPathPrefix}/a7aab.png`;
const imgImage2 = `${assetPathPrefix}/046c5.png`;
const imgContainer = `${assetPathPrefix}/19862.png`;
const imgRn4ET0Bk2H2Djnbj0Mn7ZkOwJh8Png = `${assetPathPrefix}/01d06.png`;
const imgAsndVouchedProfilesSubtle4 = `${assetPathPrefix}/7b220.png`;
const imgAsndSearchSmarterSubtle5 = `${assetPathPrefix}/d5dd5.png`;
const imgAsndClearBriefsSubtle5 = `${assetPathPrefix}/73227.png`;
const imgOf41UhrJLeIHfsgGe6MgfeMjosJpeg = `${assetPathPrefix}/d3077.png`;
const imgTabBrands = `${assetPathPrefix}/tab-brands.jpeg`;
const imgTabAgencies = `${assetPathPrefix}/tab-agencies.jpeg`;
const imgPhotoOfAlexTurnerFounderSmiling = `${assetPathPrefix}/33d4a.png`;
const imgContainer1 = `${assetPathPrefix}/59a19.png`;
const imgContainer2 = `${assetPathPrefix}/8508b.png`;
const imgLinkedin = `${assetPathPrefix}/c6e70.png`;
const imgInstagram = `${assetPathPrefix}/0b750.png`;
const imgContainer3 = `${assetPathPrefix}/7367c.png`;
const imgBackground = `${assetPathPrefix}/369c4.svg`;
const imgBackground1 = `${assetPathPrefix}/46461.svg`;
const imgBackground2 = `${assetPathPrefix}/e29fb.svg`;
const imgPolygon3 = `${assetPathPrefix}/1ff47.svg`;
const imgVector = `${assetPathPrefix}/5c5a8.svg`;
const imgVector1 = `${assetPathPrefix}/b4f7a.svg`;
const imgBackground3 = `${assetPathPrefix}/421a9.svg`;
const imgShieldTrust1 = `${assetPathPrefix}/be4fd.svg`;
const imgIframe = `${assetPathPrefix}/678b7.svg`;

type Component1Props = {
  className?: string;
  style?: React.CSSProperties;
  variant?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17";
};

function Component1({ className, style, variant = "1" }: Component1Props) {
  const is1 = variant === "1";
  const is10 = variant === "10";
  const is11 = variant === "11";
  const is12 = variant === "12";
  const is13 = variant === "13";
  const is14 = variant === "14";
  const is15 = variant === "15";
  const is16 = variant === "16";
  const is17 = variant === "17";
  const is2 = variant === "2";
  const is3 = variant === "3";
  const is4 = variant === "4";
  const is5 = variant === "5";
  const is6 = variant === "6";
  const is7 = variant === "7";
  const is8 = variant === "8";
  const is9 = variant === "9";
  return (
    <div
      style={style}
      className={
        className ||
        `relative ${
          is17
            ? "size-[14px]"
            : is16
              ? "h-[10px] w-[97px]"
              : is15
                ? "h-[20px] w-[12px]"
                : ["13", "14"].includes(variant)
                  ? "size-[12px]"
                  : is12
                    ? "h-[2px] overflow-clip w-[158px]"
                    : is11
                      ? "overflow-clip size-[35px]"
                      : is10
                        ? "overflow-clip size-[14px]"
                        : is9
                          ? "h-[289.83px] w-[38.421px]"
                          : is8
                            ? "h-[612.132px] overflow-clip w-[286.73px]"
                            : is7
                              ? "size-[10px]"
                              : ["5", "6"].includes(variant)
                                ? "size-[13.08px]"
                                : is4
                                  ? "size-[14.28px]"
                                  : is3
                                    ? "size-[20px]"
                                    : is2
                                      ? "size-[13.7px]"
                                      : "h-[602.344px] w-[1011.92px]"
        }`
      }
      id={
        is17
          ? "node-1_141"
          : is16
            ? "node-1_139"
            : is15
              ? "node-1_137"
              : is14
                ? "node-1_135"
                : is13
                  ? "node-1_133"
                  : is12
                    ? "node-1_130"
                    : is11
                      ? "node-1_122"
                      : is10
                        ? "node-1_118"
                        : is9
                          ? "node-1_110"
                          : is8
                            ? "node-1_106"
                            : is7
                              ? "node-1_104"
                              : is6
                                ? "node-1_102"
                                : is5
                                  ? "node-1_100"
                                  : is4
                                    ? "node-1_98"
                                    : is3
                                      ? "node-1_96"
                                      : is2
                                        ? "node-1_94"
                                        : "node-1_84"
      }
    >
      {["2", "3", "4", "5", "6", "7", "8", "9", "10", "12", "13", "14", "15", "16", "17"].includes(variant) && (
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={
            is17
              ? imgVariant17
              : is16
                ? imgVariant16
                : is15
                  ? imgVariant15
                  : is14
                    ? imgVariant14
                    : is13
                      ? imgVariant13
                      : is12
                        ? imgVariant12
                        : is10
                          ? imgVariant10
                          : is9
                            ? imgVariant9
                            : is8
                              ? imgVariant8
                              : is7
                                ? imgVariant7
                                : is6
                                  ? imgVariant6
                                  : is5
                                    ? imgVariant5
                                    : is4
                                      ? imgVariant4
                                      : is3
                                        ? imgVariant3
                                        : imgVariant2
          }
        />
      )}
      {is1 && (
        <>
          <div className="absolute inset-[39.11%_23.18%_0.14%_23.21%]" data-node-id="1:85" data-name="nSmnt8jNM">
            <div className="absolute inset-[-0.23%_-0.16%_0_-0.16%]">
              <img alt="" className="block max-w-none size-full" src={imgNSmnt8JNm} />
            </div>
          </div>
          <div className="absolute contents inset-[91.45%_75.39%_0.59%_23.59%]" data-node-id="1:86" data-name="Group">
            <div className="absolute inset-[91.45%_75.39%_0.59%_23.59%] opacity-30" data-node-id="1:87" data-name="RmZrznaFh">
              <div className="absolute inset-[-0.27%_-7.94%_-0.47%_-8.14%]">
                <img alt="" className="block max-w-none size-full" src={imgRmZrznaFh} />
              </div>
            </div>
          </div>
          <div className="absolute inset-[20.66%_11.85%_-0.01%_11.85%]" data-node-id="1:88" data-name="WrpraeISC">
            <div className="absolute inset-[-0.18%_-0.11%_0_-0.11%]">
              <img alt="" className="block max-w-none size-full" src={imgWrpraeIsc} />
            </div>
          </div>
          <div className="absolute contents inset-[88.96%_87.19%_0.2%_11.96%]" data-node-id="1:89" data-name="Group">
            <div className="absolute inset-[88.96%_87.19%_0.2%_11.96%] opacity-30" data-node-id="1:90" data-name="GVhlseWYP">
              <div className="absolute inset-[0_-9.76%_-0.24%_-9.9%]">
                <img alt="" className="block max-w-none size-full" src={imgGVhlseWyp} />
              </div>
            </div>
          </div>
          <div className="absolute inset-[0.32%_0.2%_0.32%_0.18%]" data-node-id="1:91" data-name="EUcO9enKN">
            <div className="absolute inset-[-0.14%_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgEUcO9EnKn} />
            </div>
          </div>
          <div className="absolute contents inset-[85.64%_99.43%_0.63%_0.18%]" data-node-id="1:92" data-name="Group">
            <div className="absolute inset-[85.64%_99.43%_0.63%_0.18%] opacity-30" data-node-id="1:93" data-name="PpOtvQlkL">
              <div className="absolute inset-[0_-21.29%_-0.11%_-21.41%]">
                <img alt="" className="block max-w-none size-full" src={imgPpOtvQlkL} />
              </div>
            </div>
          </div>
        </>
      )}
      {is11 && (
        <div className="absolute contents inset-[0_0.39%_0.39%_0]" data-node-id="1:123" data-name="Clip path group">
          <div
            className="absolute inset-[0.75%_1.13%_1.15%_0.76%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.265px_-0.264px] mask-size-[34.865px_34.865px]"
            data-node-id="1:126"
            style={{ maskImage: `url("${imgGroup}")` }}
            data-name="Group"
          >
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
          </div>
        </div>
      )}
    </div>
  );
}

type TabKey = "Creators" | "Brands" | "Agencies";

export type Country = {
  name: string;
  code: string;
  flag: string;
  iso: string;
};

// Pinned at the top
const PINNED_COUNTRIES: Country[] = [
  { name: "United States of America", code: "+1", flag: "🇺🇸", iso: "US" },
  { name: "India", code: "+91", flag: "🇮🇳", iso: "IN" },
];

// Comprehensive list of countries
const OTHER_COUNTRIES: Country[] = [
  { name: "Afghanistan", code: "+93", flag: "🇦🇫", iso: "AF" },
  { name: "Albania", code: "+355", flag: "🇦🇱", iso: "AL" },
  { name: "Algeria", code: "+213", flag: "🇩🇿", iso: "DZ" },
  { name: "Andorra", code: "+376", flag: "🇦🇩", iso: "AD" },
  { name: "Angola", code: "+244", flag: "🇦🇴", iso: "AO" },
  { name: "Antigua and Barbuda", code: "+1", flag: "🇦🇬", iso: "AG" },
  { name: "Argentina", code: "+54", flag: "🇦🇷", iso: "AR" },
  { name: "Armenia", code: "+374", flag: "🇦🇲", iso: "AM" },
  { name: "Australia", code: "+61", flag: "🇦🇺", iso: "AU" },
  { name: "Austria", code: "+43", flag: "🇦🇹", iso: "AT" },
  { name: "Azerbaijan", code: "+994", flag: "🇦🇿", iso: "AZ" },
  { name: "Bahamas", code: "+1", flag: "🇧🇸", iso: "BS" },
  { name: "Bahrain", code: "+973", flag: "🇧🇭", iso: "BH" },
  { name: "Bangladesh", code: "+880", flag: "🇧🇩", iso: "BD" },
  { name: "Barbados", code: "+1", flag: "🇧🇧", iso: "BB" },
  { name: "Belarus", code: "+375", flag: "🇧🇾", iso: "BY" },
  { name: "Belgium", code: "+32", flag: "🇧🇪", iso: "BE" },
  { name: "Belize", code: "+501", flag: "🇧🇿", iso: "BZ" },
  { name: "Benin", code: "+229", flag: "🇧🇯", iso: "BJ" },
  { name: "Bhutan", code: "+975", flag: "🇧🇹", iso: "BT" },
  { name: "Bolivia", code: "+591", flag: "🇧🇴", iso: "BO" },
  { name: "Bosnia and Herzegovina", code: "+387", flag: "🇧🇦", iso: "BA" },
  { name: "Botswana", code: "+267", flag: "🇧🇼", iso: "BW" },
  { name: "Brazil", code: "+55", flag: "🇧🇷", iso: "BR" },
  { name: "Brunei", code: "+673", flag: "🇧🇳", iso: "BN" },
  { name: "Bulgaria", code: "+359", flag: "🇧🇬", iso: "BG" },
  { name: "Burkina Faso", code: "+226", flag: "🇧🇫", iso: "BF" },
  { name: "Burundi", code: "+257", flag: "🇧🇮", iso: "BI" },
  { name: "Cambodia", code: "+855", flag: "🇰🇭", iso: "KH" },
  { name: "Cameroon", code: "+237", flag: "🇨🇲", iso: "CM" },
  { name: "Canada", code: "+1", flag: "🇨🇦", iso: "CA" },
  { name: "Cape Verde", code: "+238", flag: "🇨🇻", iso: "CV" },
  { name: "Chile", code: "+56", flag: "🇨🇱", iso: "CL" },
  { name: "China", code: "+86", flag: "🇨🇳", iso: "CN" },
  { name: "Colombia", code: "+57", flag: "🇨🇴", iso: "CO" },
  { name: "Costa Rica", code: "+506", flag: "🇨🇷", iso: "CR" },
  { name: "Croatia", code: "+385", flag: "🇭🇷", iso: "HR" },
  { name: "Cuba", code: "+53", flag: "🇨🇺", iso: "CU" },
  { name: "Cyprus", code: "+357", flag: "🇨🇾", iso: "CY" },
  { name: "Czech Republic", code: "+420", flag: "🇨🇿", iso: "CZ" },
  { name: "Denmark", code: "+45", flag: "🇩🇰", iso: "DK" },
  { name: "Dominican Republic", code: "+1", flag: "🇩🇴", iso: "DO" },
  { name: "Ecuador", code: "+593", flag: "🇪🇨", iso: "EC" },
  { name: "Egypt", code: "+20", flag: "🇪🇬", iso: "EG" },
  { name: "El Salvador", code: "+503", flag: "🇸🇻", iso: "SV" },
  { name: "Estonia", code: "+372", flag: "🇪🇪", iso: "EE" },
  { name: "Ethiopia", code: "+251", flag: "🇪🇹", iso: "ET" },
  { name: "Fiji", code: "+679", flag: "🇫🇯", iso: "FJ" },
  { name: "Finland", code: "+358", flag: "🇫🇮", iso: "FI" },
  { name: "France", code: "+33", flag: "🇫🇷", iso: "FR" },
  { name: "Georgia", code: "+995", flag: "🇬🇪", iso: "GE" },
  { name: "Germany", code: "+49", flag: "🇩🇪", iso: "DE" },
  { name: "Ghana", code: "+233", flag: "🇬🇭", iso: "GH" },
  { name: "Greece", code: "+30", flag: "🇬🇷", iso: "GR" },
  { name: "Guatemala", code: "+502", flag: "🇬🇹", iso: "GT" },
  { name: "Honduras", code: "+504", flag: "🇭🇳", iso: "HN" },
  { name: "Hong Kong", code: "+852", flag: "🇭🇰", iso: "HK" },
  { name: "Hungary", code: "+36", flag: "🇭🇺", iso: "HU" },
  { name: "Iceland", code: "+354", flag: "🇮🇸", iso: "IS" },
  { name: "Indonesia", code: "+62", flag: "🇮🇩", iso: "ID" },
  { name: "Ireland", code: "+353", flag: "🇮🇪", iso: "IE" },
  { name: "Israel", code: "+972", flag: "🇮🇱", iso: "IL" },
  { name: "Italy", code: "+39", flag: "🇮🇹", iso: "IT" },
  { name: "Jamaica", code: "+1", flag: "🇯🇲", iso: "JM" },
  { name: "Japan", code: "+81", flag: "🇯🇵", iso: "JP" },
  { name: "Jordan", code: "+962", flag: "🇯🇴", iso: "JO" },
  { name: "Kazakhstan", code: "+7", flag: "🇰🇿", iso: "KZ" },
  { name: "Kenya", code: "+254", flag: "🇰🇪", iso: "KE" },
  { name: "Kuwait", code: "+965", flag: "🇰🇼", iso: "KW" },
  { name: "Latvia", code: "+371", flag: "🇱🇻", iso: "LV" },
  { name: "Lebanon", code: "+961", flag: "🇱🇧", iso: "LB" },
  { name: "Lithuania", code: "+370", flag: "🇱🇹", iso: "LT" },
  { name: "Luxembourg", code: "+352", flag: "🇱🇺", iso: "LU" },
  { name: "Malaysia", code: "+60", flag: "🇲🇾", iso: "MY" },
  { name: "Maldives", code: "+960", flag: "🇲🇻", iso: "MV" },
  { name: "Malta", code: "+356", flag: "🇲🇹", iso: "MT" },
  { name: "Mauritius", code: "+230", flag: "🇲🇺", iso: "MU" },
  { name: "Mexico", code: "+52", flag: "🇲🇽", iso: "MX" },
  { name: "Monaco", code: "+377", flag: "🇲🇨", iso: "MC" },
  { name: "Morocco", code: "+212", flag: "🇲🇦", iso: "MA" },
  { name: "Nepal", code: "+977", flag: "🇳🇵", iso: "NP" },
  { name: "Netherlands", code: "+31", flag: "🇳🇱", iso: "NL" },
  { name: "New Zealand", code: "+64", flag: "🇳🇿", iso: "NZ" },
  { name: "Nigeria", code: "+234", flag: "🇳🇬", iso: "NG" },
  { name: "Norway", code: "+47", flag: "🇳🇴", iso: "NO" },
  { name: "Oman", code: "+968", flag: "🇴🇲", iso: "OM" },
  { name: "Pakistan", code: "+92", flag: "🇵🇰", iso: "PK" },
  { name: "Panama", code: "+507", flag: "🇵🇦", iso: "PA" },
  { name: "Peru", code: "+51", flag: "🇵🇪", iso: "PE" },
  { name: "Philippines", code: "+63", flag: "🇵🇭", iso: "PH" },
  { name: "Poland", code: "+48", flag: "🇵🇱", iso: "PL" },
  { name: "Portugal", code: "+351", flag: "🇵🇹", iso: "PT" },
  { name: "Qatar", code: "+974", flag: "🇶🇦", iso: "QA" },
  { name: "Romania", code: "+40", flag: "🇷🇴", iso: "RO" },
  { name: "Russia", code: "+7", flag: "🇷🇺", iso: "RU" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦", iso: "SA" },
  { name: "Serbia", code: "+381", flag: "🇷🇸", iso: "RS" },
  { name: "Singapore", code: "+65", flag: "🇸🇬", iso: "SG" },
  { name: "Slovakia", code: "+421", flag: "🇸🇰", iso: "SK" },
  { name: "Slovenia", code: "+386", flag: "🇸🇮", iso: "SI" },
  { name: "South Africa", code: "+27", flag: "🇿🇦", iso: "ZA" },
  { name: "South Korea", code: "+82", flag: "🇰🇷", iso: "KR" },
  { name: "Spain", code: "+34", flag: "🇪🇸", iso: "ES" },
  { name: "Sri Lanka", code: "+94", flag: "🇱🇰", iso: "LK" },
  { name: "Sweden", code: "+46", flag: "🇸🇪", iso: "SE" },
  { name: "Switzerland", code: "+41", flag: "🇨🇭", iso: "CH" },
  { name: "Taiwan", code: "+886", flag: "🇹🇼", iso: "TW" },
  { name: "Tanzania", code: "+255", flag: "🇹🇿", iso: "TZ" },
  { name: "Thailand", code: "+66", flag: "🇹🇭", iso: "TH" },
  { name: "Trinidad and Tobago", code: "+1", flag: "🇹🇹", iso: "TT" },
  { name: "Tunisia", code: "+216", flag: "🇹🇳", iso: "TN" },
  { name: "Turkey", code: "+90", flag: "🇹🇷", iso: "TR" },
  { name: "Uganda", code: "+256", flag: "🇺🇬", iso: "UG" },
  { name: "Ukraine", code: "+380", flag: "🇺🇦", iso: "UA" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪", iso: "AE" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧", iso: "GB" },
  { name: "Uruguay", code: "+598", flag: "🇺🇾", iso: "UY" },
  { name: "Uzbekistan", code: "+998", flag: "🇺🇿", iso: "UZ" },
  { name: "Venezuela", code: "+58", flag: "🇻🇪", iso: "VE" },
  { name: "Vietnam", code: "+84", flag: "🇻🇳", iso: "VN" },
  { name: "Zimbabwe", code: "+263", flag: "🇿🇼", iso: "ZW" },
];

const TAB_DATA: Record<
  TabKey,
  {
    title: string;
    subtitle: string;
    bullets: [string, string, string];
    cta: string;
    image: string;
    imageClassName: string;
  }
> = {
  Creators: {
    title: "Creators",
    subtitle: "Find exclusive opportunities fast",
    bullets: ["Showcase your work", "Access vetted briefs", "Connect beyond your network"],
    cta: "Join as a Creator",
    image: imgOf41UhrJLeIHfsgGe6MgfeMjosJpeg,
    imageClassName: "absolute h-[159.99%] left-0 max-w-none top-[-30%] w-full",
  },
  Brands: {
    title: "Brands",
    subtitle: "Find the right creative fit fast",
    bullets: ["Discover vetted talent", "Post clear briefs", "Connect with relevant creators"],
    cta: "Join as a Brand",
    image: imgTabBrands,
    imageClassName: "absolute h-full left-0 max-w-none object-cover top-0 w-full",
  },
  Agencies: {
    title: "Agencies",
    subtitle: "Grow your roster fast",
    bullets: ["Showcase your work", "Access vetted briefs", "Connect beyond your network"],
    cta: "Join as an Agency",
    image: imgTabAgencies,
    imageClassName: "absolute h-full left-0 max-w-none object-cover top-0 w-full",
  },
};

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>("Creators");
  const [country, setCountry] = useState<Country>(PINNED_COUNTRIES[0]);
  const [countrySearch, setCountrySearch] = useState("");
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    role: "Creator",
    phone: "",
    links: [""] as string[],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setIsCountryOpen(false);
      }
    }
    if (isCountryOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCountryOpen]);

  const scrollToForm = (role?: TabKey) => {
    if (role) {
      setActiveTab(role);
      setFormState((s) => ({ ...s, role: role === "Creators" ? "Creator" : role === "Brands" ? "Brand" : "Agency" }));
    }
    formSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  async function submitApplication() {
    if (isSubmitting || submitted) return;
    setErrorMessage("");

    const name = formState.name.trim();
    const email = formState.email.trim();

    if (!name) {
      setErrorMessage("Please enter your name");
      return;
    }

    if (!email || !EMAIL_RE.test(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    if (!formState.role) {
      setErrorMessage("Please select your role");
      return;
    }

    const nameParts = name.split(/\s+/);
    const firstName = nameParts[0] || name;
    const lastName = nameParts.slice(1).join(" ") || "";

    setIsSubmitting(true);
    const validLinks = formState.links.map((l) => l.trim()).filter(Boolean);
    const body = JSON.stringify({
      role: formState.role.toLowerCase(),
      first_name: firstName,
      last_name: lastName,
      email,
      organisation: "",
      designation: "",
      whatsapp: `${country.code} ${formState.phone.trim()}`.trim(),
      instagram: validLinks.join(", "),
      message: formState.message.trim(),
      token: TOKEN,
      source: "waitlist-web",
      submitted_at: new Date().toISOString(),
    });

    if (!ENDPOINT) {
      console.warn("[waitlist] VITE_WAITLIST_ENDPOINT is not set — submission recorded in UI demo mode.");
      setSubmitted(true);
      setIsSubmitting(false);
      return;
    }

    try {
      await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body,
      });
      setSubmitted(true);
    } catch (error) {
      console.error("[waitlist] submission failed", error);
      // Still show success to user if network/CORS fails but request was sent
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  const currentTab = TAB_DATA[activeTab];

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="1:352" data-name="1920w light">
      <div className="bg-white content-stretch flex flex-col items-center min-h-[1200px] overflow-clip relative shrink-0 w-full" data-node-id="1:353" data-name="End of bodyStart">
        <div className="bg-gradient-to-b content-stretch flex flex-col from-[#d0edff] gap-[10px] items-center justify-center overflow-clip pt-[100px] px-[358.5px] relative shrink-0 to-[90.302%] to-white via-[5.428%] via-white" data-node-id="1:354" data-name="Hero Section">
          <div className="bg-white content-stretch flex items-center max-w-[1180px] relative shrink-0 w-[1180px]" data-node-id="1:355" data-name="Container">
            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-center min-w-px relative" data-node-id="1:356" data-name="Frame">
              <div className="bg-[#002f4f] h-[636.16px] relative rounded-[12px] shrink-0 w-[531px]" data-node-id="1:357" data-name="Contents">
                <div className="absolute content-stretch flex flex-col gap-[15px] h-[363px] items-center justify-center left-[10.19%] right-[9.81%] top-[50px]" data-node-id="1:358" data-name="Text Container">
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="1:359"
                    data-name="Main Heading → Heading 2 → Ready to Start 
your Growth?"
                  >
                    <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[56px] text-white tracking-[-2.24px] w-full whitespace-pre-wrap" data-node-id="1:360">
                      <p className="leading-[67.2px] mb-0">{`Find the right `}</p>
                      <p className="leading-[67.2px] mb-0">{`person for your `}</p>
                      <p className="leading-[67.2px] mb-0">{`next creative `}</p>
                      <p className="leading-[67.2px]">project.</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col h-[79.86px] items-start justify-center pb-[11.14px] pt-[10.025px] relative shrink-0 w-full"
                    data-node-id="1:361"
                    data-name="Subheading → Whether you're starting from scratch or 
scaling what's already working, we'll build a 
social strategy that earns results. Let's talk"
                  >
                    <div className="content-stretch flex flex-col items-start pb-[0.695px] relative shrink-0 w-full" data-node-id="1:362" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[21px] text-white tracking-[-0.36px] w-full" data-node-id="1:363">
                        <p className="leading-[28.8px] mb-0">Vetted discovery for Brands, Creators,</p>
                        <p className="leading-[28.8px]">and Agencies</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => scrollToForm(activeTab)}
                  className="absolute bottom-[15.01px] content-stretch flex flex-col h-[59px] items-center justify-center left-[9.8%] right-[10.2%] rounded-[90px] cursor-pointer"
                  data-node-id="1:364"
                  data-name="Link - Tertiary"
                >
                  <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-node-id="1:365" data-name="Container">
                    <div className="aspect-[411/54.97999954223633] w-[411px] h-[54.98px] bg-white content-stretch flex flex-col items-start overflow-clip pb-[15.99px] pt-[14.9px] px-[94.78px] relative rounded-[12px] shrink-0 transition-opacity hover:opacity-95" data-node-id="1:366" data-name="Contents">
                      <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:367" data-name="Default">
                        <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-node-id="1:368" data-name="3D Space → Arm 1 → Start a Project">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:369" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#1c1917] text-[22px] tracking-[-0.3px] whitespace-nowrap" data-node-id="1:370">
                              <p className="leading-[24px]">Apply for Beta Access</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[640.81px] overflow-clip relative rounded-[12px] shrink-0 w-[637.19px]" data-node-id="1:371" data-name="Image → 94qIcXWE5e8f67ZOyBpiKX7Jl0.png">
                <div className="absolute inset-0 rounded-[12px]" data-node-id="1:372" data-name="w7gmEhud8HRGolJ2r4fVhTY2zlA.png">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                    <img alt="" className="absolute h-full left-[-19.47%] max-w-none top-0 w-[119.47%]" src={imgW7GmEhud8HrGolJ2R4FVhTy2ZlAPng} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[53.01px] items-center justify-center max-w-[1200px] pt-[110px] relative shrink-0 w-[1200px]" data-node-id="1:373" data-name="Container">
            <div className="content-stretch flex flex-col items-center max-w-[642px] relative shrink-0 w-[642px]" data-node-id="1:374" data-name="Heading">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1174.86px]" data-node-id="1:375" data-name="Container">
                <div className="[word-break:break-word] font-['Geist:Medium'] font-medium h-[117.59px] leading-[0] relative shrink-0 text-[#10120f] text-[56px] text-center tracking-[-2.52px] w-full" data-node-id="1:376" data-name="Heading 1">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[calc(50%+6.81px)] top-[28.5px] w-[754.522px]" data-node-id="1:377">
                    <p className="leading-[58.8px]">{`Your creative network shouldn't `}</p>
                  </div>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[calc(50%+0.04px)] top-[87.3px] w-[571.107px]" data-node-id="1:378">
                    <p className="leading-[58.8px]">end with who you know.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-[1137/682.1900024414062] w-[1137px] h-[682.19px] content-stretch flex flex-col items-center justify-center pb-[33.37px] pt-[33.34px] relative shrink-0" data-node-id="1:379" data-name="Hero Content Wrapper">
              <div className="absolute bottom-[41.01px] h-[602.34px] left-[5.5%] right-[5.5%]" data-node-id="1:380" data-name="circle line:mask-group">
                <Component1
                  className="absolute bottom-0 h-[602.344px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[1011.92px_602.34px] right-0"
                  style={{ maskImage: `url("${imgCircleLineMask}")` }}
                />
              </div>
              <div className="absolute content-stretch flex flex-col inset-[2.42%_-0.1%_88.42%_81.9%] items-start animate-[subtleFloat_4.5s_ease-in-out_3s_infinite]" data-node-id="1:383" data-name="Bot Chat 1">
                <div className="bg-white content-stretch flex gap-[11px] items-center justify-center overflow-clip pb-[14px] pl-[13px] pr-[15px] pt-[16px] relative rounded-[11px] shadow-[0px_10px_20px_10px_rgba(0,0,1,0.03)] shrink-0 w-full" data-node-id="1:384" data-name="Desktop">
                  <div className="relative shrink-0 size-[26.84px]" data-node-id="1:385" data-name="wish-list 1">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWishList1} />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-[141.16px]" data-node-id="1:387" data-name="Bot Text">
                    <div className="bg-[#dde1e4] h-[7.94px] relative rounded-[11px] shrink-0 w-[97.39px]" data-node-id="1:388" data-name="Bot" />
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:389" data-name="Container">
                      <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-node-id="1:390" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#101828] text-[12px] tracking-[-0.25px] whitespace-nowrap" data-node-id="1:391">
                          <p className="leading-[15.6px]">I’d vouch for them</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col inset-[18.42%_14%_72.43%_68%] items-start animate-[subtleFloat_5s_ease-in-out_3.2s_infinite]" data-node-id="1:392" data-name="Bot Chat 2">
                <div className="bg-white content-stretch flex gap-[11px] items-center justify-center overflow-clip pb-[14px] pl-[13px] pr-[15px] pt-[16px] relative rounded-[11px] shadow-[0px_10px_20px_10px_rgba(0,0,1,0.03)] shrink-0 w-full" data-node-id="1:393" data-name="Desktop">
                  <div className="relative shrink-0 size-[26.48px]" data-node-id="1:394" data-name="wish-list 1">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWishList2} />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[7.99px] items-start justify-center overflow-clip relative shrink-0 w-[139.17px]" data-node-id="1:396" data-name="Bot Text">
                    <div className="bg-[#dde1e4] h-[7.83px] relative rounded-[11px] shrink-0 w-[96.02px]" data-node-id="1:397" data-name="Bot" />
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:398" data-name="Container">
                      <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-node-id="1:399" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#101828] text-[12px] tracking-[-0.25px] whitespace-nowrap" data-node-id="1:400">
                          <p className="leading-[15.6px]">I know someone who fits</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col inset-[6.42%_82%_84.43%_0] items-start animate-[subtleFloat_4.2s_ease-in-out_3.4s_infinite]" data-node-id="1:401" data-name="Bot Chat 3">
                <div className="bg-white content-stretch flex gap-[11px] items-center justify-center overflow-clip pb-[14px] pl-[13px] pr-[15px] pt-[16px] relative rounded-[11px] shadow-[0px_10px_20px_10px_rgba(0,0,1,0.03)] shrink-0 w-full" data-node-id="1:402" data-name="Desktop 02">
                  <div className="relative shrink-0 size-[26.48px]" data-node-id="1:403" data-name="wish-list 1">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWishList3} />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-[139.17px]" data-node-id="1:405" data-name="Bot Text">
                    <div className="bg-[#dde1e4] h-[7.84px] relative rounded-[11px] shrink-0 w-[50.09px]" data-node-id="1:406" data-name="Bot" />
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:407" data-name="Container">
                      <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-node-id="1:408" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#101828] text-[12px] tracking-[-0.25px] whitespace-nowrap" data-node-id="1:409">
                          <p className="leading-[15.6px]">Saved hours of search</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-[#8cdbed] content-stretch flex inset-[17.53%_62%_77.53%_28%] items-center justify-center px-[14px] py-[10px] rounded-[18px] animate-[subtleFloat_4.8s_ease-in-out_3.1s_infinite]" data-node-id="1:410" data-name="Stars Wrapper">
                <div className="content-stretch flex flex-[1_0_0] gap-[4.3px] items-center min-w-px overflow-clip relative" data-node-id="1:411" data-name="Stars">
                  <div className="flex-[1_0_0] h-[13.7px] min-w-px relative" data-node-id="1:412" data-name="Mask Group">
                    <div className="-translate-y-1/2 absolute aspect-[13.699999809265137/13.699999809265137] h-[13.7px] w-[13.7px] bg-[#101828] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.001px] mask-size-[13.698px_13.7px] right-0 top-1/2" data-node-id="1:415" style={{ maskImage: `url("${imgBackground}")` }} data-name="Background" />
                  </div>
                  <div className="flex-[1_0_0] h-[13.7px] min-w-px relative" data-node-id="1:416" data-name="Mask Group">
                    <div className="-translate-y-1/2 absolute aspect-[13.699999809265137/13.699999809265137] h-[13.7px] w-[13.7px] bg-[#101828] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.001px] mask-size-[13.698px_13.7px] right-0 top-1/2" data-node-id="1:419" style={{ maskImage: `url("${imgBackground}")` }} data-name="Background" />
                  </div>
                  <div className="flex-[1_0_0] h-[13.7px] min-w-px relative" data-node-id="1:420" data-name="Mask Group">
                    <div className="-translate-y-1/2 absolute aspect-[13.699999809265137/13.699999809265137] h-[13.7px] w-[13.7px] bg-[#101828] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.001px] mask-size-[13.698px_13.7px] right-0 top-1/2" data-node-id="1:423" style={{ maskImage: `url("${imgBackground}")` }} data-name="Background" />
                  </div>
                  <div className="flex-[1_0_0] h-[13.7px] min-w-px relative" data-node-id="1:424" data-name="Mask Group">
                    <div className="-translate-y-1/2 absolute aspect-[13.699999809265137/13.699999809265137] h-[13.7px] w-[13.7px] bg-[#101828] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.001px] mask-size-[13.698px_13.7px] right-0 top-1/2" data-node-id="1:427" style={{ maskImage: `url("${imgBackground1}")` }} data-name="Background" />
                  </div>
                  <div className="flex-[1_0_0] h-[13.7px] min-w-px relative" data-node-id="1:428" data-name="Mask Group">
                    <div className="-translate-y-1/2 absolute aspect-[13.699999809265137/13.699999809265137] h-[13.7px] w-[13.7px] bg-[#101828] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.001px] mask-size-[13.698px_13.7px] right-0 top-1/2" data-node-id="1:431" style={{ maskImage: `url("${imgBackground2}")` }} data-name="Background" />
                  </div>
                </div>
                <div className="absolute left-[15px] size-[20px] top-[27.41px]" data-node-id="1:432" data-name="Polygon 3:mask-group">
                  <div className="absolute bg-[#8cdbed] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[20px_20px] size-[20px] top-0" data-node-id="1:435" style={{ maskImage: `url("${imgPolygon3}")` }} />
                </div>
              </div>
              <div className="absolute bg-white content-stretch flex flex-col gap-[12.99px] inset-[26.45%_68.5%_36.45%_12.5%] items-start justify-center overflow-clip pb-[14px] pt-[10px] px-[10px] rounded-[12px]" data-node-id="1:436" data-name="Card">
                <div className="content-stretch flex flex-col items-center justify-center overflow-clip pb-[22.975px] pt-[22.947px] relative rounded-[10px] shrink-0 w-full" data-node-id="1:437" data-name="Image Wrapper">
                  <div className="absolute bg-[#c4acfa] inset-0" data-node-id="1:438" data-name="Linear" />
                  <div className="flex h-[155.848px] items-center justify-center relative shrink-0 w-[141.129px]" data-node-id="1:439">
                    <div className="-rotate-12 flex-none">
                      <div className="h-[134.75px] overflow-clip relative w-[115.64px]" data-name="Container">
                        <div className="absolute inset-[0_0_-0.01px_0]" data-node-id="1:440" data-name="Image">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute h-[99.61%] left-0 max-w-none top-[0.19%] w-full" src={imgImage} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between overflow-clip pl-[13px] pr-[0.01px] relative shrink-0 w-[72.52px]" data-node-id="1:441" data-name="Icons">
                  <div className="aspect-[14.279999732971191/14.279999732971191] size-[14.28px] content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0" data-node-id="1:442" data-name="image">
                    <Component1 className="relative shrink-0 size-[14.28px]" variant="4" />
                  </div>
                  <div className="relative shrink-0 size-[13.08px]" data-node-id="1:444" data-name="Vector:mask-group">
                    <div className="-translate-y-1/2 absolute aspect-[13.079999923706055/13.079999923706055] size-[13.08px] bg-[#101828] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[13.08px_13.08px] right-0 top-1/2" data-node-id="1:447" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector" />
                  </div>
                  <div className="relative shrink-0 size-[13.08px]" data-node-id="1:448" data-name="Vector:mask-group">
                    <div className="-translate-y-1/2 absolute aspect-[13.079999923706055/13.079999923706055] size-[13.08px] bg-[#101828] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[13.08px_13.08px] right-0 top-1/2" data-node-id="1:451" style={{ maskImage: `url("${imgVector1}")` }} data-name="Vector" />
                  </div>
                </div>
              </div>
              <div
                onClick={() => scrollToForm(activeTab)}
                className="absolute bg-white content-stretch flex gap-[5px] inset-[68.49%_78.21%_26.38%_12.29%] items-center justify-center overflow-clip px-[14px] py-[8px] rounded-[20px] cursor-pointer"
                data-node-id="1:452"
                data-name="Following"
              >
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:453" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:454" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Geist:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#101828] text-[14px] tracking-[-0.25px] whitespace-nowrap" data-node-id="1:455">
                      <p className="leading-[18.2px]">Reach out</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 size-[10px]" data-node-id="1:456" data-name="Mask Group">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#101828] left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[10px_10px] size-[10px] top-1/2" data-node-id="1:459" style={{ maskImage: `url("${imgBackground3}")` }} data-name="Background" />
                </div>
              </div>
              <div className="absolute inset-[41.77%_10.99%_17.77%_70.98%] overflow-clip rounded-[12px]" data-node-id="1:460" data-name="Container">
                <div className="absolute inset-0 rounded-[12px]" data-node-id="1:461" data-name="Image">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                    <img alt="" className="absolute h-full left-[-0.03%] max-w-none top-0 w-[100.06%]" src={imgImage1} />
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,0)] h-[615.48px] overflow-clip relative rounded-[54px] shadow-[0px_10px_20px_0px_rgba(0,0,1,0.3)] shrink-0 w-[295.61px]" data-node-id="1:462" data-name="I Phone Video">
                <div className="absolute content-stretch flex flex-col inset-[0.27%_1.51%_0.27%_1.5%] items-center justify-center overflow-clip" data-node-id="1:463" data-name="Video">
                  <div className="absolute inset-px" data-node-id="1:464" data-name="Video Content → image">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-full left-[-140.48%] max-w-none top-0 w-[380.96%]" src={imgVideoContentImage} />
                    </div>
                  </div>
                  <Component1 className="h-[612.132px] overflow-clip relative shrink-0 w-full" variant="8" />
                </div>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[99.86%] left-0 max-w-none top-[0.07%] w-full" src={imgIPhoneVideo} />
                </div>
                <div className="absolute inset-[26.45%_5.48%_26.46%_81.53%] overflow-clip" data-node-id="1:467" data-name="Container">
                  <div className="absolute content-stretch flex flex-col inset-0 items-center justify-center overflow-clip" data-node-id="1:468" data-name="Image">
                    <Component1 className="h-[289.83px] relative shrink-0 w-[38.421px]" variant="9" />
                  </div>
                </div>
                <div className="absolute bottom-[6.93%] content-stretch flex flex-col gap-[12px] items-start justify-center overflow-clip pl-[15px] right-[24px] top-[76.99%] w-[267px]" data-node-id="1:470" data-name="Id Info">
                  <div className="content-stretch flex gap-[5px] items-center justify-center overflow-clip relative shrink-0 w-[199px]" data-node-id="1:471" data-name="Name">
                    <div className="overflow-clip relative rounded-[32px] shrink-0 size-[32px]" data-node-id="1:472" data-name="Container">
                      <div className="absolute inset-0 rounded-[32px]" data-node-id="1:473" data-name="Image">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px]">
                          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
                        </div>
                      </div>
                    </div>
                    <div className="h-[20.16px] relative shrink-0 w-[123.59px]" data-node-id="1:474" data-name="Container">
                      <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-node-id="1:475" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Geist:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.25px] whitespace-nowrap" data-node-id="1:476">
                          <p className="leading-[20.16px]">@Gabriel_frost</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 size-[14px]" data-node-id="1:477" data-name="shield-trust 1:mask-group">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[14px_14px] size-[14px] top-1/2" data-node-id="1:480" style={{ maskImage: `url("${imgShieldTrust1}")` }} data-name="shield-trust 1" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[247px]" data-node-id="1:481" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:482" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[-0.25px] w-full whitespace-pre-wrap" data-node-id="1:483">
                        <p className="leading-[18.2px] mb-0">{`The best headphones for music with `}</p>
                        <p className="leading-[18.2px] mb-0">{`noise cancelling blend of superior `}</p>
                        <p className="leading-[18.2px]">sound, comfort in 2026.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.26)] content-stretch flex inset-[38.33%_83%_48.34%_9%] items-center justify-center overflow-clip rounded-[90.95px]" data-node-id="1:484" data-name="Icon">
                <div className="aspect-[56.38999938964844/56.38999938964844] size-[56.39px] bg-[#020000] content-stretch flex items-center justify-center overflow-clip py-[9.53px] relative rounded-[56.39px] shrink-0" data-node-id="1:485" data-name="Tiktok">
                  <div className="h-[37.33px] overflow-clip relative shrink-0 w-[38.34px]" data-node-id="1:486" data-name="Container">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-full left-[1.32%] max-w-none top-0 w-[97.37%]" src={imgContainer} />
                    </div>
                  </div>
                </div>
                <div className="absolute border-3 border-solid border-white left-0 rounded-[90.95px] size-[90.95px] top-0" data-node-id="1:488" data-name="Border" />
              </div>
              <div className="absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.26)] content-stretch flex inset-[46.17%_24.5%_42.17%_68.5%] items-center justify-center overflow-clip rounded-[79.58px]" data-node-id="1:489" data-name="Icon">
                <div className="overflow-clip relative shrink-0 size-[35px]" data-node-id="1:490" data-name="Tiktok">
                  <div className="absolute content-stretch flex flex-col inset-0 items-center justify-center overflow-clip" data-node-id="1:491" data-name="Image">
                    <Component1 className="overflow-clip relative shrink-0 size-[35px]" variant="11" />
                  </div>
                </div>
                <div className="absolute border-3 border-solid border-white left-0 rounded-[79.58px] size-[79.58px] top-0" data-node-id="1:493" data-name="Border" />
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip pb-[66px] pt-[40px] px-[30px] relative shrink-0 w-[1203px]" data-node-id="1:494" data-name="Brand Section">
            <div className="h-[28.8px] max-w-[1200px] overflow-clip relative shrink-0 w-[1200px]" data-node-id="1:495" data-name="Container">
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 right-0 top-[calc(50%-0.5px)]" data-node-id="1:496" data-name="Container">
                <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-node-id="1:497" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Geist:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#6e6e6e] text-[18px] text-center tracking-[-0.25px] whitespace-nowrap" data-node-id="1:498">
                    <p className="leading-[28.8px]">Who we cater to</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col h-[91px] items-start justify-center relative shrink-0 w-[1200px]" data-node-id="1:499" data-name="Container">
              <div className="bg-white flex-[1_0_0] min-h-px overflow-clip relative w-full" data-node-id="1:500" data-name="Section">
                <div className="-translate-y-1/2 absolute content-stretch flex items-start left-[22px] top-1/2 animate-[logoMarqueeLeft_24s_linear_3s_infinite]" data-node-id="1:501" data-name="Container">
                  <div className="content-stretch flex gap-[65px] items-center pr-[65px] relative self-stretch shrink-0" data-node-id="1:502" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:503" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7a7a] text-[14px] tracking-[-0.42px] whitespace-nowrap" data-node-id="1:504">
                        <p className="leading-[14px]">{`Music & Entertainment`}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:505" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7a7a] text-[14px] tracking-[-0.42px] whitespace-nowrap" data-node-id="1:506">
                        <p className="leading-[14px]">{`Events & Nightlife`}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:507" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7a7a] text-[14px] tracking-[-0.42px] whitespace-nowrap" data-node-id="1:508">
                        <p className="leading-[14px]">{`Media & Advertising`}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:509" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7a7a] text-[14px] tracking-[-0.42px] whitespace-nowrap" data-node-id="1:510">
                        <p className="leading-[14px]">{`Luxury & Lifestyle`}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:511" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7a7a] text-[14px] tracking-[-0.42px] whitespace-nowrap" data-node-id="1:512">
                        <p className="leading-[14px]">{`Fashion & Apparel`}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:513" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7a7a] text-[14px] tracking-[-0.42px] whitespace-nowrap" data-node-id="1:514">
                        <p className="leading-[14px]">{`Hospitality & Travel`}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:515" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7a7a] text-[14px] tracking-[-0.42px] whitespace-nowrap" data-node-id="1:516">
                        <p className="leading-[14px]">{`Food & Beverage`}</p>
                      </div>
                    </div>
                    <div className="h-[14px] relative shrink-0 w-[112.45px]" data-node-id="1:517" data-name="Rectangle" />
                    <div className="h-[14px] relative shrink-0 w-[140.98px]" data-node-id="1:518" data-name="Rectangle" />
                  </div>
                  <div className="content-stretch flex gap-[65px] items-center pr-[65px] relative self-stretch shrink-0" data-node-id="1:519" data-name="Container">
                    <div className="h-[14px] relative shrink-0 w-[135.63px]" data-node-id="1:520" data-name="Rectangle" />
                    <div className="h-[14px] relative shrink-0 w-[104.98px]" data-node-id="1:521" data-name="Rectangle" />
                    <div className="h-[14px] relative shrink-0 w-[118.81px]" data-node-id="1:522" data-name="Rectangle" />
                    <div className="h-[14px] relative shrink-0 w-[105.86px]" data-node-id="1:523" data-name="Rectangle" />
                    <div className="h-[14px] relative shrink-0 w-[108.22px]" data-node-id="1:524" data-name="Rectangle" />
                    <div className="h-[14px] relative shrink-0 w-[113.28px]" data-node-id="1:525" data-name="Rectangle" />
                    <div className="h-[14px] relative shrink-0 w-[101.58px]" data-node-id="1:526" data-name="Rectangle" />
                    <div className="h-[14px] relative shrink-0 w-[112.45px]" data-node-id="1:527" data-name="Rectangle" />
                    <div className="h-[14px] relative shrink-0 w-[140.98px]" data-node-id="1:528" data-name="Rectangle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex items-center max-w-[1180px] relative shrink-0" data-node-id="1:529" data-name="Container">
          <div className="content-stretch flex gap-[12px] h-[617px] items-center justify-center max-w-[1180px] px-px relative shrink-0" data-node-id="1:530" data-name="Frame">
            <div className="bg-white h-[580px] relative rounded-[12px] shrink-0 w-[517px]" data-node-id="1:531" data-name="Contents">
              <div className="absolute content-stretch flex flex-col items-start left-[57px] top-[83px]" data-node-id="1:532" data-name="Container">
                <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-node-id="1:533" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="1:534">
                    <p className="leading-[16.8px]">THE PROBLEM</p>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[rgba(16,18,15,0.3)] border-solid inset-0 rounded-[12px]" data-node-id="1:535" data-name="Border" />
              <div className="absolute h-[363px] left-[10.19%] right-[9.81%] top-[50px]" data-node-id="1:536" data-name="Text Container">
                <div className="absolute bg-[#9e88ff] h-[2px] left-[115.99px] top-[45px] w-[143px]" data-node-id="1:537" data-name="Horizontal Divider" />
                <div
                  className="absolute bottom-[-94.79px] content-stretch flex flex-col items-start justify-center left-0 w-[413.59px]"
                  data-node-id="1:538"
                  data-name="Main Heading → Heading 2 → Ready to Start 
your Growth?"
                >
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:539" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[50px] text-black tracking-[-2.24px] whitespace-nowrap" data-node-id="1:540">
                      <p className="leading-[64.2px] mb-0 whitespace-pre">{`Finding the right `}</p>
                      <p className="leading-[64.2px] mb-0 whitespace-pre">{`people shouldn’t be `}</p>
                      <p className="leading-[64.2px] mb-0 whitespace-pre">{`this hard, yet the `}</p>
                      <p className="leading-[64.2px] mb-0 whitespace-pre">{`process remains `}</p>
                      <p className="leading-[64.2px] mb-0 whitespace-pre">{`fragmented and `}</p>
                      <p className="leading-[64.2px] whitespace-pre">exhausting.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[580px] overflow-clip relative rounded-[12px] shrink-0 w-[649px]" data-node-id="1:541" data-name="Image → 94qIcXWE5e8f67ZOyBpiKX7Jl0.png">
              <div className="absolute inset-0 rounded-[12px]" data-node-id="1:542" data-name="RN4eT0BK2H2DJNBJ0Mn7zkOwJh8.png">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                  <img alt="" className="absolute h-[104.9%] left-0 max-w-none top-[-2.45%] w-full" src={imgRn4ET0Bk2H2Djnbj0Mn7ZkOwJh8Png} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b content-stretch flex flex-col from-[24.353%] from-white gap-[44px] items-center justify-center overflow-clip pb-[150px] pt-[120px] px-[371px] relative shrink-0 to-[91.81%] to-white via-[74.353%] via-[rgba(204,235,255,0.63)]" data-node-id="1:543" data-name="Background">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:544" data-name="Container">
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="1:545" data-name="Heading 2">
              <div className="[word-break:break-word] flex flex-col font-['Geist:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[56px] text-black text-center tracking-[-1.12px] whitespace-nowrap" data-node-id="1:546">
                <p className="leading-[67.2px]">What makes ASND work?</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1178px]" data-node-id="1:547" data-name="Container">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-node-id="1:548" data-name="Desktop">
              <div className="content-stretch flex gap-[10px] items-center justify-center px-[30px] relative shrink-0 w-full" data-node-id="1:549" data-name="Container">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="1:550" data-name="Container">
                  <div className="bg-white content-stretch flex flex-col gap-[11px] items-center justify-center overflow-clip pb-[50px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-node-id="1:551" data-name="Variant 1">
                    <div className="h-[226.17px] relative shrink-0 w-[329px]" data-node-id="1:552" data-name="Asnd-vouched-profiles-subtle (4)">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-0 w-full" src={imgAsndVouchedProfilesSubtle4} />
                      </div>
                    </div>
                    <div className="h-[119.19px] overflow-clip relative shrink-0 w-full" data-node-id="1:554" data-name="Container">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+0.58px)] top-[calc(50%-45.7px)]" data-node-id="1:555" data-name="Container">
                        <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-node-id="1:556" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Geist:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[24px] text-black whitespace-nowrap" data-node-id="1:557">
                            <p className="leading-[28.8px]">Vouched Profiles</p>
                          </div>
                        </div>
                      </div>
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[2px] items-start left-1/2 overflow-clip top-[calc(50%-19.8px)] w-[158px]" data-node-id="1:558" data-name="Horizontal Divider">
                        <Component1 className="h-[2px] overflow-clip relative shrink-0 w-[158px]" variant="12" />
                      </div>
                      <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[calc(50%+25.4px)]" data-node-id="1:560" data-name="Container">
                        <div className="[word-break:break-word] font-['Geist:Medium'] font-medium h-[68.39px] leading-[0] relative shrink-0 text-[19px] text-[rgba(0,0,0,0.55)] text-center w-full" data-node-id="1:561" data-name="Paragraph">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[calc(50%+2.31px)] top-[21.9px] whitespace-nowrap" data-node-id="1:562">
                            <p className="leading-[22.8px] mb-0 whitespace-pre">{`Every member joins through a `}</p>
                            <p className="leading-[22.8px] whitespace-pre">{`vouch from someone who is `}</p>
                          </div>
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[calc(50%+0.07px)] top-[56.09px] w-[204.154px]" data-node-id="1:563">
                            <p className="leading-[22.8px]">already in the network.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute border border-[rgba(16,18,15,0.3)] border-solid inset-0 rounded-[12px]" data-node-id="1:564" data-name="Border" />
                  </div>
                </div>
                <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px overflow-clip pb-[50px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)]" data-node-id="1:565" data-name="Background+Shadow">
                  <div className="h-[238.55px] relative shrink-0 w-[347px]" data-node-id="1:566" data-name="Asnd-search-smarter-subtle (5)">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-0 w-full" src={imgAsndSearchSmarterSubtle5} />
                    </div>
                  </div>
                  <div className="h-[119.19px] overflow-clip relative shrink-0 w-full" data-node-id="1:568" data-name="Container">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+0.41px)] top-[calc(50%-45.7px)]" data-node-id="1:569" data-name="Container">
                      <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-node-id="1:570" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Geist:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[24px] text-black whitespace-nowrap" data-node-id="1:571">
                          <p className="leading-[28.8px]">Search Smarter</p>
                        </div>
                      </div>
                    </div>
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[2px] items-start left-1/2 overflow-clip top-[calc(50%-19.8px)] w-[158px]" data-node-id="1:572" data-name="Horizontal Divider">
                      <Component1 className="h-[2px] overflow-clip relative shrink-0 w-[158px]" variant="12" />
                    </div>
                    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[calc(50%+25.4px)]" data-node-id="1:574" data-name="Container">
                      <div className="[word-break:break-word] font-['Geist:Medium'] font-medium h-[68.39px] leading-[0] relative shrink-0 text-[19px] text-[rgba(0,0,0,0.55)] text-center w-full" data-node-id="1:575" data-name="Paragraph">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[calc(50%+2.31px)] top-[21.89px] whitespace-nowrap" data-node-id="1:576">
                          <p className="leading-[22.8px] mb-0 whitespace-pre">{`Search by discipline, niche, style, `}</p>
                          <p className="leading-[22.8px] whitespace-pre">{`availability, and location and see if `}</p>
                        </div>
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[calc(50%+0.05px)] top-[56.09px] w-[170.128px]" data-node-id="1:577">
                          <p className="leading-[22.8px]">{`they're the right fit.`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border border-[rgba(16,18,15,0.3)] border-solid inset-0 rounded-[12px]" data-node-id="1:578" data-name="Border" />
                </div>
                <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-center min-w-px overflow-clip pb-[50px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)]" data-node-id="1:579" data-name="Background+Shadow">
                  <div className="h-[233px] overflow-clip relative shrink-0 w-[335px]" data-node-id="1:580" data-name="illustrator">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[242.67px] left-1/2 top-[calc(50%+0.01px)] w-[353px]" data-node-id="1:581" data-name="Asnd-clear-briefs-subtle (5)">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-0 w-full" src={imgAsndClearBriefsSubtle5} />
                      </div>
                    </div>
                  </div>
                  <div className="h-[119.19px] overflow-clip relative shrink-0 w-full" data-node-id="1:583" data-name="Container">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+0.05px)] top-[calc(50%-45.7px)]" data-node-id="1:584" data-name="Container">
                      <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-node-id="1:585" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Geist:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[24px] text-black whitespace-nowrap" data-node-id="1:586">
                          <p className="leading-[28.8px]">Clear Briefs</p>
                        </div>
                      </div>
                    </div>
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[2px] items-start left-1/2 overflow-clip top-[calc(50%-19.8px)] w-[158px]" data-node-id="1:587" data-name="Horizontal Divider">
                      <Component1 className="h-[2px] overflow-clip relative shrink-0 w-[158px]" variant="12" />
                    </div>
                    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[calc(50%+25.4px)]" data-node-id="1:589" data-name="Container">
                      <div className="[word-break:break-word] font-['Geist:Medium'] font-medium h-[68.39px] leading-[0] relative shrink-0 text-[19px] text-[rgba(0,0,0,0.55)] text-center w-full" data-node-id="1:590" data-name="Paragraph">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[calc(50%+2.32px)] top-[21.9px] whitespace-nowrap" data-node-id="1:591">
                          <p className="leading-[22.8px] mb-0 whitespace-pre">{`Every opportunity lists deadline, `}</p>
                          <p className="leading-[22.8px] whitespace-pre">{`deliverables, compensation, and `}</p>
                        </div>
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[calc(50%+0.08px)] top-[56.09px] w-[185.142px]" data-node-id="1:592">
                          <p className="leading-[22.8px]">usage rights upfront.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border border-[rgba(16,18,15,0.3)] border-solid inset-0 rounded-[12px]" data-node-id="1:593" data-name="Border" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:594" data-name="Container">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="1:595" data-name="Heading 2">
            <div className="[word-break:break-word] flex flex-col font-['Geist:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[56px] text-black text-center tracking-[-1.12px] whitespace-nowrap" data-node-id="1:596">
              <p className="leading-[67.2px]">{`Designed for `}</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[705px] items-start justify-center max-w-[1180px] relative shrink-0 w-[1180px]" data-node-id="1:597" data-name="Container">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-center justify-center min-h-px overflow-clip pb-[70px] pt-[50px] relative w-full" data-node-id="1:598" data-name="Desktop 1">
            <div className="bg-white content-stretch flex items-center overflow-clip p-[4px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] shrink-0 w-[420px]" data-node-id="1:599" data-name="SegmendControl">
              <div
                onClick={() => setActiveTab("Creators")}
                className={`${activeTab === "Creators" ? "bg-[#012f4f] rounded-[12px]" : "bg-transparent rounded-[20px]"} content-stretch flex flex-[1_0_0] h-[56px] items-center justify-center min-w-px overflow-clip px-[20px] py-[10px] relative cursor-pointer transition-colors duration-200 z-10`}
                data-node-id="1:600"
                data-name="1st"
              >
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="1:601" data-name="Label">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:602" data-name="Container">
                    <div
                      className={`[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[20px] ${activeTab === "Creators" ? "text-white" : "text-[#9898a3]"} tracking-[-0.2px] whitespace-nowrap`}
                      data-node-id="1:603"
                    >
                      <p className="leading-[24px]">Creators</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${activeTab === "Agencies" ? "bg-[rgba(64,64,64,0.12)]" : ""} h-[12px] relative shrink-0 w-px`} data-node-id="1:604" data-name="br-1" />
              <div
                onClick={() => setActiveTab("Brands")}
                className={`${activeTab === "Brands" ? "bg-[#012f4f] rounded-[12px]" : "bg-transparent rounded-[20px]"} content-stretch flex flex-[1_0_0] h-[56px] items-center justify-center min-w-px overflow-clip px-[20px] py-[10px] relative cursor-pointer transition-colors duration-200 z-10`}
                data-node-id="1:605"
                data-name="2nd"
              >
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="1:606" data-name="Label">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:607" data-name="Container">
                    <div
                      className={`[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 ${activeTab === "Brands" ? "text-white" : "text-[#9898a3]"} text-[19.7px] tracking-[-0.2px] whitespace-nowrap`}
                      data-node-id="1:608"
                    >
                      <p className="leading-[24px]">Brands</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${activeTab === "Creators" ? "bg-[rgba(64,64,64,0.12)]" : ""} h-[12px] relative shrink-0 w-px`} data-node-id="1:609" data-name="br-2" />
              <div
                onClick={() => setActiveTab("Agencies")}
                className={`${activeTab === "Agencies" ? "bg-[#012f4f] rounded-[12px]" : "bg-transparent rounded-[20px]"} content-stretch flex flex-[1_0_0] h-[56px] items-center justify-center min-w-px overflow-clip px-[20px] py-[10px] relative cursor-pointer transition-colors duration-200 z-10`}
                data-node-id="1:610"
                data-name="2nd"
              >
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="1:611" data-name="Label">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:612" data-name="Container">
                    <div
                      className={`[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 ${activeTab === "Agencies" ? "text-white" : "text-[#9898a3]"} text-[18.8px] tracking-[-0.2px] whitespace-nowrap`}
                      data-node-id="1:613"
                    >
                      <p className="leading-[24px]">Agencies</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[rgba(16,18,15,0.3)] border-solid inset-0 rounded-[12px] pointer-events-none" data-node-id="1:614" data-name="Border" />
            </div>
            <div className="content-stretch flex flex-col items-start min-h-[565px] overflow-clip pb-[73px] relative shrink-0 w-[1140px]" data-node-id="1:615" data-name="PreviewWrap → Grid">
              <div className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 w-[1140px]" data-node-id="1:616" data-name="UIBorder">
                <div className="h-[492px] overflow-clip relative rounded-bl-[20px] rounded-tl-[20px] shrink-0 w-[592.8px]" data-node-id="1:617" data-name="TabContentItem">
                  <div className="absolute inset-0 rounded-bl-[20px] rounded-tl-[20px]" data-node-id="1:618" data-name="of41UhrJLeIHfsgGe6MGFEMjos.jpeg">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[20px] rounded-tl-[20px]">
                      <img alt="" className={currentTab.imageClassName} src={currentTab.image} />
                    </div>
                  </div>
                  <div className="absolute border-[rgba(16,18,15,0.3)] border-b border-l border-solid border-t inset-0 rounded-bl-[20px] rounded-tl-[20px]" data-node-id="1:619" data-name="Border" />
                </div>
                <div className="bg-white h-[492px] relative rounded-br-[20px] rounded-tr-[20px] shrink-0 w-[547.19px]" data-node-id="1:620" data-name="Background">
                  <div className="absolute content-stretch flex flex-col items-start left-[51px] top-[53px]" data-node-id="1:621" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:622" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[56px] text-black whitespace-nowrap" data-node-id="1:623">
                        <p className="leading-[67.2px]">{currentTab.title}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start left-[59px] top-[134px]" data-node-id="1:624" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:625" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap" data-node-id="1:626">
                        <p className="leading-[24px]">{currentTab.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[40.95%] content-stretch flex flex-col items-start left-[60px] top-[30.95%] w-[367px]" data-node-id="1:627" data-name="Container">
                    <div className="h-[34.56px] relative shrink-0 w-full" data-node-id="1:628" data-name="Container" />
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:629" data-name="List">
                      <div className="h-[34.56px] relative shrink-0 w-full" data-node-id="1:630" data-name="Item">
                        <div className="absolute content-stretch flex flex-col items-start left-[23.86px] pb-[0.56px] right-0 top-[-1px]" data-node-id="1:631" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#6e6e6e] text-[18px] whitespace-nowrap" data-node-id="1:632">
                            <p className="leading-[34.56px]">{currentTab.bullets[0]}</p>
                          </div>
                        </div>
                      </div>
                      <div className="h-[34.56px] relative shrink-0 w-full" data-node-id="1:633" data-name="Item">
                        <div className="absolute content-stretch flex flex-col items-start left-[23.86px] pb-[0.56px] right-0 top-[-1px]" data-node-id="1:634" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#6e6e6e] text-[18px] whitespace-nowrap" data-node-id="1:635">
                            <p className="leading-[34.56px]">{currentTab.bullets[1]}</p>
                          </div>
                        </div>
                      </div>
                      <div className="h-[34.56px] relative shrink-0 w-full" data-node-id="1:636" data-name="Item">
                        <div className="absolute content-stretch flex flex-col items-start left-[23.86px] pb-[0.56px] right-0 top-[-1px]" data-node-id="1:637" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#6e6e6e] text-[18px] whitespace-nowrap" data-node-id="1:638">
                            <p className="leading-[34.56px]">{currentTab.bullets[2]}</p>
                          </div>
                        </div>
                      </div>
                      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] left-0 text-[#6e6e6e] text-[18px] top-[57px] whitespace-nowrap" data-node-id="1:639">
                        <p className="leading-[34.56px] mb-0">•</p>
                        <p className="leading-[34.56px] mb-0">•</p>
                        <p className="leading-[34.56px]">•</p>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => scrollToForm(activeTab)}
                    className="absolute aspect-[476.04998779296875/63.70000076293945] h-[63.7px] bg-[#101828] bottom-[37.09px] content-stretch flex flex-col items-center justify-center left-[6.5%] overflow-clip pb-[20.45px] pl-[151.52px] pr-[151.55px] pt-[19.16px] right-[6.5%] rounded-[12px] cursor-pointer z-10 transition-opacity hover:opacity-90"
                    data-node-id="1:640"
                    data-name="Contents"
                  >
                    <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:641" data-name="Default">
                      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-node-id="1:642" data-name="3D Space → Arm 1 → Start a Project">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:643" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-white tracking-[-0.3px] whitespace-nowrap" data-node-id="1:644">
                            <p className="leading-[24px]">{currentTab.cta}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border-[rgba(16,18,15,0.3)] border-b border-r border-solid border-t inset-0 rounded-br-[20px] rounded-tr-[20px] pointer-events-none" data-node-id="1:645" data-name="Border" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={formSectionRef} className="bg-gradient-to-b content-stretch flex from-white h-[775px] items-center justify-center pt-[40px] px-[390px] relative shrink-0 to-[#cbeaff]" data-node-id="1:646" data-name="Background">
          <div className="content-stretch flex gap-[23px] items-center justify-center max-w-[1180px] relative shrink-0 w-[1140px]" data-node-id="1:647" data-name="Content">
            <div className="flex flex-row items-center self-stretch" data-node-id="1:648">
              <div className="content-stretch flex h-full items-start relative shrink-0 w-[528.5px]" data-name="Info Column:align-stretch">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] h-full items-center justify-center min-w-px relative" data-node-id="1:649" data-name="Info Column">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px p-[30px] relative rounded-[24px] w-full" data-node-id="1:650" data-name="Testimonial Card">
                    <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0.241px_0.241px_0.341px_-1.625px_rgba(0,0,0,0.14),2px_2px_2.828px_-3.25px_rgba(0,0,0,0.08),1px_1px_4px_0px_rgba(0,0,0,0.25)]" data-node-id="1:651" data-name="Testimonial Card:shadow" />
                    <div className="absolute inset-0 rounded-[24px]" data-node-id="1:652" data-name="Photo of Alex Turner, Founder, smiling">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
                        <img alt="" className="absolute h-[117.76%] left-0 max-w-none top-[-8.88%] w-full" src={imgPhotoOfAlexTurnerFounderSmiling} />
                      </div>
                    </div>
                    <div className="h-[26px] min-h-[26px] relative shrink-0 w-full" data-node-id="1:653" data-name="Review+Name" />
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[463.81px]" data-node-id="1:654" data-name="Title">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:655" data-name="Heading 4">
                        <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#002f4f] text-[18px] whitespace-nowrap" data-node-id="1:656">
                          <p className="leading-[28px] mb-0 whitespace-pre">{`ASND is early. The network growing deliberately, through `}</p>
                          <p className="leading-[28px] whitespace-pre">invitation and referral.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white content-stretch flex gap-[24px] items-center p-[30px] relative rounded-[15px] shrink-0 w-full" data-node-id="1:657" data-name="Feature Card">
                    <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[15px] shadow-[0.06px_0.602px_0.605px_-1.25px_rgba(0,0,0,0.18),0.229px_2.289px_2.3px_-2.5px_rgba(0,0,0,0.16),1px_10px_10.05px_-3.75px_rgba(0,0,0,0.06)]" data-node-id="1:658" data-name="Feature Card:shadow" />
                    <div className="overflow-clip relative shrink-0 size-[28px]" data-node-id="1:659" data-name="Container">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer1} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:661" data-name="Title">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:662" data-name="Heading 4">
                        <div className="[word-break:break-word] flex flex-col font-['Geist:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#09090b] text-[20px] whitespace-nowrap" data-node-id="1:663">
                          <p className="leading-[28px]">asnddev@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white content-start flex flex-col flex-wrap gap-[0px_28px] items-start px-[30px] py-[20px] relative rounded-[24px] shrink-0 w-[588.5px]" data-node-id="1:664" data-name="Form">
              <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0.241px_0.241px_0.341px_-1.625px_rgba(0,0,0,0.14),2px_2px_2.828px_-3.25px_rgba(0,0,0,0.08),1px_1px_4px_0px_rgba(0,0,0,0.3)] pointer-events-none" data-node-id="1:665" data-name="Form:shadow" />
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[507px]" data-node-id="1:666" data-name="Title">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:667" data-name="Heading 3">
                  <div className="[word-break:break-word] flex flex-col font-['Geist:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#616169] text-[20px] w-full whitespace-pre-wrap" data-node-id="1:668">
                    <p className="leading-[32px] mb-0">{`Tell us who you are, and we’ll reach out when beta `}</p>
                    <p className="leading-[32px]">access opens.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-center justify-center pt-[20px] relative shrink-0 w-[507px]" data-node-id="1:669" data-name="Form Fields">
                <div className="content-stretch flex gap-[24px] items-start justify-center overflow-clip relative shrink-0 w-full" data-node-id="1:670" data-name="Container">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px relative" data-node-id="1:671" data-name="Label - Name Field">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:672" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:673" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#09090b] text-[16px] whitespace-nowrap" data-node-id="1:674">
                          <p className="leading-[24px]">Name*</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white content-stretch flex h-[56px] items-center overflow-clip px-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:675" data-name="Background">
                      <input
                        type="text"
                        aria-label="Name"
                        placeholder="Jane Smith"
                        value={formState.name}
                        onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                        className="relative z-10 w-full h-full bg-transparent font-['Inter:Regular'] text-[#09090b] text-[16px] placeholder:text-[#616169] outline-none"
                      />
                      <div className="absolute border border-[#98a0ab] border-solid inset-0 rounded-[12px] pointer-events-none" data-node-id="1:679" data-name="Border" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px relative" data-node-id="1:680" data-name="Label - Email Field">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:681" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:682" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#09090b] text-[16px] whitespace-nowrap" data-node-id="1:683">
                          <p className="leading-[24px]">Email*</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white content-stretch flex h-[56px] items-center overflow-clip px-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:684" data-name="Background">
                      <input
                        type="email"
                        aria-label="Email"
                        placeholder="jane@brand.com"
                        value={formState.email}
                        onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                        className="relative z-10 w-full h-full bg-transparent font-['Inter:Regular'] text-[#09090b] text-[16px] placeholder:text-[#616169] outline-none"
                      />
                      <div className="absolute border border-[#98a0ab] border-solid inset-0 rounded-[12px] pointer-events-none" data-node-id="1:688" data-name="Border" />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-visible relative shrink-0 w-full" data-node-id="1:689" data-name="Container">
                  <div className="content-stretch flex gap-[24px] items-center justify-center overflow-visible relative shrink-0 w-full" data-node-id="1:690" data-name="Container">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px relative" data-node-id="1:691" data-name="Label - Email Field">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:692" data-name="Container">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:693" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#09090b] text-[16px] whitespace-nowrap" data-node-id="1:694">
                            <p className="leading-[24px]">Role*</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white content-stretch flex h-[56px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:695" data-name="Background">
                        <select
                          aria-label="Role"
                          required
                          value={formState.role}
                          onChange={(e) => setFormState((s) => ({ ...s, role: e.target.value }))}
                          className="relative z-10 h-full w-full cursor-pointer appearance-none bg-transparent font-['Inter:Regular'] text-[16px] leading-[24px] py-0 m-0 text-[#09090b] outline-none"
                        >
                          <option value="" disabled className="text-[#616169]">Select your role</option>
                          <option value="Creator" className="text-[#09090b]">Creator</option>
                          <option value="Brand" className="text-[#09090b]">Brand</option>
                          <option value="Agency" className="text-[#09090b]">Agency</option>
                        </select>
                        <div className="pointer-events-none absolute right-[16px] top-1/2 -translate-y-1/2 text-[12px] text-[#616169]">
                          ▼
                        </div>
                        <div className="absolute border border-[#98a0ab] border-solid inset-0 rounded-[12px] pointer-events-none" data-node-id="1:699" data-name="Border" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px relative" data-node-id="1:700" data-name="Label - Email Field">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:701" data-name="Container">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:702" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#09090b] text-[16px] whitespace-nowrap" data-node-id="1:703">
                            <p className="leading-[24px]">Phone</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex h-[56px] w-full items-center gap-[8px] rounded-[12px] bg-white px-[12px] z-20" data-node-id="1:704" data-name="Background">
                        <div ref={countryDropdownRef} className="relative shrink-0">
                          <button
                            type="button"
                            aria-label="Country code"
                            aria-expanded={isCountryOpen}
                            onClick={() => setIsCountryOpen((open) => !open)}
                            className="flex h-[38px] items-center gap-[6px] rounded-[8px] px-[8px] text-[15px] text-[#09090b] outline-none hover:bg-[#f1f5f9] transition-colors cursor-pointer"
                          >
                            <span className="text-[18px] leading-none" aria-hidden>{country.flag}</span>
                            <span className="font-['Inter:Medium'] font-medium text-[15px]">{country.code}</span>
                            <span className="text-[10px] text-[#616169] ml-[2px]">▼</span>
                          </button>
                          {isCountryOpen && (
                            <div className="absolute left-0 top-[48px] z-50 w-[290px] overflow-hidden rounded-[12px] border border-[#cbd5e1] bg-white shadow-2xl animate-in fade-in-0 zoom-in-95">
                              <div className="p-[10px] border-b border-[#f1f5f9] bg-[#f8fafc]">
                                <input
                                  autoFocus
                                  aria-label="Search country or code"
                                  value={countrySearch}
                                  onChange={(e) => setCountrySearch(e.target.value)}
                                  placeholder="Search country or code..."
                                  className="h-[36px] w-full rounded-[8px] border border-[#cbd5e1] bg-white px-[10px] text-[14px] text-[#09090b] outline-none focus:border-[#002f4f]"
                                />
                              </div>
                              <div className="max-h-[240px] overflow-y-auto divide-y divide-[#f8fafc] overscroll-contain">
                                {!countrySearch.trim() && (
                                  <div className="bg-[#f8fafc]/50 px-[12px] py-[6px] text-[11px] font-semibold uppercase tracking-wider text-[#64748b]">
                                    Pinned
                                  </div>
                                )}
                                {PINNED_COUNTRIES.filter((item) =>
                                  !countrySearch.trim() ||
                                  item.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
                                  item.code.includes(countrySearch)
                                ).map((item) => (
                                  <button
                                    type="button"
                                    key={`pinned-${item.name}`}
                                    onClick={() => {
                                      setCountry(item);
                                      setIsCountryOpen(false);
                                      setCountrySearch("");
                                    }}
                                    className={`flex w-full items-center gap-[10px] px-[12px] py-[8px] text-left text-[14px] cursor-pointer transition-colors hover:bg-[#f1f5f9] ${
                                      country.name === item.name ? "bg-[#e2e8f0]/40 font-medium" : ""
                                    }`}
                                  >
                                    <span className="text-[18px] leading-none" aria-hidden>{item.flag}</span>
                                    <span className="flex-1 text-[#09090b] truncate">{item.name}</span>
                                    <span className="text-[#64748b] text-[13px]">{item.code}</span>
                                  </button>
                                ))}

                                {!countrySearch.trim() && (
                                  <div className="bg-[#f8fafc]/50 px-[12px] py-[6px] text-[11px] font-semibold uppercase tracking-wider text-[#64748b]">
                                    All Countries
                                  </div>
                                )}
                                {OTHER_COUNTRIES.filter((item) =>
                                  !countrySearch.trim() ||
                                  item.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
                                  item.code.includes(countrySearch)
                                ).map((item) => (
                                  <button
                                    type="button"
                                    key={item.name}
                                    onClick={() => {
                                      setCountry(item);
                                      setIsCountryOpen(false);
                                      setCountrySearch("");
                                    }}
                                    className={`flex w-full items-center gap-[10px] px-[12px] py-[8px] text-left text-[14px] cursor-pointer transition-colors hover:bg-[#f1f5f9] ${
                                      country.name === item.name ? "bg-[#e2e8f0]/40 font-medium" : ""
                                    }`}
                                  >
                                    <span className="text-[18px] leading-none" aria-hidden>{item.flag}</span>
                                    <span className="flex-1 text-[#09090b] truncate">{item.name}</span>
                                    <span className="text-[#64748b] text-[13px]">{item.code}</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <input
                          ref={phoneInputRef}
                          type="tel"
                          aria-label="Phone number"
                          value={formState.phone}
                          onChange={(e) => setFormState((s) => ({ ...s, phone: e.target.value }))}
                          placeholder="Phone number"
                          inputMode="tel"
                          autoComplete="tel-national"
                          className="h-full min-w-0 flex-1 bg-transparent font-['Inter:Regular'] text-[16px] text-[#09090b] outline-none placeholder:text-[#616169]"
                        />
                        <div className="absolute border border-[#98a0ab] border-solid inset-0 rounded-[12px] pointer-events-none" data-node-id="1:708" data-name="Border" />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-node-id="1:709" data-name="Label - Email Field">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:710" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#09090b] text-[16px] whitespace-nowrap" data-node-id="1:712">
                        <p className="leading-[24px]">Links</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFormState((s) => ({ ...s, links: [...s.links, ""] }))}
                        className="flex items-center gap-[4px] rounded-[6px] px-[8px] py-[3px] text-[13px] font-['Inter:Medium'] font-medium text-[#002f4f] hover:bg-[#e0f2fe] transition-colors"
                        aria-label="Add another link"
                      >
                        <span className="text-[16px] leading-none font-bold">+</span>
                        <span>Add link</span>
                      </button>
                    </div>

                    <div className="flex flex-col gap-[10px] w-full">
                      {formState.links.map((linkValue, idx) => (
                        <div key={idx} className="flex items-center gap-[8px] w-full">
                          <div className="bg-white content-stretch flex h-[56px] flex-1 items-center overflow-clip px-[16px] relative rounded-[12px] shrink-0" data-node-id="1:713" data-name="Background">
                            <input
                              type="url"
                              aria-label={`Link ${idx + 1}`}
                              value={linkValue}
                              placeholder={idx === 0 ? "Portfolio, Instagram or Website" : "Additional link"}
                              onChange={(e) => {
                                const newLinks = [...formState.links];
                                newLinks[idx] = e.target.value;
                                setFormState((s) => ({ ...s, links: newLinks }));
                              }}
                              className="relative z-10 h-full w-full bg-transparent font-['Inter:Regular'] text-[16px] text-[#09090b] outline-none placeholder:text-[#616169]"
                            />
                            <div className="absolute border border-[#98a0ab] border-solid inset-0 rounded-[12px] pointer-events-none" data-node-id="1:717" data-name="Border" />
                          </div>
                          {formState.links.length > 1 && (
                            <button
                              type="button"
                              onClick={() => {
                                const newLinks = formState.links.filter((_, i) => i !== idx);
                                setFormState((s) => ({ ...s, links: newLinks.length ? newLinks : [""] }));
                              }}
                              className="flex size-[36px] items-center justify-center rounded-[8px] text-[#94a3b8] hover:text-[#ef4444] hover:bg-[#fee2e2] transition-colors"
                              aria-label={`Remove link ${idx + 1}`}
                            >
                              ✕
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[10px] items-start pt-[5px] relative shrink-0 w-full" data-node-id="1:718" data-name="Label - Message Field">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:719" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:720" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#09090b] text-[16px] whitespace-nowrap" data-node-id="1:721">
                        <p className="leading-[24px]">What do you make, do, or look for?</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white content-stretch flex items-center min-h-[100px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="1:722" data-name="Background">
                    <textarea
                      aria-label="What do you make, do, or look for?"
                      placeholder="Write your message here..."
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      className="relative z-10 w-full h-[100px] p-[16px] bg-transparent font-['Inter:Regular'] text-[#09090b] text-[16px] placeholder:text-[#616169] resize-none outline-none"
                    />
                    <div className="absolute border border-[#98a0ab] border-solid inset-0 rounded-[12px] pointer-events-none" data-node-id="1:726" data-name="Border" />
                  </div>
                </div>
                {errorMessage && (
                  <div className="w-full text-center text-[#ef4444] text-[14px] font-['Inter:Medium'] -mt-[4px]">
                    {errorMessage}
                  </div>
                )}
                <div className="content-stretch flex flex-col h-[56px] items-start justify-center relative shrink-0 w-full" data-node-id="1:727" data-name="Container">
                  <div
                    onClick={submitApplication}
                    className="bg-[#101828] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[10px] w-full cursor-pointer transition-opacity hover:opacity-90"
                    data-node-id="1:728"
                    data-name="Button - Default"
                  >
                    <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.5px_0_0] rounded-[10px] shadow-[0px_0.602px_0.602px_-1.25px_rgba(0,0,0,0.18),0px_2.289px_2.289px_-2.5px_rgba(0,0,0,0.16),0px_10px_10px_-3.75px_rgba(0,0,0,0.06)]" data-node-id="1:729" data-name="Button - Default:shadow" />
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:730" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:731" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-white whitespace-nowrap" data-node-id="1:732">
                          <p className="leading-[20px]">{submitted ? "Success!" : isSubmitting ? "Submitting..." : "Apply for Beta Access"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={contactSectionRef} className="bg-[#101828] content-stretch flex flex-col items-center justify-center overflow-clip pb-[33px] pt-[80px] px-[30px] relative shrink-0 w-full" data-node-id="1:733" data-name="Footer - Desktop">
          <div className="content-stretch flex flex-col gap-[50.01px] items-center justify-center max-w-[1200px] overflow-clip relative shrink-0 w-[1200px]" data-node-id="1:734" data-name="Container">
            <div className="content-stretch flex gap-[412px] items-center overflow-clip py-[11px] relative shrink-0 w-full" data-node-id="1:735" data-name="Top Content">
              <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-w-[368px] overflow-clip relative shrink-0 w-[368px]" data-node-id="1:736" data-name="Title">
                <div className="content-stretch flex flex-col h-[114px] w-[211.22px] items-start justify-center relative shrink-0" data-node-id="1:737" data-name="Container">
                  <div
                    onClick={scrollToTop}
                    className="content-stretch flex flex-[1_0_0] w-[211.22px] items-center justify-center min-h-px overflow-clip relative cursor-pointer"
                    data-node-id="1:738"
                    data-name="Link - Footer"
                  >
                    <div className="aspect-[211.22000122070312/114] w-[211.22px] h-[114px] overflow-clip relative shrink-0" data-node-id="1:739" data-name="Container">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[127.56px] overflow-clip relative shrink-0 w-full" data-node-id="1:741" data-name="Text">
                  <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 right-0 top-[calc(50%-54.28px)]" data-node-id="1:742" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:743" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.25px] w-full" data-node-id="1:744">
                        <p className="leading-[20.16px]">Trust-based discovery, for creatives.</p>
                      </div>
                    </div>
                  </div>
                  <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 opacity-70 right-0 top-[calc(50%-19.12px)]" data-node-id="1:745" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:746" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.25px] w-full" data-node-id="1:747">
                        <p className="leading-[22.4px]">Vouched. Vetted. Yours to find.</p>
                      </div>
                    </div>
                  </div>
                  <div className="-translate-y-1/2 absolute content-stretch flex items-start left-0 pt-[20px] right-0 top-[calc(50%+35.29px)]" data-node-id="1:748" data-name="Container">
                    <div className="relative shrink-0 size-[37px] cursor-pointer" data-node-id="1:749" data-name="Linkedin">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLinkedin} />
                      </div>
                    </div>
                    <div className="absolute bottom-[-2px] left-[48px] size-[41px] cursor-pointer" data-node-id="1:751" data-name="Instagram">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgInstagram} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[0.01px] isolate items-center justify-center relative shrink-0 w-[420px]" data-node-id="1:753" data-name="Container">
                <div className="h-[195.84px] max-w-[339px] overflow-clip relative shrink-0 w-[179.45px] z-[2]" data-node-id="1:754" data-name="Legal">
                  <div className="absolute content-stretch flex flex-col h-[26px] items-start left-0 top-[-1px] w-[42px]" data-node-id="1:755" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:756" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full" data-node-id="1:757">
                        <p className="leading-[19.2px]">Legal</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex items-center justify-center left-0 overflow-clip pb-[5px] top-[25px] cursor-pointer" data-node-id="1:758" data-name="Link - Footer">
                    <div className="content-stretch flex flex-col items-start opacity-70 hover:opacity-100 transition-opacity relative shrink-0" data-node-id="1:759" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:760" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Geist:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="1:761">
                          <p className="leading-[17.92px]">{`Terms & Conditions`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex items-center justify-center left-0 overflow-clip pb-[5px] top-[47.93px] cursor-pointer" data-node-id="1:762" data-name="Link - Footer">
                    <div className="content-stretch flex flex-col items-start opacity-70 hover:opacity-100 transition-opacity relative shrink-0" data-node-id="1:763" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:764" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Geist:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="1:765">
                          <p className="leading-[17.92px]">Privacy Policy</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[195.84px] max-w-[339px] overflow-clip relative shrink-0 w-[191.41px] z-[1]" data-node-id="1:766" data-name="Legal">
                  <div className="absolute content-stretch flex flex-col h-[26px] items-start left-0 top-[-1px] w-[75px]" data-node-id="1:767" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:768" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full" data-node-id="1:769">
                        <p className="leading-[19.2px]">Contact</p>
                      </div>
                    </div>
                  </div>
                  <a href="tel:+15854142745" className="absolute content-stretch flex items-center justify-center left-0 overflow-clip pb-[5px] top-[25px] cursor-pointer" data-node-id="1:770" data-name="Link - Footer">
                    <div className="content-stretch flex flex-col items-start opacity-70 hover:opacity-100 transition-opacity relative shrink-0" data-node-id="1:771" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:772" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Geist:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="1:773">
                          <p className="leading-[17.92px]">+1 585-414-2745</p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="mailto:asnddev@gmail.com" className="absolute content-stretch flex items-center justify-center left-0 overflow-clip pb-[5px] top-[47.93px] cursor-pointer" data-node-id="1:774" data-name="Link - Footer">
                    <div className="content-stretch flex flex-col items-start opacity-70 hover:opacity-100 transition-opacity relative shrink-0" data-node-id="1:775" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:776" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Geist:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="1:777">
                          <p className="leading-[17.92px]">asnddev@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-end justify-center overflow-clip relative shrink-0 w-full" data-node-id="1:778" data-name="Bottom Content">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-w-px overflow-clip relative" data-node-id="1:779" data-name="Copyright Content">
                <div className="bg-white h-px relative shrink-0 w-full" data-node-id="1:780" data-name="Horizontal Divider" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:781" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:782" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Geist:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.25px] w-full" data-node-id="1:783">
                      <p className="leading-[22.4px] whitespace-pre-wrap">{`© 2026  ASND • All rights reserved`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0 z-30" data-node-id="1:784" data-name="Container">
        <div className="bg-[rgba(255,255,255,0)] content-center flex flex-col flex-wrap gap-[0px_10px] h-[75px] items-center justify-center px-[30px] py-[16px] relative shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-node-id="1:785" data-name="Nav - Desktop Close">
          <div className="absolute backdrop-blur-[16px] inset-0" data-node-id="1:786" data-name="Blur" />
          <div className="content-stretch flex flex-col items-center max-h-[56px] max-w-[1200px] relative shrink-0 w-[1200px]" data-node-id="1:787" data-name="Container">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:788" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0 w-[196px]" data-node-id="1:789" data-name="Logo">
                <div className="aspect-[177/55.060001373291016] w-[177px] h-[55.06px] content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="1:790" data-name="Container">
                  <div
                    onClick={scrollToTop}
                    className="content-stretch flex h-[55.06px] items-center justify-center overflow-clip relative shrink-0 w-full cursor-pointer"
                    data-node-id="1:791"
                    data-name="Link - Header"
                  >
                    <div className="aspect-[148.4199981689453/55.060001373291016] w-[148.42px] h-[55.06px] overflow-clip relative shrink-0" data-node-id="1:792" data-name="Container">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[99.99%] left-0 max-w-none top-0 w-full" src={imgContainer3} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:794" data-name="Container">
                <div
                  onClick={() => scrollToForm(activeTab)}
                  className="bg-[#101828] content-stretch flex h-[55px] items-center justify-center overflow-clip px-[20px] py-[18px] relative rounded-[12px] shadow-[0px_0.602px_0.602px_-1.25px_rgba(26,25,25,0.18),0px_2.289px_2.289px_-2.5px_rgba(26,25,25,0.16),0px_10px_10px_-3.75px_rgba(26,25,25,0.06)] shrink-0 cursor-pointer transition-opacity hover:opacity-90"
                  data-node-id="1:795"
                  data-name="Desktop"
                >
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="1:796" data-name="Text Wrapper">
                    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="1:797" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Geist:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" data-node-id="1:798">
                        <p className="leading-[17.92px]">Apply for Beta Access</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={scrollToContact}
                className="absolute bg-white bottom-0 content-stretch flex items-center justify-center overflow-clip px-[20px] py-[18px] right-[213.83px] rounded-[12px] top-0 cursor-pointer transition-colors hover:bg-neutral-50"
                data-node-id="1:799"
                data-name="Menu Item List"
              >
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:800" data-name="Container">
                  <div className="content-stretch flex items-center justify-center overflow-clip pb-[3px] relative rounded-[1px] shrink-0" data-node-id="1:801" data-name="Link - Header">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:802" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:803" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Geist:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap" data-node-id="1:804">
                          <p className="leading-[17.92px]">Contact</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute border border-[rgba(0,0,0,0.09)] border-solid h-[55.06px] left-0 rounded-[12px] top-0 w-[99.83px]" data-node-id="1:805" data-name="Border" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute h-[1200px] left-0 top-0 w-full ${isEditDialogOpen ? "z-50 pointer-events-auto" : "pointer-events-none"}`}
        data-node-id="1:806"
        data-name="Iframe:mask-group"
      >
        <div
          className={`absolute content-stretch flex flex-col h-[1200px] items-start left-0 top-0 w-full ${
            isEditDialogOpen
              ? ""
              : "mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_-1px] mask-size-[1921px_1201px]"
          }`}
          data-node-id="1:808"
          style={isEditDialogOpen ? undefined : { maskImage: `url("${imgIframe}")` }}
          data-name="Iframe"
        >
          <div className="h-[1200px] relative shrink-0 w-full" data-node-id="1:809" data-name="Html → Body">
            <div
              onClick={() => setIsEditDialogOpen(false)}
              className="absolute bg-[rgba(0,0,0,0.7)] content-stretch flex inset-0 items-center justify-center"
              data-node-id="1:810"
              data-name="Overlay"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-[#1f1f1f] content-stretch flex flex-col items-start overflow-clip px-[10px] relative rounded-[18px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.08)] shrink-0 w-[260px]"
                data-node-id="1:811"
                data-name="Dialog"
              >
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:812" data-name="Form">
                  <div className="content-stretch flex flex-col h-[60px] items-start pb-[10px] relative shrink-0 w-full" data-node-id="1:813" data-name="Margin">
                    <div className="border-[rgba(255,255,255,0.07)] border-b border-solid content-stretch flex h-[50px] items-center justify-between relative shrink-0 w-full" data-node-id="1:814" data-name="HorizontalBorder">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:815" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-[550] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="1:816">
                          <p className="leading-[12px]">Edit page</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start pr-[5px] relative shrink-0" data-node-id="1:817" data-name="Button - Close:margin">
                        <button
                          type="button"
                          aria-label="Close"
                          onClick={() => setIsEditDialogOpen(false)}
                          className="content-stretch flex items-center justify-center relative shrink-0 cursor-pointer"
                        >×</button>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:819" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-[450] justify-center leading-[0] not-italic relative shrink-0 text-[#aaa] text-[12px] w-full" data-node-id="1:820">
                      <p className="leading-[18px] mb-0">Edit the page directly in the</p>
                      <p className="leading-[18px]">browser, without opening the app.</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start py-[10px] relative shrink-0 w-full" data-node-id="1:821" data-name="Container">
                    <div
                      onClick={() => setIsEditDialogOpen(false)}
                      className="bg-[#2b2b2b] content-stretch flex flex-[1_0_0] flex-col h-[30px] items-center justify-center min-w-px px-[10px] relative rounded-[8px] cursor-pointer hover:bg-[#363636]"
                      data-node-id="1:822"
                      data-name="Component 4"
                    >
                      <div className="content-stretch flex items-start justify-center relative shrink-0" data-node-id="I1:822;1:280" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-[450] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" data-node-id="I1:822;1:281">
                          <p className="leading-[normal]">Continue</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[18px]" data-node-id="1:823" data-name="Overlay+Shadow">
                  <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[18px]" />
                  <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.07)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
