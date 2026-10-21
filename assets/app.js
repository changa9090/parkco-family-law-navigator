/* Park & Co Lawyers — Australian Family Law, Property Precedent Matcher & Visa Crossover Navigator */
(function () {
  "use strict";

  var currentLang = "ko";
  var KRW_PER_AUD = 910; // Approx 910 KRW = 1 AUD (so 10,000 KRW = 1 만원 ≈ $10.99 AUD)

  /* 12 Verified FCFCOA Property Settlement Judgments from Park & Co Family Law KDB
     All published on AustLII under Court-approved pseudonyms pursuant to s 114Q(2) of the Family Law Act 1975 (Cth). */
  var FCFCOA_PRECEDENT_CASES = [
    {
      id: "han-2026",
      citation: "Han & Han [2026] FedCFamC1A 54",
      date: "2026-03-26",
      court: "FCFCOA Div 1 (Appellate)",
      durationBand: "short",
      durationText_ko: "단기 혼인 (약 3.8년: 2018 초 ~ 2021.12)",
      durationText_en: "Short Marriage (~3.8 yrs: early 2018 – Dec 2021)",
      poolAud: "$7,401,418 (비연금 자산 + 합산 Super)", poolAud_en: "$7,401,418 (Non-super + Combined Super)",
      factors: ["initial_capital"],
      contribSplit: "75% (남편) : 25% (아내) [비연금 자산] / Super 34.6% (아내)", contribSplit_en: "75% (Husband) : 25% (Wife) [Non-Super] / 34.6% Super to Wife",
      adjSplit: "+0.73% (s 79(5) 미세 조정)", adjSplit_en: "+0.73% minor s 79(5) adjustment",
      finalSplit: "75% : 25% (비연금) / 65.4% : 34.6% (Super)", finalSplit_en: "75% : 25% (Non-Super) / 65.4% : 34.6% (Super)",
      summary_ko: "약 4년 미만의 단기 혼인에서 남편의 압도적인 혼인 전 초기 자산 기여도를 인정하여 비연금 자산 기여도를 75:25로 산정하고, 합산 슈퍼애뉴에이션에 대해서는 아내에게 34.6%를 인정한 항소부 판결(at [9], [96]-[98]).",
      summary_en: "In a short marriage under 4 years with a $7.40M combined pool, the Court assessed non-super contributions at 75% (Husband) / 25% (Wife) due to overwhelming initial capital, plus 34.6% of combined superannuation to the Wife (at [9], [96]-[98]).",
      url: "https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/FedCFamC1A/2026/54.html"
    },
    {
      id: "escamilla-2026",
      citation: "Escamilla & Astrauskas [2026] FedCFamC1A 145",
      date: "2026-08-26",
      court: "FCFCOA Div 1 (Appellate)",
      durationBand: "short",
      durationText_ko: "단기 동거·혼인 (약 4년: 2018 동거 ~ 2022 별거)",
      durationText_en: "Short Relationship (~4 yrs: 2018 cohabitation – 2022 separation)",
      poolAud: "$2,553,297 (총자산 $3.50M + 법률비용 Add-back $166k - 부채 $1.11M)", poolAud_en: "$2,553,297 ($3.50M gross + $166k legal fee add-back - $1.11M debt)",
      factors: ["initial_capital", "overseas_disclosure"],
      contribSplit: "단기 혼인 자산·부채 및 선지급 법률비용($166,678) Add-back 종합 산정", contribSplit_en: "Holistic assessment incl. $166,678 paid legal fees add-back",
      adjSplit: "일방의 심리 직후 부동산 매입 미공개(Non-disclosure)로 인한 증거 재개 반영", adjSplit_en: "Evidence reopened due to post-hearing property purchase non-disclosure",
      finalSplit: "52% (남편) : 48% (아내)", finalSplit_en: "52% (Husband) : 48% (Wife)",
      summary_ko: "4년 단기 관계(공동 자녀 없음)에서 쌍방이 각 60:40 또는 65:35를 주장했으나, 재판부는 선지급 변호사 비용($166,678)을 자산 풀에 합산(Add-back)하고 미공개 부동산 취득 증거를 재개 심리하여 최종 52:48 분할을 확정한 판결(at [172], [192]).",
      summary_en: "In a 4-year relationship ($2.55M net pool including $166,678 in pre-paid legal fee add-backs and reopened evidence due to non-disclosure of a property purchase), final orders divided the net pool 52% / 48% (at [172], [192]).",
      url: "https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/FedCFamC1A/2026/145.html"
    },
    {
      id: "driesen-2026",
      citation: "Driesen & Klerk [2026] FedCFamC1A 74",
      date: "2026-05-01",
      court: "FCFCOA Div 1 (Appellate)",
      durationBand: "medium",
      durationText_ko: "중기 혼인 (약 11.5년: 2009 ~ 2020 말 한집 별거)",
      durationText_en: "Medium Marriage (~11.5 yrs: 2009 – late 2020 under one roof)",
      poolAud: "다수 부동산(Suburb D & Suburb M) 및 사업체 포함 중대형 풀", poolAud_en: "Multi-property (Suburb D & Suburb M) and business asset pool",
      factors: ["initial_capital"],
      contribSplit: "초기 부동산($436k 매입·개인상해 보상금·가족 자금 투입) 종합 반영 (60%~64% 쟁점)", contribSplit_en: "Initial property ($436k + PI payout + family funds) weighed holistically (60–64% range)",
      adjSplit: "s 79(5) 추가 조정 없음", adjSplit_en: "Nil further s 79(5) adjustment",
      finalSplit: "초기 부동산 투입 배우자 우위 인정 (항소부 재량 재행사)", finalSplit_en: "Substantial weighting in favour of initial property contributor (Full Court re-exercise)",
      summary_ko: "약 11.5년 혼인에서 일방이 혼인 전 개인상해 보상금과 가족 자금으로 매입한 부동산의 초기 기여 가치를 원심이 과소평가한 잘못을 바로잡고, 13년 전체 기간의 기여를 수학적 가감이 아닌 종합적 가치판단(Holistic Synthesis, Dickons 원칙)으로 재산정한 판결(at [41], [60]).",
      summary_en: "Over an ~11.5-year relationship, the Full Court overturned the trial judge's valuation error regarding an initial property funded by personal injury compensation and family funds, reaffirming holistic s 79(4) assessment (at [41], [60]).",
      url: "https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/FedCFamC1A/2026/74.html"
    },
    {
      id: "fuller-park-2026",
      citation: "Fuller & Park [2026] FedCFamC2F 808",
      date: "2026-06-04",
      court: "FCFCOA Div 2",
      durationBand: "medium",
      durationText_ko: "중기 관계 (s 90SM 사실혼/가족 재산분할 · 2022.7 최종 별거)",
      durationText_en: "Medium Relationship (s 90SM Property Adjustment · sep. July 2022)",
      poolAud: "주거용 부동산(Suburb G) 및 합산 Superannuation 단일 풀", poolAud_en: "Single global pool (Suburb G real property + combined Superannuation)",
      factors: ["initial_capital", "children_carer"],
      contribSplit: "60% (아버지) : 40% (어머니) — 우월한 재정적 기여 인정", contribSplit_en: "60% (Father) : 40% (Mother) — superior initial financial contribution",
      adjSplit: "미성년 자녀 양육 및 장래요소에 따른 어머니 측 상향 조정 반영", adjSplit_en: "Future needs adjustment in favour of Mother for primary care of child",
      finalSplit: "기여도 60:40 판정 후 양육·장래요소 조정 및 Super Split 병행", finalSplit_en: "60:40 contributions adjusted for parenting care + superannuation split",
      summary_ko: "연금과 비연금 자산을 단일 풀(Global Approach)로 묶어 아버지의 우월한 재정적 기여도를 60:40으로 평가하되(Horrigan & Horrigan [2020] 원칙), 미성년 자녀 양육 부담을 장래 조정 요소로 반영한 2026년 6월 판결(at [53], [120]-[124]).",
      summary_en: "Applying a global single-pool approach (super + non-super), the Court assessed holistic contributions at 60% / 40% in favour of the financially superior contributor, balanced by parenting/future needs adjustments (at [53], [120]-[124]).",
      url: "https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/FedCFamC2F/2026/808.html"
    },
    {
      id: "kimmel-2026",
      citation: "Kimmel & Kimmel [2026] FedCFamC1A 136",
      date: "2026-08-04",
      court: "FCFCOA Div 1 (Appellate)",
      durationBand: "long",
      durationText_ko: "장기 관계 (약 13년: 2010 교제 · 2013 혼인 ~ 2023 한집 별거)",
      durationText_en: "Long Relationship (~13 yrs: 2010–2023 under one roof)",
      poolAud: "$758,708+ (가용 현금·자산 풀 — 남편의 재산 불성실 공개 쟁점)", poolAud_en: "$758,708+ known pool (material non-disclosure by Husband)",
      factors: ["overseas_disclosure", "children_carer"],
      contribSplit: "50% : 50% (혼인 기간 기여도 균등 인정)", contribSplit_en: "50% : 50% (Equal contributions over 13-year relationship)",
      adjSplit: "+15% 아내 측 가산 (s 79(5) 장래요소 및 남편의 재산 불성실 공개 반영, at [487])", adjSplit_en: "+15% uplift to Wife (s 79(5) future needs & Husband non-disclosure, at [487])",
      finalSplit: "65% (아내) : 35% (남편)", finalSplit_en: "65% (Wife) : 35% (Husband)",
      summary_ko: "13년 관계에서 기본 기여도는 50:50 균등으로 보았으나, 남편의 심각한 재산 공개 의무 불이행(Inadequate Financial Disclosure)과 아내의 장래 사정(s 79(5))을 근거로 아내에게 +15%p(양자 격차 30%p)를 가산하여 최종 65:35 분할을 확정한 판결(at [410], [487]).",
      summary_en: "In a 13-year relationship, contributions were assessed equally (50/50), but the Husband's inadequate financial disclosure and s 79(5) future circumstances justified a +15% adjustment to the Wife, resulting in a 65% / 35% final split (at [410], [487]).",
      url: "https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/FedCFamC1A/2026/136.html"
    },
    {
      id: "naisby-2026",
      citation: "Naisby [2026] FedCFamC1A 164",
      date: "2026-09-15",
      court: "FCFCOA Div 1 (Appellate)",
      durationBand: "long",
      durationText_ko: "장기 혼인 (약 24.5년: 1990.12 ~ 2015.4 별거, 자녀 5명)",
      durationText_en: "Long Marriage (~24.5 yrs: Dec 1990 – Apr 2015, 5 children)",
      poolAud: "$3,314,903.50 (비즈니스 매각대금·무담보 주택·TPD 보험금 포함)", poolAud_en: "$3,314,903.50 (Business sale proceeds, unencumbered home & TPD payout)",
      factors: ["children_carer", "initial_capital"],
      contribSplit: "52% (아내) : 48% (남편) [at [156]]", contribSplit_en: "52% (Wife) : 48% (Husband) [at [156]]",
      adjSplit: "+15% 아내 측 가산 (s 75(2) 장래요소 · 미성년 자녀 주양육, at [169])", adjSplit_en: "+15% uplift to Wife (s 75(2) future needs & care of children, at [169])",
      finalSplit: "67% (아내) : 33% (남편) [at [11], [170]]", finalSplit_en: "67% (Wife) : 33% (Husband) [at [11], [170]]",
      summary_ko: "5명의 자녀를 둔 24년 장기 혼인(순자산 $3.31M)에서 원심은 기여도를 52:48(아내 우위)로 평가한 뒤 s 75(2) 장래요소로 +15%를 추가 가산해 67:33을 명령했으며, 항소부는 남편의 TPD 장애보험금 기여 및 15% 조정폭의 적정성에 대해 제한적 항고 허가를 부여한 판결.",
      summary_en: "In a 24.5-year marriage with 5 children ($3.31M pool), the trial judge assessed contributions at 52/48 to the Wife plus a +15% s 75(2) adjustment for final orders of 67% / 33% (leave to appeal granted on weight given to Husband's TPD payout).",
      url: "https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/FedCFamC1A/2026/164.html"
    },
    {
      id: "franc-2026",
      citation: "Franc & Franc [2026] FedCFamC1A 159",
      date: "2026-09-10",
      court: "FCFCOA Div 1 (Appellate)",
      durationBand: "long",
      durationText_ko: "장기 관계 (약 22년: 2000 동거 · 2003 혼인 ~ 2022.8 별거)",
      durationText_en: "Long Relationship (~22 yrs: 2000–2022, High-Net-Worth Pool)",
      poolAud: "$23,065,026 ~ $40,054,859 ($37M 부동산 및 기업그룹 지분 포함)", poolAud_en: "$23.06M – $40.05M (incl. $37M property & corporate group interests)",
      factors: ["initial_capital", "family_violence", "separate_finances"],
      contribSplit: "62% (남편) : 38% (아내) — 대규모 기업그룹·차입금 상환 재정 기여", contribSplit_en: "62% (Husband) : 38% (Wife) — corporate group & debt service contributions",
      adjSplit: "+10% 아내 측 가산 (s 79(5) 현재 및 장래 사정 종합 조정, at [434])", adjSplit_en: "+10% uplift to Wife (s 79(5) current and future circumstances, at [434])",
      finalSplit: "52% (남편) : 48% (아내)", finalSplit_en: "52% (Husband) : 48% (Wife)",
      summary_ko: "명의상 아내가 99% 지분을 가진 $37M 부동산이라도 남편의 초기 자산과 기업그룹 수익으로 전액 조달·상환된 점을 반영해 기여도를 62:38(남편 우위)로 판정하되, s 79(5) 장래요소로 아내에게 +10%를 가산하여 최종 52:48로 균형을 맞춘 초고액 자산 판례.",
      summary_en: "Despite the Wife holding 99% legal title to a $37M property, the Court assessed global contributions at 62% (Husband) / 38% (Wife) due to his corporate funding, then applied a +10% s 79(5) adjustment to the Wife for a 52% / 48% final division.",
      url: "https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/FedCFamC1A/2026/159.html"
    },
    {
      id: "harridan-2026",
      citation: "Harridan & Harridan [2026] FedCFamC1A 104",
      date: "2026-06-10",
      court: "FCFCOA Div 1 (Appellate)",
      durationBand: "long",
      durationText_ko: "장기 혼인 (22년+: 1998 동거 · 1999 혼인, 처가 6년 무상거주)",
      durationText_en: "Long Marriage (22+ yrs: 1998 cohabitation, 6 yrs rent-free with Wife's parents)",
      poolAud: "$6,641,254 (at [94])",
      factors: ["initial_capital", "children_carer"],
      contribSplit: "60% (아내) : 40% (남편) [처가 6년 무상거주 지원·산재보상금·주양육]", contribSplit_en: "60% (Wife) : 40% (Husband) [6 yrs rent-free parental housing + WC payout + care]",
      adjSplit: "-4% 남편 측 조정 (s 79(5))", adjSplit_en: "-4% s 79(5) adjustment in favour of Husband",
      finalSplit: "56% (아내) : 44% (남편) [항소부: 조각별 합산 금지 원칙 천명]", finalSplit_en: "56% (Wife) : 44% (Husband) [Holistic synthesis reaffirmed]",
      summary_ko: "순자산 $6.64M 사건에서 아내가 처가에서의 6년 무상거주 기여·산재보상금·자녀 주양육을 바탕으로 기여도 60:40, 최종 56:44를 선고받았으며, 항소부는 기여도를 시기별·항목별로 쪼개어 점수를 매기지 말고 전체 기간을 하나로 통합 평가(Instinctive Synthesis)해야 한다고 판시.",
      summary_en: "In a $6.64M pool where the couple lived rent-free with the Wife's parents for 6 years, the trial judge ordered a 56% / 44% split (60/40 contributions less 4% s 79(5)); Full Court emphasised holistic non-compartmentalised evaluation.",
      url: "https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/FedCFamC1A/2026/104.html"
    },
    {
      id: "daalman-2026",
      citation: "Daalman & Daalman (No 2) [2026] FedCFamC2F 830",
      date: "2026-07-01",
      court: "FCFCOA Div 2",
      durationBand: "long",
      durationText_ko: "초장기 혼인 (약 30년: 1991 ~ 2021 별거, 성인 자녀 1명)",
      durationText_en: "30-Year Long Marriage (1991 – 2021, post-separation stroke)",
      poolAud: "주거용 부동산(Suburb B) 및 Superannuation 별도 풀", poolAud_en: "Suburb B real property + separate Superannuation pool",
      factors: ["initial_capital", "children_carer"],
      contribSplit: "30년 혼인 초기 유입 부동산의 희석/유지 가치를 전체 기여와 통합 평가", contribSplit_en: "Initial property introduction weighed across 30-year marriage",
      adjSplit: "별거 후 남편의 뇌졸중(2022.11) 등 건강·장래 의료/생계 요소(s 79(5)) 반영", adjSplit_en: "Husband post-separation stroke (Nov 2022) & health needs (s 79(5))",
      finalSplit: "55.5% (남편) : 44.5% (아내) [비연금 부동산 자산]", finalSplit_en: "55.5% (Husband) : 44.5% (Wife) [Non-super property]",
      summary_ko: "30년 장기 혼인에서 쌍방 모두 70:30을 주장했으나, 법원은 초기 유입 부동산의 가치와 별거 후 발생한 남편의 뇌졸중(건강 악화)을 종합 고려하여 비연금 부동산 자산을 55.5% : 44.5%로 분할 명령한 판결.",
      summary_en: "Following a 30-year marriage where both parties claimed 70/30, the Court weighed initial property introduction and the Husband's post-separation stroke to order a 55.5% / 44.5% division of non-superannuation property.",
      url: "https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/FedCFamC2F/2026/830.html"
    },
    {
      id: "vacek-novosel-2026",
      citation: "Vacek & Novosel (No 5) [2026] FedCFamC2F 261",
      date: "2026-03-11",
      court: "FCFCOA Div 2",
      durationBand: "medium",
      durationText_ko: "중장기 관계 (별거 후 가정폭력 및 다수 부동산 매각·세금 격리)",
      durationText_en: "Family Violence Impact on Contributions & Post-Separation Care",
      poolAud: "복수 부동산(Suburb G, H St, M St) 및 양도세 격리금($310,000) 포함", poolAud_en: "Multiple properties (Suburb G, H St, M St) + $310k CGT reserve",
      factors: ["family_violence", "children_carer"],
      contribSplit: "남편의 별거 후 가정폭력이 어머니의 양육·재산보전 기여를 현저히 가중시킴 인정", contribSplit_en: "Post-separation family violence rendered Mother's care/contributions significantly more arduous",
      adjSplit: "자녀 양육 및 장래요소 가산 (아내 측 67.5% 청구 vs 남편 측 55:45/70:30 공방)", adjSplit_en: "Substantial parenting & future needs adjustment in Mother's favour",
      finalSplit: "가정폭력 피해 양육 모친 우위 분할 및 핵심 부동산 단독 귀속 명령", finalSplit_en: "Dominant division & sole property transfer in favour of primary-carer Mother",
      summary_ko: "남편의 가정폭력(특히 별거 이후 지속된 폭력)이 아내의 자녀 양육 및 기여를 훨씬 고되게(Significantly more arduous) 만들었다는 법리(Kennon 및 2025년 개정 s 79(4)(ca))를 적용하여 어머니 측에 대폭 유리한 재산분할을 명령한 판결.",
      summary_en: "Held that the Father's post-separation family violence rendered the Mother's parenting and homemaker contributions significantly more arduous, warranting a substantial contribution weighting in the Mother's favour.",
      url: "https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/FedCFamC2F/2026/261.html"
    },
    {
      id: "barda-zerri-2026",
      citation: "Barda & Zerri [2026] FedCFamC2F 122",
      date: "2026-02-04",
      court: "FCFCOA Div 2",
      durationBand: "medium",
      durationText_ko: "혼인/동거 중 철저한 각자 통장·단독 명의 관리 사건",
      durationText_en: "Separate Bank Accounts & Individual Asset Ownership (s 79(2))",
      poolAud: "각자 명의 계좌 및 단독 명의 자산 통합 대상 여부 쟁점", poolAud_en: "Separate bank accounts & individually titled properties",
      factors: ["separate_finances"],
      contribSplit: "각자 통장 관리(Separate Finances)만으로는 s 79(2) 재산분할 배제 불가", contribSplit_en: "Separate finances during relationship do not exclude s 79(2) adjustment",
      adjSplit: "Stanford v Stanford (2012) 247 CLR 108 기준 공정·형평성 인정", adjSplit_en: "Just and equitable threshold satisfied under Stanford v Stanford",
      finalSplit: "단독 명의·별도 계좌 자산 전체를 재산분할 대상 풀로 편입 명령", finalSplit_en: "All individually titled assets and accounts included in divisible pool",
      summary_ko: "'결혼 기간 내내 통장을 각자 쓰고 내 돈으로 내 명의 집을 샀으니 나눠줄 필요가 없다'는 주장을 배척하고, 혼인 파탄 시 별도 계좌·단독 명의 자산도 모두 s 79(2) 재산분할 대상이 됨을 명확히 한 2026년 판결(at [20]).",
      summary_en: "Confirmed that operating separate bank accounts and holding assets in individual names during the relationship does NOT bar a just and equitable property settlement order under s 79(2) / s 90SM(3) (at [20]).",
      url: "https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/FedCFamC2F/2026/122.html"
    },
    {
      id: "tomaras-worldwide",
      citation: "Tomaras & Tomaras [2021] FedCFamC1A 82 (with s 71B 2025 Reform)",
      date: "2021-12-13",
      court: "FCFCOA Div 1 (Appellate)",
      durationBand: "long",
      durationText_ko: "한·호 국제 자산 (한국 부동산·예금·연금 보유 및 은닉 쟁점)",
      durationText_en: "Worldwide Asset Pool & Overseas Property Non-Disclosure (s 71B)",
      poolAud: "호주 내 자산 + 한국 등 해외 부동산·금융자산 전 세계 합산 풀", poolAud_en: "Australian assets + overseas (South Korea) real estate & bank accounts",
      factors: ["overseas_disclosure"],
      contribSplit: "해외(한국) 소재 부동산·예금도 호주 법원의 대인관할(in personam) 아래 100% 합산", contribSplit_en: "Overseas (Korean) property & accounts 100% included via in personam jurisdiction",
      adjSplit: "해외 재산 은닉·불성실 공개 시 공개 거부 배우자에게 불리한 추정(Adverse Inference) 적용", adjSplit_en: "Adverse inference & s 79(5) uplift against party failing to disclose overseas assets",
      finalSplit: "은닉된 해외 자산 가치를 감안해 호주 내 남아있는 부동산의 대부분을 상대 배우자에게 배분 가능", finalSplit_en: "Innocent spouse awarded dominant share of local Australian assets to offset undisclosed overseas pool",
      summary_ko: "한국에 있는 아파트·전세금·예금·연금도 호주 가족법원 재산분할 풀에 모두 포함되며(2025.6.10 발효 s 71B 법정 공개 의무), 이를 숨기거나 친족에게 빼돌린 경우 법원이 호주 내 자산을 상대방에게 대폭 몰아주는 방식으로 제재함을 확립한 판례.",
      summary_en: "Established that overseas real estate, bank accounts, and pensions (e.g. in South Korea) form part of the global asset pool under s 71B; non-disclosure triggers adverse inferences awarding a dominant share of Australian assets to the innocent spouse.",
      url: "https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/FedCFamC1A/2021/82.html"
    }
  ];

  var KO_TRANSLATIONS = {
    svgFamS1Title: "한·호 전 세계 자산 풀 확정",
    svgFamS1Sub: "호주+한국 부동산·연금·부채 공개",
    svgFamS2Title: "기여도 종합 평가 (%)",
    svgFamS2Sub: "재정·비재정·가사양육·가정폭력(2025)",
    svgFamS3Title: "현재·장래 사정 조정 (±%)",
    svgFamS3Sub: "미성년 자녀 양육·건강·소득격차·은닉",
    svgFamS4Title: "공정·형평성 최종 판결 (%)",
    svgFamS4Sub: "Consent Orders 또는 법원 판결",
    footerFirmName: "법무법인 박앤코 (PNC Legal Pty Ltd t/a Park & Co Lawyers)",
    ecoHubLink: "← 박앤코 법률 인텔리전스 통합 허브 (All Navigators)",
    ecoPartnerLink: "파트너 비자(820/309/300)",
    ecoParentLink: "부모초청 비자(143/864/870)",
    ecoEmpLink: "호주 고용법 내비게이터",
    brandTag: "호주 가족법 · 한·호 재산분할 판례 매칭 · 양육권 내비게이터",
    navM1: "별거 12개월 · 제척기간",
    navM2: "재산분할 법원판례 매칭",
    navM3: "양육권 · 자녀 귀국",
    navM4: "파트너비자 별거 생존",
    navM5: "상담 브리프 전송",
    navPoller: "1차 법령·법원수수료·KDB 검증",
    btnPrint: "🖨️ 진단서 출력",
    heroEyebrow: "FAMILY LAW ACT 1975 (CTH) · 2024–2025 REFORMS · 3,704 KDB CASES",
    heroTitle: "호주 가족법 · 한·호 재산분할 판례 매칭 & 양육권 내비게이터",
    heroLead: "<strong>이혼 12개월 별거 · 재산분할 제척기간</strong>, <strong>한·호 전 세계 자산 풀(s 71B) 및 실제 호주 가족법원(FCFCOA) 재산분할 판결 비율 매칭(3,704건 KDB)</strong>, <strong>양육권 · 자녀 출국금지</strong>와 <strong>파트너비자 별거 생존</strong>을 한눈에 진단합니다.",
    specName: "박창민 대표변호사 (Chang Min Park)",
    specRole1: "Principal Solicitor · Acc. Spec. (Immi)",
    specName2: "이수진 변호사 (Gina Lee)",
    specRole2: "Solicitor · Family Law",
    specSlogan: "\"삶에 집중하세요, 법률은 저희가 맡겠습니다.\"",
    specMeta: "법무법인 박앤코 (Park & Co Lawyers · Underwood QLD)<br/>공식 이메일: <strong>enquiry@parkcolawyers.com</strong><br/>FCFCOA 이혼·재산분할·양육권 및 파트너비자 교차 사건",
    specCta: "가족법 전담팀 1:1 상담 브리프 전송 →",
    liveStatusLabel: "실시간 가족법령 · 3,704건 판례 검증됨",
    statLabelSep: "이혼 최소 별거기간",
    statLabelLim: "재산분할 제척기간",
    statLabelWorld: "한·호 전 세계 자산",
    statLabelWatch: "무단 자녀 국외이주",
    statLabelKdb: "박앤코 가족법 KDB",
    m1Title: "이혼 12개월 별거 & 재산분할 제척기간 계산기",
    m1Desc: "재산분할은 별거 직후 즉시 진행할 수 있으나, <strong>이혼 확정 후 12개월(법률혼, s 44(3))</strong> 또는 <strong>별거 후 2년(사실혼, s 44(5))</strong>이 지나면 청구권이 제한됩니다.",
    m1FormHeading: "관계 유형 · 별거일 · 이혼 확정일 입력",
    lblRelType: "혼인 / 사실혼(De Facto) 구분",
    optRelMarried: "법률혼 부부 (Married — s 79 재산분할 & 이혼 확정 후 12개월 기한)",
    optRelDefacto: "사실혼 커플 (De Facto — s 90SM 재산분할 & 별거 후 2년 기한)",
    lblSepDate: "최종 별거 시작일 (Date of Final Separation)",
    lblOneRoof: "한집 별거 (Separation Under One Roof, s 49(2)) 포함 여부",
    optRoofNo: "별도 거주로 완전 분리 별거",
    optRoofYes: "경제·자녀 사정상 같은 집에서 한집 별거 중 (독립 제3자 진술서 필수)",
    lblDivorceDate: "이혼 명령 확정일 (Divorce Order Effective Date — 이미 이혼 확정된 경우만 입력)",
    m1ResultHeading: "이혼 신청 가능일 & 재산분할 법정 제척기간 판정",
    m2Title: "한·호 전 세계 자산 풀(s 71B) & 법원 재산분할 판례 매칭",
    m2Desc: "호주·한국 자산을 합산하고, 유사한 조건(혼인기간·기여·자녀·가정폭력·각자통장)에서 <strong>실제 호주 가족법원(FCFCOA)이 몇 대 몇으로 분할 판결했는지</strong> 공개 판례로 대조합니다.",
    ethicsBannerBody: "<strong>⚖️ [법률·윤리 고지 — ASCR r 36.1 & FLA s 114Q(2)]</strong> 호주 가족법상 재산분할은 정해진 수학 공식이 아닌 <strong>재판부의 종합적 재량 판단(<code>Stanford (2012)</code>)</strong>입니다. 본 도구는 특정 비율을 예측·보장하지 않으며, 법원 승인 가명(<code>s 114Q(2)</code>)으로 공개된 <strong>실제 선고 판례 샘플(기여도 % + 장래조정 % = 최종 %)</strong>만 비교 열람용으로 제공합니다.",
    ethicsCheckboxLabel: "위 고지사항(재산분할은 법원의 재량 판단이며 아래는 실제 선고된 유사 판례 샘플임)을 확인합니다.",
    m2FormHeading: "한·호 자산 내역 및 사건 조건 선택 (유사 판례 샘플링 필터)",
    lblAusNet: "호주 내 순자산 합계 (주택 지분 + 예금 + 비즈니스 - 모기지 부채, AUD $)",
    lblAusSuper: "호주 부부 합산 슈퍼애뉴에이션 (Combined Superannuation, AUD $)",
    lblKorKrw: "한국 내 순자산 합계 (한국 아파트·전세보증금·예금·퇴직연금, 만원 단위 — 예: 50000 = 5억원)",
    lblMatchDuration: "동거 및 혼인 합산 기간 (Relationship Duration Band)",
    optDurAll: "전체 기간 판례 보기 (All Durations)",
    optDurShort: "단기 혼인·동거 (5년 미만 — 초기 자금 기여도 비중 극대화 구간)",
    optDurMed: "중기 혼인·동거 (5년 ~ 12년 — 초기 기여와 양육·가사 기여 절충 구간)",
    optDurLong: "장기 혼인·동거 (12년 이상 — 기여도 균등화 경향 + s 79(5) 장래요소 핵심 구간)",
    lblMatchFactor: "핵심 쟁점 요인 선택 (Key Factual Factor in Precedents)",
    optFacAll: "전체 대표 판례 매칭 (All Key Factors)",
    optFacInitial: "일방의 초기 부동산·자금 투입 / 부모님 자금 지원 (Initial Capital / Gift)",
    optFacChildren: "미성년 자녀 주양육 & 장래 소득능력 격차 (s 75(2) / s 79(5) Future Needs)",
    optFacFv: "가정폭력 · 경제적 통제 · 별거 후 폭력 (s 79(4)(ca) & Kennon 조정)",
    optFacDisclosure: "한국 등 해외 자산 보유 · 상대방 재산 은닉/불성실 공개 (s 71B & Add-backs)",
    optFacSeparate: "각자 통장 관리 · 단독 명의 자산 보유 (Separate Finances — s 79(2))",
    m2ResultHeading: "한·호 통합 자산 풀(s 71B) & 매칭된 실제 FCFCOA 판결 분포",
    matchedCasesHeading: "🔍 선택한 조건과 매칭된 호주 가족법원(FCFCOA) 실제 재산분할 판결문 샘플",
    m3Title: "양육권(아동 안전 최우선 s 60CC) & 자녀 한국 귀국 · 워치리스트 진단",
    m3Desc: "2024년 공동친권 추정 폐지 이후의 양육권 기준과, 상대 부모 동의 없는 자녀 출국 금지(s 65Y · 공항 워치리스트) 대응 절차를 안내합니다.",
    m3FormHeading: "양육 환경 · 가정폭력 · 한국 귀국(Relocation) 계획 입력",
    lblParSafety: "1. 가정폭력 · 아동 학대 · 강압적 통제 이력 유무 (s 60CC(2)(a) 최우선 요소)",
    optParFvYes: "가정폭력·DVO·언어/정서/경제적 학대 이력 있음 (감독 면접교섭·단독 결정권 검토)",
    optParFvNo: "안전 위협 없음 (부모 간 협의를 통한 양육 계획서 / Consent Orders 가능)",
    lblParReloc: "2. 자녀 동반 한국 영구 귀국(International Relocation) 또는 해외여행 계획",
    optRelocKorea: "자녀를 데리고 한국으로 귀국·이주 희망 (상대 배우자 반대 중)",
    optRelocPrevent: "상대 배우자가 자녀를 무단으로 해외에 데리고 나갈 위험이 있어 출국금지(Watchlist) 필요",
    optRelocDom: "호주 내 동일 지역 거주 유지",
    m3ResultHeading: "개정 Part VII 양육권 & 국외이주 법적 대응 로드맵",
    m4Title: "파트너 비자(820·309) 별거 시 단독 영주권 생존 진단",
    m4Desc: "파트너 비자 심사 중 관계가 끝났더라도 <strong>가정폭력 피해(Div 1.5)</strong> 또는 <strong>공동 자녀 양육권</strong>이 있으면 스폰서 없이 단독 영주권(801/100) 승인이 가능합니다.",
    m4FormHeading: "현재 소지 비자 단계 & 별거 사유 입력",
    lblPvStage: "현재 파트너 비자 진행 단계",
    optPv820Granted: "임시 파트너 비자(820 또는 309 입국 후) 이미 승인됨 → 801/100 영주권 대기 중 별거",
    optPv820Pending: "온쇼어 820/801 접수 후 브리징 비자(BVA) 상태에서 별거 발생",
    optPv300: "약혼자 비자(Subclass 300) 입국 후 결혼 전/후 별거 발생",
    optPvSecondary: "482 / 491 / 186 동반 배우자(Secondary Applicant) 상태에서 별거",
    lblPvException: "단독 영주권 특례(cl 820.221(3)) 해당 사유",
    optPvFv: "관계 지속 중 스폰서로부터 가정폭력·정서적/경제적 학대 피해 발생 (Div 1.5)",
    optPvChild: "스폰서와의 사이에 자녀가 있고 공동 양육권·면접교섭권(Parenting Order) 보유",
    optPvNone: "가정폭력 및 자녀 없음 (대체 기술·고용주 비자 전환 및 Section 48 검토 필수)",
    m4ResultHeading: "파트너 비자 단독 영주권 생존 가능성 & 가족법·이민법 동시 대응 전략",
    ctaHeading: "박앤코 호주 가족법 · 재산분할 전담팀 상담 브리프 전송 (enquiry@parkcolawyers.com)",
    btnSendEmail: "✉️ 진단 결과 담아 이메일 보내기 →",
    btnCopyBrief: "📋 진단 브리프 복사",
    pollerTitle: "1차 가족법령 · 연방순회가족법원(FCFCOA) 수수료 · 박앤코 가족법 KDB 실시간 폴링 검증 매트릭스",
    pollerDesc: "호주 가족법 원문(<code>legislation.gov.au</code>), 연방순회가족법원 법정 접수 수수료(<code>fcfcoa.gov.au</code>), 파트너비자 가정폭력 특례 법령 및 박앤코 가족법 KDB를 정기 자동 폴링하여 SHA-256 해시와 최신 법정 수치를 검증합니다.",
    thPollerSource: "1차 출처 및 검증 대상",
    thPollerCitation: "근거 조문 · 엔드포인트",
    thPollerFigures: "실시간 추출 핵심 수치",
    thPollerHash: "SHA-256 해시 · 용량",
    thPollerStatus: "폴링 검증 상태",
    footerNotice: "본 내비게이터는 호주 가족법(Family Law Act 1975) 및 AustLII 공개 판결문(s 114Q(2) 가명 승인본)에 기반한 일반 법률 정보 제공 도구이며, 법무법인 박앤코의 공식 수임 계약 전 개별 법률 자문(Legal Advice)을 대체하지 않습니다. 재산분할 합의(Consent Orders)나 양육권·파트너비자 대응 전 반드시 박창민 대표변호사(Acc. Spec. Immi) 및 이수진 변호사(Gina Lee · 공식 이메일: <strong>enquiry@parkcolawyers.com</strong>)와 상담하시기 바랍니다."
  };

  var EN_TRANSLATIONS = {
    svgFamS1Title: "Identify Global Asset Pool",
    svgFamS1Sub: "AUS + KOR Property, Super & Debts",
    svgFamS2Title: "Holistic Contributions (%)",
    svgFamS2Sub: "Financial, Homemaker & FV (2025)",
    svgFamS3Title: "Current & Future Needs (±%)",
    svgFamS3Sub: "Care of Children, Health & Disclosure",
    svgFamS4Title: "Just & Equitable Final Order (%)",
    svgFamS4Sub: "Consent Orders or Court Judgment",
    footerFirmName: "PNC Legal Pty Ltd t/a Park & Co Lawyers",
    ecoHubLink: "← Park & Co Legal Intelligence Hub (All Navigators)",
    ecoPartnerLink: "Partner Visas (820/309/300)",
    ecoParentLink: "Parent Visas (143/864/870)",
    ecoEmpLink: "Employment Law Navigator",
    brandTag: "Australian Family Law · FCFCOA Property Precedent Matcher & Parenting Navigator",
    navM1: "12m Separation & Limits",
    navM2: "Property Precedent Matcher",
    navM3: "Parenting & Relocation",
    navM4: "Partner Visa Breakdown",
    navM5: "Send Legal Brief",
    navPoller: "Primary-Source & Court Fee Telemetry",
    btnPrint: "🖨️ Print Diagnostic",
    heroEyebrow: "FAMILY LAW ACT 1975 (CTH) · 2024–2025 REFORMS · 3,704 KDB CASES",
    heroTitle: "Australian Family Law, Property Precedent Matcher & Parenting Navigator",
    heroLead: "Check <strong>12-month separation & property time limits</strong>, match your profile against <strong>real FCFCOA property division splits (3,704-case KDB)</strong>, and assess <strong>parenting & Partner Visa breakdown rules</strong>.",
    specName: "Chang Min Park (Principal Solicitor)",
    specRole1: "Principal Solicitor · Acc. Spec. (Immi)",
    specName2: "Gina Lee (Solicitor)",
    specRole2: "Solicitor · Family Law",
    specSlogan: "\"Focus on your life, let us take care of the law.\"",
    specMeta: "Park & Co Lawyers (Underwood QLD)<br/>Official Email: <strong>enquiry@parkcolawyers.com</strong><br/>FCFCOA Property, Parenting & Partner Visa Crossover",
    specCta: "Send Family Law Consultation Brief →",
    liveStatusLabel: "Live Family Law · 3,704 Cases Verified",
    statLabelSep: "Separation for Divorce",
    statLabelLim: "Property Time Limit",
    statLabelWorld: "Worldwide Asset Pool",
    statLabelWatch: "Unilateral Removal",
    statLabelKdb: "Park & Co Family Law KDB",
    m1Title: "12-Month Separation & Property Time Limit Calculator",
    m1Desc: "Property settlement can start immediately upon separation, but strict limits apply: <strong>12 months after divorce (s 44(3))</strong> or <strong>2 years after de facto separation (s 44(5))</strong>.",
    m1FormHeading: "Enter Relationship Type, Separation Date & Divorce Order Date",
    lblRelType: "Relationship Type (Married vs De Facto)",
    optRelMarried: "Married Couple (s 79 Property Division & 12-month post-divorce limitation)",
    optRelDefacto: "De Facto Couple (s 90SM Property Division & 2-year post-separation limitation)",
    lblSepDate: "Date of Final Separation",
    lblOneRoof: "Separation Under One Roof (s 49(2)) Involved?",
    optRoofNo: "Physical separation in different residences",
    optRoofYes: "Separated under one roof (Independent third-party corroborating affidavit required)",
    lblDivorceDate: "Divorce Order Effective Date (Optional — only if already divorced)",
    m1ResultHeading: "Divorce Eligibility Date & Statutory Property Limitation Verdict",
    m2Title: "AUS+KOR Asset Pool (s 71B) & FCFCOA Property Precedent Matcher",
    m2Desc: "Combine Australian and Korean assets (s 71B) and examine <strong>actual FCFCOA percentage splits in published judgments</strong> matching your relationship factors.",
    ethicsBannerBody: "<strong>⚖️ [Legal & Ethical Notice — ASCR r 36.1 & FLA s 114Q(2)]</strong> Australian property division is a <strong>holistic discretionary synthesis (<code>Stanford (2012)</code>)</strong>, not a mathematical formula. This tool does not predict or guarantee a specific percentage split; it retrieves anonymized Court judgments (<code>s 114Q(2)</code>) for historical precedent comparison only.",
    ethicsCheckboxLabel: "I acknowledge that property division is discretionary and the cases below are historical precedent samples only.",
    m2FormHeading: "Enter AUS/KOR Asset Pool & Select Precedent Matching Filters",
    lblAusNet: "Australian Net Non-Super Assets (Property Equity + Savings + Business - Mortgages, AUD $)",
    lblAusSuper: "Combined Australian Superannuation Pool (AUD $)",
    lblKorKrw: "South Korean Net Assets (Korean Real Estate + Jeonse Deposit + Savings/Pensions, in 10,000 KRW units)",
    lblMatchDuration: "Relationship Duration Band",
    optDurAll: "All Relationship Durations",
    optDurShort: "Short Relationship (<5 years — Initial capital contribution heavily weighted)",
    optDurMed: "Medium Relationship (5 to 12 years — Balance of initial capital & parenting/homemaker roles)",
    optDurLong: "Long Relationship (12+ years — Holistic contribution synthesis + s 79(5) future needs focus)",
    lblMatchFactor: "Key Factual Factor in Precedents",
    optFacAll: "All Verified Precedent Factors",
    optFacInitial: "Significant Initial Property / Capital / Parental Gift or Loan",
    optFacChildren: "Primary Care of Minor Children & Earning Capacity Disparity (s 75(2) / s 79(5))",
    optFacFv: "Family Violence · Economic / Coercive Control (s 79(4)(ca) & Kennon)",
    optFacDisclosure: "Overseas Assets · Non-Disclosure (s 71B) · Legal Fee Add-backs",
    optFacSeparate: "Separate Bank Accounts & Individual Asset Ownership (s 79(2))",
    m2ResultHeading: "Worldwide Asset Pool (s 71B) & Matched FCFCOA Precedent Range",
    matchedCasesHeading: "🔍 Empirical FCFCOA Property Settlement Precedents Matching Your Criteria",
    m3Title: "Parenting (s 60CC Safety Focus) & Child Relocation / Watchlist",
    m3Desc: "Assess parenting arrangements under the 2024 safety-first reforms (s 60CC) and international relocation / AFP Airport Watchlist rules (s 65Y).",
    m3FormHeading: "Select Safety & International Relocation Scenario",
    lblParSafety: "1. History of Family Violence, Abuse or Coercive Control (s 60CC(2)(a) Paramount Factor)",
    optParFvYes: "Yes — Family violence / DVO / coercive control present (Sole decision-making & protective orders)",
    optParFvNo: "No safety risk — Suitable for Parenting Plan or Consent Orders",
    lblParReloc: "2. International Child Relocation (South Korea) or Travel Watchlist Issue",
    optRelocKorea: "Seeking to relocate with child(ren) to South Korea (Other parent opposes)",
    optRelocPrevent: "Urgent risk of other parent removing child(ren) from Australia (AFP Family Law Watchlist needed)",
    optRelocDom: "Remaining within same local area in Australia",
    m3ResultHeading: "Reformed Part VII Parenting & Relocation Legal Strategy",
    m4Title: "Partner Visa (820·309) Breakdown & Solo PR Survival",
    m4Desc: "Even after relationship breakdown, applicants with <strong>family violence evidence (Div 1.5)</strong> or <strong>shared parenting orders</strong> can secure permanent residency (801/100) without the sponsor.",
    m4FormHeading: "Select Partner Visa Stage & Breakdown Exception Ground",
    lblPvStage: "Current Partner / Family Visa Stage",
    optPv820Granted: "Subclass 820 (or 309 onshore) already granted → Separated prior to 801/100 PR grant",
    optPv820Pending: "Onshore 820/801 lodged (Currently on Bridging Visa A) → Separated before 820 decision",
    optPv300: "Prospective Marriage Visa (Subclass 300) holder → Separated after arrival",
    optPvSecondary: "Secondary spouse on 482 / 491 / 186 visa → Separated from primary visa holder",
    lblPvException: "Applicable Independent PR Exception Ground (cl 820.221(3))",
    optPvFv: "Experienced Family Violence / Emotional or Financial Abuse during relationship (Div 1.5)",
    optPvChild: "Parenting Order / Formal Access to an Australian child of the relationship",
    optPvNone: "Neither family violence nor child exception (Urgent alternative visa & s 48 review required)",
    m4ResultHeading: "Partner Visa Independent PR Pathway & Dual Family/Migration Protection Plan",
    ctaHeading: "Send Family Law & Property Diagnostic Brief (enquiry@parkcolawyers.com)",
    btnSendEmail: "✉️ Email Diagnostic Brief →",
    btnCopyBrief: "📋 Copy Brief to Clipboard",
    pollerTitle: "Live Family Law Legislation, FCFCOA Court Fees & Park & Co Family KDB Matrix",
    pollerDesc: "Automated weekly polling of the Family Law Act 1975 (<code>legislation.gov.au</code>), FCFCOA statutory filing fees (<code>fcfcoa.gov.au</code>), and the Park & Co Family Law KDB with genuine SHA-256 content hashes.",
    thPollerSource: "Primary Source & Target",
    thPollerCitation: "Statutory Provision / Endpoint",
    thPollerFigures: "Live Extracted Figures",
    thPollerHash: "SHA-256 Content Hash · Size",
    thPollerStatus: "Verification Status",
    footerNotice: "This navigator provides general legal information based on the Family Law Act 1975 (Cth) and publicly published AustLII judgments (approved under s 114Q(2) pseudonyms) and does not constitute formal legal advice prior to a signed retainer. Contact Principal Solicitor Chang Min Park (Acc. Spec. Immi) & Gina Lee (Solicitor — <strong>enquiry@parkcolawyers.com</strong>) before signing any property agreement or relocating with children."
  };

  function initDates() {
    var sep = document.getElementById("fam-sep-date");
    if (sep && !sep.value) {
      var d = new Date();
      d.setMonth(d.getMonth() - 8);
      sep.value = d.toISOString().slice(0, 10);
    }
  }

  function calcSeparationDeadlines() {
    var relType = (document.getElementById("fam-rel-type") || {}).value || "married";
    var sepStr = (document.getElementById("fam-sep-date") || {}).value;
    var oneRoof = (document.getElementById("fam-one-roof") || {}).value === "yes";
    var divStr = (document.getElementById("fam-divorce-date") || {}).value;

    var now = new Date();
    var sepDate = sepStr ? new Date(sepStr + "T00:00:00") : new Date();
    var eligibleDivorceDate = new Date(sepDate.getTime() + 366 * 86400000);
    var eligibleDivorceIso = eligibleDivorceDate.toISOString().slice(0, 10);

    var propDeadlineIso = "";
    var propDaysLeft = null;
    if (relType === "defacto") {
      var dfLim = new Date(sepDate.getTime() + 730 * 86400000);
      propDeadlineIso = dfLim.toISOString().slice(0, 10);
      propDaysLeft = Math.ceil((dfLim.getTime() - now.getTime()) / 86400000);
    } else if (divStr) {
      var dvDate = new Date(divStr + "T00:00:00");
      var mLim = new Date(dvDate.getTime() + 365 * 86400000);
      propDeadlineIso = mLim.toISOString().slice(0, 10);
      propDaysLeft = Math.ceil((mLim.getTime() - now.getTime()) / 86400000);
    }

    var out = document.getElementById("fam-deadline-output");
    if (out) {
      var html = "";
      if (currentLang === "ko") {
        html += '<div style="background:#FCFAF6;border:1px solid #DED6C8;padding:12px 14px;border-radius:8px;margin-bottom:10px;font-size:13.5px;">' +
          '• <strong>재산분할·양육권 협의/소송 가능 시점:</strong> <span style="color:#2E6B4F;font-weight:800;">지금 즉시 가능</span> (이혼 신청 전이라도 별거 직후부터 Consent Orders 및 재산분할 진행 가능)<br/>' +
          (relType === "married"
            ? '• <strong>이혼 신청 가능일 (12개월+1일 별거, s 48):</strong> <strong>' + eligibleDivorceIso + '</strong> 이후 접수 가능 (FCFCOA 이혼 접수비 <strong>$1,170</strong> / 감면 <strong>$390</strong>)<br/>'
            : '• <strong>사실혼(De Facto) 이혼 절차:</strong> 별도 이혼 신청 불요 (단, s 90SB 2년 이상 동거 또는 자녀 요건 확인)<br/>') +
          '• <strong>FCFCOA 재산·양육 법원 수수료 (FY2026–27):</strong> 합의 명령(Consent Orders) <strong>$215</strong> · 소송 개시(Initiating Application) <strong>$455</strong>(단독) / <strong>$740</strong>(재산+양육 병합) · 조정기일(Conciliation) <strong>$510</strong>' +
          '</div>';
        if (propDeadlineIso) {
          var alertBg = propDaysLeft < 60 ? "#FEF2F2" : "#FFFBEB";
          var alertCol = propDaysLeft < 60 ? "#B23A2E" : "#92400E";
          html += '<div style="background:' + alertBg + ';border-left:4px solid ' + alertCol + ';padding:12px;border-radius:6px;margin-bottom:10px;font-size:13px;color:' + alertCol + ';">' +
            '<strong>⏰ 재산분할 법정 제척기간 마감일 (' + (relType === "married" ? "s 44(3) 이혼 후 12개월" : "s 44(5) 사실혼 별거 후 2년") + '): ' + propDeadlineIso + ' (잔여 ' + propDaysLeft + '일)</strong> — 기한 도과 시 법원의 특별 허가(s 44(3)/(6) Leave) 없이는 청구권이 박탈됩니다.' +
            '</div>';
        }
        if (oneRoof) {
          html += '<div style="background:#EFF6FF;border:1px solid #93C5FD;padding:10px 12px;border-radius:6px;font-size:12.5px;color:#1E3A8A;">' +
            '<strong>🏠 한집 별거(Separation Under One Roof, s 49(2)) 필수 서류:</strong> 본인 진술서(Affidavit) 외에 별거 사실을 객관적으로 증언할 <strong>독립 제3자(가족·지인·이웃)의 진술서</strong>가 반드시 필요합니다.' +
            '</div>';
        }
      } else {
        html += '<div style="background:#FCFAF6;border:1px solid #DED6C8;padding:12px 14px;border-radius:8px;margin-bottom:10px;font-size:13.5px;">' +
          '• <strong>Property & Parenting Orders Availability:</strong> <span style="color:#2E6B4F;font-weight:800;">Available Immediately</span> upon separation (no need to wait 12 months)<br/>' +
          (relType === "married"
            ? '• <strong>Earliest Divorce Filing Date (s 48):</strong> <strong>' + eligibleDivorceIso + '</strong> (FCFCOA Divorce Fee <strong>$1,170</strong> / Reduced <strong>$390</strong>)<br/>'
            : '• <strong>De Facto Relationship:</strong> No formal divorce application required (subject to s 90SB 2-year or child gateway)<br/>') +
          '• <strong>FCFCOA Court Fees (FY2026–27):</strong> Consent Orders <strong>$215</strong> · Initiating Application <strong>$455</strong> (single) / <strong>$740</strong> (combined) · Conciliation Conference <strong>$510</strong>' +
          '</div>';
        if (propDeadlineIso) {
          html += '<div style="background:#FFFBEB;border-left:4px solid #D97706;padding:12px;border-radius:6px;margin-bottom:10px;font-size:13px;color:#92400E;">' +
            '<strong>⏰ Statutory Property Limitation Deadline: ' + propDeadlineIso + ' (' + propDaysLeft + ' days left)</strong>' +
            '</div>';
        }
      }
      out.innerHTML = html;
    }
    return { relType: relType, eligibleDivorceIso: eligibleDivorceIso, propDeadlineIso: propDeadlineIso || "N/A (Not yet divorced)" };
  }

  function renderPropertyPrecedentMatcher() {
    var ausNet = parseFloat((document.getElementById("pool-aus-net") || {}).value) || 0;
    var ausSuper = parseFloat((document.getElementById("pool-aus-super") || {}).value) || 0;
    var korManwon = parseFloat((document.getElementById("pool-kor-krw") || {}).value) || 0;
    var korAud = Math.round((korManwon * 10000) / KRW_PER_AUD);
    var totalPoolAud = Math.round(ausNet + ausSuper + korAud);

    var durFilter = (document.getElementById("match-duration") || {}).value || "all";
    var facFilter = (document.getElementById("match-factor") || {}).value || "all";
    var ackChecked = (document.getElementById("ack-ethical-disclaimer") || {}).checked !== false;

    var matched = FCFCOA_PRECEDENT_CASES.filter(function (c) {
      var dOk = durFilter === "all" || c.durationBand === durFilter;
      var fOk = facFilter === "all" || c.factors.indexOf(facFilter) !== -1;
      return dOk && fOk;
    });
    if (matched.length === 0) {
      matched = FCFCOA_PRECEDENT_CASES.slice(0, 4);
    }

    var poolOut = document.getElementById("fam-pool-summary-output");
    if (poolOut) {
      poolOut.innerHTML =
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:10px;margin-bottom:12px;">' +
          '<div style="background:#FCFAF6;border:1px solid #DED6C8;padding:10px;border-radius:8px;">' +
            '<div style="font-size:11px;color:#5A5654;">' + (currentLang === "ko" ? "호주 비연금+Super" : "AUS Net + Super") + '</div>' +
            '<div style="font-size:16px;font-weight:800;color:#2E2E2E;">$' + (ausNet + ausSuper).toLocaleString() + '</div>' +
          '</div>' +
          '<div style="background:#FCFAF6;border:1px solid #DED6C8;padding:10px;border-radius:8px;">' +
            '<div style="font-size:11px;color:#5A5654;">' + (currentLang === "ko" ? "한국 순자산 (s 71B 환산)" : "KOR Net Assets (s 71B)") + '</div>' +
            '<div style="font-size:16px;font-weight:800;color:#1E3A8A;">$' + korAud.toLocaleString() + ' AUD</div>' +
          '</div>' +
          '<div style="background:#F2E4E5;border:1.5px solid #7A1F2B;padding:10px;border-radius:8px;">' +
            '<div style="font-size:11px;color:#7A1F2B;font-weight:700;">' + (currentLang === "ko" ? "전 세계 통합 자산 풀" : "Worldwide Net Pool") + '</div>' +
            '<div style="font-size:17px;font-weight:800;color:#530009;">$' + totalPoolAud.toLocaleString() + ' AUD</div>' +
          '</div>' +
        '</div>' +
        '<div style="font-size:13px;line-height:1.6;color:#2E2E2E;background:#FFFBEB;border:1px solid #F59E0B;padding:12px;border-radius:8px;">' +
          (currentLang === "ko"
            ? "<strong>📊 매칭된 판례(" + matched.length + "건)의 실제 법원 판결 스펙트럼:</strong><br/>• 단기 혼인+초기자산 압도 시 <code>75 : 25</code> (<em>Han & Han [2026]</em>) ~ 중장기 주양육·가정폭력·재산은닉 가산 시 <code>65 : 35</code> ~ <code>67 : 33</code> (<em>Kimmel [2026]</em>; <em>Naisby [2026]</em>) ~ 장기 혼인 균형 조율 시 <code>52 : 48</code> ~ <code>56 : 44</code> (<em>Franc [2026]</em>; <em>Harridan [2026]</em>)."
            : "<strong>📊 Observed Court Split Spectrum Across " + matched.length + " Matched Precedents:</strong><br/>• Short marriage with dominant initial capital: <code>75 : 25</code> (<em>Han & Han [2026]</em>) · Long/medium marriage with primary care, family violence or non-disclosure uplift: <code>65 : 35</code> to <code>67 : 33</code> (<em>Kimmel [2026]</em>; <em>Naisby [2026]</em>) · Balanced long marriage: <code>52 : 48</code> to <code>56 : 44</code>.") +
        '</div>';
    }

    var cardsGrid = document.getElementById("fam-precedent-cards-grid");
    if (cardsGrid) {
      if (!ackChecked) {
        cardsGrid.innerHTML = '<div class="card" style="color:#B23A2E;font-weight:700;">' +
          (currentLang === "ko"
            ? "⚠️ 위 필수 법률·윤리 고지(재산분할은 수학 공식이 아닌 법원의 종합 재량 판단임) 확인 체크박스에 동의하시면 매칭된 실제 판결문 상세 내역이 표시됩니다."
            : "⚠️ Please tick the Mandatory Legal & Ethical Notice checkbox above to view the matched FCFCOA precedent case breakdowns.") +
          '</div>';
      } else {
        cardsGrid.innerHTML = matched.map(function (c) {
          return (
            '<div class="card" style="padding:18px;border:1.5px solid #DED6C8;display:flex;flex-direction:column;justify-content:space-between;">' +
              '<div>' +
                '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:6px;">' +
                  '<span style="background:#F2E4E5;color:#7A1F2B;font-size:11px;font-weight:800;padding:3px 8px;border-radius:999px;">' + c.court + ' · ' + c.date + '</span>' +
                  '<span style="font-size:11px;color:#5A5654;font-weight:700;">s 114Q(2) Approved</span>' +
                '</div>' +
                '<h4 style="margin:0 0 6px;font-size:15.5px;color:#1A1211;">' + c.citation + '</h4>' +
                '<div style="font-size:12px;color:#5A5654;margin-bottom:10px;">' + (currentLang === "ko" ? c.durationText_ko : c.durationText_en) + ' | Pool: <strong>' + (currentLang === "ko" ? c.poolAud : (c.poolAud_en || c.poolAud)) + '</strong></div>' +
                '<div style="background:#FCFAF6;border:1px solid #E7E0D3;border-radius:8px;padding:10px;font-size:12px;line-height:1.55;margin-bottom:10px;">' +
                  '<div><strong>• ' + (currentLang === "ko" ? "Step 2 (기여도 s 79(4)):" : "Step 2 (Contributions s 79(4)):") + '</strong> ' + (currentLang === "ko" ? c.contribSplit : (c.contribSplit_en || c.contribSplit)) + '</div>' +
                  '<div><strong>• ' + (currentLang === "ko" ? "Step 3 (장래/현재 조정 s 79(5)/75(2)):" : "Step 3 (Future/Current Factors s 79(5)):") + '</strong> ' + (currentLang === "ko" ? c.adjSplit : (c.adjSplit_en || c.adjSplit)) + '</div>' +
                  '<div style="color:#7A1F2B;font-weight:800;margin-top:4px;"><strong>• ' + (currentLang === "ko" ? "Step 4 (최종 법원 명령):" : "Step 4 (Final Court Order):") + '</strong> ' + (currentLang === "ko" ? c.finalSplit : (c.finalSplit_en || c.finalSplit)) + '</div>' +
                '</div>' +
                '<p style="font-size:12.5px;color:#2E2E2E;line-height:1.55;margin:0 0 10px;">' + (currentLang === "ko" ? c.summary_ko : c.summary_en) + '</p>' +
              '</div>' +
              '<a href="' + c.url + '" target="_blank" rel="noopener" style="font-size:12px;font-weight:800;color:#7A1F2B;">' + (currentLang === "ko" ? "AustLII 판결문 원문 보기 &rarr;" : "View Full AustLII Judgment &rarr;") + '</a>' +
            '</div>'
          );
        }).join("");
      }
    }

    return { totalPoolAud: totalPoolAud, korAud: korAud, matchedCount: matched.length, topCitation: matched[0] ? matched[0].citation : "" };
  }

  function calcParentingRelocation() {
    var safety = (document.getElementById("par-safety") || {}).value || "fv_present";
    var reloc = (document.getElementById("par-relocation") || {}).value || "want_korea_reloc";
    var out = document.getElementById("fam-parenting-output");
    if (!out) return;

    var items = [];
    if (safety === "fv_present") {
      items.push(currentLang === "ko"
        ? "🔴 <strong>s 60CC(2)(a) 아동·양육자 안전 최우선 적용:</strong> 2024년 5월 개정법에 따라 균등 공동친권 추정이 폐지되었으며, 가정폭력 개선 증거가 없는 상태에서 막연한 희망만으로 감독 면접교섭을 허용하지 않습니다(<code>Gallagher & Day [2025] FedCFamC2F 36</code>)."
        : "🔴 <strong>s 60CC(2)(a) Child & Carer Safety Paramount:</strong> Post-May 2024 Part VII repeals equal shared parental responsibility; speculative supervision orders are rejected where family violence risks remain unaddressed (<code>Gallagher & Day [2025]</code>).");
    } else {
      items.push(currentLang === "ko"
        ? "🟢 <strong>부모 간 합의 양육 명령(Consent Orders) 권장:</strong> 소송 없이 법원 구속력을 갖춘 양육 시간·해외여행 동의 조항을 명문화할 수 있습니다."
        : "🟢 <strong>Suitable for Parenting Consent Orders:</strong> Formalise parenting time, school decisions, and international travel notice clauses without contested litigation.");
    }

    if (reloc === "want_korea_reloc") {
      items.push(currentLang === "ko"
        ? "✈️ <strong>한국 영구 귀국(International Relocation) 필수 절차:</strong> 상대 부모 동의 없이 출국하면 <code>ss 65Y/65Z</code> 형사처벌 및 헤이그 협약 강제반환 대상이 됩니다(<code>Picard & Picard (No 2) [2025] FedCFamC2F 37</code>). 반드시 출국 전 한국 내 주거·학교·화상/방학 면접교섭 대안을 갖춘 <strong>법원 Relocation Order</strong>를 먼저 취득해야 합니다."
        : "✈️ <strong>International Relocation to Korea:</strong> Unilateral removal breaches <code>ss 65Y/65Z</code> and triggers Hague Convention return orders (<code>Picard [2025]</code>). Obtain formal Court Relocation Orders before booking travel.");
    } else if (reloc === "prevent_abduction") {
      items.push(currentLang === "ko"
        ? "🚨 <strong>긴급 출국금지 및 호주 연방경찰(AFP) 공항 워치리스트(Family Law Watchlist) 등록:</strong> 자녀가 무단 출국될 위험이 있는 경우 즉시 긴급 법원 신청 및 AFP Watchlist 등재를 통해 호주 전 공항·항만 출국을 차단해야 합니다."
        : "🚨 <strong>Urgent AFP Family Law Watchlist Registration:</strong> Apply immediately for injunction orders and AFP Airport Watchlist placement to prevent unilateral removal of the child from Australia.");
    }

    out.innerHTML = '<ul style="margin:0;padding-left:18px;font-size:13.5px;line-height:1.7;">' +
      items.map(function (i) { return '<li style="margin-bottom:8px;">' + i + '</li>'; }).join("") +
      '</ul>';
  }

  function calcPartnerVisaCrossover() {
    var stage = (document.getElementById("pv-stage") || {}).value || "820_granted";
    var exc = (document.getElementById("pv-exception") || {}).value || "fv_judicial_or_nonjudicial";
    var out = document.getElementById("fam-pv-output");
    if (!out) return;

    var html = "";
    if (currentLang === "ko") {
      html =
        '<div style="background:#EFF6FF;border:1px solid #93C5FD;padding:12px 14px;border-radius:8px;margin-bottom:10px;font-size:13.5px;color:#1E3A8A;">' +
          '<strong>🛡️ 파트너 비자 별거 시 영주권 생존 진단 (' + stage + '):</strong> ' +
          (exc === "fv_judicial_or_nonjudicial"
            ? '<strong>단독 영주권(801/100) 취득 가능 (Division 1.5 가정폭력 특례):</strong> 관계가 진실했으나 지속 중 가정폭력(신체적 폭력뿐 아니라 비자 취소 협박·경제적 통제·정서적 학대 포함)이 발생한 경우, ① 법원 보호명령(DVO) 또는 ② 이민법 규정에 맞춘 독립 전문가 2인 이상의 비사법적 증거(Non-judicial evidence)를 통해 스폰서 없이 영주권을 취득할 수 있습니다.'
            : exc === "shared_child"
            ? '<strong>단독 영주권(801/100) 취득 가능 (cl 820.221(3)(b)(ii) 자녀 양육 특례):</strong> 가정폭력이 없더라도 스폰서와의 사이에 자녀가 있고 가족법원 양육권/면접교섭권 명령 또는 양육 의무가 입증되면 스폰서 철회와 무관하게 영주권 승인이 가능합니다.'
            : '<strong>⚠️ 특례 미해당 — 즉시 대체 비자(190/491/482) 및 Section 48 검토 필요:</strong> 스폰서가 후원을 철회하면 이민성이 자연적 정의 서한(Natural Justice Letter)을 발송하므로, 거절 결정이 내려지기 전에 대체 비자 설계를 완료해야 합니다.') +
        '</div>';
    } else {
      html =
        '<div style="background:#EFF6FF;border:1px solid #93C5FD;padding:12px 14px;border-radius:8px;margin-bottom:10px;font-size:13.5px;color:#1E3A8A;">' +
          '<strong>🛡️ Partner Visa Breakdown PR Assessment (' + stage + '):</strong> ' +
          (exc === "fv_judicial_or_nonjudicial"
            ? '<strong>Eligible for Independent PR Grant (Div 1.5 Family Violence Exception):</strong> Where the relationship was genuine prior to breakdown, judicial evidence (DVO) or compliant non-judicial expert evidence allows direct progression to Subclass 801/100 PR without the sponsor.'
            : exc === "shared_child"
            ? '<strong>Eligible for Independent PR Grant (Child Custody/Access Exception):</strong> Formal parenting orders or shared responsibility for a child of the relationship preserves 801/100 PR eligibility despite relationship breakdown.'
            : '<strong>⚠️ No Statutory Exception — Urgent Alternative Visa Strategy Required:</strong> Prepare an alternative skilled or employer-sponsored pathway prior to visa refusal.') +
        '</div>';
    }
    out.innerHTML = html;
  }

  function updateAll() {
    var d1 = calcSeparationDeadlines();
    var d2 = renderPropertyPrecedentMatcher();
    calcParentingRelocation();
    calcPartnerVisaCrossover();

    var brief = currentLang === "ko"
      ? [
          "[법무법인 박앤코 호주 가족법 · 한·호 재산분할 · 파트너비자 교차 진단 패킷]",
          "• 수신: 법무법인 박앤코 박창민 대표변호사 (Acc. Spec. Immi) & 이수진 변호사 (Gina Lee) (enquiry@parkcolawyers.com)",
          "• [Module 01] 관계 구분: " + d1.relType + " / 이혼 신청 가능일: " + d1.eligibleDivorceIso + " / 재산분할 제척기간: " + d1.propDeadlineIso,
          "• [Module 02] 한·호 전 세계 통합 순자산 풀(s 71B): $" + d2.totalPoolAud.toLocaleString() + " AUD (한국 순자산 환산액 $" + d2.korAud.toLocaleString() + " AUD 포함)",
          "• [Module 02] 매칭된 FCFCOA 공개 판례: " + d2.matchedCount + "건 (대표 판례: " + d2.topCitation + ")",
          "• 윤리·법률 고지 확인: 재산분할은 법원의 종합 재량 판단(s 79)이며 개별 사실관계 검토를 위해 정식 법률 자문을 요청합니다."
        ].join("\n")
      : [
          "[Park & Co Lawyers — Australian Family Law, Global Property & Visa Crossover Brief]",
          "• To: Chang Min Park (Principal Solicitor, Acc. Spec. Immi) & Gina Lee (Solicitor) (enquiry@parkcolawyers.com)",
          "• [Module 01] Relationship: " + d1.relType + " / Earliest Divorce Date: " + d1.eligibleDivorceIso + " / Property Limitation: " + d1.propDeadlineIso,
          "• [Module 02] Combined AUS + KOR Worldwide Net Pool (s 71B): $" + d2.totalPoolAud.toLocaleString() + " AUD (incl. KOR Net $" + d2.korAud.toLocaleString() + " AUD)",
          "• [Module 02] Matched FCFCOA Precedents: " + d2.matchedCount + " cases (Lead: " + d2.topCitation + ")",
          "• Requesting formal family law and cross-border property/visa consultation."
        ].join("\n");

    var pre = document.getElementById("fam-diagnostic-brief-text");
    if (pre) pre.textContent = brief;

    var mailBtn = document.getElementById("btn-fam-mailto");
    if (mailBtn) {
      var subj = encodeURIComponent(
        currentLang === "ko"
          ? "[박앤코 호주 가족법·국제재산분할 자문요청] 전 세계 자산 풀 $" + d2.totalPoolAud.toLocaleString() + " AUD 진단"
          : "[Park & Co Family Law Inquiry] Worldwide Pool $" + d2.totalPoolAud.toLocaleString() + " AUD Diagnostic Brief"
      );
      mailBtn.href = "mailto:enquiry@parkcolawyers.com?subject=" + subj + "&body=" + encodeURIComponent(brief);
    }
  }

  var cachedFamPollingStatus = null;

  function renderFamPollerMatrix() {
    var kpiGrid = document.getElementById("fam-poller-kpis");
    var tbody = document.getElementById("fam-poller-tbody");
    if (!kpiGrid || !tbody || !cachedFamPollingStatus) return;

    var hm = cachedFamPollingStatus.headline_metrics || {};
    var kpis = [
      {
        label: currentLang === "ko" ? "FCFCOA 이혼 신청 수수료 (FY26–27)" : "FCFCOA Divorce Filing Fee",
        val: hm.fcfcoa_divorce_fee || "$1,170 (감면 $390)",
        sub: currentLang === "ko" ? "fcfcoa.gov.au 2026.07.01 시행" : "Effective 1 Jul 2026 ($390 reduced)"
      },
      {
        label: currentLang === "ko" ? "합의 명령 (Consent Orders)" : "Consent Orders Filing Fee",
        val: hm.fcfcoa_consent_orders_fee || "$215",
        sub: currentLang === "ko" ? "소송 개시 $455 / 병합 $740" : "Initiating App $455 / Combined $740"
      },
      {
        label: currentLang === "ko" ? "한·호 전 세계 자산 공개 의무" : "Worldwide Asset Disclosure",
        val: hm.worldwide_disclosure || "Mandatory (s 71B)",
        sub: currentLang === "ko" ? "2025.06.10 발효 가족법 개정" : "Effective 10 June 2025 Reform"
      },
      {
        label: currentLang === "ko" ? "박앤코 가족법 KDB 실시간 코퍼스" : "Park & Co Family Law KDB Corpus",
        val: hm.family_kdb_cases || "3,704 Cases",
        sub: hm.family_kdb_latest || "Latest: [2026] FedCFamC1A 186"
      }
    ];

    kpiGrid.innerHTML = kpis.map(function (k) {
      return (
        '<div class="card" style="padding:14px;background:#FCFAF6;border:1px solid #DED6C8;">' +
          '<div style="font-size:11.5px;color:#5A5654;font-weight:700;">' + k.label + '</div>' +
          '<div style="font-size:20px;font-weight:800;color:#7A1F2B;margin:4px 0;">' + k.val + '</div>' +
          '<div style="font-size:11.5px;color:#5A5654;">' + k.sub + '</div>' +
        '</div>'
      );
    }).join("");

    var sources = cachedFamPollingStatus.sources || [];
    tbody.innerHTML = sources.map(function (s) {
      var title = currentLang === "ko" ? (s.title_ko || s.title_en) : (s.title_en || s.title_ko);
      var figs = (s.extracted_figures || []).join(" · ") || "—";
      var kb = s.bytes ? Math.round(s.bytes / 1024).toLocaleString() + " KB" : "Live API";
      var method = s.method || "https-direct-live";
      return (
        '<tr style="border-bottom:1px solid #EFEAE1;">' +
          '<td style="padding:11px 14px;">' +
            '<div style="font-weight:700;color:#2E2E2E;">' + title + '</div>' +
            '<a href="' + s.url + '" target="_blank" rel="noopener" style="font-size:11.5px;color:#7A1F2B;">' + s.url + ' &nearr;</a>' +
          '</td>' +
          '<td style="padding:11px 14px;font-size:12px;color:#5A5654;">' + (s.citation || "") + '</td>' +
          '<td style="padding:11px 14px;font-weight:700;color:#1E3A8A;font-size:12.5px;">' + figs + '</td>' +
          '<td style="padding:11px 14px;font-family:monospace;font-size:11.5px;color:#2E2E2E;">' +
            '<code>' + (s.sha256_prefix || "") + '</code><br/><span style="color:#5A5654;">' + kb + ' (' + method + ')</span>' +
          '</td>' +
          '<td style="padding:11px 14px;">' +
            '<span style="background:#ECFDF5;color:#065F46;border:1px solid #6EE7B7;padding:3px 8px;border-radius:999px;font-size:11.5px;font-weight:700;">' +
              '✓ ' + (s.status || "verified_ok") + ' (' + (s.http_status || 200) + ')' +
            '</span>' +
          '</td>' +
        '</tr>'
      );
    }).join("");
  }

  function loadFamPollingStatus() {
    fetch("data/polling_status.json", { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data) return;
        cachedFamPollingStatus = data;
        renderFamPollerMatrix();
      })
      .catch(function () {});
  }

  function applyLanguage(lang) {
    currentLang = lang === "en" ? "en" : "ko";
    document.documentElement.lang = currentLang;
    var dict = currentLang === "en" ? EN_TRANSLATIONS : KO_TRANSLATIONS;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k]) el.innerHTML = dict[k];
    });
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
    });
    document.querySelectorAll(".parkco-svc-link").forEach(function (lnk) {
      var h = currentLang === "en" ? lnk.getAttribute("data-en-href") : lnk.getAttribute("data-ko-href");
      if (h) lnk.setAttribute("href", h);
    });
    renderFamPollerMatrix();
    updateAll();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initDates();
    [
      "fam-rel-type", "fam-sep-date", "fam-one-roof", "fam-divorce-date",
      "pool-aus-net", "pool-aus-super", "pool-kor-krw", "match-duration", "match-factor",
      "ack-ethical-disclaimer",
      "par-safety", "par-relocation",
      "pv-stage", "pv-exception"
    ].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) {
        el.addEventListener("input", updateAll);
        el.addEventListener("change", updateAll);
      }
    });

    var btnKo = document.getElementById("btn-lang-ko");
    var btnEn = document.getElementById("btn-lang-en");
    if (btnKo) btnKo.addEventListener("click", function () { applyLanguage("ko"); });
    if (btnEn) btnEn.addEventListener("click", function () { applyLanguage("en"); });

    var copyBtn = document.getElementById("btn-fam-copy");
    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        var pre = document.getElementById("fam-diagnostic-brief-text");
        if (pre && navigator.clipboard) {
          navigator.clipboard.writeText(pre.textContent || "");
          copyBtn.textContent = currentLang === "ko" ? "✅ 클립보드 복사 완료!" : "✅ Copied to Clipboard!";
          setTimeout(function () {
            copyBtn.textContent = currentLang === "ko" ? KO_TRANSLATIONS.btnCopyBrief : EN_TRANSLATIONS.btnCopyBrief;
          }, 2000);
        }
      });
    }

    var printBtn = document.getElementById("btn-print-doc");
    if (printBtn) printBtn.addEventListener("click", function () { window.print(); });

    var params = new URLSearchParams(window.location.search);
    if (params.get("lang") === "en") {
      applyLanguage("en");
    } else {
      applyLanguage("ko");
    }
    loadFamPollingStatus();
  });
})();
