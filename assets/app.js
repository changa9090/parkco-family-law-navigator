/* Park & Co Lawyers · Australian Family Law, Property Precedent Matcher & Visa Crossover Navigator
   Embedded ParkCoDates Canonical Australian Date & Public Holiday Utility (2026–2030+) */
(function (root) {
  "use strict";

  /* ==========================================================================
     1. CANONICAL AUSTRALIAN STATUTORY DATE & PUBLIC HOLIDAY UTILITY (2026–2030)
     ========================================================================== */
  var NATIONAL_HOLIDAYS = {
    // 2026
    "2026-01-01": "New Year's Day",
    "2026-01-26": "Australia Day",
    "2026-04-03": "Good Friday",
    "2026-04-06": "Easter Monday",
    "2026-12-25": "Christmas Day",
    "2026-12-28": "Boxing Day (Additional Day)",
    // 2027
    "2027-01-01": "New Year's Day",
    "2027-01-26": "Australia Day",
    "2027-03-26": "Good Friday",
    "2027-03-29": "Easter Monday",
    "2027-12-25": "Christmas Day",
    "2027-12-27": "Christmas Day (Additional Day)",
    "2027-12-28": "Boxing Day (Additional Day)",
    // 2028
    "2028-01-01": "New Year's Day",
    "2028-01-03": "New Year's Day (Additional Day)",
    "2028-01-26": "Australia Day",
    "2028-04-14": "Good Friday",
    "2028-04-17": "Easter Monday",
    "2028-04-25": "Anzac Day",
    "2028-12-25": "Christmas Day",
    "2028-12-26": "Boxing Day",
    // 2029
    "2029-01-01": "New Year's Day",
    "2029-01-26": "Australia Day",
    "2029-03-30": "Good Friday",
    "2029-04-02": "Easter Monday",
    "2029-04-25": "Anzac Day",
    "2029-12-25": "Christmas Day",
    "2029-12-26": "Boxing Day",
    // 2030
    "2030-01-01": "New Year's Day",
    "2030-01-26": "Australia Day",
    "2030-01-28": "Australia Day (Additional Day)",
    "2030-04-19": "Good Friday",
    "2030-04-22": "Easter Monday",
    "2030-04-25": "Anzac Day",
    "2030-12-25": "Christmas Day",
    "2030-12-26": "Boxing Day"
  };

  var STATE_HOLIDAYS = {
    QLD: {
      "2026-04-04": "Easter Saturday",
      "2026-04-05": "Easter Sunday",
      "2026-04-25": "Anzac Day",
      "2026-05-04": "Labour Day (QLD)",
      "2026-08-12": "Royal Queensland Show (Brisbane)",
      "2026-10-05": "King's Birthday (QLD)",
      "2027-03-27": "Easter Saturday",
      "2027-03-28": "Easter Sunday",
      "2027-04-25": "Anzac Day",
      "2027-04-26": "Anzac Day (Observed QLD)",
      "2027-05-03": "Labour Day (QLD)",
      "2027-08-11": "Royal Queensland Show (Brisbane)",
      "2027-10-04": "King's Birthday (QLD)",
      "2028-04-15": "Easter Saturday",
      "2028-04-16": "Easter Sunday",
      "2028-05-01": "Labour Day (QLD)",
      "2028-08-16": "Royal Queensland Show (Brisbane)",
      "2028-10-02": "King's Birthday (QLD)",
      "2029-03-31": "Easter Saturday",
      "2029-04-01": "Easter Sunday",
      "2029-05-07": "Labour Day (QLD)",
      "2029-08-15": "Royal Queensland Show (Brisbane)",
      "2029-10-01": "King's Birthday (QLD)",
      "2030-04-20": "Easter Saturday",
      "2030-04-21": "Easter Sunday",
      "2030-05-06": "Labour Day (QLD)",
      "2030-08-14": "Royal Queensland Show (Brisbane)",
      "2030-10-07": "King's Birthday (QLD)"
    },
    NSW: {
      "2026-04-04": "Easter Saturday",
      "2026-04-05": "Easter Sunday",
      "2026-04-25": "Anzac Day",
      "2026-06-08": "King's Birthday (NSW)",
      "2026-10-05": "Labour Day (NSW)",
      "2027-03-27": "Easter Saturday",
      "2027-03-28": "Easter Sunday",
      "2027-04-25": "Anzac Day",
      "2027-06-14": "King's Birthday (NSW)",
      "2027-10-04": "Labour Day (NSW)",
      "2028-04-15": "Easter Saturday",
      "2028-04-16": "Easter Sunday",
      "2028-06-12": "King's Birthday (NSW)",
      "2028-10-02": "Labour Day (NSW)",
      "2029-03-31": "Easter Saturday",
      "2029-04-01": "Easter Sunday",
      "2029-06-11": "King's Birthday (NSW)",
      "2029-10-01": "Labour Day (NSW)",
      "2030-04-20": "Easter Saturday",
      "2030-04-21": "Easter Sunday",
      "2030-06-10": "King's Birthday (NSW)",
      "2030-10-07": "Labour Day (NSW)"
    },
    VIC: {
      "2026-03-09": "Labour Day (VIC)",
      "2026-04-04": "Easter Saturday",
      "2026-04-05": "Easter Sunday",
      "2026-04-25": "Anzac Day",
      "2026-06-08": "King's Birthday (VIC)",
      "2026-09-25": "Friday before AFL Grand Final (VIC)",
      "2026-11-03": "Melbourne Cup Day (VIC)",
      "2027-03-08": "Labour Day (VIC)",
      "2027-03-27": "Easter Saturday",
      "2027-03-28": "Easter Sunday",
      "2027-04-25": "Anzac Day",
      "2027-06-14": "King's Birthday (VIC)",
      "2027-09-24": "Friday before AFL Grand Final (VIC)",
      "2027-11-02": "Melbourne Cup Day (VIC)",
      "2028-03-13": "Labour Day (VIC)",
      "2028-04-15": "Easter Saturday",
      "2028-04-16": "Easter Sunday",
      "2028-06-12": "King's Birthday (VIC)",
      "2028-09-29": "Friday before AFL Grand Final (VIC)",
      "2028-11-07": "Melbourne Cup Day (VIC)",
      "2029-03-12": "Labour Day (VIC)",
      "2029-03-31": "Easter Saturday",
      "2029-04-01": "Easter Sunday",
      "2029-06-11": "King's Birthday (VIC)",
      "2029-09-28": "Friday before AFL Grand Final (VIC)",
      "2029-11-06": "Melbourne Cup Day (VIC)",
      "2030-03-11": "Labour Day (VIC)",
      "2030-04-20": "Easter Saturday",
      "2030-04-21": "Easter Sunday",
      "2030-06-10": "King's Birthday (VIC)",
      "2030-09-27": "Friday before AFL Grand Final (VIC)",
      "2030-11-05": "Melbourne Cup Day (VIC)"
    },
    WA: {
      "2026-03-02": "Labour Day (WA)",
      "2026-04-05": "Easter Sunday",
      "2026-04-25": "Anzac Day",
      "2026-04-27": "Anzac Day (Observed WA)",
      "2026-06-01": "Western Australia Day",
      "2026-09-28": "King's Birthday (WA)",
      "2027-03-01": "Labour Day (WA)",
      "2027-03-28": "Easter Sunday",
      "2027-04-25": "Anzac Day",
      "2027-04-26": "Anzac Day (Observed WA)",
      "2027-06-07": "Western Australia Day",
      "2027-09-27": "King's Birthday (WA)",
      "2028-03-06": "Labour Day (WA)",
      "2028-04-16": "Easter Sunday",
      "2028-06-05": "Western Australia Day",
      "2028-09-25": "King's Birthday (WA)",
      "2029-03-05": "Labour Day (WA)",
      "2029-04-01": "Easter Sunday",
      "2029-06-04": "Western Australia Day",
      "2029-09-24": "King's Birthday (WA)",
      "2030-03-04": "Labour Day (WA)",
      "2030-04-21": "Easter Sunday",
      "2030-06-03": "Western Australia Day",
      "2030-09-30": "King's Birthday (WA)"
    },
    SA: {
      "2026-03-09": "Adelaide Cup Day (SA)",
      "2026-04-04": "Easter Saturday",
      "2026-04-25": "Anzac Day",
      "2026-06-08": "King's Birthday (SA)",
      "2026-10-05": "Labour Day (SA)",
      "2027-03-08": "Adelaide Cup Day (SA)",
      "2027-03-27": "Easter Saturday",
      "2027-04-26": "Anzac Day (Observed SA)",
      "2027-06-14": "King's Birthday (SA)",
      "2027-10-04": "Labour Day (SA)",
      "2028-03-13": "Adelaide Cup Day (SA)",
      "2028-04-15": "Easter Saturday",
      "2028-06-12": "King's Birthday (SA)",
      "2028-10-02": "Labour Day (SA)",
      "2029-03-12": "Adelaide Cup Day (SA)",
      "2029-03-31": "Easter Saturday",
      "2029-06-11": "King's Birthday (SA)",
      "2029-10-01": "Labour Day (SA)",
      "2030-03-11": "Adelaide Cup Day (SA)",
      "2030-04-20": "Easter Saturday",
      "2030-06-10": "King's Birthday (SA)",
      "2030-10-07": "Labour Day (SA)"
    },
    TAS: {
      "2026-03-09": "Eight Hours Day (TAS)",
      "2026-04-07": "Easter Tuesday (TAS Public Service)",
      "2026-04-25": "Anzac Day",
      "2026-06-08": "King's Birthday (TAS)",
      "2027-03-08": "Eight Hours Day (TAS)",
      "2027-03-30": "Easter Tuesday (TAS Public Service)",
      "2027-04-25": "Anzac Day",
      "2027-06-14": "King's Birthday (TAS)",
      "2028-03-13": "Eight Hours Day (TAS)",
      "2028-04-18": "Easter Tuesday (TAS Public Service)",
      "2028-06-12": "King's Birthday (TAS)",
      "2029-03-12": "Eight Hours Day (TAS)",
      "2029-04-03": "Easter Tuesday (TAS Public Service)",
      "2029-06-11": "King's Birthday (TAS)",
      "2030-03-11": "Eight Hours Day (TAS)",
      "2030-04-23": "Easter Tuesday (TAS Public Service)",
      "2030-06-10": "King's Birthday (TAS)"
    },
    ACT: {
      "2026-03-09": "Canberra Day (ACT)",
      "2026-04-04": "Easter Saturday",
      "2026-04-05": "Easter Sunday",
      "2026-04-25": "Anzac Day",
      "2026-04-27": "Anzac Day (Observed ACT)",
      "2026-06-01": "Reconciliation Day (ACT)",
      "2026-06-08": "King's Birthday (ACT)",
      "2026-10-05": "Labour Day (ACT)",
      "2027-03-08": "Canberra Day (ACT)",
      "2027-03-27": "Easter Saturday",
      "2027-03-28": "Easter Sunday",
      "2027-04-25": "Anzac Day",
      "2027-04-26": "Anzac Day (Observed ACT)",
      "2027-05-31": "Reconciliation Day (ACT)",
      "2027-06-14": "King's Birthday (ACT)",
      "2027-10-04": "Labour Day (ACT)",
      "2028-03-13": "Canberra Day (ACT)",
      "2028-04-15": "Easter Saturday",
      "2028-04-16": "Easter Sunday",
      "2028-05-29": "Reconciliation Day (ACT)",
      "2028-06-12": "King's Birthday (ACT)",
      "2028-10-02": "Labour Day (ACT)",
      "2029-03-12": "Canberra Day (ACT)",
      "2029-03-31": "Easter Saturday",
      "2029-04-01": "Easter Sunday",
      "2029-05-28": "Reconciliation Day (ACT)",
      "2029-06-11": "King's Birthday (ACT)",
      "2029-10-01": "Labour Day (ACT)",
      "2030-03-11": "Canberra Day (ACT)",
      "2030-04-20": "Easter Saturday",
      "2030-04-21": "Easter Sunday",
      "2030-05-27": "Reconciliation Day (ACT)",
      "2030-06-10": "King's Birthday (ACT)",
      "2030-10-07": "Labour Day (ACT)"
    },
    NT: {
      "2026-04-04": "Easter Saturday",
      "2026-04-25": "Anzac Day",
      "2026-05-04": "May Day (NT)",
      "2026-06-08": "King's Birthday (NT)",
      "2026-08-03": "Picnic Day (NT)",
      "2027-03-27": "Easter Saturday",
      "2027-04-26": "Anzac Day (Observed NT)",
      "2027-05-03": "May Day (NT)",
      "2027-06-14": "King's Birthday (NT)",
      "2027-08-02": "Picnic Day (NT)",
      "2028-04-15": "Easter Saturday",
      "2028-05-01": "May Day (NT)",
      "2028-06-12": "King's Birthday (NT)",
      "2028-08-07": "Picnic Day (NT)",
      "2029-03-31": "Easter Saturday",
      "2029-05-07": "May Day (NT)",
      "2029-06-11": "King's Birthday (NT)",
      "2029-08-06": "Picnic Day (NT)",
      "2030-04-20": "Easter Saturday",
      "2030-05-06": "May Day (NT)",
      "2030-06-10": "King's Birthday (NT)",
      "2030-08-05": "Picnic Day (NT)"
    }
  };

  var VALID_STATES = ["QLD", "NSW", "VIC", "WA", "SA", "TAS", "ACT", "NT"];

  function pad2(n) {
    return n < 10 ? "0" + n : String(n);
  }

  function easterSundayIso(year) {
    var a = year % 19;
    var b = Math.floor(year / 100);
    var c = year % 100;
    var d = Math.floor(b / 4);
    var e = b % 4;
    var f = Math.floor((b + 8) / 25);
    var g = Math.floor((b - f + 1) / 3);
    var h = (19 * a + b - d - g + 15) % 30;
    var i = Math.floor(c / 4);
    var k = c % 4;
    var l = (32 + 2 * e + 2 * i - h - k) % 7;
    var m = Math.floor((a + 11 * h + 22 * l) / 451);
    var month = Math.floor((h + l - 7 * m + 114) / 31);
    var day = ((h + l - 7 * m + 114) % 31) + 1;
    return year + "-" + pad2(month) + "-" + pad2(day);
  }

  function parseIsoLocal(isoStr) {
    if (!isoStr || typeof isoStr !== "string") return null;
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoStr.trim());
    if (!m) return null;
    var y = parseInt(m[1], 10);
    var mo = parseInt(m[2], 10) - 1;
    var dy = parseInt(m[3], 10);
    var d = new Date(y, mo, dy, 12, 0, 0, 0);
    if (d.getFullYear() !== y || d.getMonth() !== mo || d.getDate() !== dy) return null;
    return d;
  }

  function formatIsoLocal(d) {
    if (!d || isNaN(d.getTime())) return "-";
    return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
  }

  function addCalendarDays(d, days) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + days, 12, 0, 0, 0);
  }

  function todayBrisbaneIso() {
    try {
      var parts = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Australia/Brisbane",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }).formatToParts(new Date());
      var map = {};
      for (var i = 0; i < parts.length; i++) map[parts[i].type] = parts[i].value;
      if (map.year && map.month && map.day) return map.year + "-" + map.month + "-" + map.day;
    } catch (_) {}
    return formatIsoLocal(new Date());
  }

  function getDynamicFallbackHoliday(isoStr) {
    var d = parseIsoLocal(isoStr);
    if (!d) return null;
    var y = d.getFullYear();
    if (y <= 2030) return null;
    var md = isoStr.slice(5);
    if (md === "01-01") return "New Year's Day";
    if (md === "01-26") return "Australia Day";
    if (md === "04-25") return "Anzac Day";
    if (md === "12-25") return "Christmas Day";
    if (md === "12-26") return "Boxing Day";
    var es = parseIsoLocal(easterSundayIso(y));
    if (es) {
      if (formatIsoLocal(addCalendarDays(es, -2)) === isoStr) return "Good Friday";
      if (formatIsoLocal(addCalendarDays(es, 1)) === isoStr) return "Easter Monday";
    }
    return null;
  }

  function normalizeStateCode(stateCode) {
    var st = (stateCode || "QLD").toUpperCase().trim();
    return VALID_STATES.indexOf(st) !== -1 ? st : "QLD";
  }

  function getHolidayName(isoStr, stateCode) {
    var st = normalizeStateCode(stateCode);
    if (NATIONAL_HOLIDAYS[isoStr]) return NATIONAL_HOLIDAYS[isoStr];
    if (STATE_HOLIDAYS[st] && STATE_HOLIDAYS[st][isoStr]) return STATE_HOLIDAYS[st][isoStr];
    return getDynamicFallbackHoliday(isoStr);
  }

  function isBusinessDay(d, stateCode) {
    var dow = d.getDay();
    if (dow === 0 || dow === 6) return false;
    return !getHolidayName(formatIsoLocal(d), stateCode);
  }

  function addYearsMonthsClamped(isoStr, years, months, extraDays) {
    var start = parseIsoLocal(isoStr);
    if (!start) return null;
    var targetYear = start.getFullYear() + (years || 0);
    var rawMonth = start.getMonth() + (months || 0);
    targetYear += Math.floor(rawMonth / 12);
    var targetMonth = ((rawMonth % 12) + 12) % 12;
    var maxDay = new Date(targetYear, targetMonth + 1, 0, 12, 0, 0, 0).getDate();
    var clampedDay = Math.min(start.getDate(), maxDay);
    var base = new Date(targetYear, targetMonth, clampedDay, 12, 0, 0, 0);
    if (extraDays) base = addCalendarDays(base, extraDays);
    return base;
  }

  function rollForwardBusinessDay(rawDateObj, stateCode) {
    var st = normalizeStateCode(stateCode);
    var finalDate = new Date(rawDateObj.getTime());
    var reasons = [];
    var guard = 0;
    while (!isBusinessDay(finalDate, st) && guard < 14) {
      var iso = formatIsoLocal(finalDate);
      var hName = getHolidayName(iso, st);
      var dow = finalDate.getDay();
      if (hName) reasons.push(hName);
      else if (dow === 6) reasons.push("Saturday");
      else if (dow === 0) reasons.push("Sunday");
      finalDate = addCalendarDays(finalDate, 1);
      guard += 1;
    }
    return {
      rawDate: formatIsoLocal(rawDateObj),
      statutoryDate: formatIsoLocal(finalDate),
      finalDateObj: finalDate,
      rolledReason: reasons.length > 0 ? reasons.join(" / ") : null,
      state: st
    };
  }

  function computeSafePriorBusinessIso(statutoryIso, daysBefore, stateCode, startFloorIso) {
    var stat = parseIsoLocal(statutoryIso);
    if (!stat) return "-";
    var st = normalizeStateCode(stateCode);
    var floorObj = startFloorIso ? parseIsoLocal(startFloorIso) : null;
    var safe = addCalendarDays(stat, -(daysBefore || 30));
    var guard = 0;
    while ((!floorObj || safe > floorObj) && !isBusinessDay(safe, st) && guard < 15) {
      safe = addCalendarDays(safe, -1);
      guard += 1;
    }
    return formatIsoLocal(safe);
  }

  function diffDaysBetweenIso(fromIso, toIso) {
    var a = parseIsoLocal(fromIso);
    var b = parseIsoLocal(toIso);
    if (!a || !b) return 0;
    return Math.round((b.getTime() - a.getTime()) / 86400000);
  }

  var ParkCoDates = {
    NATIONAL_HOLIDAYS: NATIONAL_HOLIDAYS,
    STATE_HOLIDAYS: STATE_HOLIDAYS,
    VALID_STATES: VALID_STATES,
    easterSundayIso: easterSundayIso,
    getDynamicFallbackHoliday: getDynamicFallbackHoliday,
    normalizeStateCode: normalizeStateCode,
    parseIsoLocal: parseIsoLocal,
    formatIsoLocal: formatIsoLocal,
    todayBrisbaneIso: todayBrisbaneIso,
    getHolidayName: getHolidayName,
    isBusinessDay: isBusinessDay,
    addCalendarDays: addCalendarDays,
    addYearsMonthsClamped: addYearsMonthsClamped,
    rollForwardBusinessDay: rollForwardBusinessDay,
    computeSafePriorBusinessIso: computeSafePriorBusinessIso,
    diffDaysBetweenIso: diffDaysBetweenIso,
    diffDaysFromTodayBrisbane: function (targetIso) {
      return diffDaysBetweenIso(todayBrisbaneIso(), targetIso);
    }
  };
  root.ParkCoDates = ParkCoDates;

  /* ==========================================================================
     2. PUBLISHED FCFCOA PRECEDENT DATASET (s 114Q(2) Approved Pseudonyms)
     ========================================================================== */
  var currentLang = "ko";
  var DEFAULT_KRW_PER_AUD = 900;
  var TITLE_KO = "호주 가족법 · 한·호 재산분할 판례 매칭 · 양육권 내비게이터 | 법무법인 박앤코 (Park & Co Lawyers)";
  var TITLE_EN = "Australian Family Law, Property Precedent Matcher & Parenting Navigator | Park & Co Lawyers";

  var liveFeeMetrics = {
    divorceFee: "$1,170 (Reduced $390)",
    consentOrdersFee: "$215",
    initiatingFee: "$455 / $740"
  };

  var toolActive = {
    m1: false,
    m2: false,
    m3: false,
    m4: false
  };

  var FCFCOA_PRECEDENT_CASES = [
    {
      id: "han-2026",
      citation: "Han & Han [2026] FedCFamC1A 54",
      shortCite: "Han & Han [2026]",
      date: "2026-03-26",
      court: "FCFCOA Div 1 (Appellate)",
      durationBand: "short",
      highPct: 75,
      lowPct: 25,
      splitTag_ko: "75 : 25 (비연금)",
      splitTag_en: "75 : 25 (Non-Super)",
      durationText_ko: "단기 혼인 (약 3.8년: 2018 초 ~ 2021.12)",
      durationText_en: "Short Marriage (~3.8 yrs: early 2018 – Dec 2021)",
      poolAud: "$7,401,418 (비연금 자산 + 합산 Super)",
      poolAud_en: "$7,401,418 (Non-super + Combined Super)",
      factors: ["initial_capital"],
      contribSplit: "75% (남편) : 25% (아내) (비연금 자산) / Super 34.6% (아내)",
      contribSplit_en: "75% (Husband) : 25% (Wife) (Non-Super) / 34.6% Super to Wife",
      adjSplit: "+0.73% (s 79(5) 미세 조정)",
      adjSplit_en: "+0.73% minor s 79(5) adjustment",
      finalSplit: "75% : 25% (비연금) / 65.4% : 34.6% (Super)",
      finalSplit_en: "75% : 25% (Non-Super) / 65.4% : 34.6% (Super)",
      summary_ko: "4년 미만의 단기 혼인에서 남편이 혼인 전 마련한 초기 자산 기여도를 높게 평가해 비연금 자산 기여도를 75:25로 산정하고 합산 슈퍼애뉴에이션은 아내에게 34.6%를 인정한 항소부 판결입니다(at [9], [96]-[98]).",
      summary_en: "In a short marriage under 4 years with a $7.40M combined pool, the Court assessed non-super contributions at 75% (Husband) / 25% (Wife) due to overwhelming initial capital, plus 34.6% of combined superannuation to the Wife (at [9], [96]-[98]).",
      url: "https://www.fcfcoa.gov.au/fl/fp/overview"
    },
    {
      id: "escamilla-2026",
      citation: "Escamilla & Astrauskas [2026] FedCFamC1A 145",
      shortCite: "Escamilla & Astrauskas [2026]",
      date: "2026-08-26",
      court: "FCFCOA Div 1 (Appellate)",
      durationBand: "short",
      highPct: 52,
      lowPct: 48,
      splitTag_ko: "52 : 48",
      splitTag_en: "52 : 48",
      durationText_ko: "단기 동거·혼인 (약 4년: 2018 동거 ~ 2022 별거)",
      durationText_en: "Short Relationship (~4 yrs: 2018 cohabitation – 2022 separation)",
      poolAud: "$2,553,297 (총자산 $3.50M + 법률비용 Add-back $166k - 부채 $1.11M)",
      poolAud_en: "$2,553,297 ($3.50M gross + $166k legal fee add-back - $1.11M debt)",
      factors: ["initial_capital", "overseas_disclosure"],
      contribSplit: "단기 혼인 자산·부채 및 선지급 법률비용($166,678) Add-back 종합 산정",
      contribSplit_en: "Holistic assessment incl. $166,678 paid legal fees add-back",
      adjSplit: "일방의 심리 직후 부동산 매입 미공개(Non-disclosure)에 따른 증거 재개 반영",
      adjSplit_en: "Evidence reopened due to post-hearing property purchase non-disclosure",
      finalSplit: "52% (남편) : 48% (아내)",
      finalSplit_en: "52% (Husband) : 48% (Wife)",
      summary_ko: "4년 단기 관계(공동 자녀 없음)에서 양측이 각각 60:40과 65:35를 주장했으나 재판부는 선지급 변호사 비용($166,678)을 자산 풀에 다시 반영(Add-back)하고 미공개 부동산 취득 증거를 재개 심리해 최종 52:48 분할을 확정했습니다(at [172], [192]).",
      summary_en: "In a 4-year relationship ($2.55M net pool including $166,678 in pre-paid legal fee add-backs and reopened evidence due to non-disclosure of a property purchase), final orders divided the net pool 52% / 48% (at [172], [192]).",
      url: "https://www.legislation.gov.au/C2004A00275/latest/text"
    },
    {
      id: "driesen-2026",
      citation: "Driesen & Klerk [2026] FedCFamC1A 74",
      shortCite: "Driesen & Klerk [2026]",
      date: "2026-05-01",
      court: "FCFCOA Div 1 (Appellate)",
      durationBand: "medium",
      highPct: 62,
      lowPct: 38,
      splitTag_ko: "60~64 : 36~40 (초기자산 우위)",
      splitTag_en: "60–64 : 36–40 (initial capital)",
      durationText_ko: "중기 혼인 (약 11.5년: 2009 ~ 2020 말 한집 별거)",
      durationText_en: "Medium Marriage (~11.5 yrs: 2009 – late 2020 under one roof)",
      poolAud: "다수 부동산(Suburb D & Suburb M) 및 사업체 포함 중대형 풀",
      poolAud_en: "Multi-property (Suburb D & Suburb M) and business asset pool",
      factors: ["initial_capital"],
      contribSplit: "초기 부동산($436k 매입·개인상해 보상금·가족 자금 투입) 종합 반영 (60%~64% 쟁점)",
      contribSplit_en: "Initial property ($436k + PI payout + family funds) weighed holistically (60–64% range)",
      adjSplit: "s 79(5) 추가 조정 없음",
      adjSplit_en: "Nil further s 79(5) adjustment",
      finalSplit: "초기 부동산 투입 배우자 우위 인정 (항소부 재량 재행사)",
      finalSplit_en: "Substantial weighting in favour of initial property contributor (Full Court re-exercise)",
      summary_ko: "약 11.5년 혼인 사건에서 일방이 혼인 전 개인상해 보상금과 가족 자금으로 매입한 부동산의 초기 기여 가치를 원심이 낮게 본 잘못을 바로잡고 전체 기간의 기여를 단순 가감이 아닌 종합 평가(Dickons 원칙)로 다시 산정한 판결입니다(at [41], [60]).",
      summary_en: "Over an ~11.5-year relationship, the Full Court overturned the trial judge's valuation error regarding an initial property funded by personal injury compensation and family funds, reaffirming holistic s 79(4) assessment (at [41], [60]).",
      url: "https://www.fcfcoa.gov.au/fl/fp/overview"
    },
    {
      id: "fuller-park-2026",
      citation: "Fuller & Park [2026] FedCFamC2F 808",
      shortCite: "Fuller & Park [2026]",
      date: "2026-06-04",
      court: "FCFCOA Div 2",
      durationBand: "medium",
      highPct: 60,
      lowPct: 40,
      splitTag_ko: "60 : 40 (기여도 기준 + 양육 조정)",
      splitTag_en: "60 : 40 (contributions + care adjustment)",
      durationText_ko: "중기 관계 (s 90SM 사실혼 재산분할 · 2022.7 최종 별거)",
      durationText_en: "Medium Relationship (s 90SM Property Adjustment · sep. July 2022)",
      poolAud: "주거용 부동산(Suburb G) 및 합산 Superannuation 단일 풀",
      poolAud_en: "Single global pool (Suburb G real property + combined Superannuation)",
      factors: ["initial_capital", "children_carer"],
      contribSplit: "60% (아버지) : 40% (어머니) · 높은 재정 기여 반영",
      contribSplit_en: "60% (Father) : 40% (Mother) · superior initial financial contribution",
      adjSplit: "미성년 자녀 양육 및 장래요소에 따른 어머니 측 상향 조정 반영",
      adjSplit_en: "Future needs adjustment in favour of Mother for primary care of child",
      finalSplit: "기여도 60:40 판정 후 양육·장래요소 조정 및 Super Split 병행",
      finalSplit_en: "60:40 contributions adjusted for parenting care + superannuation split",
      summary_ko: "연금과 비연금 자산을 단일 풀(Global Approach)로 묶어 아버지의 재정 기여도를 60:40으로 평가하되 미성년 자녀 양육 부담을 장래 조정 요소로 반영한 2026년 6월 판결입니다(at [53], [120]-[124]).",
      summary_en: "Applying a global single-pool approach (super + non-super), the Court assessed holistic contributions at 60% / 40% in favour of the financially superior contributor, balanced by parenting/future needs adjustments (at [53], [120]-[124]).",
      url: "https://www.fcfcoa.gov.au/fl/fp/overview"
    },
    {
      id: "kimmel-2026",
      citation: "Kimmel & Kimmel [2026] FedCFamC1A 136",
      shortCite: "Kimmel & Kimmel [2026]",
      date: "2026-08-04",
      court: "FCFCOA Div 1 (Appellate)",
      durationBand: "long",
      highPct: 65,
      lowPct: 35,
      splitTag_ko: "65 : 35",
      splitTag_en: "65 : 35",
      durationText_ko: "장기 관계 (약 13년: 2010 교제 · 2013 혼인 ~ 2023 한집 별거)",
      durationText_en: "Long Relationship (~13 yrs: 2010–2023 under one roof)",
      poolAud: "$758,708+ (가용 현금·자산 풀 · 남편의 재산 불성실 공개 쟁점)",
      poolAud_en: "$758,708+ known pool (material non-disclosure by Husband)",
      factors: ["overseas_disclosure", "children_carer"],
      contribSplit: "50% : 50% (혼인 기간 기여도 균등 인정)",
      contribSplit_en: "50% : 50% (Equal contributions over 13-year relationship)",
      adjSplit: "+15% 아내 측 가산 (s 79(5) 장래요소 및 남편의 재산 불성실 공개 반영, at [487])",
      adjSplit_en: "+15% uplift to Wife (s 79(5) future needs & Husband non-disclosure, at [487])",
      finalSplit: "65% (아내) : 35% (남편)",
      finalSplit_en: "65% (Wife) : 35% (Husband)",
      summary_ko: "13년 관계에서 기본 기여도는 50:50 균등으로 보았으나 남편의 불성실한 재산 공개(Inadequate Financial Disclosure)와 아내의 장래 사정(s 79(5))을 근거로 아내에게 +15%p를 더해 최종 65:35 분할을 확정했습니다(at [410], [487]).",
      summary_en: "In a 13-year relationship, contributions were assessed equally (50/50), but the Husband's inadequate financial disclosure and s 79(5) future circumstances justified a +15% adjustment to the Wife, resulting in a 65% / 35% final split (at [410], [487]).",
      url: "https://www.legislation.gov.au/C2004A00275/latest/text"
    },
    {
      id: "naisby-2026",
      citation: "Naisby [2026] FedCFamC1A 164",
      shortCite: "Naisby [2026]",
      date: "2026-09-15",
      court: "FCFCOA Div 1 (Appellate)",
      durationBand: "long",
      highPct: 67,
      lowPct: 33,
      splitTag_ko: "67 : 33",
      splitTag_en: "67 : 33",
      durationText_ko: "장기 혼인 (약 24.5년: 1990.12 ~ 2015.4 별거 · 자녀 5명)",
      durationText_en: "Long Marriage (~24.5 yrs: Dec 1990 – Apr 2015, 5 children)",
      poolAud: "$3,314,903.50 (사업 매각대금·무담보 주택·TPD 보험금 포함)",
      poolAud_en: "$3,314,903.50 (Business sale proceeds, unencumbered home & TPD payout)",
      factors: ["children_carer", "initial_capital"],
      contribSplit: "52% (아내) : 48% (남편) (at [156])",
      contribSplit_en: "52% (Wife) : 48% (Husband) (at [156])",
      adjSplit: "+15% 아내 측 가산 (s 75(2) 장래요소 · 미성년 자녀 주양육, at [169])",
      adjSplit_en: "+15% uplift to Wife (s 75(2) future needs & care of children, at [169])",
      finalSplit: "67% (아내) : 33% (남편) (at [11], [170])",
      finalSplit_en: "67% (Wife) : 33% (Husband) (at [11], [170])",
      summary_ko: "자녀 5명을 둔 24년 장기 혼인(순자산 $3.31M)에서 원심은 기여도를 52:48(아내 우위)로 본 뒤 장래요소(s 75(2))로 +15%를 더해 67:33을 명했습니다. 항소부는 남편의 TPD 장애보험금 기여와 15% 조정폭의 적정성에 관해 제한적 항고 허가를 내렸습니다.",
      summary_en: "In a 24.5-year marriage with 5 children ($3.31M pool), the trial judge assessed contributions at 52/48 to the Wife plus a +15% s 75(2) adjustment for final orders of 67% / 33% (leave to appeal granted on weight given to Husband's TPD payout).",
      url: "https://www.fcfcoa.gov.au/fl/fp/overview"
    },
    {
      id: "franc-2026",
      citation: "Franc & Franc [2026] FedCFamC1A 159",
      shortCite: "Franc & Franc [2026]",
      date: "2026-09-10",
      court: "FCFCOA Div 1 (Appellate)",
      durationBand: "long",
      highPct: 52,
      lowPct: 48,
      splitTag_ko: "52 : 48",
      splitTag_en: "52 : 48",
      durationText_ko: "장기 관계 (약 22년: 2000 동거 · 2003 혼인 ~ 2022.8 별거)",
      durationText_en: "Long Relationship (~22 yrs: 2000–2022, High-Net-Worth Pool)",
      poolAud: "$23,065,026 ~ $40,054,859 ($37M 부동산 및 기업그룹 지분 포함)",
      poolAud_en: "$23.06M – $40.05M (incl. $37M property & corporate group interests)",
      factors: ["initial_capital", "family_violence", "separate_finances"],
      contribSplit: "62% (남편) : 38% (아내) · 대규모 기업그룹·차입금 상환 재정 기여",
      contribSplit_en: "62% (Husband) : 38% (Wife) · corporate group & debt service contributions",
      adjSplit: "+10% 아내 측 가산 (s 79(5) 현재 및 장래 사정 종합 조정, at [434])",
      adjSplit_en: "+10% uplift to Wife (s 79(5) current and future circumstances, at [434])",
      finalSplit: "52% (남편) : 48% (아내)",
      finalSplit_en: "52% (Husband) : 48% (Wife)",
      summary_ko: "명의상 아내가 99% 지분을 보유한 $37M 부동산이라도 남편의 초기 자산과 기업그룹 수익으로 매입·상환된 점을 반영해 기여도를 62:38(남편 우위)로 보되 장래요소(s 79(5))로 아내에게 +10%를 더해 최종 52:48로 조율한 고액 자산 판례입니다.",
      summary_en: "Despite the Wife holding 99% legal title to a $37M property, the Court assessed global contributions at 62% (Husband) / 38% (Wife) due to his corporate funding, then applied a +10% s 79(5) adjustment to the Wife for a 52% / 48% final division.",
      url: "https://www.legislation.gov.au/C2004A00275/latest/text"
    },
    {
      id: "harridan-2026",
      citation: "Harridan & Harridan [2026] FedCFamC1A 104",
      shortCite: "Harridan & Harridan [2026]",
      date: "2026-06-10",
      court: "FCFCOA Div 1 (Appellate)",
      durationBand: "long",
      highPct: 56,
      lowPct: 44,
      splitTag_ko: "56 : 44",
      splitTag_en: "56 : 44",
      durationText_ko: "장기 혼인 (22년+: 1998 동거 · 1999 혼인 · 처가 6년 무상거주)",
      durationText_en: "Long Marriage (22+ yrs: 1998 cohabitation, 6 yrs rent-free with Wife's parents)",
      poolAud: "$6,641,254 (at [94])",
      poolAud_en: "$6,641,254 (at [94])",
      factors: ["initial_capital", "children_carer"],
      contribSplit: "60% (아내) : 40% (남편) (처가 6년 무상거주 지원·산재보상금·주양육)",
      contribSplit_en: "60% (Wife) : 40% (Husband) (6 yrs rent-free parental housing + WC payout + care)",
      adjSplit: "-4% 남편 측 조정 (s 79(5))",
      adjSplit_en: "-4% s 79(5) adjustment in favour of Husband",
      finalSplit: "56% (아내) : 44% (남편) (항소부: 항목별 합산 금지 원칙 확인)",
      finalSplit_en: "56% (Wife) : 44% (Husband) (Holistic synthesis reaffirmed)",
      summary_ko: "순자산 $6.64M 사건에서 아내가 처가 6년 무상거주 지원·산재보상금·자녀 주양육을 바탕으로 기여도 60:40과 최종 56:44를 인정받았습니다. 항소부는 기여도를 시기별·항목별로 쪼개 점수를 매기지 말고 전체 기간을 하나로 묶어 평가해야 한다고 확인했습니다.",
      summary_en: "In a $6.64M pool where the couple lived rent-free with the Wife's parents for 6 years, the trial judge ordered a 56% / 44% split (60/40 contributions less 4% s 79(5)); Full Court emphasised holistic non-compartmentalised evaluation.",
      url: "https://www.fcfcoa.gov.au/fl/fp/overview"
    },
    {
      id: "daalman-2026",
      citation: "Daalman & Daalman (No 2) [2026] FedCFamC2F 830",
      shortCite: "Daalman & Daalman [2026]",
      date: "2026-07-01",
      court: "FCFCOA Div 2",
      durationBand: "long",
      highPct: 55.5,
      lowPct: 44.5,
      splitTag_ko: "55.5 : 44.5",
      splitTag_en: "55.5 : 44.5",
      durationText_ko: "초장기 혼인 (약 30년: 1991 ~ 2021 별거 · 성인 자녀 1명)",
      durationText_en: "30-Year Long Marriage (1991 – 2021, post-separation stroke)",
      poolAud: "주거용 부동산(Suburb B) 및 Superannuation 별도 풀",
      poolAud_en: "Suburb B real property + separate Superannuation pool",
      factors: ["initial_capital", "children_carer"],
      contribSplit: "30년 혼인 초기 유입 부동산의 유지 가치를 전체 기여와 통합 평가",
      contribSplit_en: "Initial property introduction weighed across 30-year marriage",
      adjSplit: "별거 후 남편의 뇌졸중(2022.11) 등 건강·장래 의료/생계 요소(s 79(5)) 반영",
      adjSplit_en: "Husband post-separation stroke (Nov 2022) & health needs (s 79(5))",
      finalSplit: "55.5% (남편) : 44.5% (아내) (비연금 부동산 자산)",
      finalSplit_en: "55.5% (Husband) : 44.5% (Wife) (Non-super property)",
      summary_ko: "30년 장기 혼인에서 양측 모두 70:30을 주장했으나 법원은 초기 유입 부동산 가치와 별거 후 발생한 남편의 뇌졸중(건강 악화)을 함께 참작해 비연금 부동산 자산을 55.5% : 44.5%로 나누도록 명했습니다.",
      summary_en: "Following a 30-year marriage where both parties claimed 70/30, the Court weighed initial property introduction and the Husband's post-separation stroke to order a 55.5% / 44.5% division of non-superannuation property.",
      url: "https://www.fcfcoa.gov.au/fl/fp/overview"
    },
    {
      id: "vacek-novosel-2026",
      citation: "Vacek & Novosel (No 5) [2026] FedCFamC2F 261",
      shortCite: "Vacek & Novosel [2026]",
      date: "2026-03-11",
      court: "FCFCOA Div 2",
      durationBand: "medium",
      highPct: 67.5,
      lowPct: 32.5,
      splitTag_ko: "주양육 모친 우위 (67.5% 청구)",
      splitTag_en: "Dominant Mother share (67.5% claim)",
      durationText_ko: "중장기 관계 (별거 후 가정폭력 및 다수 부동산 매각·세금 격리)",
      durationText_en: "Family Violence Impact on Contributions & Post-Separation Care",
      poolAud: "복수 부동산(Suburb G, H St, M St) 및 양도세 격리금($310,000) 포함",
      poolAud_en: "Multiple properties (Suburb G, H St, M St) + $310k CGT reserve",
      factors: ["family_violence", "children_carer"],
      contribSplit: "남편의 별거 후 가정폭력이 어머니의 양육·재산보전 부담을 크게 가중한 점 반영",
      contribSplit_en: "Post-separation family violence rendered Mother's care/contributions significantly more arduous",
      adjSplit: "자녀 양육 및 장래요소 가산 (아내 측 67.5% 청구 vs 남편 측 55:45/70:30 공방)",
      adjSplit_en: "Substantial parenting & future needs adjustment in Mother's favour",
      finalSplit: "가정폭력 피해 양육 모친 우위 분할 및 핵심 부동산 단독 귀속 명령",
      finalSplit_en: "Dominant division & sole property transfer in favour of primary-carer Mother",
      summary_ko: "남편의 가정폭력(특히 별거 이후 이어진 폭력)이 아내의 자녀 양육과 재산 보전 부담을 훨씬 무겁게 만들었다는 기준(Kennon 및 2025년 개정 s 79(4)(ca))을 적용해 어머니 측에 유리한 재산분할을 명한 판결입니다.",
      summary_en: "Held that the Father's post-separation family violence rendered the Mother's parenting and homemaker contributions significantly more arduous, warranting a substantial contribution weighting in the Mother's favour.",
      url: "https://www.fcfcoa.gov.au/fl/fv/overview"
    },
    {
      id: "barda-zerri-2026",
      citation: "Barda & Zerri [2026] FedCFamC2F 122",
      shortCite: "Barda & Zerri [2026]",
      date: "2026-02-04",
      court: "FCFCOA Div 2",
      durationBand: "medium",
      highPct: null,
      lowPct: null,
      splitTag_ko: "단독 명의·별도 통장 전액 풀 편입 (s 79(2))",
      splitTag_en: "Separate accounts included in pool (s 79(2))",
      durationText_ko: "혼인·동거 중 각자 통장·단독 명의 관리 사건",
      durationText_en: "Separate Bank Accounts & Individual Asset Ownership (s 79(2))",
      poolAud: "각자 명의 계좌 및 단독 명의 자산 통합 대상 여부 쟁점",
      poolAud_en: "Separate bank accounts & individually titled properties",
      factors: ["separate_finances"],
      contribSplit: "각자 통장 관리(Separate Finances)만으로는 s 79(2) 재산분할 배제 불가",
      contribSplit_en: "Separate finances during relationship do not exclude s 79(2) adjustment",
      adjSplit: "Stanford v Stanford (2012) 247 CLR 108 기준 공정·형평성 인정",
      adjSplit_en: "Just and equitable threshold satisfied under Stanford v Stanford",
      finalSplit: "단독 명의·별도 계좌 자산 전체를 재산분할 대상 풀로 편입 명령",
      finalSplit_en: "All individually titled assets and accounts included in divisible pool",
      summary_ko: "'혼인 기간 내내 통장을 따로 쓰고 내 돈으로 내 명의 집을 샀으니 나눌 필요가 없다'는 주장을 받아들이지 않고 혼인 파탄 시 별도 계좌와 단독 명의 자산도 모두 재산분할 대상(s 79(2))이 된다고 확인한 2026년 판결입니다(at [20]).",
      summary_en: "Confirmed that operating separate bank accounts and holding assets in individual names during the relationship does NOT bar a just and equitable property settlement order under s 79(2) / s 90SM(3) (at [20]).",
      url: "https://www.legislation.gov.au/C2004A00275/latest/text"
    },
    {
      id: "tomaras-worldwide",
      citation: "Tomaras & Tomaras [2021] FedCFamC1A 82 (with s 71B 2025 Reform)",
      shortCite: "Tomaras & Tomaras [2021]",
      date: "2021-12-13",
      court: "FCFCOA Div 1 (Appellate)",
      durationBand: "long",
      highPct: null,
      lowPct: null,
      splitTag_ko: "해외 은닉 상계·호주 자산 우위 배분 (s 71B)",
      splitTag_en: "Dominant local share offsetting overseas pool (s 71B)",
      durationText_ko: "한·호 국제 자산 (한국 부동산·예금·연금 보유 및 은닉 쟁점)",
      durationText_en: "Worldwide Asset Pool & Overseas Property Non-Disclosure (s 71B)",
      poolAud: "호주 내 자산 + 한국 등 해외 부동산·금융자산 전 세계 합산 풀",
      poolAud_en: "Australian assets + overseas (South Korea) real estate & bank accounts",
      factors: ["overseas_disclosure"],
      contribSplit: "해외(한국) 소재 부동산·예금도 호주 법원의 대인관할(in personam) 아래 100% 합산",
      contribSplit_en: "Overseas (Korean) property & accounts 100% included via in personam jurisdiction",
      adjSplit: "해외 재산 은닉·불성실 공개 시 공개 거부 배우자에게 불리한 추정(Adverse Inference) 적용",
      adjSplit_en: "Adverse inference & s 79(5) uplift against party failing to disclose overseas assets",
      finalSplit: "은닉된 해외 자산 가치를 감안해 호주 내 남아있는 부동산 대부분을 상대 배우자에게 배분 가능",
      finalSplit_en: "Innocent spouse awarded dominant share of local Australian assets to offset undisclosed overseas pool",
      summary_ko: "한국에 있는 아파트·전세보증금·예금·연금도 호주 가족법원 재산분할 풀에 모두 포함됩니다(2025.6.10 발효 s 71B 법정 공개 의무). 해외 자산을 숨기거나 친족에게 빼돌리면 법원이 호주 내 자산을 상대 배우자에게 대폭 배분하는 방식으로 불이익을 줍니다.",
      summary_en: "Established that overseas real estate, bank accounts, and pensions (e.g. in South Korea) form part of the global asset pool under s 71B; non-disclosure triggers adverse inferences awarding a dominant share of Australian assets to the innocent spouse.",
      url: "https://www.legislation.gov.au/C2004A00275/latest/text"
    }
  ];

  /* ==========================================================================
     3. HUMAN-READABLE ENUM LABELS (P0-3: Zero Raw Enum Tokens)
     ========================================================================== */
  var REL_LABELS = {
    married: { ko: "법률혼 부부 (s 79)", en: "Married Couple (s 79)" },
    defacto: { ko: "사실혼 커플 (De Facto · s 90SM)", en: "De Facto Couple (s 90SM)" }
  };

  var STAGE_LABELS = {
    "820_granted": {
      ko: "임시 파트너 비자(820 또는 입국 후 309) 승인 상태 (801/100 영주권 대기 중)",
      en: "Subclass 820 / onshore 309 granted (awaiting 801/100 PR)"
    },
    "820_pending_bva": {
      ko: "호주 내 파트너 비자(820/801) 접수 후 브리징 비자(BVA) 체류 중",
      en: "Onshore 820/801 pending on Bridging Visa A (BVA)"
    },
    "300_after_marriage": {
      ko: "약혼자 비자(Subclass 300) 입국·혼인 후 820/801 전환 단계",
      en: "Subclass 300 holder onshore after marriage to sponsor"
    },
    "300_pre_entry_or_unmarried": {
      ko: "약혼자 비자(Subclass 300) 호주 입국 전 또는 혼인 전 결별",
      en: "Subclass 300 offshore pre-entry or separated prior to marriage"
    },
    "secondary_482_186": {
      ko: "고용주·기술이민 동반 배우자 (482 / 491 / 494 / 186 Secondary Applicant)",
      en: "Secondary spouse on 482 / 491 / 494 / 186 visa"
    }
  };

  var EXC_LABELS = {
    fv_judicial_or_nonjudicial: {
      ko: "가정폭력·정서적·경제적 통제 피해 (Division 1.5)",
      en: "Family violence / coercive control exception (Division 1.5)"
    },
    shared_child: {
      ko: "공동 자녀 양육권·면접교섭권 보유 특례",
      en: "Shared child parenting / access order exception"
    },
    no_fv_no_child: {
      ko: "가정폭력·자녀 특례 해당 없음",
      en: "No family violence or shared child exception"
    }
  };

  /* ==========================================================================
     4. BILINGUAL UI TRANSLATIONS (>= 40 data-i18n keys, 0 C-11 commas)
     ========================================================================== */
  var KO_TRANSLATIONS = {
    brandTag: "호주 가족법 내비게이터",
    navM1: "별거·제소기한",
    navM2: "재산분할 판례",
    navM3: "양육권·출국금지",
    navM4: "비자·별거 교차",
    navM5Hub: "41문항 실무 백과",
    ecoFamFaqLink: "가족법 FAQ",
    ecoFaqLink: "이민 FAQ",
    topSvcConsult: "공식 문의 허브",
    heroTitle: "호주 가족법 · 한·호 재산분할 판례 매칭 & 양육권 내비게이터",
    heroLead: "별거 12개월·재산분할 법원 제소기한(s 44(3), s 44(5)–(6))과 연방순회·가족법원(FCFCOA) 공개 판결 비율·양육권·비자 별거 영향을 즉시 점검합니다.",
    btnSampleAll: "예시 데이터 불러오기",
    btnResetAll: "초기화",
    m1Title: "1. 이혼 12개월 별거 & 재산분할 법원 제소기한 계산기",
    m1Desc: "재산분할은 별거 직후 바로 시작할 수 있으나 법원 재산분할 청구는 이혼 확정 후 12개월(법률혼 s 44(3)) 또는 별거 후 2년(사실혼 s 44(5) · 주말·공휴일 도래 시 s 36(2) 익영업일 연장 및 합의 동의·법원 허가 예외) 안에 신청해야 합니다.",
    m1FormHeading: "관할 주 · 관계 유형 · 별거일 · 이혼 확정일 입력",
    lblFamState: "거주·관할 주/준주 (s 36(2) 공휴일 연장 및 서호주 관할 판정)",
    optStateQLD: "퀸즐랜드 (QLD · 브리즈번 / 골드코스트)",
    optStateNSW: "뉴사우스웨일스 (NSW · 시드니 / 파라마타)",
    optStateVIC: "빅토리아 (VIC · 멜버른)",
    optStateWA: "서호주 (WA · 퍼스 · Family Court of WA 관할)",
    optStateSA: "남호주 (SA · 애들레이드)",
    optStateTAS: "태즈메이니아 (TAS · 호바트)",
    optStateACT: "호주수도특별구 (ACT · 캔버라)",
    optStateNT: "북부준주 (NT · 다윈)",
    lblRelType: "혼인 / 사실혼(De Facto) 구분",
    optRelMarried: "법률혼 부부 (s 79 재산분할 · 이혼 확정 후 12개월 기한)",
    optRelDefacto: "사실혼 커플 (s 90SM / WA Part 5A · 별거 후 2년 기한)",
    lblSepDate: "최종 별거 시작일 (Date of Final Separation)",
    lblOneRoof: "한집 별거 (Separation Under One Roof, s 49(2)) 포함 여부",
    optRoofNo: "별도 거주로 완전 분리 별거",
    optRoofYes: "같은 집에서 한집 별거 중 (독립 제3자 진술서 필수)",
    lblDivorceDate: "이혼 명령 확정일 (이미 이혼이 확정된 법률혼인 경우만 입력)",
    m1ResultHeading: "이혼 신청 가능일 & 재산분할 법원 제소기한 판정",
    m2Title: "2. 한·호 전 세계 자산 풀(s 79 · s 71B 공개 의무) & 법원 재산분할 판례 매칭",
    m2Desc: "호주·한국 자산·부채를 실시간 환율로 합산해 s 71B 1페이지 재산공개 명세서를 생성하고 연방순회·가족법원(FCFCOA) 공개 판결 비율을 비교합니다.",
    ethicsBannerBody: "<strong>법률·윤리 고지 (ASCR r 36.1 & FLA s 114Q(2)):</strong> 호주 가족법 재산분할은 정해진 수학 공식이 아니라 재판부의 종합 재량 판단(<code>Stanford (2012)</code>)에 따릅니다. 이 도구는 특정 비율을 보장하지 않으며 법원 승인 가명(<code>s 114Q(2)</code>)으로 공개된 실제 선고 판례만 비교 참고용으로 제시합니다.",
    ethicsCheckboxLabel: "위 고지사항(재산분할은 법원의 재량 판단이며 아래는 실제 선고된 유사 판례 샘플임)을 확인합니다.",
    m2FormHeading: "한·호 자산·부채 내역 · 환율 및 사건 조건 선택",
    lblAusNet: "호주 내 비연금 자산 (부동산·예금·사업체·차량, AUD $)",
    lblAusDebt: "호주 내 부채 공제액 (주택담보대출·개인대출·세금 미납액, 선택 입력 AUD $)",
    lblAusSuper: "호주 부부 합산 슈퍼애뉴에이션 (Combined Superannuation, AUD $)",
    lblKorKrw: "한국 내 자산 합계 (부동산·전세보증금·예금·퇴직연금, 만원 단위)",
    lblKorDebtKrw: "한국 내 부채 공제액 (주담대·전세반환채무·신용대출, 선택 만원 단위)",
    lblKrwRate: "적용 환율 (1 AUD당 원화 KRW ₩ · 실시간 수정 가능)",
    lblMatchDuration: "동거 및 혼인 합산 기간",
    optDurAll: "전체 기간 판례 보기",
    optDurShort: "단기 혼인·동거 (5년 미만 · 초기 자금 기여도 비중이 큰 구간)",
    optDurMed: "중기 혼인·동거 (5년 ~ 12년 · 초기 기여와 양육·가사 기여 절충 구간)",
    optDurLong: "장기 혼인·동거 (12년 이상 · 기여도 통합 평가 + s 79(5) 장래요소 구간)",
    lblMatchFactor: "핵심 쟁점 요인 선택",
    optFacAll: "전체 대표 판례 매칭",
    optFacInitial: "일방의 초기 부동산·자금 투입 / 부모 자금 지원",
    optFacChildren: "미성년 자녀 주양육 & 장래 소득능력 격차 (s 75(2) / s 79(5))",
    optFacFv: "가정폭력 · 경제적 통제 · 별거 후 폭력 (s 79(4)(ca) & Kennon)",
    optFacDisclosure: "한국 등 해외 자산 보유 · 재산 은닉/불성실 공개 (s 71B & Add-backs)",
    optFacSeparate: "각자 통장 관리 · 단독 명의 자산 보유 (s 79(2))",
    m2ResultHeading: "한·호 통합 자산 풀(s 79 · s 71B 공개 의무) & 매칭된 실제 FCFCOA 판결 분포",
    matchedCasesHeading: "선택한 조건과 매칭된 연방순회·가족법원(FCFCOA) 공개 판결문 샘플",
    m3Title: "3. 양육권(아동 안전 최우선 s 60CC) & 자녀 귀국 · 워치리스트 진단",
    m3Desc: "2024년 공동친권 추정 폐지 이후의 양육권 기준과 상대 부모 동의 없는 자녀 출국 금지(s 65Y · 공항 워치리스트) 절차를 진단합니다.",
    m3FormHeading: "양육 환경 · 가정폭력 · 국외이주 계획 선택",
    lblParSafety: "1. 가정폭력 · 아동 학대 · 강압적 통제 이력 유무 (s 60CC(2)(a) 최우선 요소)",
    optSelectPrompt: "-- 양육 안전 상황 선택 --",
    optParFvYes: "가정폭력·보호명령(DVO)·정서/경제적 통제 이력 있음",
    optParFvNo: "안전 위협 없음 (부모 간 합의로 양육 계획서 / Consent Orders 가능)",
    lblParReloc: "2. 자녀 동반 한국 영구 귀국 또는 해외 출국 쟁점",
    optSelectRelocPrompt: "-- 거주·출국 계획 선택 --",
    optRelocKorea: "자녀를 데리고 한국으로 귀국·이주 희망 (상대 부모 반대 중)",
    optRelocPrevent: "상대 부모의 무단 해외 출국 우려 (공항 워치리스트 등록 필요)",
    optRelocDom: "호주 내 동일 생활권 거주 유지",
    m3ResultHeading: "개정 Part VII 양육권 & 국외이주 대응 로드맵",
    m4Title: "4. 비자 보유 단계별 별거 · 이혼 시 체류 및 영주권 생존 진단",
    m4Desc: "파트너 비자(820/309), 약혼자 비자(300), 고용주·기술이민 동반 배우자(482/491/494/186)는 별거 시 적용 법리가 전혀 다릅니다.",
    m4FormHeading: "현재 소지 비자 단계 & 별거 사유 선택",
    lblPvStage: "현재 보유·진행 중인 비자 유형",
    optPvPrompt: "-- 현재 비자 단계 선택 --",
    optPv820Granted: "임시 파트너 비자(820 또는 호주 입국 후 309) 승인 상태 → 801/100 대기 중 별거",
    optPv820Pending: "호주 내 파트너 비자(820/801) 접수 후 브리징 비자(BVA) 상태에서 별거",
    optPv300Married: "약혼자 비자(300) 호주 입국·혼인 후 820/801 전환 단계에서 별거",
    optPv300Pre: "약혼자 비자(300) 호주 입국 전 파혼 또는 입국 후 혼인 전 결별",
    optPvSecondary: "482 / 491 / 494 / 186 동반 배우자(Secondary Applicant) 상태에서 별거",
    lblPvException: "파트너 비자 단독 영주권 특례(Div 1.5 / 자녀 양육) 해당 여부",
    optPvFv: "스폰서로부터 가정폭력·정서적·경제적 통제 피해 발생 (Div 1.5)",
    optPvChild: "스폰서와의 공동 자녀에 대한 양육권·면접교섭권 보유",
    optPvNone: "가정폭력 및 공동 자녀 없음 (독자 비자 전환 및 s 48 검토)",
    m4ResultHeading: "비자 유형별 영주권 · 체류 생존 전략",
    ctaHeading: "법무법인 박앤코 호주 가족법 · 이민법 교차 상담 브리프",
    ctaSub: "공식 이메일 <code>enquiry@parkcolawyers.com</code> 또는 통합 문의 허브로 전달하실 수 있습니다.",
    btnSendEmail: "브리프 복사 & 공식 상담 신청",
    btnCopyBrief: "브리프 복사",
    btnPrint: "진단서 인쇄",
    accProcessSummary: "재산분할 4단계 법정 심리 구조 (s 79 · s 71B) 및 핵심 기준 요약",
    svgFamS1Title: "한·호 전 세계 자산 풀 확정",
    svgFamS1Sub: "호주+한국 부동산·연금·부채 공개",
    svgFamS2Title: "기여도 종합 평가 (%)",
    svgFamS2Sub: "재정·비재정·가사양육·가정폭력(2025)",
    svgFamS3Title: "현재·장래 사정 조정 (±%)",
    svgFamS3Sub: "미성년 자녀 양육·건강·소득격차·은닉",
    svgFamS4Title: "공정·형평성 최종 판결 (%)",
    svgFamS4Sub: "Consent Orders 또는 법원 판결",
    statLabelSep: "이혼 최소 별거기간",
    statValSep: "12개월",
    statSubSep: "Family Law Act s 48",
    statLabelLim: "재산분할 법원 제소기한",
    statValLim: "12개월 / 2년",
    statSubLim: "이혼 후 12개월 · 사실혼 2년 (s 44)",
    statLabelWorld: "한·호 전 세계 자산",
    statValWorld: "의무 공개",
    statSubWorld: "s 71B (한국 부동산·연금 포함)",
    statLabelCourtFee: "FCFCOA 법원 수수료",
    statValCourtFee: "$215 / $1,170",
    statSubCourtFee: "합의명령 $215 · 이혼 신청 $1,170",
    accTeamSummary: "전담 변호사 안내 및 유관 비자·법률 도구 바로가기",
    specName: "박창민 대표변호사 (Chang Min Park)",
    specRole1: "Legal Practitioner Director · Acc. Spec. (Immi)",
    specName2: "이수진 변호사 (Gina Lee)",
    specRole2: "Solicitor · Family Law",
    specMeta: "법무법인 박앤코 (Park & Co Lawyers · Underwood QLD) · 이메일: <a href=\"mailto:enquiry@parkcolawyers.com\">enquiry@parkcolawyers.com</a> · 상담 허브: <a class=\"parkco-svc-link\" href=\"https://parklawyers.com.au/links/?lang=ko\" data-ko-href=\"https://parklawyers.com.au/links/?lang=ko\" data-en-href=\"https://parklawyers.com.au/links/?lang=en\" target=\"_blank\" rel=\"noopener\">parklawyers.com.au/links</a>",
    ecoCalloutTitle: "별거·이혼 후 독자 체류 비자 및 셀프 서식 안내",
    ecoCalloutDesc: "단독 영주권 특례가 적용되지 않거나 동반 비자 자격이 종료되는 경우 기술·고용주 스폰서 비자 전환 경로와 FCFCOA 합의명령 절차를 함께 점검할 수 있습니다.",
    ecoCalloutBtnDiagnose: "대체 비자 6단계 진단",
    ctaArtBtn: "행정재심기구(ART) 재심 검토",
    ecoDiyLink: "FCFCOA 합의명령·이혼 셀프 가이드",
    pollerTitle: "1차 가족법령 · 연방순회·가족법원(FCFCOA) 수수료 실시간 폴링 검증 (SHA-256)",
    pollerDesc: "호주 가족법 원문(<code>legislation.gov.au</code>)과 연방순회·가족법원(FCFCOA) 법정 접수 수수료 안내(<code>fcfcoa.gov.au</code>), 파트너 비자 가정폭력 특례 법령을 정기 폴링하여 SHA-256 해시와 최신 법정 수치를 검증합니다.",
    thPollerSource: "1차 출처 및 검증 대상",
    thPollerCitation: "근거 조문 · 엔드포인트",
    thPollerFigures: "실시간 추출 핵심 수치",
    thPollerHash: "SHA-256 해시 · 용량",
    thPollerStatus: "폴링 검증 상태",
    footerFirmName: "법무법인 박앤코 (PNC Legal Pty Ltd t/a Park & Co Lawyers)",
    footerNotice: "이 내비게이터는 호주 가족법(Family Law Act 1975)과 연방순회·가족법원(FCFCOA) 공개 판결문(s 114Q(2) 가명 승인본)을 바탕으로 일반 법률 정보를 안내하며 정식 수임 계약 전 개별 법률 자문을 대신하지 않습니다. 재산분할 합의(Consent Orders)나 양육권·비자 대응 전에 박창민 대표변호사(Legal Practitioner Director · Acc. Spec. Immi) 및 이수진 변호사(Gina Lee · <a href=\"mailto:enquiry@parkcolawyers.com\" style=\"color:#F4DC9C;font-weight:700;\">enquiry@parkcolawyers.com</a> · <a class=\"parkco-svc-link\" href=\"https://parklawyers.com.au/links/?lang=ko\" data-ko-href=\"https://parklawyers.com.au/links/?lang=ko\" data-en-href=\"https://parklawyers.com.au/links/?lang=en\" target=\"_blank\" rel=\"noopener\" style=\"color:#F4DC9C;font-weight:700;\">parklawyers.com.au/links</a>)와 상담하시기 바랍니다.",
    footerInquiryLabel: "공식 문의:",
    footerLinksHub: "공식 상담 신청 허브 (parklawyers.com.au/links)",
    footerHubLink: "← 박앤코 법률·비자 통합 허브",
    footerFamFaqLink: "호주 가족법 공식 실무 FAQ (faq.immispecialist.com/family) →",
    footerFaqLink: "호주이민 실무 FAQ (faq.immispecialist.com) →",
    famHubTitle: "5. 호주 가족법 · FCFCOA 41문항 실무 백과 (신청인 · 상대방 양방향 통합)",
    famHubDesc: "한집 별거(s 49(2))·재산분할 4단계(s 79 / Shinohara [2025] FedCFamC1A 126)·2025년 6월 발효 법정 재산공개 의무(s 71B / s 90RI)·양육권 안전 최우선 원칙(s 60CC)·파트너 비자 별거 교차 41개 실무 문답을 검색하고 공식 FAQ 전문으로 바로 연결할 수 있습니다.",
    famHubCatAll: "전체 카테고리 (41문항)",
    famHubCatDivorce: "이혼 · 별거 · 사실혼",
    famHubCatProperty: "재산분할 · 배우자 부양",
    famHubCatParenting: "양육권 · 양육비 · 국외이주",
    famHubCatSafety: "가정폭력 · 긴급 보호명령",
    famHubCatVisa: "가족법 · 파트너비자 교차"
  };

  var EN_TRANSLATIONS = {
    brandTag: "Australian Family Law Navigator",
    navM1: "Separation & Limits",
    navM2: "Property Precedents",
    navM3: "Parenting & Watchlist",
    navM4: "Visa & Separation",
    navM5Hub: "41-Q Knowledge Hub",
    ecoFamFaqLink: "Family FAQ",
    ecoFaqLink: "Immigration FAQ",
    topSvcConsult: "Official Inquiry Hub",
    heroTitle: "Australian Family Law, Property Precedent Matcher & Parenting Navigator",
    heroLead: "Check 12-month separation and property limitation dates, published FCFCOA property division precedents, parenting rules, and visa breakdown options.",
    btnSampleAll: "Load Sample Data",
    btnResetAll: "Reset",
    m1Title: "1. 12-Month Separation & Property Limitation Calculator",
    m1Desc: "Property settlement can begin immediately upon separation, subject to strict deadlines: 12 months after divorce (s 44(3)) or 2 years after de facto separation (s 44(5), extended to next business day under s 36(2)).",
    m1FormHeading: "State/Territory, Relationship Type, Separation & Divorce Date",
    lblFamState: "State / Territory Registry (s 36(2) Public Holiday Rollover & WA Jurisdiction)",
    optStateQLD: "Queensland (QLD · Brisbane / Gold Coast)",
    optStateNSW: "New South Wales (NSW · Sydney / Parramatta)",
    optStateVIC: "Victoria (VIC · Melbourne)",
    optStateWA: "Western Australia (WA · Perth · Family Court of WA)",
    optStateSA: "South Australia (SA · Adelaide)",
    optStateTAS: "Tasmania (TAS · Hobart)",
    optStateACT: "Australian Capital Territory (ACT · Canberra)",
    optStateNT: "Northern Territory (NT · Darwin)",
    lblRelType: "Relationship Type (Married vs De Facto)",
    optRelMarried: "Married Couple (s 79 Property Division · 12-month post-divorce limit)",
    optRelDefacto: "De Facto Couple (s 90SM / WA Part 5A · 2-year post-separation limit)",
    lblSepDate: "Date of Final Separation",
    lblOneRoof: "Separation Under One Roof (s 49(2)) Involved?",
    optRoofNo: "Physical separation in separate residences",
    optRoofYes: "Separated under one roof (Independent third-party affidavit mandatory)",
    lblDivorceDate: "Divorce Order Effective Date (Optional · only if already divorced)",
    m1ResultHeading: "Divorce Eligibility Date & Dual Statutory Limitation Deadlines",
    m2Title: "2. AUS+KOR Asset Pool (s 71B) & FCFCOA Property Precedent Matcher",
    m2Desc: "Convert South Korean and Australian assets/liabilities at a live KRW/AUD rate, generate a 1-page s 71B disclosure summary, and review published FCFCOA division splits.",
    ethicsBannerBody: "<strong>Legal & Ethical Notice (ASCR r 36.1 & FLA s 114Q(2)):</strong> Australian property division is a holistic discretionary synthesis (<code>Stanford (2012)</code>), not a fixed formula. This tool does not predict or guarantee a specific split; it displays anonymized published Court judgments (<code>s 114Q(2)</code>) for reference only.",
    ethicsCheckboxLabel: "I acknowledge that property division is discretionary and the cases below are published precedent samples only.",
    m2FormHeading: "Enter AUS/KOR Assets, Liabilities, KRW Rate & Precedent Filters",
    lblAusNet: "Australian Non-Super Assets (Property, Cash, Business, Vehicles, AUD $)",
    lblAusDebt: "Australian Liabilities to Deduct (Mortgages, Loans, Tax Debt, Optional AUD $)",
    lblAusSuper: "Combined Australian Superannuation Pool (AUD $)",
    lblKorKrw: "South Korean Assets (Real Estate, Jeonse, Savings, Pension, in 10,000 KRW units)",
    lblKorDebtKrw: "South Korean Liabilities to Deduct (Mortgages, Jeonse Return, Loans, Optional 10,000 KRW)",
    lblKrwRate: "KRW / AUD Exchange Rate (KRW ₩ per 1 AUD · Editable in real time)",
    lblMatchDuration: "Relationship Duration Band",
    optDurAll: "All Relationship Durations",
    optDurShort: "Short Relationship (<5 years · Initial capital heavily weighted)",
    optDurMed: "Medium Relationship (5–12 years · Initial capital & parenting balanced)",
    optDurLong: "Long Relationship (12+ years · Holistic contributions + s 79(5) future needs)",
    lblMatchFactor: "Key Factual Factor in Precedents",
    optFacAll: "All Published Precedent Factors",
    optFacInitial: "Significant Initial Property / Capital / Parental Funds",
    optFacChildren: "Primary Care of Minor Children & Earning Capacity Gap (s 75(2) / s 79(5))",
    optFacFv: "Family Violence · Economic / Coercive Control (s 79(4)(ca) & Kennon)",
    optFacDisclosure: "Overseas Assets · Non-Disclosure (s 71B) · Legal Fee Add-backs",
    optFacSeparate: "Separate Bank Accounts & Individual Asset Ownership (s 79(2))",
    m2ResultHeading: "Worldwide Asset Pool (s 71B) & Matched FCFCOA Precedent Spectrum",
    matchedCasesHeading: "Published FCFCOA Property Settlement Judgments Matching Your Selection",
    m3Title: "3. Parenting (s 60CC Safety Paramount) & Child Relocation / Watchlist",
    m3Desc: "Review post-2024 parenting reforms (repeal of equal shared responsibility presumption) and unilateral removal / AFP Airport Watchlist rules (s 65Y).",
    m3FormHeading: "Select Safety & International Relocation Scenario",
    lblParSafety: "1. History of Family Violence, Abuse or Coercive Control (s 60CC(2)(a))",
    optSelectPrompt: "-- Select Safety Scenario --",
    optParFvYes: "History of family violence, DVO, or coercive control present",
    optParFvNo: "No safety risk (Suitable for Parenting Plan or Consent Orders)",
    lblParReloc: "2. International Child Relocation (South Korea) or Travel Watchlist",
    optSelectRelocPrompt: "-- Select Relocation / Travel Scenario --",
    optRelocKorea: "Seeking to relocate with child(ren) to South Korea (Other parent opposes)",
    optRelocPrevent: "Risk of unilateral overseas removal by other parent (AFP Watchlist required)",
    optRelocDom: "Remaining within same local area in Australia",
    m3ResultHeading: "Part VII Parenting & Relocation Legal Roadmap",
    m4Title: "4. Visa Status & Relationship Breakdown Survival Assessment",
    m4Desc: "Partner visas (820/309), Prospective Marriage (300), and secondary work/skilled visas (482/491/494/186) follow completely different legal rules upon separation.",
    m4FormHeading: "Select Current Visa Stage & Breakdown Ground",
    lblPvStage: "Current Visa Held or Pending",
    optPvPrompt: "-- Select Current Visa Stage --",
    optPv820Granted: "Subclass 820 (or onshore 309) granted → Separated before 801/100 PR",
    optPv820Pending: "Onshore 820/801 lodged (Bridging Visa A) → Separated before 820 decision",
    optPv300Married: "Prospective Marriage (300) onshore after marriage → Separated in 820/801 stage",
    optPv300Pre: "Prospective Marriage (300) offshore pre-entry or separated before marriage",
    optPvSecondary: "Secondary spouse on 482 / 491 / 494 / 186 visa → Separated from primary holder",
    lblPvException: "Partner Visa Solo PR Exception Ground (Div 1.5 / Shared Child)",
    optPvFv: "Experienced family violence / emotional or financial control (Div 1.5)",
    optPvChild: "Parenting order or shared responsibility for child of the relationship",
    optPvNone: "Neither family violence nor child exception (Assess independent visa & s 48)",
    m4ResultHeading: "Visa-Specific PR & Lawful Stay Strategy",
    ctaHeading: "Park & Co Lawyers · Family Law & Migration Crossover Consultation Brief",
    ctaSub: "Send via official email <code>enquiry@parkcolawyers.com</code> or our official inquiry hub.",
    btnSendEmail: "Copy Brief & Open Inquiry Hub",
    btnCopyBrief: "Copy Brief",
    btnPrint: "Print Summary",
    accProcessSummary: "4-Step Statutory Property Settlement Framework (s 79 · s 71B) & Key Metrics",
    svgFamS1Title: "Identify Global Asset Pool",
    svgFamS1Sub: "AUS + KOR Property, Super & Debts",
    svgFamS2Title: "Holistic Contributions (%)",
    svgFamS2Sub: "Financial, Homemaker & FV (2025)",
    svgFamS3Title: "Current & Future Needs (±%)",
    svgFamS3Sub: "Care of Children, Health & Disclosure",
    svgFamS4Title: "Just & Equitable Final Order (%)",
    svgFamS4Sub: "Consent Orders or Court Judgment",
    statLabelSep: "Separation for Divorce",
    statValSep: "12 Months",
    statSubSep: "Family Law Act s 48",
    statLabelLim: "Property Time Limit",
    statValLim: "12m / 2 Years",
    statSubLim: "12m Post-Divorce · 2y De Facto (s 44)",
    statLabelWorld: "Worldwide Asset Pool",
    statValWorld: "Mandatory",
    statSubWorld: "s 71B (Incl. Korean Property & Super)",
    statLabelCourtFee: "FCFCOA Filing Fees",
    statValCourtFee: "$215 / $1,170",
    statSubCourtFee: "Consent Orders $215 · Divorce $1,170",
    accTeamSummary: "Practice Leadership & Related Visa / DIY Legal Guides",
    specName: "Chang Min Park (Legal Practitioner Director)",
    specRole1: "Legal Practitioner Director · Acc. Spec. (Immi)",
    specName2: "Gina Lee (Solicitor)",
    specRole2: "Solicitor · Family Law",
    specMeta: "Park & Co Lawyers (Underwood QLD) · Email: <a href=\"mailto:enquiry@parkcolawyers.com\">enquiry@parkcolawyers.com</a> · Hub: <a class=\"parkco-svc-link\" href=\"https://parklawyers.com.au/links/?lang=en\" data-ko-href=\"https://parklawyers.com.au/links/?lang=ko\" data-en-href=\"https://parklawyers.com.au/links/?lang=en\" target=\"_blank\" rel=\"noopener\">parklawyers.com.au/links</a>",
    ecoCalloutTitle: "Independent Visa Pathways & FCFCOA DIY Guides After Separation",
    ecoCalloutDesc: "Where Partner Visa solo PR exceptions do not apply or a secondary visa is ending, review independent skilled/employer pathways and FCFCOA Consent Order forms.",
    ecoCalloutBtnDiagnose: "6-Step Alternative Visa Diagnosis",
    ctaArtBtn: "Administrative Review Tribunal (ART) Review",
    ecoDiyLink: "FCFCOA Consent Orders & Divorce DIY Guide",
    pollerTitle: "Live Primary-Source Family Law & FCFCOA Filing Fee Telemetry (SHA-256)",
    pollerDesc: "Automated polling of the Family Law Act 1975 (<code>legislation.gov.au</code>), FCFCOA court filing fees (<code>fcfcoa.gov.au</code>), and Migration Regulations family violence rules with SHA-256 verification.",
    thPollerSource: "Primary Source & Target",
    thPollerCitation: "Statutory Provision / Endpoint",
    thPollerFigures: "Live Extracted Figures",
    thPollerHash: "SHA-256 Hash · Size",
    thPollerStatus: "Verification Status",
    footerFirmName: "PNC Legal Pty Ltd t/a Park & Co Lawyers",
    footerNotice: "This navigator provides general legal information based on the Family Law Act 1975 (Cth) and published FCFCOA judgments (approved under s 114Q(2) pseudonyms) and does not constitute formal legal advice prior to a signed retainer. Contact Legal Practitioner Director Chang Min Park (Acc. Spec. Immi) & Gina Lee (Solicitor · <a href=\"mailto:enquiry@parkcolawyers.com\" style=\"color:#F4DC9C;font-weight:700;\">enquiry@parkcolawyers.com</a> · <a class=\"parkco-svc-link\" href=\"https://parklawyers.com.au/links/?lang=en\" data-ko-href=\"https://parklawyers.com.au/links/?lang=ko\" data-en-href=\"https://parklawyers.com.au/links/?lang=en\" target=\"_blank\" rel=\"noopener\" style=\"color:#F4DC9C;font-weight:700;\">parklawyers.com.au/links</a>) before signing any property agreement or relocating with children.",
    footerInquiryLabel: "Official Email:",
    footerLinksHub: "Official Consultation Hub (parklawyers.com.au/links)",
    footerHubLink: "← Park & Co Legal & Visa Hub",
    footerFamFaqLink: "Australian Family Law Official FAQ (faq.immispecialist.com/family) →",
    footerFaqLink: "Australian Immigration FAQ (faq.immispecialist.com) →",
    famHubTitle: "5. Australian Family Law & FCFCOA 41-Question Knowledge Hub (Applicant & Respondent Views)",
    famHubDesc: "Search 41 primary-source Q&As covering Separation Under One Roof (s 49(2)), 4-Step Property Division (s 79 / Shinohara [2025] FedCFamC1A 126), Statutory Financial Disclosure (s 71B / s 90RI effective 10 June 2025), Safety-First Parenting (s 60CC), and Partner Visa Breakdown.",
    famHubCatAll: "All Categories (41 Q&As)",
    famHubCatDivorce: "Divorce, Separation & De Facto",
    famHubCatProperty: "Property Settlement & Spousal Maintenance",
    famHubCatParenting: "Parenting, Child Support & Relocation",
    famHubCatSafety: "Family Violence & Urgent Injunctions",
    famHubCatVisa: "Family Law & Partner Visa Crossover"
  };

  /* ==========================================================================
     5. PURE CALCULATION & DYNAMIC MATCHING ENGINE (Testable in Node VM)
     ========================================================================== */
  function buildWaDefactoAlertHtml(lang) {
    if (lang === "en") {
      return (
        '<div class="wa-jurisdiction-alert" data-wa-defacto-notice="true">' +
          '<strong>Western Australia De Facto Jurisdiction Notice (Family Court of WA · Part VIIIC):</strong><br/>' +
          '• <strong>Separate State Court Jurisdiction:</strong> Western Australia did not refer de facto financial matters to the Commonwealth. Proceedings are governed by the <strong>Family Court of Western Australia (<code>Family Court Act 1997 (WA)</code>, Part 5A · s 205ZB 2-year limitation)</strong> rather than FCFCOA (<code>s 90SM</code>).<br/>' +
          '• <strong>WA De Facto Superannuation Splitting (Part VIIIC):</strong> Historically WA de facto couples faced strict superannuation splitting bars. Following the <code>Family Law Amendment (Western Australia De Facto Superannuation Splitting and Other Measures) Act 2020 (Cth)</code>, superannuation splitting is governed by <strong><code>Part VIIIC</code> of the <code>Family Law Act 1975 (Cth)</code></strong> and requires dedicated FCWA / Part VIIIC procedural forms (not standard FCFCOA Application for Consent Orders).' +
        '</div>'
      );
    }
    return (
      '<div class="wa-jurisdiction-alert" data-wa-defacto-notice="true">' +
        '<strong>서호주(WA) 사실혼(De Facto) 특별 관할 주의 (Family Court of WA · Part VIIIC):</strong><br/>' +
        '• <strong>서호주 독자 법원 관할:</strong> 서호주(WA)는 사실혼 재산분할 입법 권한을 연방에 위임하지 않았으므로 연방순회·가족법원(FCFCOA · <code>s 90SM</code>)이 아닌 <strong>서호주 가족법원(Family Court of Western Australia · <code>Family Court Act 1997 (WA)</code> Part 5A · 제205ZB조 별거 후 2년 제척기간)</strong>이 전속 관할합니다.<br/>' +
        '• <strong>서호주 사실혼 슈퍼애뉴에이션 분할 (Part VIIIC):</strong> 과거 서호주 사실혼 커플은 퇴직연금(Superannuation) 분할이 제한되었으나 <code>Family Law Amendment (Western Australia De Facto Superannuation Splitting and Other Measures) Act 2020 (Cth)</code> 시행으로 연방 <code>Family Law Act 1975 (Cth)</code> <strong><code>Part VIIIC</code></strong>에 따라 연금 분할이 가능해졌습니다. 반드시 FCFCOA 일반 서식이 아닌 <strong>FCWA · Part VIIIC 전용 절차 서식</strong>을 사용해야 합니다.' +
      '</div>'
    );
  }

  function buildS71bDisclosureSummary(params, lang) {
    var p = params || {};
    var isEn = lang === "en";
    var stateCode = ParkCoDates.normalizeStateCode(p.stateCode || "QLD");
    var relType = p.relType === "defacto" ? "defacto" : "married";
    var isWaDefacto = stateCode === "WA" && relType === "defacto";
    var ausAssets = Math.max(0, Number(p.ausAssets) || 0);
    var ausDebt = Math.max(0, Number(p.ausDebt) || 0);
    var ausNet = Math.max(0, ausAssets - ausDebt);
    var ausSuper = Math.max(0, Number(p.ausSuper) || 0);
    var korAssetsManwon = Math.max(0, Number(p.korAssetsManwon) || 0);
    var korDebtManwon = Math.max(0, Number(p.korDebtManwon) || 0);
    var korNetManwon = Math.max(0, korAssetsManwon - korDebtManwon);
    var krwRate = Math.max(1, Number(p.krwRate) || DEFAULT_KRW_PER_AUD);

    var korAssetsKrw = Math.round(korAssetsManwon * 10000);
    var korDebtKrw = Math.round(korDebtManwon * 10000);
    var korNetKrw = Math.max(0, korAssetsKrw - korDebtKrw);
    var korAssetsAud = Math.round(korAssetsKrw / krwRate);
    var korDebtAud = Math.round(korDebtKrw / krwRate);
    var korNetAud = Math.round(korNetKrw / krwRate);

    var totalGrossAud = Math.round(ausAssets + ausSuper + korAssetsAud);
    var totalDebtAud = Math.round(ausDebt + korDebtAud);
    var totalPoolAud = Math.round(ausNet + ausSuper + korNetAud);
    var dateIso = p.dateIso || ParkCoDates.todayBrisbaneIso();

    if (isEn) {
      var linesEn = [
        "====================================================================",
        "1-PAGE KR–AU COMBINED FINANCIAL DISCLOSURE SUMMARY (FLA s 71B)",
        "Park & Co Lawyers · FCFCOA / Family Law Duty of Full & Frank Disclosure",
        "====================================================================",
        "• Date Prepared: " + dateIso + " | Registry / State: " + stateCode + " (" + REL_LABELS[relType].en + ")",
        "• Applied Exchange Rate: 1 AUD = ₩" + krwRate.toLocaleString("en-AU") + " KRW (User-editable real-time rate)",
        "--------------------------------------------------------------------",
        "[A] AUSTRALIAN ASSETS, SUPERANNUATION & LIABILITIES (AUD $)",
        "  1. Australian Non-Super Assets (Real Property, Bank, Business): $" + Math.round(ausAssets).toLocaleString("en-AU") + " AUD",
        "  2. Less Australian Liabilities (Mortgages, Loans, Tax):        -$" + Math.round(ausDebt).toLocaleString("en-AU") + " AUD",
        "  3. Australian Net Non-Super Pool:                               $" + Math.round(ausNet).toLocaleString("en-AU") + " AUD",
        "  4. Combined Australian Superannuation Pool:                     $" + Math.round(ausSuper).toLocaleString("en-AU") + " AUD",
        "--------------------------------------------------------------------",
        "[B] SOUTH KOREAN ASSETS & LIABILITIES (Mandatory Worldwide Pool · s 71B)",
        "  5. Korean Gross Assets (Real Estate, Jeonse, Deposits, Pension): ₩" + korAssetsKrw.toLocaleString("en-AU") + " (≈ $" + korAssetsAud.toLocaleString("en-AU") + " AUD)",
        "  6. Less Korean Liabilities (Mortgage, Jeonse Return, Loans):    -₩" + korDebtKrw.toLocaleString("en-AU") + " (≈ -$" + korDebtAud.toLocaleString("en-AU") + " AUD)",
        "  7. South Korean Net Asset Pool (Converted):                      ₩" + korNetKrw.toLocaleString("en-AU") + " (≈ $" + korNetAud.toLocaleString("en-AU") + " AUD)",
        "--------------------------------------------------------------------",
        "[C] COMBINED WORLDWIDE ASSET POOL SUMMARY (AUS + KOR)",
        "  • Combined Gross Assets + Super: $" + totalGrossAud.toLocaleString("en-AU") + " AUD",
        "  • Combined Total Liabilities:   -$" + totalDebtAud.toLocaleString("en-AU") + " AUD",
        "  • NET WORLDWIDE DIVISIBLE POOL:  $" + totalPoolAud.toLocaleString("en-AU") + " AUD"
      ];
      if (isWaDefacto) {
        linesEn.push("  • WA De Facto Note: Proceedings run in Family Court of WA (Family Court Act 1997 (WA) Part 5A; Super splitting under FLA Part VIIIC).");
      }
      linesEn.push(
        "--------------------------------------------------------------------",
        "Statutory Note: Under s 71B of the Family Law Act 1975 (Cth) (effective 10 June 2025) and FCFCOA (Family Law) Rules 2021, both parties owe a strict duty of full and frank disclosure of all direct/indirect worldwide property, Jeonse deposits, bank accounts, pensions, and liabilities.",
        "Official Consultation: Park & Co Lawyers | enquiry@parkcolawyers.com | https://parklawyers.com.au/links/?lang=en"
      );
      return linesEn.join("\n");
    }

    var linesKo = [
      "====================================================================",
      "[한·호 통합 자산·부채 1페이지 공개 명세서 (Family Law Act s 71B)]",
      "법무법인 박앤코 (Park & Co Lawyers) · 연방순회·가족법원(FCFCOA) 성실 공개 의무",
      "====================================================================",
      "• 작성 기준일: " + dateIso + " | 관할 주/준주: " + stateCode + " (" + REL_LABELS[relType].ko + ")",
      "• 적용 환율: 1 AUD = ₩" + krwRate.toLocaleString("en-AU") + " 원 (실시간 지정 환율)",
      "--------------------------------------------------------------------",
      "[A] 호주 내 자산 · 슈퍼애뉴에이션 · 부채 내역 (AUD $)",
      "  1. 호주 비연금 자산 (부동산·예금·사업체·차량): $" + Math.round(ausAssets).toLocaleString("en-AU") + " AUD",
      "  2. 호주 부채 공제 (주택담보대출·개인대출·세금): -$" + Math.round(ausDebt).toLocaleString("en-AU") + " AUD",
      "  3. 호주 비연금 순자산 소계:                     $" + Math.round(ausNet).toLocaleString("en-AU") + " AUD",
      "  4. 호주 부부 합산 슈퍼애뉴에이션 (Super):       $" + Math.round(ausSuper).toLocaleString("en-AU") + " AUD",
      "--------------------------------------------------------------------",
      "[B] 한국 내 자산 · 부채 내역 (s 71B 전 세계 의무 공개 대상)",
      "  5. 한국 총자산 (아파트·전세보증금·예금·연금):   ₩" + korAssetsKrw.toLocaleString("en-AU") + "원 (" + korAssetsManwon.toLocaleString("en-AU") + "만원 · 약 $" + korAssetsAud.toLocaleString("en-AU") + " AUD)",
      "  6. 한국 부채 공제 (주담대·전세반환·신용대출):  -₩" + korDebtKrw.toLocaleString("en-AU") + "원 (" + korDebtManwon.toLocaleString("en-AU") + "만원 · 약 -$" + korDebtAud.toLocaleString("en-AU") + " AUD)",
      "  7. 한국 순자산 소계 (호주달러 환산):            ₩" + korNetKrw.toLocaleString("en-AU") + "원 (약 $" + korNetAud.toLocaleString("en-AU") + " AUD)",
      "--------------------------------------------------------------------",
      "[C] 한·호 전 세계 통합 순자산 풀 합계 (Worldwide Divisible Pool)",
      "  • 한·호 총자산 + Super 합계: $" + totalGrossAud.toLocaleString("en-AU") + " AUD",
      "  • 한·호 총부채 공제 합계:   -$" + totalDebtAud.toLocaleString("en-AU") + " AUD",
      "  • 최종 통합 순자산 풀(Net):  $" + totalPoolAud.toLocaleString("en-AU") + " AUD"
    ];
    if (isWaDefacto) {
      linesKo.push("  • 서호주(WA) 사실혼 관할 고지: Family Court of WA (Family Court Act 1997 (WA) Part 5A) 및 연금 분할 FLA Part VIIIC 전용 서식 적용.");
    }
    linesKo.push(
      "--------------------------------------------------------------------",
      "법정 고지: 호주 가족법 제71B조(2025.6.10 시행) 및 연방순회·가족법원(FCFCOA) 규칙에 따라 호주와 한국에 보유한 모든 부동산·전세보증금·예금·퇴직연금·부채를 성실히 공개해야 합니다.",
      "공식 상담 문의: 법무법인 박앤코 | enquiry@parkcolawyers.com | https://parklawyers.com.au/links/?lang=ko"
    );
    return linesKo.join("\n");
  }

  var TOOL_DEEPLINK_MAP = {
    separation: { sectionId: "separation-deadlines", toolKey: "m1" },
    deadline: { sectionId: "separation-deadlines", toolKey: "m1" },
    property: { sectionId: "property-precedent-matcher", toolKey: "m2" },
    parenting: { sectionId: "parenting-relocation", toolKey: "m3" },
    safety: { sectionId: "partner-visa-crossover", toolKey: "m4", alsoActivate: "m3" },
    visa: { sectionId: "partner-visa-crossover", toolKey: "m4" }
  };

  function resolveToolDeepLink(rawTool) {
    if (!rawTool || typeof rawTool !== "string") return null;
    var key = rawTool.trim().toLowerCase();
    return TOOL_DEEPLINK_MAP[key] || null;
  }

  function evaluateSeparationDeadlinesPure(params) {
    var relType = params.relType === "defacto" ? "defacto" : "married";
    var stateCode = ParkCoDates.normalizeStateCode(params.stateCode || "QLD");
    var isWaDefacto = stateCode === "WA" && relType === "defacto";
    var sepStr = (params.sepStr || "").trim();
    var divStr = (params.divStr || "").trim();
    var oneRoof = !!params.oneRoof;
    var refToday = params.todayIso || ParkCoDates.todayBrisbaneIso();

    if (!sepStr && !divStr) {
      return {
        status: "neutral",
        relType: relType,
        stateCode: stateCode,
        isWaDefacto: isWaDefacto,
        relLabel: REL_LABELS[relType]
      };
    }

    if (sepStr && !ParkCoDates.parseIsoLocal(sepStr)) {
      return { status: "error", code: "invalid_sep_date", relType: relType, stateCode: stateCode, isWaDefacto: isWaDefacto };
    }
    if (divStr && !ParkCoDates.parseIsoLocal(divStr)) {
      return { status: "error", code: "invalid_div_date", relType: relType, stateCode: stateCode, isWaDefacto: isWaDefacto };
    }
    if (sepStr && divStr && divStr < sepStr) {
      return {
        status: "error",
        code: "divorce_before_separation",
        sepStr: sepStr,
        divStr: divStr,
        relType: relType,
        stateCode: stateCode,
        isWaDefacto: isWaDefacto
      };
    }

    var eligibleDivorceIso = null;
    if (relType === "married" && sepStr) {
      var eligObj = ParkCoDates.addYearsMonthsClamped(sepStr, 1, 0, 1);
      eligibleDivorceIso = ParkCoDates.formatIsoLocal(eligObj);
    }

    var rawPropDeadlineIso = null;
    var propDeadlineIso = null;
    var propSafeIso = null;
    var propSafe1dIso = null;
    var propRolledReason = null;
    var propDaysLeft = null;
    var limitationSection = relType === "married"
      ? "s 44(3)"
      : (isWaDefacto ? "s 205ZB(1) (FCA 1997 WA) / s 44(5)" : "s 44(5)");
    var leaveSection = relType === "married"
      ? "s 44(3)"
      : (isWaDefacto ? "s 205ZB(2) (FCA 1997 WA) / s 44(6)" : "s 44(6)");

    if (relType === "defacto" && sepStr) {
      var dfLimObj = ParkCoDates.addYearsMonthsClamped(sepStr, 2, 0, 0);
      var dfRoll = ParkCoDates.rollForwardBusinessDay(dfLimObj, stateCode);
      rawPropDeadlineIso = dfRoll.rawDate;
      propDeadlineIso = dfRoll.statutoryDate;
      propRolledReason = dfRoll.rolledReason;
      propSafeIso = ParkCoDates.computeSafePriorBusinessIso(propDeadlineIso, 30, stateCode, sepStr);
      propSafe1dIso = ParkCoDates.computeSafePriorBusinessIso(propDeadlineIso, 1, stateCode, sepStr);
      propDaysLeft = ParkCoDates.diffDaysBetweenIso(refToday, propDeadlineIso);
    } else if (relType === "married" && divStr) {
      var mLimObj = ParkCoDates.addYearsMonthsClamped(divStr, 1, 0, 0);
      var mRoll = ParkCoDates.rollForwardBusinessDay(mLimObj, stateCode);
      rawPropDeadlineIso = mRoll.rawDate;
      propDeadlineIso = mRoll.statutoryDate;
      propRolledReason = mRoll.rolledReason;
      propSafeIso = ParkCoDates.computeSafePriorBusinessIso(propDeadlineIso, 30, stateCode, divStr);
      propSafe1dIso = ParkCoDates.computeSafePriorBusinessIso(propDeadlineIso, 1, stateCode, divStr);
      propDaysLeft = ParkCoDates.diffDaysBetweenIso(refToday, propDeadlineIso);
    }

    return {
      status: "ok",
      relType: relType,
      stateCode: stateCode,
      isWaDefacto: isWaDefacto,
      relLabel: REL_LABELS[relType],
      sepStr: sepStr || null,
      divStr: divStr || null,
      oneRoof: oneRoof,
      eligibleDivorceIso: eligibleDivorceIso,
      rawPropDeadlineIso: rawPropDeadlineIso,
      propDeadlineIso: propDeadlineIso,
      propRolledReason: propRolledReason,
      propSafeIso: propSafeIso,
      propSafe1dIso: propSafe1dIso,
      safeDate: propSafe1dIso,
      propDaysLeft: propDaysLeft,
      isOverdue: typeof propDaysLeft === "number" && propDaysLeft < 0,
      overdueDays: typeof propDaysLeft === "number" && propDaysLeft < 0 ? Math.abs(propDaysLeft) : 0,
      limitationSection: limitationSection,
      leaveSection: leaveSection
    };
  }

  function matchPropertyPrecedentsPure(durFilter, facFilter) {
    var d = durFilter || "all";
    var f = facFilter || "all";
    var exact = FCFCOA_PRECEDENT_CASES.filter(function (c) {
      var dOk = d === "all" || c.durationBand === d;
      var fOk = f === "all" || c.factors.indexOf(f) !== -1;
      return dOk && fOk;
    });
    var broadened = false;
    var matched = exact;
    if (matched.length === 0) {
      broadened = true;
      matched = FCFCOA_PRECEDENT_CASES.filter(function (c) {
        return f !== "all" ? c.factors.indexOf(f) !== -1 : c.durationBand === d;
      });
      if (matched.length === 0) matched = FCFCOA_PRECEDENT_CASES.slice(0, 4);
    }

    var numericCases = matched.filter(function (c) { return typeof c.highPct === "number"; });
    var minCase = null;
    var maxCase = null;
    numericCases.forEach(function (c) {
      if (!minCase || c.highPct < minCase.highPct) minCase = c;
      if (!maxCase || c.highPct > maxCase.highPct) maxCase = c;
    });

    var koBullets = matched.map(function (c) {
      return "<em>" + c.shortCite + "</em>: <code>" + c.splitTag_ko + "</code>";
    });
    var enBullets = matched.map(function (c) {
      return "<em>" + c.shortCite + "</em>: <code>" + c.splitTag_en + "</code>";
    });

    var rangeHeaderKo = "";
    var rangeHeaderEn = "";
    if (minCase && maxCase) {
      if (minCase.id === maxCase.id) {
        rangeHeaderKo = "매칭된 수록 판례 분할 비율: <code>" + minCase.highPct + " : " + minCase.lowPct + "</code> (<em>" + minCase.shortCite + "</em>)";
        rangeHeaderEn = "Matched Precedent Split: <code>" + minCase.highPct + " : " + minCase.lowPct + "</code> (<em>" + minCase.shortCite + "</em>)";
      } else {
        rangeHeaderKo = "매칭된 판례 분할 스펙트럼: <code>" + minCase.highPct + " : " + minCase.lowPct + "</code> (<em>" + minCase.shortCite + "</em>) ~ <code>" + maxCase.highPct + " : " + maxCase.lowPct + "</code> (<em>" + maxCase.shortCite + "</em>)";
        rangeHeaderEn = "Matched Precedent Split Range: <code>" + minCase.highPct + " : " + minCase.lowPct + "</code> (<em>" + minCase.shortCite + "</em>) to <code>" + maxCase.highPct + " : " + maxCase.lowPct + "</code> (<em>" + maxCase.shortCite + "</em>)";
      }
    } else {
      rangeHeaderKo = "매칭된 판례 법리 원칙 (자산 풀 편입·은닉 상계 판결)";
      rangeHeaderEn = "Matched Precedent Threshold Principles (Asset Pool Inclusion & Disclosure)";
    }

    return {
      matched: matched,
      broadened: broadened,
      minCase: minCase,
      maxCase: maxCase,
      rangeHeaderKo: rangeHeaderKo,
      rangeHeaderEn: rangeHeaderEn,
      koListHtml: koBullets.join(" · "),
      enListHtml: enBullets.join(" · ")
    };
  }

  function evaluateVisaBreakdownPure(stage, exc) {
    if (!stage) return { status: "neutral" };
    var stLabel = STAGE_LABELS[stage] || { ko: stage, en: stage };
    var exLabel = EXC_LABELS[exc] || { ko: exc || "-", en: exc || "-" };

    if (stage === "secondary_482_186") {
      return {
        status: "non_div15_secondary",
        div15Eligible: false,
        stageLabel: stLabel,
        excLabel: { ko: "파트너 비자 특례(Div 1.5) 비대상", en: "Not eligible for Partner Visa Div 1.5" },
        headline_ko: "파트너 비자 단독 영주권 특례(Div 1.5) 비대상 · 독자 비자 전환(기술·학생·스폰서) 및 주신청자 결별 통지 의무 점검",
        headline_en: "Not Eligible for Partner Visa Div 1.5 Solo PR Exception · Assess Independent Visa Options & Notification Duties",
        body_ko: "482·491·494 등 임시 비자의 동반 배우자(Secondary Applicant)는 파트너 비자(820/309) 신청자가 아니므로 가정폭력(Division 1.5)이나 공동 자녀 특례를 통한 단독 영주권(801/100) 승인이 불가능합니다. 관계가 최종 해소되면 이민성 변경사항 통지 의무(ImmiAccount / Form 1022)가 발생하며 가족 구성원 요건 소멸에 따른 비자 취소(s 116) 통지 전에 본인의 경력·자격에 맞는 독자 비자(기술이민 189·190·491 또는 고용주 스폰서 482·186 또는 학생 500) 전환을 먼저 설계해야 합니다. 다만 이미 Subclass 186 영주권을 승인받은 동반 배우자라면 승인 당시 허위 서류(s 109) 문제가 없는 한 사후 별거만으로 영주권이 자동 취소되지 않습니다.",
        body_en: "Secondary holders on temporary sponsored/skilled visas (482, 491, 494) do NOT hold a Partner visa and cannot claim Subclass 801/100 solo PR under Division 1.5 family violence or shared child provisions. Upon final separation, notification obligations arise and secondary temporary visas face s 116 cancellation risk once member-of-the-family-unit status ends. Assess an independent visa pathway (189/190/491, 482/186, or 500) immediately. (If Subclass 186 PR has already been granted, post-grant separation alone does not cancel PR absent s 109 fraud.)"
      };
    }

    if (stage === "300_pre_entry_or_unmarried") {
      return {
        status: "non_div15_pmv_pre",
        div15Eligible: false,
        stageLabel: stLabel,
        excLabel: { ko: "입국 전 파혼 시 Div 1.5 비대상 (혼인 전 결별 엄격 제한)", en: "Offshore pre-entry ineligible for Div 1.5" },
        headline_ko: "약혼자 비자(300) 입국 전·혼인 전 결별 · 자동 단독 영주권(801/100) 비대상, 체류 대안 즉시 점검 필수",
        headline_en: "Subclass 300 Pre-Entry / Pre-Marriage Breakdown · No Automatic Solo 801/100 PR; Urgent Review Required",
        body_ko: "Subclass 300 비자로 호주에 입국하기 전(오프쇼어) 파혼한 경우에는 가정폭력이나 자녀 사유가 있더라도 파트너 비자 단독 영주권(Div 1.5) 특례가 적용되지 않습니다. 호주 입국 후 스폰서와 법적 혼인을 하기 전에 결별한 경우에도 820/801 비자가 유효하게 접수된 상태가 아니면 단독 영주권 진행이 엄격히 제한되므로 Subclass 300 체류 만료일 전에 독자 비자 전환 가능 여부를 즉시 검토해야 합니다.",
        body_en: "Offshore Subclass 300 holders who separate before entering Australia cannot access Division 1.5 solo PR. Even after onshore arrival, if separation occurs before marriage to the sponsor without a valid onshore 820/801 pathway, automatic solo PR does not apply; review alternative substantive visa options before Subclass 300 expiry."
      };
    }

    if (exc === "fv_judicial_or_nonjudicial") {
      return {
        status: "div15_fv_eligible",
        div15Eligible: true,
        stageLabel: stLabel,
        excLabel: exLabel,
        headline_ko: "단독 영주권(801/100) 진행 가능 · Division 1.5 가정폭력 피해 특례 적용 검토",
        headline_en: "Eligible to Pursue Independent PR (801/100) · Division 1.5 Family Violence Exception",
        body_ko: "별거 전까지 혼인·동거 관계가 진실했으며 관계 지속 중 스폰서로부터 가정폭력(신체적 폭력뿐 아니라 비자 취소 협박·경제적 통제·정서적 학대 포함)을 겪었다면 ① 법원 보호명령(DVO) 등 사법적 증거 또는 ② 법정 직군 전문가 2인 이상의 요건 충족 비사법적 증거(Non-judicial evidence)를 갖춰 스폰서 후원 없이 단독 영주권(801/100) 심사를 받을 수 있습니다.",
        body_en: "Where the partner relationship was genuine prior to breakdown and family violence occurred during the relationship, compliant judicial evidence (final DVO/court order) or statutory non-judicial evidence from two independent professionals allows progression to Subclass 801/100 PR without the sponsor."
      };
    }

    if (exc === "shared_child") {
      return {
        status: "shared_child_eligible",
        div15Eligible: true,
        stageLabel: stLabel,
        excLabel: exLabel,
        headline_ko: "단독 영주권(801/100) 진행 가능 · 공동 자녀 양육권·면접교섭권 특례 적용 검토",
        headline_en: "Eligible to Pursue Independent PR (801/100) · Shared Child Parenting / Access Exception",
        body_ko: "가정폭력 이력이 없더라도 스폰서와의 사이에 출생한 자녀에 관해 연방순회·가족법원(FCFCOA) 양육 명령(Parenting Order), 공동 양육 책임, 또는 법정 양육비·면접교섭 요건이 입증되면 스폰서의 후원 철회 이후에도 단독 영주권(801/100) 승인이 가능합니다.",
        body_en: "Even without family violence, formal FCFCOA parenting orders, shared parental responsibility, or statutory custody/access obligations regarding a child of the relationship preserve Subclass 801/100 PR eligibility after separation."
      };
    }

    return {
      status: "no_exception_alt_visa",
      div15Eligible: false,
      stageLabel: stLabel,
      excLabel: exLabel,
      headline_ko: "단독 영주권 특례 미해당 · 소명 요청(s 57) 수령 전 독자 비자 전환 및 s 48 제한 점검 필수",
      headline_en: "No Statutory Solo PR Exception · Assess Alternative Visas & Section 48 Bar Prior to Refusal",
      body_ko: "가정폭력(Div 1.5) 및 공동 자녀 특례에 모두 해당하지 않는 상태에서 스폰서가 후원을 철회하면 연방 이민성이 자연적 정의 소명 서한(s 57 Natural Justice Letter · 통상 28일 기한)을 발송합니다. 거절 결정이 내려지면 호주 내 타 비자 재접수가 제한(Section 48 Bar)될 수 있으므로 기한 안에 기술·고용주 스폰서 등 대체 비자 요건을 먼저 확인해야 합니다.",
      body_en: "Where neither the family violence nor shared child exception applies, sponsorship withdrawal triggers a 28-day s 57 natural justice notice and refusal risk (activating the onshore Section 48 bar). Assess independent skilled or employer-sponsored pathways immediately."
    };
  }

  root.FamilyLawEngine = {
    ParkCoDates: ParkCoDates,
    FCFCOA_PRECEDENT_CASES: FCFCOA_PRECEDENT_CASES,
    evaluateSeparationDeadlinesPure: evaluateSeparationDeadlinesPure,
    matchPropertyPrecedentsPure: matchPropertyPrecedentsPure,
    evaluateVisaBreakdownPure: evaluateVisaBreakdownPure,
    buildWaDefactoAlertHtml: buildWaDefactoAlertHtml,
    buildS71bDisclosureSummary: buildS71bDisclosureSummary,
    resolveToolDeepLink: resolveToolDeepLink
  };

  /* ==========================================================================
     6. DOM RENDERING CONTROLLERS
     ========================================================================== */
  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderNeutralPrompt(btnId, textKo, textEn) {
    return (
      '<div class="neutral-prompt">' +
        '<strong>' + (currentLang === "ko" ? "입력 대기 중 (초기 중립 상태)" : "Awaiting Your Input (Neutral State)") + '</strong>' +
        '<div>' + (currentLang === "ko" ? textKo : textEn) + '</div>' +
        '<div style="margin-top:10px;">' +
          '<button type="button" class="btn-sample js-trigger-sample" id="' + btnId + '">' +
            (currentLang === "ko" ? "예시 데이터 불러오기" : "Load Sample Data") +
          '</button>' +
        '</div>' +
      '</div>'
    );
  }

  function calcSeparationDeadlines() {
    var stateCode = ParkCoDates.normalizeStateCode((document.getElementById("fam-state") || {}).value || "QLD");
    var relType = (document.getElementById("fam-rel-type") || {}).value || "married";
    var sepStr = (document.getElementById("fam-sep-date") || {}).value || "";
    var oneRoof = (document.getElementById("fam-one-roof") || {}).value === "yes";
    var divStr = (document.getElementById("fam-divorce-date") || {}).value || "";
    var out = document.getElementById("fam-deadline-output");

    var res = evaluateSeparationDeadlinesPure({
      stateCode: stateCode,
      relType: relType,
      sepStr: sepStr,
      divStr: divStr,
      oneRoof: oneRoof
    });

    if (out) {
      var waAlert = res.isWaDefacto ? buildWaDefactoAlertHtml(currentLang) : "";

      if (!toolActive.m1 && res.status === "neutral") {
        out.innerHTML = waAlert + renderNeutralPrompt(
          "btn-sample-m1",
          "왼쪽에서 관할 주/준주와 최종 별거 시작일(또는 이혼 확정일)을 선택하면 12개월 별거 충족일과 재산분할 보수적 안전 신청 권고일·법정 제소 마감일(s 36(2) 주말·공휴일 연장 포함)을 함께 계산합니다.",
          "Select your State/Territory and final separation date (or divorce effective date) on the left to calculate your earliest divorce filing date and dual safe/statutory property deadlines (incl. s 36(2) holiday rollovers)."
        );
        return res;
      }

      if (res.status === "neutral") {
        out.innerHTML = waAlert + renderNeutralPrompt(
          "btn-sample-m1",
          "최종 별거 시작일 또는 이혼 명령 확정일을 입력해 주십시오.",
          "Please enter a final separation date or divorce order effective date."
        );
        return res;
      }

      if (res.status === "error") {
        var errMsg = res.code === "divorce_before_separation"
          ? (currentLang === "ko"
              ? "<strong>입력 오류:</strong> 이혼 명령 확정일(<code>" + res.divStr + "</code>)이 최종 별거 시작일(<code>" + res.sepStr + "</code>)보다 앞설 수 없습니다. 날짜를 다시 확인해 주십시오."
              : "<strong>Input Error:</strong> Divorce Order effective date (<code>" + res.divStr + "</code>) cannot be earlier than the final separation date (<code>" + res.sepStr + "</code>).")
          : (currentLang === "ko"
              ? "<strong>입력 오류:</strong> 올바른 날짜 형식(YYYY-MM-DD)을 입력해 주십시오."
              : "<strong>Input Error:</strong> Please enter a valid date (YYYY-MM-DD).");
        out.innerHTML = waAlert + '<div class="alert-box alert-box--danger">' + errMsg + '</div>';
        return res;
      }

      var html = waAlert;
      if (currentLang === "ko") {
        html += '<div class="alert-box alert-box--info">' +
          '• <strong>적용 관할 레지스트리:</strong> <strong>' + res.stateCode + '</strong>' + (res.isWaDefacto ? ' (Family Court of WA · <code>Family Court Act 1997 (WA)</code>)' : ' (연방순회·가족법원 FCFCOA)') + '<br/>' +
          '• <strong>재산분할·양육권 협의 및 소송 개시:</strong> <strong>별거 직후 즉시 가능</strong> (이혼 확정 전에도 합의 명령 Consent Orders 진행 가능)<br/>' +
          (res.relType === "married"
            ? (res.eligibleDivorceIso
                ? '• <strong>이혼 신청 가능일 (12개월+1일 별거 · s 48):</strong> <strong>' + res.eligibleDivorceIso + '</strong> 이후 접수 가능 (FCFCOA 수수료 <strong>' + escapeHtml(liveFeeMetrics.divorceFee) + '</strong>)<br/>'
                : '• <strong>이혼 신청 가능일 (s 48):</strong> 별거 시작일을 입력하면 12개월+1일 충족일을 산출합니다.<br/>')
            : '• <strong>사실혼(De Facto) 관계 해소:</strong> 별도 이혼 신청 절차 없음 (' + (res.isWaDefacto ? 'FCA 1997 (WA) Part 5A' : 's 90SB') + ' 총 2년 동거 또는 공동 자녀·중대 기여 요건 확인)<br/>') +
          '• <strong>법원 접수 수수료 (FY2026–27):</strong> 합의 명령(Consent Orders) <strong>' + escapeHtml(liveFeeMetrics.consentOrdersFee) + '</strong> · 소송 개시 <strong>' + escapeHtml(liveFeeMetrics.initiatingFee) + '</strong>' +
          '</div>';

        if (res.propDeadlineIso) {
          var statLabel = res.relType === "married"
            ? "법정 제소 마감일 (이혼 확정 후 12개월 · s 44(3))"
            : (res.isWaDefacto
                ? "법정 제소 마감일 (WA 사실혼 해소 후 2년 · s 205ZB / s 44(5))"
                : "법정 제소 마감일 (사실혼 해소 후 2년 · s 44(5))");
          html += '<div class="dual-date-grid">' +
            '<div class="dual-date-box dual-date-box--safe">' +
              '<div class="dual-date-lbl">보수적 안전 신청 권고일 (마감 30일 전 영업일)</div>' +
              '<div class="dual-date-val">' + res.propSafeIso + '</div>' +
              '<div class="dual-date-sub">직전 영업일 마지노선: <strong>' + res.propSafe1dIso + '</strong> (' + res.stateCode + ' 영업일 기준)</div>' +
            '</div>' +
            '<div class="dual-date-box ' + (res.isOverdue ? 'dual-date-box--danger' : 'dual-date-box--stat') + '">' +
              '<div class="dual-date-lbl">' + statLabel + '</div>' +
              '<div class="dual-date-val">' + res.propDeadlineIso + '</div>' +
              '<div class="dual-date-sub">' +
                (res.isOverdue
                  ? '<strong style="color:#B42318;">법정 기한 ' + res.overdueDays + '일 경과 (법원 특별허가 ' + res.leaveSection + ' 신청 필수)</strong>'
                  : '브리즈번 오늘 기준 잔여 <strong>' + res.propDaysLeft + '일</strong>') +
              '</div>' +
            '</div>' +
          '</div>';

          if (res.propRolledReason) {
            html += '<div class="alert-box alert-box--info">' +
              '<strong>주말·공휴일 익영업일 연장 적용 (<code>Acts Interpretation Act 1901 (Cth) s 36(2)</code>):</strong> 원래 만료일(<code>' + res.rawPropDeadlineIso + '</code>)이 ' + res.stateCode + ' 기준 비영업일(<strong>' + escapeHtml(res.propRolledReason) + '</strong>)에 해당하여 다음 영업일인 <strong>' + res.propDeadlineIso + '</strong>로 법정 마감일이 연장되었습니다 (직전 안전 영업일: <code>' + res.propSafe1dIso + '</code>).' +
              '</div>';
          }

          if (res.isOverdue) {
            html += '<div class="alert-box alert-box--danger">' +
              '<strong>법정 기한 ' + res.overdueDays + '일 경과 (법원 특별허가 ' + res.leaveSection + ' 신청 필수):</strong> 법원 제소기한이 도과한 상태이므로 일방적인 재산분할 소송을 제기하려면 회복하기 어려운 경제적 곤궁(Hardship)과 지연 사유를 입증하여 법원의 특별허가(Leave out of time)를 먼저 받아야 합니다 (단 양 당사자 합의 동의나 재정합의서 BFA는 별도 검토 가능).' +
              '</div>';
          }
        } else if (res.relType === "married") {
          html += '<div class="alert-box alert-box--warn">' +
            '<strong>재산분할 법원 제소기한 안내 (법률혼 미이혼 상태):</strong> 아직 이혼 명령이 확정되지 않았으므로 12개월 법원 제소기한(s 44(3))이 진행되지 않았습니다. 이혼 확정일을 기다리지 않고 지금 바로 재산분할 합의를 진행하는 편이 자산 보전에 유리합니다.' +
            '</div>';
        }

        if (res.oneRoof) {
          html += '<div class="alert-box">' +
            '<strong>한집 별거(Separation Under One Roof · s 49(2)) 필수 서류:</strong> 당사자 진술서 외에 가사·재정·대외 관계 분리를 객관적으로 확인해 줄 <strong>독립 제3자(지인·가족·이웃)의 진술서(Affidavit)</strong>를 반드시 제출해야 합니다.' +
            '</div>';
        }
      } else {
        html += '<div class="alert-box alert-box--info">' +
          '• <strong>Active Registry / State:</strong> <strong>' + res.stateCode + '</strong>' + (res.isWaDefacto ? ' (Family Court of WA · <code>Family Court Act 1997 (WA)</code>)' : ' (FCFCOA)') + '<br/>' +
          '• <strong>Property & Parenting Orders:</strong> <strong>Available Immediately</strong> after separation (Consent Orders ' + escapeHtml(liveFeeMetrics.consentOrdersFee) + ')<br/>' +
          (res.relType === "married"
            ? (res.eligibleDivorceIso
                ? '• <strong>Earliest Divorce Filing Date (s 48):</strong> <strong>' + res.eligibleDivorceIso + '</strong> (FCFCOA Divorce Fee <strong>' + escapeHtml(liveFeeMetrics.divorceFee) + '</strong>)<br/>'
                : '• <strong>Earliest Divorce Filing Date (s 48):</strong> Enter separation date to compute 12m + 1d eligibility.<br/>')
            : '• <strong>De Facto Relationship:</strong> No divorce filing required (subject to ' + (res.isWaDefacto ? 'FCA 1997 (WA) Part 5A' : 's 90SB') + ' 2-year or child gateway)<br/>') +
          '• <strong>Court Filing Fees (FY2026–27):</strong> Consent Orders <strong>' + escapeHtml(liveFeeMetrics.consentOrdersFee) + '</strong> · Initiating Application <strong>' + escapeHtml(liveFeeMetrics.initiatingFee) + '</strong>' +
          '</div>';

        if (res.propDeadlineIso) {
          var statLabelEn = res.relType === "married"
            ? "Statutory Filing Deadline (12m Post-Divorce · s 44(3))"
            : (res.isWaDefacto
                ? "Statutory Filing Deadline (2y WA De Facto · s 205ZB / s 44(5))"
                : "Statutory Filing Deadline (2y De Facto · s 44(5))");
          html += '<div class="dual-date-grid">' +
            '<div class="dual-date-box dual-date-box--safe">' +
              '<div class="dual-date-lbl">Conservative Safe Filing Target (30d Prior Business Day)</div>' +
              '<div class="dual-date-val">' + res.propSafeIso + '</div>' +
              '<div class="dual-date-sub">Last preceding business day: <strong>' + res.propSafe1dIso + '</strong> (' + res.stateCode + ')</div>' +
            '</div>' +
            '<div class="dual-date-box ' + (res.isOverdue ? 'dual-date-box--danger' : 'dual-date-box--stat') + '">' +
              '<div class="dual-date-lbl">' + statLabelEn + '</div>' +
              '<div class="dual-date-val">' + res.propDeadlineIso + '</div>' +
              '<div class="dual-date-sub">' +
                (res.isOverdue
                  ? '<strong style="color:#B42318;">Statutory deadline expired by ' + res.overdueDays + ' days (Court leave under ' + res.leaveSection + ' mandatory)</strong>'
                  : '<strong>' + res.propDaysLeft + ' days</strong> remaining (Brisbane time)') +
              '</div>' +
            '</div>' +
          '</div>';

          if (res.propRolledReason) {
            html += '<div class="alert-box alert-box--info">' +
              '<strong>Holiday / Weekend Rollover Applied (<code>Acts Interpretation Act 1901 (Cth) s 36(2)</code>):</strong> Raw limitation date <code>' + res.rawPropDeadlineIso + '</code> fell on a non-business day in ' + res.stateCode + ' (<strong>' + escapeHtml(res.propRolledReason) + '</strong>) and rolled forward to the next business day <strong>' + res.propDeadlineIso + '</strong> (preceding safe business day: <code>' + res.propSafe1dIso + '</code>).' +
              '</div>';
          }

          if (res.isOverdue) {
            html += '<div class="alert-box alert-box--danger">' +
              '<strong>Statutory deadline expired by ' + res.overdueDays + ' days (Court leave under ' + res.leaveSection + ' mandatory):</strong> You must establish hardship and an adequate explanation for delay to seek leave of the Court out of time.' +
              '</div>';
          }
        } else if (res.relType === "married") {
          html += '<div class="alert-box alert-box--warn">' +
            '<strong>Property Limitation Status (Not Yet Divorced):</strong> The 12-month s 44(3) limitation clock has not started because no divorce order is in effect. You can finalise Consent Orders immediately without waiting for divorce.' +
            '</div>';
        }

        if (res.oneRoof) {
          html += '<div class="alert-box">' +
            '<strong>Separation Under One Roof (s 49(2)):</strong> Requires both your own Affidavit and a corroborating Affidavit from an <strong>independent third party</strong>.' +
            '</div>';
        }
      }
      out.innerHTML = html;
    }
    return res;
  }

  function renderS71bCardHtml(summaryText) {
    var titleTxt = currentLang === "ko"
      ? "한·호 통합 자산·부채 1페이지 공개 명세서 (FCFCOA / FLA s 71B Duty of Disclosure)"
      : "1-Page KR–AU Combined Asset/Liability Disclosure Worksheet (FCFCOA / FLA s 71B)";
    var copyLbl = currentLang === "ko" ? "1페이지 s 71B 요약 복사" : "Copy 1-Page s 71B Summary";
    var printLbl = currentLang === "ko" ? "1페이지 s 71B 명세서 인쇄" : "Print 1-Page s 71B Worksheet";
    return (
      '<div id="fam-s71b-worksheet" class="s71b-disclosure-card">' +
        '<div class="s71b-disclosure-head">' +
          '<strong style="font-size:13.2px;color:#0E3A3E;">' + titleTxt + '</strong>' +
          '<div class="s71b-disclosure-actions">' +
            '<button type="button" id="btn-s71b-copy" class="btn-secondary" style="padding:5px 10px;font-size:12px;">' + copyLbl + '</button>' +
            '<button type="button" id="btn-s71b-print" class="btn-burgundy" style="padding:5px 10px;font-size:12px;">' + printLbl + '</button>' +
          '</div>' +
        '</div>' +
        '<pre id="fam-s71b-summary-text" class="s71b-disclosure-pre">' + escapeHtml(summaryText) + '</pre>' +
      '</div>'
    );
  }

  function renderPropertyPrecedentMatcher() {
    var stateCode = ParkCoDates.normalizeStateCode((document.getElementById("fam-state") || {}).value || "QLD");
    var relType = (document.getElementById("fam-rel-type") || {}).value || "married";
    var isWaDefacto = stateCode === "WA" && relType === "defacto";

    var ausRaw = (document.getElementById("pool-aus-net") || {}).value || "";
    var ausDebtRaw = (document.getElementById("pool-aus-debt") || {}).value || "";
    var supRaw = (document.getElementById("pool-aus-super") || {}).value || "";
    var korRaw = (document.getElementById("pool-kor-krw") || {}).value || "";
    var korDebtRaw = (document.getElementById("pool-kor-debt-krw") || {}).value || "";
    var rateRaw = (document.getElementById("pool-krw-rate") || {}).value || "";

    var durFilter = (document.getElementById("match-duration") || {}).value || "all";
    var facFilter = (document.getElementById("match-factor") || {}).value || "all";
    var ackChecked = (document.getElementById("ack-ethical-disclaimer") || {}).checked !== false;

    var poolOut = document.getElementById("fam-pool-summary-output");
    var cardsWrap = document.getElementById("fam-precedent-cards-wrap");
    var cardsGrid = document.getElementById("fam-precedent-cards-grid");

    var ausAssets = Math.max(0, parseFloat(ausRaw) || 0);
    var ausDebt = Math.max(0, parseFloat(ausDebtRaw) || 0);
    var ausNet = Math.max(0, ausAssets - ausDebt);
    var ausSuper = Math.max(0, parseFloat(supRaw) || 0);
    var korAssetsManwon = Math.max(0, parseFloat(korRaw) || 0);
    var korDebtManwon = Math.max(0, parseFloat(korDebtRaw) || 0);
    var korNetManwon = Math.max(0, korAssetsManwon - korDebtManwon);
    var parsedRate = parseFloat(rateRaw);
    var krwRate = (parsedRate && parsedRate > 0) ? parsedRate : DEFAULT_KRW_PER_AUD;

    var korAud = Math.round((korNetManwon * 10000) / krwRate);
    var totalPoolAud = Math.round(ausNet + ausSuper + korAud);

    var s71bText = buildS71bDisclosureSummary({
      stateCode: stateCode,
      relType: relType,
      ausAssets: ausAssets,
      ausDebt: ausDebt,
      ausSuper: ausSuper,
      korAssetsManwon: korAssetsManwon,
      korDebtManwon: korDebtManwon,
      krwRate: krwRate
    }, currentLang);

    var waAlert = isWaDefacto ? buildWaDefactoAlertHtml(currentLang) : "";

    var hasAnyAssetInput = (
      ausRaw.trim() !== "" ||
      ausDebtRaw.trim() !== "" ||
      supRaw.trim() !== "" ||
      korRaw.trim() !== "" ||
      korDebtRaw.trim() !== ""
    );

    if (!toolActive.m2 && !hasAnyAssetInput && durFilter === "all" && facFilter === "all") {
      if (poolOut) {
        poolOut.innerHTML = waAlert + renderNeutralPrompt(
          "btn-sample-m2",
          "호주·한국 자산 및 부채와 실시간 환율(기본 ₩900/AUD)을 입력하거나 쟁점 필터를 선택하면 전 세계 통합 자산 풀(s 71B)과 실제 FCFCOA 판결 비율 분포 및 1페이지 공개 명세서를 즉시 생성합니다.",
          "Enter your Australian/Korean assets, liabilities, and real-time KRW/AUD rate (default ₩900) to calculate your s 71B global pool, matched FCFCOA court splits, and 1-page disclosure worksheet."
        ) + renderS71bCardHtml(s71bText);
      }
      if (cardsWrap) cardsWrap.hidden = true;
      return { active: false, totalPoolAud: 0, korAud: 0, krwRate: krwRate, matchedCount: 0, topCitation: "-" };
    }

    var spec = matchPropertyPrecedentsPure(durFilter, facFilter);
    var matched = spec.matched;

    if (poolOut) {
      var broadenNotice = spec.broadened
        ? '<div style="font-size:12px;color:#9A6715;margin-bottom:6px;">' +
            (currentLang === "ko"
              ? "※ 선택한 기간·쟁점의 교집합 판례가 없어 핵심 쟁점이 일치하는 인접 기간 판례로 확장해 표시합니다."
              : "※ Broadened to closest matching factor/duration precedents as no exact intersection sample exists.") +
          '</div>'
        : "";

      poolOut.innerHTML =
        waAlert +
        '<div class="result-summary-grid">' +
          '<div class="mini-kpi">' +
            '<span>' + (currentLang === "ko" ? "호주 순자산 + Super" : "AUS Net + Super") + '</span>' +
            '<strong>$' + (ausNet + ausSuper).toLocaleString("en-AU") + '</strong>' +
            '<small>' + (ausDebt > 0
              ? (currentLang === "ko" ? "부채 -$" + ausDebt.toLocaleString("en-AU") + " 반영" : "Net of -$" + ausDebt.toLocaleString("en-AU") + " debt")
              : (currentLang === "ko" ? "Super $" + ausSuper.toLocaleString("en-AU") + " 포함" : "Incl. $" + ausSuper.toLocaleString("en-AU") + " Super")) + '</small>' +
          '</div>' +
          '<div class="mini-kpi">' +
            '<span>' + (currentLang === "ko" ? "한국 순자산 (s 71B 환산)" : "KOR Net Assets (s 71B)") + '</span>' +
            '<strong>$' + korAud.toLocaleString("en-AU") + ' AUD</strong>' +
            '<small>1 AUD = ₩' + krwRate.toLocaleString("en-AU") + '</small>' +
          '</div>' +
          '<div class="mini-kpi">' +
            '<span>' + (currentLang === "ko" ? "전 세계 통합 순자산 풀" : "Worldwide Net Pool") + '</span>' +
            '<strong>$' + totalPoolAud.toLocaleString("en-AU") + ' AUD</strong>' +
            '<small>FLA s 71B Global Pool</small>' +
          '</div>' +
        '</div>' +
        '<div class="alert-box alert-box--warn" style="margin-bottom:0;">' +
          broadenNotice +
          '<strong>' + (currentLang === "ko"
            ? "매칭된 판례(" + matched.length + "건) 기반 동적 판결 분포:"
            : "Dynamic Split Spectrum Across " + matched.length + " Matched Precedent(s):") + '</strong><br/>' +
          '• ' + (currentLang === "ko" ? spec.rangeHeaderKo : spec.rangeHeaderEn) + '<br/>' +
          '• ' + (currentLang === "ko" ? spec.koListHtml : spec.enListHtml) +
        '</div>' +
        renderS71bCardHtml(s71bText);
    }

    if (cardsWrap) cardsWrap.hidden = false;
    if (cardsGrid) {
      if (!ackChecked) {
        cardsGrid.innerHTML = '<div class="alert-box alert-box--danger">' +
          (currentLang === "ko"
            ? "위 법률·윤리 고지 확인란에 동의하시면 매칭된 실제 판결문 상세 내역이 표시됩니다."
            : "Please tick the Legal & Ethical Notice acknowledgement box above to display the matched FCFCOA precedent cards.") +
          '</div>';
      } else {
        cardsGrid.innerHTML = matched.map(function (c) {
          return (
            '<div class="card" style="padding:16px;display:flex;flex-direction:column;justify-content:space-between;">' +
              '<div>' +
                '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:6px;">' +
                  '<span class="badge-teal">' + c.court + ' · ' + c.date + '</span>' +
                  '<span style="font-size:11px;color:#4A5D5F;font-weight:700;">s 114Q(2)</span>' +
                '</div>' +
                '<h4 style="margin:0 0 6px;font-size:15px;color:#14282A;">' + c.citation + '</h4>' +
                '<div style="font-size:12px;color:#4A5D5F;margin-bottom:8px;">' + (currentLang === "ko" ? c.durationText_ko : c.durationText_en) + ' | ' + (currentLang === "ko" ? c.poolAud : (c.poolAud_en || c.poolAud)) + '</div>' +
                '<div style="background:#FBF9F5;border:1px solid #E5DFD3;border-radius:8px;padding:9px 11px;font-size:12px;line-height:1.55;margin-bottom:8px;">' +
                  '<div><strong>• ' + (currentLang === "ko" ? "기여도 (s 79(4)):" : "Contributions (s 79(4)):") + '</strong> ' + (currentLang === "ko" ? c.contribSplit : (c.contribSplit_en || c.contribSplit)) + '</div>' +
                  '<div><strong>• ' + (currentLang === "ko" ? "장래·현재 조정 (s 79(5)):" : "Future/Current (s 79(5)):") + '</strong> ' + (currentLang === "ko" ? c.adjSplit : (c.adjSplit_en || c.adjSplit)) + '</div>' +
                  '<div style="color:#0E3A3E;font-weight:800;margin-top:3px;"><strong>• ' + (currentLang === "ko" ? "최종 판결:" : "Final Order:") + '</strong> ' + (currentLang === "ko" ? c.finalSplit : (c.finalSplit_en || c.finalSplit)) + '</div>' +
                '</div>' +
                '<p style="font-size:12.5px;color:#14282A;line-height:1.55;margin:0 0 8px;">' + (currentLang === "ko" ? c.summary_ko : c.summary_en) + '</p>' +
              '</div>' +
              '<a href="' + c.url + '" target="_blank" rel="noopener" style="font-size:12px;font-weight:800;color:#0E3A3E;">' + (currentLang === "ko" ? "법원·법령 공식 안내 보기 &rarr;" : "Official Court / Statutory Guide &rarr;") + '</a>' +
            '</div>'
          );
        }).join("");
      }
    }

    return {
      active: true,
      totalPoolAud: totalPoolAud,
      korAud: korAud,
      krwRate: krwRate,
      matchedCount: matched.length,
      topCitation: matched[0] ? matched[0].citation : "-"
    };
  }

  function calcParentingRelocation() {
    var safety = (document.getElementById("par-safety") || {}).value || "";
    var reloc = (document.getElementById("par-relocation") || {}).value || "";
    var out = document.getElementById("fam-parenting-output");
    if (!out) return { active: false };

    if (!safety && !reloc) {
      out.innerHTML = renderNeutralPrompt(
        "btn-sample-m3",
        "양육 안전 상황 또는 거주·출국 계획을 선택하면 2024년 개정 가족법(s 60CC) 기준과 출국금지·이주 허가 절차를 안내합니다.",
        "Select a safety or international relocation scenario to view your post-2024 Part VII parenting and AFP Watchlist roadmap."
      );
      return { active: false };
    }

    var items = [];
    if (safety === "fv_present") {
      items.push(currentLang === "ko"
        ? "<strong>아동·양육자 안전 최우선 원칙 (s 60CC(2)(a)):</strong> 2024년 5월 개정법 시행으로 균등 공동친권 추정이 폐지되었습니다. 가정폭력 위험이 해소되지 않은 상태에서는 막연한 기대만으로 무리한 공동 결정권이나 비감독 면접교섭을 강제하지 않습니다(<code>Gallagher & Day [2025] FedCFamC2F 36</code>)."
        : "<strong>Safety Paramount Principle (s 60CC(2)(a)):</strong> Post-May 2024 reforms repealed equal shared parental responsibility; courts prioritize protection from family violence over speculative unsupervised contact (<code>Gallagher & Day [2025]</code>).");
    } else if (safety === "no_fv") {
      items.push(currentLang === "ko"
        ? "<strong>부모 간 합의 양육 명령 (Consent Orders) 권장:</strong> 안전 위협이 없는 경우 소송 대신 법원 구속력을 갖춘 양육 합의 명령(" + escapeHtml(liveFeeMetrics.consentOrdersFee) + ")으로 양육 일정·학업·여권 발급 및 해외여행 사전 서면 동의 조항을 명문화할 수 있습니다."
        : "<strong>Parenting Consent Orders Recommended:</strong> Where no safety risk exists, formalise parenting schedules, passport rules, and international travel notice via Consent Orders (" + escapeHtml(liveFeeMetrics.consentOrdersFee) + " filing fee).");
    }

    if (reloc === "want_korea_reloc") {
      items.push(currentLang === "ko"
        ? "<strong>한국 영구 귀국(International Relocation) 필수 절차:</strong> 상대 부모의 서면 동의나 법원 명령 없이 자녀를 해외로 데리고 나가면 형사처벌(<code>ss 65Y/65Z</code> · 최대 징역 3년) 및 헤이그 국제아동탈취협약 강제반환 명령 대상이 됩니다(<code>Picard & Picard (No 2) [2025] FedCFamC2F 37</code>). 출국 전에 반드시 한국 내 주거·학업·방학 면접교섭 계획을 갖춘 <strong>법원 Relocation Order</strong>를 먼저 받아야 합니다."
        : "<strong>International Relocation to South Korea:</strong> Unilateral removal breaches <code>ss 65Y/65Z</code> (up to 3 years imprisonment) and triggers Hague Convention return orders (<code>Picard [2025]</code>). Obtain Court Relocation Orders before departure.");
    } else if (reloc === "prevent_abduction") {
      items.push(currentLang === "ko"
        ? "<strong>긴급 출국금지 및 호주 연방경찰(AFP) 공항 워치리스트 등록:</strong> 상대 부모가 자녀를 무단으로 출국시킬 우려가 있으면 즉시 연방순회·가족법원(FCFCOA)에 긴급 출국금지 명령을 신청하고 <strong>AFP Family Law Watchlist</strong>에 자녀 인적사항을 등록하여 전 공항·항만 출국을 차단해야 합니다."
        : "<strong>Urgent Injunction & AFP Family Law Watchlist:</strong> File an urgent FCFCOA application and place the child on the AFP Airport Watchlist immediately to block unauthorized departure from Australia.");
    } else if (reloc === "domestic_only") {
      items.push(currentLang === "ko"
        ? "<strong>호주 내 동일 생활권 양육 유지:</strong> 주내 거주지 이전이라도 자녀의 통학·면접교섭에 중대한 영향을 주는 원거리 이주는 단독으로 결정할 수 없으므로 사전 협의나 법원 명령 확인이 필요합니다."
        : "<strong>Domestic Residence Continuity:</strong> Even within Australia, a long-distance move that disrupts the child's schooling or time with the other parent requires prior written consent or Court orders.");
    }

    out.innerHTML = '<div class="alert-box alert-box--info" style="margin-bottom:0;"><ul style="margin:0;padding-left:18px;font-size:13.3px;line-height:1.65;">' +
      items.map(function (i) { return '<li style="margin-bottom:6px;">' + i + '</li>'; }).join("") +
      '</ul></div>';
    return { active: true, safety: safety, reloc: reloc };
  }

  function calcPartnerVisaCrossover() {
    var stage = (document.getElementById("pv-stage") || {}).value || "";
    var exc = (document.getElementById("pv-exception") || {}).value || "fv_judicial_or_nonjudicial";
    var excGroup = document.getElementById("pv-exception-group");
    var out = document.getElementById("fam-pv-output");

    if (excGroup) {
      var hideExc = (stage === "secondary_482_186" || stage === "300_pre_entry_or_unmarried");
      excGroup.style.display = hideExc ? "none" : "";
    }

    var res = evaluateVisaBreakdownPure(stage, exc);
    if (out) {
      if (res.status === "neutral") {
        out.innerHTML = renderNeutralPrompt(
          "btn-sample-m4",
          "현재 보유·진행 중인 비자 단계를 선택하면 파트너 비자 단독 영주권 특례(Div 1.5 / 자녀 양육) 대상 여부와 동반 배우자(482·491·494·186) 별거 시 독자 비자 전환 절차를 구분하여 진단합니다.",
          "Select your current visa stage on the left to distinguish Partner Visa Div 1.5 solo PR eligibility from secondary 482/491/494/186 visa breakdown rules."
        );
        return res;
      }

      var boxCls = "alert-box--info";
      if (res.status === "non_div15_secondary" || res.status === "non_div15_pmv_pre" || res.status === "no_exception_alt_visa") {
        boxCls = "alert-box--danger";
      } else if (res.div15Eligible) {
        boxCls = "alert-box--success";
      }

      var stText = currentLang === "ko" ? res.stageLabel.ko : res.stageLabel.en;
      var hlText = currentLang === "ko" ? res.headline_ko : res.headline_en;
      var bdText = currentLang === "ko" ? res.body_ko : res.body_en;

      out.innerHTML =
        '<div style="font-size:12px;color:#4A5D5F;font-weight:700;margin-bottom:6px;">' +
          (currentLang === "ko" ? "선택한 비자 단계: " : "Selected Visa Stage: ") + stText +
        '</div>' +
        '<div class="alert-box ' + boxCls + '" style="margin-bottom:0;">' +
          '<div style="font-weight:800;font-size:14px;margin-bottom:6px;">' + hlText + '</div>' +
          '<div>' + bdText + '</div>' +
        '</div>';
    }
    return res;
  }

  function updateAll() {
    var d1 = calcSeparationDeadlines();
    var d2 = renderPropertyPrecedentMatcher();
    var d3 = calcParentingRelocation();
    var d4 = calcPartnerVisaCrossover();

    var pre = document.getElementById("fam-diagnostic-brief-text");
    var anyActive = (d1.status === "ok") || d1.isWaDefacto || d2.active || d3.active || (d4.status && d4.status !== "neutral");

    var relText = (REL_LABELS[d1.relType] || REL_LABELS.married)[currentLang] + " [" + (d1.stateCode || "QLD") + "]";
    var divEligText = d1.eligibleDivorceIso || (currentLang === "ko" ? "미산출 (별거일 미입력 또는 사실혼)" : "Not calculated");
    var propLimText = d1.propDeadlineIso
      ? (d1.isOverdue
          ? (currentLang === "ko"
              ? d1.propDeadlineIso + " (법정 기한 " + d1.overdueDays + "일 경과 · " + d1.leaveSection + " 특별허가 필수)"
              : d1.propDeadlineIso + " (Expired by " + d1.overdueDays + "d · " + d1.leaveSection + " leave required)")
          : (currentLang === "ko"
              ? "안전 권고일 " + d1.propSafeIso + " / 법정 마감일 " + d1.propDeadlineIso + " (잔여 " + d1.propDaysLeft + "일)"
              : "Safe target " + d1.propSafeIso + " / Statutory " + d1.propDeadlineIso + " (" + d1.propDaysLeft + "d left)"))
      : (currentLang === "ko" ? "미개시 (법률혼 이혼 확정 전)" : "Not yet triggered (Divorce not finalised)");

    var visaBriefText = d4 && d4.status && d4.status !== "neutral"
      ? ((currentLang === "ko" ? d4.stageLabel.ko : d4.stageLabel.en) + " → " + (currentLang === "ko" ? d4.headline_ko : d4.headline_en))
      : (currentLang === "ko" ? "비자 교차 진단 미선택" : "Visa crossover not selected");

    var brief = !anyActive
      ? (currentLang === "ko"
          ? "위 진단 도구에 날짜·자산·비자 단계를 입력하거나 [예시 데이터 불러오기] 버튼을 누르면 법무법인 박앤코 상담용 요약 브리프가 자동 생성됩니다. (공식 이메일: enquiry@parkcolawyers.com)"
          : "Enter your dates, asset pool, or visa stage above (or click [Load Sample Data]) to generate a clean consultation brief for Park & Co Lawyers (enquiry@parkcolawyers.com).")
      : (currentLang === "ko"
          ? [
              "[법무법인 박앤코 호주 가족법 · 한·호 재산분할 · 비자 교차 진단 브리프]",
              "• 수신: 법무법인 박앤코 박창민 대표변호사 (Legal Practitioner Director · Acc. Spec. Immi) & 이수진 변호사 (Gina Lee)",
              "• 공식 문의: enquiry@parkcolawyers.com | https://parklawyers.com.au/links/?lang=ko",
              "• 1. 관할 및 기한: " + relText + (d1.isWaDefacto ? " (Family Court of WA · Part VIIIC 관할)" : "") + " | 이혼 신청 가능일: " + divEligText + " | 재산분할 기한: " + propLimText,
              "• 2. 한·호 전 세계 통합 순자산 풀(s 71B): $" + d2.totalPoolAud.toLocaleString("en-AU") + " AUD (한국 순자산 환산액 $" + d2.korAud.toLocaleString("en-AU") + " AUD · 1 AUD = ₩" + (d2.krwRate || DEFAULT_KRW_PER_AUD).toLocaleString("en-AU") + ")",
              "• 3. 매칭된 연방순회·가족법원(FCFCOA) 공개 판례: " + (d2.active ? (d2.matchedCount + "건 (대표: " + d2.topCitation + ")") : "미조회"),
              "• 4. 비자·별거 교차 진단: " + visaBriefText,
              "• 비고: 재산분할은 법원의 종합 재량 판단(s 79) 사항임을 확인하며 개별 사실관계에 관한 정식 법률 자문을 요청합니다."
            ].join("\n")
          : [
              "[Park & Co Lawyers · Australian Family Law, Global Property & Visa Crossover Brief]",
              "• To: Chang Min Park (Legal Practitioner Director, Acc. Spec. Immi) & Gina Lee (Solicitor)",
              "• Official Contact: enquiry@parkcolawyers.com | https://parklawyers.com.au/links/?lang=en",
              "• 1. Jurisdiction & Deadlines: " + relText + (d1.isWaDefacto ? " (Family Court of WA · Part VIIIC)" : "") + " | Earliest Divorce: " + divEligText + " | Property Limit: " + propLimText,
              "• 2. Worldwide Net Asset Pool (s 71B): $" + d2.totalPoolAud.toLocaleString("en-AU") + " AUD (incl. KOR Net $" + d2.korAud.toLocaleString("en-AU") + " AUD @ ₩" + (d2.krwRate || DEFAULT_KRW_PER_AUD).toLocaleString("en-AU") + "/AUD)",
              "• 3. Matched FCFCOA Precedents: " + (d2.active ? (d2.matchedCount + " cases (Lead: " + d2.topCitation + ")") : "Not queried"),
              "• 4. Visa Breakdown Assessment: " + visaBriefText,
              "• Requesting formal family law and cross-border property/migration consultation."
            ].join("\n"));

    if (pre) pre.textContent = brief;

    var mailBtn = document.getElementById("btn-fam-mailto");
    if (mailBtn) {
      mailBtn.href = currentLang === "ko"
        ? "https://parklawyers.com.au/links/?lang=ko"
        : "https://parklawyers.com.au/links/?lang=en";
      mailBtn.onclick = function () {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(brief).catch(function () {});
        }
      };
    }
  }

  function loadSampleData() {
    var todayIso = ParkCoDates.todayBrisbaneIso();
    var sampleSepObj = ParkCoDates.addYearsMonthsClamped(todayIso, 0, -8, 0);
    var stateEl = document.getElementById("fam-state");
    var sepEl = document.getElementById("fam-sep-date");
    var relEl = document.getElementById("fam-rel-type");
    var divEl = document.getElementById("fam-divorce-date");
    var ausEl = document.getElementById("pool-aus-net");
    var ausDebtEl = document.getElementById("pool-aus-debt");
    var supEl = document.getElementById("pool-aus-super");
    var korEl = document.getElementById("pool-kor-krw");
    var korDebtEl = document.getElementById("pool-kor-debt-krw");
    var rateEl = document.getElementById("pool-krw-rate");
    var durEl = document.getElementById("match-duration");
    var facEl = document.getElementById("match-factor");
    var safEl = document.getElementById("par-safety");
    var relocEl = document.getElementById("par-relocation");
    var pvStageEl = document.getElementById("pv-stage");
    var pvExcEl = document.getElementById("pv-exception");

    if (stateEl && !stateEl.value) stateEl.value = "QLD";
    if (relEl) relEl.value = "married";
    if (sepEl) sepEl.value = ParkCoDates.formatIsoLocal(sampleSepObj);
    if (divEl) divEl.value = "";
    if (ausEl) ausEl.value = "1150000";
    if (ausDebtEl) ausDebtEl.value = "0";
    if (supEl) supEl.value = "280000";
    if (korEl) korEl.value = "45000";
    if (korDebtEl) korDebtEl.value = "0";
    if (rateEl && !rateEl.value) rateEl.value = String(DEFAULT_KRW_PER_AUD);
    if (durEl) durEl.value = "medium";
    if (facEl) facEl.value = "children_carer";
    if (safEl) safEl.value = "no_fv";
    if (relocEl) relocEl.value = "want_korea_reloc";
    if (pvStageEl) pvStageEl.value = "820_granted";
    if (pvExcEl) pvExcEl.value = "shared_child";

    toolActive.m1 = true;
    toolActive.m2 = true;
    toolActive.m3 = true;
    toolActive.m4 = true;
    updateAll();
  }

  function resetAllData() {
    var idsToClear = [
      "fam-sep-date",
      "fam-divorce-date",
      "pool-aus-net",
      "pool-aus-debt",
      "pool-aus-super",
      "pool-kor-krw",
      "pool-kor-debt-krw",
      "par-safety",
      "par-relocation",
      "pv-stage"
    ];
    idsToClear.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.value = "";
    });
    var stateEl = document.getElementById("fam-state");
    var relEl = document.getElementById("fam-rel-type");
    var rateEl = document.getElementById("pool-krw-rate");
    var durEl = document.getElementById("match-duration");
    var facEl = document.getElementById("match-factor");
    if (stateEl) stateEl.value = "QLD";
    if (relEl) relEl.value = "married";
    if (rateEl) rateEl.value = String(DEFAULT_KRW_PER_AUD);
    if (durEl) durEl.value = "all";
    if (facEl) facEl.value = "all";

    toolActive.m1 = false;
    toolActive.m2 = false;
    toolActive.m3 = false;
    toolActive.m4 = false;
    updateAll();
  }

  function triggerS71bPrint() {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    if (document.body) document.body.classList.add("print-s71b-only");
    var cleanup = function () {
      if (document.body) document.body.classList.remove("print-s71b-only");
      window.removeEventListener("afterprint", cleanup);
    };
    window.addEventListener("afterprint", cleanup);
    if (typeof window.print === "function") {
      window.print();
    }
    setTimeout(cleanup, 1200);
  }

  function applyToolDeepLink(rawTool) {
    var target = resolveToolDeepLink(rawTool);
    if (!target || typeof document === "undefined") return null;
    if (target.toolKey && Object.prototype.hasOwnProperty.call(toolActive, target.toolKey)) {
      toolActive[target.toolKey] = true;
    }
    if (target.alsoActivate && Object.prototype.hasOwnProperty.call(toolActive, target.alsoActivate)) {
      toolActive[target.alsoActivate] = true;
    }
    updateAll();
    document.querySelectorAll(".section-block.is-deeplink-active").forEach(function (el) {
      el.classList.remove("is-deeplink-active");
    });
    var sec = document.getElementById(target.sectionId);
    if (sec) {
      sec.classList.add("is-deeplink-active");
      if (typeof sec.scrollIntoView === "function") {
        try {
          sec.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch (_) {
          sec.scrollIntoView();
        }
      }
    }
    return target;
  }

  /* ==========================================================================
     7. POLLER TELEMETRY & LANGUAGE SYNC
     ========================================================================== */
  var cachedFamPollingStatus = null;

  function applyFamPollingFees(data) {
    if (!data) return;
    var fs = data.fee_schedule || {};
    var hm = data.headline_metrics || {};
    if (fs.divorce_fee || hm.fcfcoa_divorce_fee) {
      liveFeeMetrics.divorceFee = fs.divorce_fee || hm.fcfcoa_divorce_fee;
    }
    if (fs.consent_orders_fee || hm.fcfcoa_consent_orders_fee) {
      liveFeeMetrics.consentOrdersFee = fs.consent_orders_fee || hm.fcfcoa_consent_orders_fee;
    }
    if (fs.initiating_fee || hm.fcfcoa_initiating_fee) {
      liveFeeMetrics.initiatingFee = fs.initiating_fee || hm.fcfcoa_initiating_fee;
    }
  }

  function renderFamPollerMatrix() {
    var kpiGrid = document.getElementById("fam-poller-kpis");
    var tbody = document.getElementById("fam-poller-tbody");
    if (!kpiGrid || !tbody || !cachedFamPollingStatus) return;

    var hm = cachedFamPollingStatus.headline_metrics || {};
    var feeFallback = !!cachedFamPollingStatus.fee_fallback_used;
    var kpis = [
      {
        label: currentLang === "ko" ? "FCFCOA 이혼 신청 수수료 (FY26–27)" : "FCFCOA Divorce Filing Fee",
        val: hm.fcfcoa_divorce_fee || liveFeeMetrics.divorceFee,
        sub: feeFallback
          ? (currentLang === "ko" ? "기준표 폴백 (Baseline Fallback)" : "Baseline Fallback Schedule")
          : (currentLang === "ko" ? "fcfcoa.gov.au 실시간 검증" : "Live verified via fcfcoa.gov.au")
      },
      {
        label: currentLang === "ko" ? "합의 명령 (Consent Orders)" : "Consent Orders Filing Fee",
        val: hm.fcfcoa_consent_orders_fee || liveFeeMetrics.consentOrdersFee,
        sub: currentLang === "ko"
          ? ("소송 개시 " + (hm.fcfcoa_initiating_fee || liveFeeMetrics.initiatingFee))
          : ("Initiating App " + (hm.fcfcoa_initiating_fee || liveFeeMetrics.initiatingFee))
      },
      {
        label: currentLang === "ko" ? "한·호 전 세계 자산 공개 의무" : "Worldwide Asset Disclosure",
        val: hm.worldwide_disclosure || "Mandatory (s 71B)",
        sub: currentLang === "ko" ? "2025.06.10 발효 가족법 개정" : "Effective 10 June 2025 Reform"
      },
      {
        label: currentLang === "ko" ? "재산분할 법원 제소기한" : "Property Limitation Period",
        val: hm.property_limitation || "12m (Divorce) / 2y (De Facto)",
        sub: currentLang === "ko" ? "s 44(3) 이혼 후 · s 44(5) 사실혼" : "s 44(3) Post-Divorce · s 44(5) De Facto"
      }
    ];

    kpiGrid.innerHTML = kpis.map(function (k) {
      return (
        '<div class="mini-kpi">' +
          '<span>' + k.label + '</span>' +
          '<strong>' + k.val + '</strong>' +
          '<small>' + k.sub + '</small>' +
        '</div>'
      );
    }).join("");

    var sources = cachedFamPollingStatus.sources || [];
    tbody.innerHTML = sources.map(function (s) {
      var title = currentLang === "ko" ? (s.title_ko || s.title_en) : (s.title_en || s.title_ko);
      var figs = (s.extracted_figures || []).join(" · ") || "-";
      var kb = s.bytes ? Math.round(s.bytes / 1024).toLocaleString("en-AU") + " KB" : "Live";
      var method = s.method || "https-direct-live";
      var isFallback = !!s.fallback_used || (s.status && s.status !== "verified_ok");
      var badgeHtml = isFallback
        ? '<span class="badge-warning">⚠ ' + escapeHtml(s.fee_extraction_status || s.status || "baseline_fallback") + ' (' + (s.http_status || 200) + ')</span>'
        : '<span class="badge-ok">✓ ' + escapeHtml(s.status || "verified_ok") + ' (' + (s.http_status || 200) + ')</span>';
      return (
        '<tr>' +
          '<td>' +
            '<div style="font-weight:700;">' + title + '</div>' +
            '<a href="' + s.url + '" target="_blank" rel="noopener" style="font-size:11.5px;">' + s.url + ' &nearr;</a>' +
          '</td>' +
          '<td style="font-size:12px;color:#4A5D5F;">' + (s.citation || "") + '</td>' +
          '<td style="font-weight:700;color:#0E3A3E;font-size:12.5px;">' + figs + '</td>' +
          '<td style="font-family:monospace;font-size:11.5px;">' +
            '<code>' + (s.sha256_prefix || "") + '</code><br/><span style="color:#4A5D5F;">' + kb + ' (' + method + ')</span>' +
          '</td>' +
          '<td>' + badgeHtml + '</td>' +
        '</tr>'
      );
    }).join("");
  }

  var cachedFamKnowledgeHub = null;

  function loadFamKnowledgeHub() {
    if (typeof fetch !== "function") return;
    fetch("data/fam_knowledge_hub.json", { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data) return;
        cachedFamKnowledgeHub = data;
        renderFamKnowledgeHub();
      })
      .catch(function () {});
  }

  function renderFamKnowledgeHub() {
    var bodyEl = document.getElementById("fam-hub-body");
    if (!bodyEl || !cachedFamKnowledgeHub || !Array.isArray(cachedFamKnowledgeHub.items)) return;
    var isEn = currentLang === "en";
    var searchEl = document.getElementById("fam-hub-search");
    var catEl = document.getElementById("fam-hub-cat");
    if (searchEl) {
      searchEl.setAttribute(
        "placeholder",
        isEn
          ? "Search 41 Q&As (e.g. s 71B, Shinohara, Watchlist, BFA, Consent Orders, 820)..."
          : "검색어 입력 (예: s 71B, Shinohara, 워치리스트, BFA, 합의명령, 820)..."
      );
    }
    var q = searchEl && searchEl.value ? searchEl.value.trim().toLowerCase() : "";
    var cat = catEl && catEl.value ? catEl.value : "all";
    var items = cachedFamKnowledgeHub.items.filter(function (it) {
      if (cat !== "all" && it.category !== cat) return false;
      if (!q) return true;
      var hay = [
        it.slug,
        it.question_ko,
        it.question_en,
        it.summary_ko,
        it.summary_en,
        (it.key_points_ko || []).join(" "),
        (it.key_points_en || []).join(" ")
      ].join(" ").toLowerCase();
      return hay.indexOf(q) !== -1;
    });

    if (!items.length) {
      bodyEl.innerHTML = '<div style="padding:14px;background:#FBF9F5;border:1px solid #E5DFD3;border-radius:8px;font-size:13.5px;color:#4A5D5F;">' +
        (isEn ? "No matching family law Q&As found." : "검색 조건에 일치하는 가족법 실무 문답이 없습니다.") +
        '</div>';
      return;
    }

    var countBanner = '<div style="font-size:12.5px;font-weight:700;color:#0E3A3E;margin-bottom:10px;">' +
      (isEn
        ? ("Showing " + items.length + " of " + cachedFamKnowledgeHub.items.length + " verified Family Law Q&As")
        : ("전체 " + cachedFamKnowledgeHub.items.length + "개 문항 중 " + items.length + "개 표시")) +
      '</div>';

    var cards = items.map(function (it) {
      var qTxt = isEn ? (it.question_en || it.question_ko) : it.question_ko;
      var sTxt = isEn ? (it.summary_en || it.summary_ko) : it.summary_ko;
      var kps = isEn ? (it.key_points_en || []) : (it.key_points_ko || []);
      var faqUrl = "https://faq.immispecialist.com/faq/" + encodeURIComponent(it.slug) + (isEn ? "?lang=en" : "?lang=ko");
      var kpHtml = kps.slice(0, 3).map(function (kp) {
        return '<li style="margin-bottom:4px;">' + kp + '</li>';
      }).join("");
      return (
        '<details style="background:#FFFFFF;border:1px solid #E5DFD3;border-radius:10px;padding:12px 14px;margin-bottom:8px;">' +
          '<summary style="cursor:pointer;font-weight:800;font-size:14px;color:#14282A;display:flex;justify-content:space-between;align-items:center;gap:10px;">' +
            '<span><code style="font-size:11.5px;color:#0E3A3E;margin-right:6px;">' + it.slug.toUpperCase() + '</code>' + qTxt + '</span>' +
          '</summary>' +
          '<div style="margin-top:10px;padding-top:10px;border-top:1px solid #E5DFD3;font-size:13.2px;line-height:1.65;color:#14282A;">' +
            '<p style="margin:0 0 8px;">' + sTxt + '</p>' +
            (kpHtml ? '<ul style="margin:0 0 10px;padding-left:18px;color:#4A5D5F;font-size:12.6px;">' + kpHtml + '</ul>' : '') +
            '<a href="' + faqUrl + '" target="_blank" rel="noopener" style="font-size:12.5px;font-weight:800;color:#0E3A3E;text-decoration:none;">' +
              (isEn ? "Read Full Dual-Perspective Legal Guide on FAQ Portal ↗" : "공식 FAQ 포털에서 신청인·상대방 양방향 전문 보기 ↗") +
            '</a>' +
          '</div>' +
        '</details>'
      );
    }).join("");

    bodyEl.innerHTML = countBanner + cards;
  }

  function loadFamPollingStatus() {
    if (typeof fetch !== "function") return;
    fetch("data/polling_status.json", { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data) return;
        cachedFamPollingStatus = data;
        applyFamPollingFees(data);
        renderFamPollerMatrix();
        updateAll();
      })
      .catch(function () {});
  }

  function syncInputAttributesForLang(isEn) {
    if (typeof document === "undefined") return;
    var brandLnk = document.getElementById("brand-hub-link");
    if (brandLnk) {
      brandLnk.setAttribute("title", isEn ? "Park & Co Legal & Visa Hub" : "박앤코 법률·비자 통합 허브");
    }
    var phMap = {
      "pool-aus-net": isEn ? "e.g. 1150000" : "예: 1150000",
      "pool-aus-debt": isEn ? "e.g. 0 (optional)" : "예: 0 (위 금액이 순자산이면 비워두기)",
      "pool-aus-super": isEn ? "e.g. 280000" : "예: 280000",
      "pool-kor-krw": isEn ? "e.g. 45000 (= 450M KRW)" : "예: 45000 (= 4.5억원)",
      "pool-kor-debt-krw": isEn ? "e.g. 0" : "예: 0"
    };
    Object.keys(phMap).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.setAttribute("placeholder", phMap[id]);
    });
  }

  function applyLanguage(lang, syncUrl) {
    currentLang = lang === "en" ? "en" : "ko";
    if (typeof document === "undefined") return;
    var isEn = currentLang === "en";
    document.documentElement.lang = currentLang;
    document.title = isEn ? TITLE_EN : TITLE_KO;
    if (document.body) document.body.setAttribute("data-ui-lang", currentLang);

    var dict = isEn ? EN_TRANSLATIONS : KO_TRANSLATIONS;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k]) el.innerHTML = dict[k];
    });
    syncInputAttributesForLang(isEn);
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
    });
    document.querySelectorAll(".parkco-svc-link").forEach(function (lnk) {
      var h = isEn ? lnk.getAttribute("data-en-href") : lnk.getAttribute("data-ko-href");
      if (h) lnk.setAttribute("href", h);
    });

    if (syncUrl && typeof window !== "undefined" && window.history && window.history.replaceState) {
      try {
        var u = new URL(window.location.href);
        u.searchParams.set("lang", currentLang);
        window.history.replaceState({}, "", u.toString());
      } catch (_) {}
    }

    renderFamPollerMatrix();
    renderFamKnowledgeHub();
    updateAll();
  }

  if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", function () {
      var m1Ids = ["fam-state", "fam-rel-type", "fam-sep-date", "fam-one-roof", "fam-divorce-date"];
      m1Ids.forEach(function (id) {
        var el = document.getElementById(id);
        if (el) {
          var handler = function () { toolActive.m1 = true; updateAll(); };
          el.addEventListener("input", handler);
          el.addEventListener("change", handler);
        }
      });

      var m2Ids = [
        "pool-aus-net",
        "pool-aus-debt",
        "pool-aus-super",
        "pool-kor-krw",
        "pool-kor-debt-krw",
        "pool-krw-rate",
        "match-duration",
        "match-factor",
        "ack-ethical-disclaimer"
      ];
      m2Ids.forEach(function (id) {
        var el = document.getElementById(id);
        if (el) {
          var handler = function () { toolActive.m2 = true; updateAll(); };
          el.addEventListener("input", handler);
          el.addEventListener("change", handler);
        }
      });

      var m3Ids = ["par-safety", "par-relocation"];
      m3Ids.forEach(function (id) {
        var el = document.getElementById(id);
        if (el) {
          var handler = function () { toolActive.m3 = true; updateAll(); };
          el.addEventListener("change", handler);
        }
      });

      var m4Ids = ["pv-stage", "pv-exception"];
      m4Ids.forEach(function (id) {
        var el = document.getElementById(id);
        if (el) {
          var handler = function () { toolActive.m4 = true; updateAll(); };
          el.addEventListener("change", handler);
        }
      });

      var btnSampleAll = document.getElementById("btn-load-sample-all");
      if (btnSampleAll) btnSampleAll.addEventListener("click", loadSampleData);

      var btnResetAll = document.getElementById("btn-reset-all");
      if (btnResetAll) btnResetAll.addEventListener("click", resetAllData);

      document.addEventListener("click", function (ev) {
        var sampleBtn = ev.target && ev.target.closest ? ev.target.closest(".js-trigger-sample") : null;
        if (sampleBtn) {
          loadSampleData();
          return;
        }
        var s71bCopyBtn = ev.target && ev.target.closest ? ev.target.closest("#btn-s71b-copy") : null;
        if (s71bCopyBtn) {
          var s71bPre = document.getElementById("fam-s71b-summary-text");
          var txt = s71bPre ? (s71bPre.textContent || "") : "";
          var origLabel = currentLang === "ko" ? "1페이지 s 71B 요약 복사" : "Copy 1-Page s 71B Summary";
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(txt).catch(function () {});
          }
          s71bCopyBtn.textContent = currentLang === "ko" ? "복사 완료 ✓" : "Copied ✓";
          setTimeout(function () { s71bCopyBtn.textContent = origLabel; }, 1700);
          return;
        }
        var s71bPrintBtn = ev.target && ev.target.closest ? ev.target.closest("#btn-s71b-print") : null;
        if (s71bPrintBtn) {
          triggerS71bPrint();
        }
      });

      var btnKo = document.getElementById("btn-lang-ko");
      var btnEn = document.getElementById("btn-lang-en");
      if (btnKo) btnKo.addEventListener("click", function () { applyLanguage("ko", true); });
      if (btnEn) btnEn.addEventListener("click", function () { applyLanguage("en", true); });

      var copyBtn = document.getElementById("btn-fam-copy");
      if (copyBtn) {
        copyBtn.addEventListener("click", function () {
          var pre = document.getElementById("fam-diagnostic-brief-text");
          if (pre && navigator.clipboard) {
            navigator.clipboard.writeText(pre.textContent || "");
            copyBtn.textContent = currentLang === "ko" ? "복사 완료" : "Copied";
            setTimeout(function () {
              copyBtn.textContent = currentLang === "ko" ? KO_TRANSLATIONS.btnCopyBrief : EN_TRANSLATIONS.btnCopyBrief;
            }, 1800);
          }
        });
      }

      var printBtn = document.getElementById("btn-print-doc");
      if (printBtn) printBtn.addEventListener("click", function () { window.print(); });

      var params = new URLSearchParams(window.location.search);
      if (params.get("lang") === "en") {
        applyLanguage("en", false);
      } else {
        applyLanguage("ko", false);
      }
      var toolParam = params.get("tool");
      if (toolParam) {
        applyToolDeepLink(toolParam);
      }
      var hubSearch = document.getElementById("fam-hub-search");
      var hubCat = document.getElementById("fam-hub-cat");
      if (hubSearch) hubSearch.addEventListener("input", renderFamKnowledgeHub);
      if (hubCat) hubCat.addEventListener("change", renderFamKnowledgeHub);
      loadFamPollingStatus();
      loadFamKnowledgeHub();
    });
  }
})(typeof window !== "undefined" ? window : globalThis);
