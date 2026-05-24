// CertifyPro — Denver HVAC License Prep
// Module metadata for the multi-track HVAC bundle
//
// Tracks:
//   A = F29/G29 Master Mechanical (Class A — commercial)
//   B = F32 Residential Mechanical (Class B — ≤2-family, ≤5 tons, ≤100 MBtu)
//   G = F33 Master Gas Pipefitter (gas service contractor)
//   E = EPA Section 608 Universal (federal refrigerant cert)

export const HVAC_TRACKS = {
  A: {
    code:    "A",
    exam:    "F29 / G29",
    name:    "Master Mechanical (Class A)",
    short:   "Class A",
    desc:    "Commercial HVAC supervisor — any size, any occupancy. Required to pull permits for commercial work in Denver (hotels, restaurants, offices, mid- and high-rise).",
    questions: 100,
    timeMin: 240,
    pass:    70,
    open:    true,
    refs:    ["2018 IMC", "2018 IFGC", "Denver Amendments"],
    cert:    "Denver Heating & Ventilating Class A Supervisor Certificate",
    exp:     "8 years (4 yr journeyman + 4 yr designer/supervisor)",
  },
  B: {
    code:    "B",
    exam:    "F32",
    name:    "Residential Mechanical (Class B)",
    short:   "Class B",
    desc:    "Residential HVAC supervisor — one- and two-family dwellings, IRC townhomes, Group U only. A/C ≤5 tons, water heaters ≤100 MBtu input.",
    questions: 70,
    timeMin: 180,
    pass:    70,
    open:    true,
    refs:    ["2018 IMC", "2018 IFGC", "2018 IRC Mech", "Denver Amendments"],
    cert:    "Denver Heating & Ventilating Class B Supervisor Certificate",
    exp:     "6 years (4 yr journeyman + 2 yr designer/supervisor)",
  },
  G: {
    code:    "G",
    exam:    "F33",
    name:    "Master Gas Pipefitter",
    short:   "Gas",
    desc:    "Gas Service Contractor supervisor — gas & liquid fuel piping, controls, commercial cooking equipment, water heaters ≤100 MBtu.",
    questions: 80,
    timeMin: 240,
    pass:    70,
    open:    true,
    refs:    ["2018 IFGC", "Denver Amendments"],
    cert:    "Denver Gas Service Contractor Supervisor Certificate",
    exp:     "6 years (4 yr field + 2 yr designer/supervisor)",
  },
  E: {
    code:    "E",
    exam:    "EPA 608",
    name:    "EPA Section 608 Universal",
    short:   "EPA 608",
    desc:    "Federal refrigerant handling certification. Required nationwide to purchase, recover, and service refrigerants. Type I (small appliances) + II (high-pressure) + III (low-pressure) + Core = Universal.",
    questions: 100,
    timeMin: 120,
    pass:    72,
    open:    "mixed",
    refs:    ["40 CFR §82 Subpart F", "Clean Air Act §608"],
    cert:    "EPA Section 608 Technician Certification",
    exp:     "None — proctored exam only",
  },
};

export const HVAC_TAG_COLORS = {
  License:   { bg:"rgba(26,107,60,0.08)",   color:"#1A6B3C" },
  Code:      { bg:"rgba(200,57,14,0.08)",   color:"#C8390E" },
  Core:      { bg:"rgba(74,69,64,0.10)",    color:"#4A4540" },
  Equipment: { bg:"rgba(120,90,20,0.08)",   color:"#7A5A10" },
  Special:   { bg:"rgba(40,80,160,0.08)",   color:"#2850A0" },
  Gas:       { bg:"rgba(200,120,20,0.10)",  color:"#B07010" },
  EPA:       { bg:"rgba(20,120,140,0.10)",  color:"#147890" },
  Strategy:  { bg:"rgba(110,40,110,0.08)",  color:"#702870" },
};

export const HVAC_MODULES = [
  // ─── SHARED CORE ─────────────────────────────────────────────────────────
  { id:1, num:"01", title:"Denver Licensing System", tag:"License", mins:50,
    tracks:["A","B","G"],
    articles:["Supervisor Certificate Classes & Scope","Experience & Qualifying Requirements","Exam Format, Fees, & References"] },

  { id:2, num:"02", title:"IMC/IFGC Code Navigation", tag:"Code", mins:45,
    tracks:["A","B","G"],
    articles:["Code Structure & Open-Book Strategy","Key Tables & How to Find Them Fast","IMC vs IFGC vs IBC Authority"] },

  { id:3, num:"03", title:"Core Definitions", tag:"Code", mins:40,
    tracks:["A","B","G"],
    articles:["BTU, MBH, Therm, CFM","Plenum, Return, Supply, Exhaust","Appliance Categories I–IV (Venting)"] },

  { id:4, num:"04", title:"General Mechanical Provisions", tag:"Core", mins:60,
    tracks:["A","B"],
    articles:["Equipment Access & Working Clearances","Condensate Disposal","Appliance Location (Attics, Garages, Closets)"] },

  { id:5, num:"05", title:"Combustion Air (IFGC Ch.3)", tag:"Core", mins:70,
    tracks:["A","B","G"],
    articles:["Indoor Air Method","Outdoor Air — Two-Opening & One-Opening","Mechanical Combustion Air"] },

  { id:6, num:"06", title:"Chimneys & Vents", tag:"Core", mins:75,
    tracks:["A","B","G"],
    articles:["Vent Types & Clearances","The 3-2-10 Termination Rule","Vent & Connector Sizing Tables"] },

  { id:7, num:"07", title:"Specific Appliances (IMC Ch.9)", tag:"Equipment", mins:55,
    tracks:["A","B"],
    articles:["Furnaces, Boilers, Unit Heaters","Unvented Room Heaters","Fireplaces & Decorative Appliances"] },

  // ─── F29 (CLASS A) COMMERCIAL CORE ───────────────────────────────────────
  { id:8, num:"08", title:"Ventilation — Commercial (IMC Ch.4)", tag:"Core", mins:80,
    tracks:["A"],
    articles:["Outdoor Air Rates (Table 403.3.1.1)","Bathroom & Kitchen Local Exhaust","Outdoor Intake Separation"] },

  { id:9, num:"09", title:"Exhaust Systems (IMC Ch.5)", tag:"Core", mins:80,
    tracks:["A"],
    articles:["Type I & Type II Commercial Kitchen Hoods","Dryer Exhaust 35-Foot Rule","Hazardous Exhaust & Parking Garages"] },

  { id:10, num:"10", title:"Duct Systems (IMC Ch.6)", tag:"Core", mins:70,
    tracks:["A","B"],
    articles:["Duct Materials & Insulation","Plenums & Return Air Restrictions","Underground & Flexible Duct"] },

  { id:11, num:"11", title:"Boilers & Pressure Vessels (IMC Ch.10)", tag:"Equipment", mins:60,
    tracks:["A"],
    articles:["Low Water Cutoff & Relief Valves","Boiler Room Requirements","ASME Pressure Vessel Stamps"] },

  { id:12, num:"12", title:"Commercial Refrigeration (IMC Ch.11)", tag:"Equipment", mins:75,
    tracks:["A"],
    articles:["Machinery Room Requirements","Refrigerant Classifications (A1, A2L, B1)","Emergency Switches & Detectors"] },

  { id:13, num:"13", title:"Hydronic Piping (IMC Ch.12)", tag:"Special", mins:55,
    tracks:["A"],
    articles:["Expansion Tanks & Air Separators","Pipe Insulation & R-values","Pressure Relief & Pipe Materials"] },

  // ─── F32 (CLASS B) RESIDENTIAL ───────────────────────────────────────────
  { id:14, num:"14", title:"Residential HVAC Specifics", tag:"Special", mins:55,
    tracks:["B"],
    articles:["One- & Two-Family Dwelling Scope","5-Ton A/C & 100 MBtu Limits","Residential Heat Pumps & Furnaces"] },

  // ─── SHARED EQUIPMENT (multi-track) ──────────────────────────────────────
  { id:15, num:"15", title:"Water Heaters", tag:"Equipment", mins:50,
    tracks:["A","B","G"],
    articles:["Tankless vs Tank","T&P Valve & Drain Requirements","Heat Pump Water Heaters"] },

  // ─── F33 (GAS) ───────────────────────────────────────────────────────────
  { id:16, num:"16", title:"Gas Piping Sizing (IFGC Ch.4)", tag:"Gas", mins:80,
    tracks:["A","B","G"],
    articles:["Pipe Sizing Method (Table 402.4)","Materials & Joining","Sediment Traps, Valves, CSST Bonding"] },

  { id:17, num:"17", title:"Commercial Cooking Equipment", tag:"Gas", mins:55,
    tracks:["A","G"],
    articles:["Hood Sizing & Overhang","Make-up Air Requirements","Gas Connections to Cooking Equipment"] },

  // ─── DENVER ──────────────────────────────────────────────────────────────
  { id:18, num:"18", title:"Denver Amendments & Permits", tag:"License", mins:45,
    tracks:["A","B","G"],
    articles:["2024 DBC Adoption & Permit Process","Climate Adaptations (Snow, Freeze, High-Altitude)","Denver vs IMC Base Code Differences"] },

  // ─── EPA 608 ─────────────────────────────────────────────────────────────
  { id:19, num:"19", title:"EPA 608 Core (Federal Refrigerant Regs)", tag:"EPA", mins:70,
    tracks:["E"],
    articles:["Clean Air Act §608 & Ozone Science","Refrigerant Classifications (CFC, HCFC, HFC, A2L)","Recovery, Recycling, Reclamation"] },

  { id:20, num:"20", title:"EPA 608 Type I — Small Appliances", tag:"EPA", mins:50,
    tracks:["E"],
    articles:["5-Pound Factory-Sealed Rule","Recovery Standards (90% / 80%)","Sales & Disposal Records"] },

  { id:21, num:"21", title:"EPA 608 Type II — High-Pressure", tag:"EPA", mins:60,
    tracks:["E"],
    articles:["Recovery Vacuum Levels by Charge","Leak Repair Triggers (10/20/30%)","A2L Refrigerant Handling"] },

  { id:22, num:"22", title:"EPA 608 Type III — Low-Pressure", tag:"EPA", mins:55,
    tracks:["E"],
    articles:["Centrifugal Chiller Operation","25 mm Hg Absolute Recovery","Purge Units & Pump-Out"] },
];

export const HVAC_WEEKS = [
  { w:1, title:"Foundations",     focus:"Denver Licensing + Code Navigation",  mods:[1,2,3],          goal:"Lock in supervisor cert rules + code structure" },
  { w:2, title:"Mechanical Core", focus:"General Provisions, Combustion Air, Vents", mods:[4,5,6,7], goal:"30–40% of F29 lives here. Drill the 3-2-10 + two-opening rules." },
  { w:3, title:"Commercial",      focus:"Ventilation, Exhaust, Duct Systems",  mods:[8,9,10],         goal:"F29 commercial weight — dryer 35ft + ASHRAE 62.1 cold." },
  { w:4, title:"Equipment",       focus:"Boilers, Refrigeration, Hydronic, Residential", mods:[11,12,13,14], goal:"Machinery rooms + relief valves + residential scope are testable gold." },
  { w:5, title:"Gas + Denver",    focus:"Water heaters, gas piping, commercial cooking, Denver", mods:[15,16,17,18], goal:"Sediment trap exceptions + CSST bonding + T&P discharge from memory." },
  { w:6, title:"EPA 608",         focus:"Core + Type I/II/III",                mods:[19,20,21,22],    goal:"Recovery vacuum table + leak rate triggers cold." },
  { w:7, title:"Final Prep",      focus:"Sim exams + trap drills",             mods:[],               goal:"80%+ on three full sim exams in your selected track." },
];

export const HVAC_PRODUCT = {
  name:    "Denver HVAC License Prep — Complete",
  state:   "CO",
  tagline: "Pass F29, F32, F33, or EPA 608 — pick your track on day one.",
  domain:  "blueprintdigitalsd.com/hvac-prep",
  edition: "Built against 2018 IMC + 2018 IFGC (current ICC G29 reference). Denver field permits use 2024 IMC as of 2025-06-13 — verify your exam edition with Denver CPD before scheduling.",
};
