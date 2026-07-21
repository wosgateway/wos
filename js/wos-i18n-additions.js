/*
 * NEW i18n KEYS — merge these into the existing translation object(s)
 * inside js/wos-landing.js (that file wasn't included in the upload,
 * so these are provided separately rather than edited in place).
 *
 * Assumes the common pattern: const translations = { th: {...}, lo: {...}, en: {...} }
 * If your actual structure differs, just drop each language's keys into
 * the matching object — the key names below match the new
 * data-i18n="..." attributes added to index.html.
 */

// ---- th ----
{
  nav_why: "ทำไมต้องเรา",

  why_eyebrow: "ทำไมต้องมี WOS",
  why_title: "Healthcare วันนี้กระจัดกระจาย",
  why_sub: "โรงพยาบาล โรงแรม การเดินทาง โภชนาการ ประกัน และการติดตามผล ต่างคนต่างทำงาน คนไข้ต้องประสานงานเองทุกขั้นตอน",
  why_before_label: "วันนี้ (แยกกัน)",
  why_before_gap: "ประสานเอง",
  why_before_caption: "คนไข้ต้องติดต่อทุกฝ่ายเอง ไม่มีใครดูภาพรวม",
  why_after_label: "กับ WOS",
  why_after_caption: "ทุกฝ่ายเชื่อมกันในระบบเดียว",
  why_closing_quote: "WOS เชื่อมทุกอย่างเข้าด้วยกัน — ไม่ใช่แค่ Healthcare Hospitality แต่คือระบบปฏิบัติการเดียวที่ดูแลคนไข้ตลอดเส้นทาง",

  diff_eyebrow: "ความแตกต่าง",
  diff_title: "WOS ไม่ใช่ Agency",
  diff_col_agency: "Agency ทั่วไป",
  diff_col_wos: "WOS",
  diff_row1_agency: "ทำเว็บไซต์",
  diff_row1_wos: "สร้างระบบ",
  diff_row2_agency: "ยิงโฆษณา",
  diff_row2_wos: "สร้างการเติบโต",
  diff_row3_agency: "ติดตั้ง CRM",
  diff_row3_wos: "ออกแบบ Workflow",
  diff_row4_agency: "ส่งมอบโปรเจกต์แล้วจบ",
  diff_row4_wos: "บริหารต่อเนื่อง",
  diff_row5_agency: "เครื่องมือ",
  diff_row5_wos: "Operating System",

  case_badge: "Case Sandbox — กำลังดำเนินการ",
  case_title: "Dr.Dew Clinic, ขอนแก่น",
  case_body: "พื้นที่ทดลองระบบ WOS แบบเต็มรูปแบบ ตั้งแต่ต้อนรับคนไข้ ไปจนถึงการติดตามผลหลังการรักษา เพื่อพิสูจน์โมเดลก่อนขยายไปคลินิกอื่น",
  case_location: "ขอนแก่น, ประเทศไทย",
  case_status: "อยู่ระหว่างดำเนินการ",
  case_timeline_label: "90-Day Transformation",
  case_phase1: "เริ่มต้นระบบ & Onboarding",
  case_phase2: "เชื่อมโรงแรม & Workflow",
  case_phase3: "วัดผลและขยายผล",
}

// ---- lo ----
{
  nav_why: "ເປັນຫຍັງ WOS",

  why_eyebrow: "ເປັນຫຍັງ WOS ຈຶ່ງເກີດຂຶ້ນ",
  why_title: "ລະບົບສາທາລະນະສຸກມື້ນີ້ແຕກແຍກກັນ",
  why_sub: "ໂຮງໝໍ ໂຮງແຮມ ການເດີນທາງ ໂພຊະນາການ ປະກັນໄພ ແລະ ການຕິດຕາມຜົນ ຕ່າງຝ່າຍຕ່າງເຮັດວຽກ ຄົນເຈັບຕ້ອງປະສານງານເອງທຸກຂັ້ນຕອນ",
  why_before_label: "ມື້ນີ້ (ແຍກກັນ)",
  why_before_gap: "ປະສານງານເອງ",
  why_before_caption: "ຄົນເຈັບຕ້ອງຕິດຕໍ່ທຸກຝ່າຍເອງ ບໍ່ມີໃຜເບິ່ງພາບລວມ",
  why_after_label: "ກັບ WOS",
  why_after_caption: "ທຸກຝ່າຍເຊື່ອມກັນໃນລະບົບດຽວ",
  why_closing_quote: "WOS ເຊື່ອມທຸກຢ່າງເຂົ້າກັນ — ບໍ່ແມ່ນພຽງແຕ່ Healthcare Hospitality ແຕ່ແມ່ນລະບົບປະຕິບັດການດຽວທີ່ເບິ່ງແຍງຄົນເຈັບຕະຫລອດເສັ້ນທາງ",

  diff_eyebrow: "ຄວາມແຕກຕ່າງ",
  diff_title: "WOS ບໍ່ແມ່ນ Agency",
  diff_col_agency: "Agency ທົ່ວໄປ",
  diff_col_wos: "WOS",
  diff_row1_agency: "ສ້າງເວັບໄຊທ໌",
  diff_row1_wos: "ສ້າງລະບົບ",
  diff_row2_agency: "ຍິງໂຄສະນາ",
  diff_row2_wos: "ສ້າງການເຕີບໂຕ",
  diff_row3_agency: "ຕິດຕັ້ງ CRM",
  diff_row3_wos: "ອອກແບບ Workflow",
  diff_row4_agency: "ສົ່ງມອບໂຄງການແລ້ວຈົບ",
  diff_row4_wos: "ບໍລິຫານຕໍ່ເນື່ອງ",
  diff_row5_agency: "ເຄື່ອງມື",
  diff_row5_wos: "Operating System",

  case_badge: "Case Sandbox — ກຳລັງດຳເນີນການ",
  case_title: "Dr.Dew Clinic, ຂອນແກ່ນ",
  case_body: "ພື້ນທີ່ທົດລອງລະບົບ WOS ແບບເຕັມຮູບແບບ ຕັ້ງແຕ່ຕ້ອນຮັບຄົນເຈັບ ຈົນເຖິງການຕິດຕາມຜົນຫລັງການປິ່ນປົວ ເພື່ອພິສູດຮູບແບບກ່ອນຂະຫຍາຍໄປສູ່ຄລີນິກອື່ນ",
  case_location: "ຂອນແກ່ນ, ປະເທດໄທ",
  case_status: "ກຳລັງດຳເນີນການ",
  case_timeline_label: "90-Day Transformation",
  case_phase1: "ເລີ່ມຕົ້ນລະບົບ & Onboarding",
  case_phase2: "ເຊື່ອມໂຮງແຮມ & Workflow",
  case_phase3: "ວັດຜົນ ແລະ ຂະຫຍາຍຜົນ",
}

// ---- en ----
{
  nav_why: "Why WOS",

  why_eyebrow: "Why WOS Exists",
  why_title: "Healthcare today is fragmented",
  why_sub: "Hospitals, hotels, transport, nutrition, insurance, and follow-up all operate separately. Patients are left to coordinate everything themselves.",
  why_before_label: "Today (Fragmented)",
  why_before_gap: "self-coordinated",
  why_before_caption: "The patient contacts every party alone — no one owns the full journey.",
  why_after_label: "With WOS",
  why_after_caption: "Every party connected in one system.",
  why_closing_quote: "WOS connects them into one operating system — not just healthcare hospitality, but the single layer that carries a patient through the entire journey.",

  diff_eyebrow: "The Difference",
  diff_title: "WOS is not an agency",
  diff_col_agency: "Traditional Agency",
  diff_col_wos: "WOS",
  diff_row1_agency: "Builds a website",
  diff_row1_wos: "Builds a system",
  diff_row2_agency: "Runs ads",
  diff_row2_wos: "Builds growth",
  diff_row3_agency: "Installs a CRM",
  diff_row3_wos: "Designs the workflow",
  diff_row4_agency: "Delivers a project, then exits",
  diff_row4_wos: "Operates continuously",
  diff_row5_agency: "A tool",
  diff_row5_wos: "An operating system",

  case_badge: "Case Sandbox — In Progress",
  case_title: "Dr.Dew Clinic, Khon Kaen",
  case_body: "A live sandbox for the full WOS system — from patient intake to post-treatment follow-up — proving the model before it scales to other clinics.",
  case_location: "Khon Kaen, Thailand",
  case_status: "In progress",
  case_timeline_label: "90-Day Transformation",
  case_phase1: "System setup & onboarding",
  case_phase2: "Hotel & workflow integration",
  case_phase3: "Measure & scale",
}
