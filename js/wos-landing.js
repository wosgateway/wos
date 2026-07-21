/**
 * WOS — Healthcare Hospitality Operating System
 * Landing page interactions: i18n (TH / LO / EN) + language switcher
 */
(function () {
  'use strict';

  var translations = {
    th: {
      nav_why: 'ทำไมต้องเรา',
      nav_system: 'ระบบทำงานอย่างไร',
      nav_services: 'บริการ',
      nav_ecosystem: 'ระบบนิเวศ',
      nav_partner: 'ร่วมเป็นพันธมิตร',
      cta_partner_header: 'ร่วมเป็นพันธมิตร',

      hero_headline: 'ระบบปฏิบัติการเพื่อการดูแลสุขภาพและที่พัก',
      hero_body: 'โครงสร้างพื้นฐานที่เชื่อมโรงพยาบาล โรงแรม และการเดินทาง ไว้ในระบบเดียว ประสานงานผู้ป่วยข้ามพรมแดนไทย-ลาว ตั้งแต่นัดหมายจนถึงกลับบ้านอย่างไร้รอยต่อ',
      cta_partner: 'สมัครเป็นพันธมิตร',
      cta_investor: 'ข้อมูลสำหรับนักลงทุน',

      flow_clinic: 'คลินิก / โรงพยาบาล',
      flow_wos: 'WOS',
      flow_hotel: 'โรงแรม',
      flow_transport: 'การเดินทาง',
      flow_nutrition: 'โภชนาการ',
      flow_journey: 'การดูแลต่อเนื่อง',

      why_eyebrow: 'ทำไมต้องมี WOS',
      why_title: 'Healthcare วันนี้กระจัดกระจาย',
      why_sub: 'โรงพยาบาล โรงแรม การเดินทาง โภชนาการ ประกัน และการติดตามผล ต่างคนต่างทำงาน คนไข้ต้องประสานงานเองทุกขั้นตอน',
      why_before_label: 'วันนี้ (แยกกัน)',
      why_before_gap: 'ประสานเอง',
      why_before_caption: 'คนไข้ต้องติดต่อทุกฝ่ายเอง ไม่มีใครดูภาพรวม',
      why_after_label: 'กับ WOS',
      why_after_caption: 'ทุกฝ่ายเชื่อมกันในระบบเดียว',
      why_closing_quote: 'WOS เชื่อมทุกอย่างเข้าด้วยกัน — ไม่ใช่แค่ Healthcare Hospitality แต่คือระบบปฏิบัติการเดียวที่ดูแลคนไข้ตลอดเส้นทาง',

      diff_eyebrow: 'ความแตกต่าง',
      diff_title: 'WOS ไม่ใช่ Agency',
      diff_col_agency: 'Agency ทั่วไป',
      diff_col_wos: 'WOS',
      diff_row1_agency: 'ทำเว็บไซต์',
      diff_row1_wos: 'สร้างระบบ',
      diff_row2_agency: 'ยิงโฆษณา',
      diff_row2_wos: 'สร้างการเติบโต',
      diff_row3_agency: 'ติดตั้ง CRM',
      diff_row3_wos: 'ออกแบบ Workflow',
      diff_row4_agency: 'ส่งมอบโปรเจกต์แล้วจบ',
      diff_row4_wos: 'บริหารต่อเนื่อง',
      diff_row5_agency: 'เครื่องมือ',
      diff_row5_wos: 'Operating System',

      case_badge: 'Case Sandbox — กำลังดำเนินการ',
      case_title: 'Dr.Dew Clinic, ขอนแก่น',
      case_body: 'พื้นที่ทดลองระบบ WOS แบบเต็มรูปแบบ ตั้งแต่ต้อนรับคนไข้ ไปจนถึงการติดตามผลหลังการรักษา เพื่อพิสูจน์โมเดลก่อนขยายไปคลินิกอื่น',
      case_location: 'ขอนแก่น, ประเทศไทย',
      case_status: 'อยู่ระหว่างดำเนินการ',
      case_timeline_label: '90-Day Transformation',
      case_phase1: 'เริ่มต้นระบบ & Onboarding',
      case_phase2: 'เชื่อมโรงแรม & Workflow',
      case_phase3: 'วัดผลและขยายผล',

      pilot_badge: 'ระยะนำร่อง — ขอนแก่น · อุดรธานี · เวียงจันทน์',
      stat_hotels_label: 'โรงแรมพันธมิตร',
      stat_clinics_label: 'คลินิก/โรงพยาบาลพันธมิตร',
      stat_nights_label: 'คืนพักที่ประสานงานแล้ว',
      stat_satisfaction_label: 'ความพึงพอใจของผู้ป่วย',

      system_title: 'ระบบทำงานอย่างไร',
      system_sub: 'ห้าขั้นตอน ตั้งแต่ผู้ป่วยติดต่อคลินิกจนถึงเดินทางกลับบ้านอย่างปลอดภัย',
      step1_title: '1. รับเคสจากคลินิก',
      step1_desc: 'คลินิกหรือโรงพยาบาลส่งคำขอเคสผู้ป่วยข้ามพรมแดนเข้าระบบ WOS',
      step2_title: '2. ประสานงานผ่าน WOS',
      step2_desc: 'ระบบจับคู่ที่พัก การเดินทาง และบริการเสริมให้ตรงกับความต้องการของผู้ป่วย',
      step3_title: '3. วางแผนการเดินทาง',
      step3_desc: 'จัดตารางรับส่งและเส้นทางระหว่างที่พักกับสถานพยาบาลให้ผู้ป่วยและญาติ',
      step4_title: '4. เข้าพักและดูแล',
      step4_desc: 'โรงแรมพันธมิตรต้อนรับผู้ป่วยพร้อมมาตรฐานที่เหมาะกับผู้ป่วยพักฟื้น',
      step5_title: '5. ติดตามผลและปิดเคส',
      step5_desc: 'ติดตามอาการหลังการรักษาและสรุปผลร่วมกับคลินิกต้นทาง',

      services_title: 'บริการของเรา',
      services_sub: 'สี่เสาหลักที่ทำให้การเดินทางรักษาข้ามพรมแดนราบรื่น',
      svc1_title: 'ประสานงานคลินิก',
      svc1_desc: 'เชื่อมต่อคำขอเคส นัดหมาย และประวัติการรักษาระหว่างสถานพยาบาลไทย-ลาว',
      svc2_title: 'ที่พักสำหรับผู้ป่วย',
      svc2_desc: 'คัดเลือกโรงแรมที่รองรับผู้ป่วยพักฟื้นและญาติผู้ติดตามโดยเฉพาะ',
      svc3_title: 'การเดินทางและรับส่ง',
      svc3_desc: 'จัดรถรับส่งระหว่างด่านชายแดน ที่พัก และสถานพยาบาลตลอดเส้นทาง',
      svc4_title: 'โภชนาการและฟื้นฟู',
      svc4_desc: 'อาหารและโปรแกรมฟื้นฟูที่ออกแบบให้เหมาะกับแผนการรักษาของผู้ป่วย',

      ecosystem_title: 'ระบบนิเวศพันธมิตรของ WOS',
      eco_hospital: 'โรงพยาบาล',
      eco_hotel: 'โรงแรม',
      eco_wellness: 'เวลเนส',
      eco_insurance: 'ประกันสุขภาพ',
      eco_travel: 'บริการเดินทาง',
      ecosystem_cta: 'ร่วมเป็นส่วนหนึ่งของระบบนิเวศ →',

      form_title: 'ร่วมเป็นพันธมิตรกับ WOS',
      form_sub: 'สำหรับคลินิก โรงแรม และพันธมิตรที่สนใจร่วมโครงการนำร่อง',
      investor_line: 'สนใจร่วมลงทุนกับ WOS?',
      investor_link: 'ดูข้อมูลสำหรับนักลงทุน',

      footer_tagline: 'โครงสร้างพื้นฐานเพื่อการดูแลสุขภาพและที่พักข้ามพรมแดนไทย-ลาว',
      footer_partner_heading: 'พันธมิตร',
      footer_for_hospital: 'สำหรับโรงพยาบาล',
      footer_for_hotel: 'สำหรับโรงแรม',
      footer_for_investor: 'สำหรับนักลงทุน',
      footer_career: 'ร่วมงานกับเรา',
      footer_system_heading: 'ระบบ',
      footer_contact_heading: 'ติดต่อเรา',
      footer_phone: '+66 85 590 7666',
      footer_company_line: 'ดำเนินการภายใต้ หจก. รอยัล บริตจ์ 99',
      footer_copyright: '© 2026 WOS. สงวนลิขสิทธิ์ทุกประการ'
    },

    lo: {
      nav_why: 'ເປັນຫຍັງ WOS',
      nav_system: 'ລະບົບເຮັດວຽກແນວໃດ',
      nav_services: 'ບໍລິການ',
      nav_ecosystem: 'ລະບົບນິເວດ',
      nav_partner: 'ເປັນຄູ່ຮ່ວມງານ',
      cta_partner_header: 'ເປັນຄູ່ຮ່ວມງານ',

      hero_headline: 'ລະບົບປະຕິບັດການເພື່ອການດູແລສຸຂະພາບ ແລະ ບ່ອນພັກ',
      hero_body: 'ໂຄງລ່າງພື້ນຖານທີ່ເຊື່ອມໂຮງໝໍ, ໂຮງແຮມ ແລະ ການເດີນທາງໄວ້ໃນລະບົບດຽວ ປະສານງານຄົນເຈັບຂ້າມຊາຍແດນໄທ-ລາວ ຕັ້ງແຕ່ນັດໝາຍຈົນເຖິງກັບບ້ານແບບບໍ່ມີຮອຍຕໍ່',
      cta_partner: 'ສະໝັກເປັນຄູ່ຮ່ວມງານ',
      cta_investor: 'ຂໍ້ມູນສຳລັບນັກລົງທຶນ',

      flow_clinic: 'ຄລີນິກ / ໂຮງໝໍ',
      flow_wos: 'WOS',
      flow_hotel: 'ໂຮງແຮມ',
      flow_transport: 'ການເດີນທາງ',
      flow_nutrition: 'ໂພຊະນາການ',
      flow_journey: 'ການດູແລຕໍ່ເນື່ອງ',

      why_eyebrow: 'ເປັນຫຍັງ WOS ຈຶ່ງເກີດຂຶ້ນ',
      why_title: 'ລະບົບສາທາລະນະສຸກມື້ນີ້ແຕກແຍກກັນ',
      why_sub: 'ໂຮງໝໍ ໂຮງແຮມ ການເດີນທາງ ໂພຊະນາການ ປະກັນໄພ ແລະ ການຕິດຕາມຜົນ ຕ່າງຝ່າຍຕ່າງເຮັດວຽກ ຄົນເຈັບຕ້ອງປະສານງານເອງທຸກຂັ້ນຕອນ',
      why_before_label: 'ມື້ນີ້ (ແຍກກັນ)',
      why_before_gap: 'ປະສານງານເອງ',
      why_before_caption: 'ຄົນເຈັບຕ້ອງຕິດຕໍ່ທຸກຝ່າຍເອງ ບໍ່ມີໃຜເບິ່ງພາບລວມ',
      why_after_label: 'ກັບ WOS',
      why_after_caption: 'ທຸກຝ່າຍເຊື່ອມກັນໃນລະບົບດຽວ',
      why_closing_quote: 'WOS ເຊື່ອມທຸກຢ່າງເຂົ້າກັນ — ບໍ່ແມ່ນພຽງແຕ່ Healthcare Hospitality ແຕ່ແມ່ນລະບົບປະຕິບັດການດຽວທີ່ເບິ່ງແຍງຄົນເຈັບຕະຫລອດເສັ້ນທາງ',

      diff_eyebrow: 'ຄວາມແຕກຕ່າງ',
      diff_title: 'WOS ບໍ່ແມ່ນ Agency',
      diff_col_agency: 'Agency ທົ່ວໄປ',
      diff_col_wos: 'WOS',
      diff_row1_agency: 'ສ້າງເວັບໄຊທ໌',
      diff_row1_wos: 'ສ້າງລະບົບ',
      diff_row2_agency: 'ຍິງໂຄສະນາ',
      diff_row2_wos: 'ສ້າງການເຕີບໂຕ',
      diff_row3_agency: 'ຕິດຕັ້ງ CRM',
      diff_row3_wos: 'ອອກແບບ Workflow',
      diff_row4_agency: 'ສົ່ງມອບໂຄງການແລ້ວຈົບ',
      diff_row4_wos: 'ບໍລິຫານຕໍ່ເນື່ອງ',
      diff_row5_agency: 'ເຄື່ອງມື',
      diff_row5_wos: 'Operating System',

      case_badge: 'Case Sandbox — ກຳລັງດຳເນີນການ',
      case_title: 'Dr.Dew Clinic, ຂອນແກ່ນ',
      case_body: 'ພື້ນທີ່ທົດລອງລະບົບ WOS ແບບເຕັມຮູບແບບ ຕັ້ງແຕ່ຕ້ອນຮັບຄົນເຈັບ ຈົນເຖິງການຕິດຕາມຜົນຫລັງການປິ່ນປົວ ເພື່ອພິສູດຮູບແບບກ່ອນຂະຫຍາຍໄປສູ່ຄລີນິກອື່ນ',
      case_location: 'ຂອນແກ່ນ, ປະເທດໄທ',
      case_status: 'ກຳລັງດຳເນີນການ',
      case_timeline_label: '90-Day Transformation',
      case_phase1: 'ເລີ່ມຕົ້ນລະບົບ & Onboarding',
      case_phase2: 'ເຊື່ອມໂຮງແຮມ & Workflow',
      case_phase3: 'ວັດຜົນ ແລະ ຂະຫຍາຍຜົນ',

      pilot_badge: 'ໄລຍະນຳຮ່ອງ — ຂອນແກ່ນ · ອຸດອນທານີ · ວຽງຈັນ',
      stat_hotels_label: 'ໂຮງແຮມຄູ່ຮ່ວມງານ',
      stat_clinics_label: 'ຄລີນິກ/ໂຮງໝໍຄູ່ຮ່ວມງານ',
      stat_nights_label: 'ຄືນພັກທີ່ປະສານງານແລ້ວ',
      stat_satisfaction_label: 'ຄວາມພໍໃຈຂອງຄົນເຈັບ',

      system_title: 'ລະບົບເຮັດວຽກແນວໃດ',
      system_sub: 'ຫ້າຂັ້ນຕອນ ຕັ້ງແຕ່ຄົນເຈັບຕິດຕໍ່ຄລີນິກຈົນເຖິງເດີນທາງກັບບ້ານຢ່າງປອດໄພ',
      step1_title: '1. ຮັບເຄສຈາກຄລີນິກ',
      step1_desc: 'ຄລີນິກ ຫຼື ໂຮງໝໍສົ່ງຄຳຮ້ອງຂໍເຄສຄົນເຈັບຂ້າມຊາຍແດນເຂົ້າລະບົບ WOS',
      step2_title: '2. ປະສານງານຜ່ານ WOS',
      step2_desc: 'ລະບົບຈັບຄູ່ບ່ອນພັກ, ການເດີນທາງ ແລະ ບໍລິການເສີມໃຫ້ຕົງກັບຄວາມຕ້ອງການຂອງຄົນເຈັບ',
      step3_title: '3. ວາງແຜນການເດີນທາງ',
      step3_desc: 'ຈັດຕາຕະລາງຮັບສົ່ງ ແລະ ເສັ້ນທາງລະຫວ່າງບ່ອນພັກກັບສະຖານທີ່ປິ່ນປົວ',
      step4_title: '4. ເຂົ້າພັກ ແລະ ດູແລ',
      step4_desc: 'ໂຮງແຮມຄູ່ຮ່ວມງານຕ້ອນຮັບຄົນເຈັບພ້ອມມາດຕະຖານທີ່ເໝາະສົມກັບຄົນເຈັບພັກຟື້ນ',
      step5_title: '5. ຕິດຕາມຜົນ ແລະ ປິດເຄສ',
      step5_desc: 'ຕິດຕາມອາການຫຼັງການປິ່ນປົວ ແລະ ສະຫຼຸບຜົນຮ່ວມກັບຄລີນິກຕົ້ນທາງ',

      services_title: 'ບໍລິການຂອງພວກເຮົາ',
      services_sub: 'ສີ່ເສົາຫຼັກທີ່ເຮັດໃຫ້ການເດີນທາງປິ່ນປົວຂ້າມຊາຍແດນລຽບງ່າຍ',
      svc1_title: 'ປະສານງານຄລີນິກ',
      svc1_desc: 'ເຊື່ອມຕໍ່ຄຳຮ້ອງຂໍເຄສ, ນັດໝາຍ ແລະ ປະຫວັດການປິ່ນປົວລະຫວ່າງສະຖານທີ່ໄທ-ລາວ',
      svc2_title: 'ບ່ອນພັກສຳລັບຄົນເຈັບ',
      svc2_desc: 'ຄັດເລືອກໂຮງແຮມທີ່ຮອງຮັບຄົນເຈັບພັກຟື້ນ ແລະ ຍາດພີ່ນ້ອງຜູ້ຕິດຕາມໂດຍສະເພາະ',
      svc3_title: 'ການເດີນທາງ ແລະ ຮັບສົ່ງ',
      svc3_desc: 'ຈັດລົດຮັບສົ່ງລະຫວ່າງດ່ານຊາຍແດນ, ບ່ອນພັກ ແລະ ສະຖານທີ່ປິ່ນປົວຕະຫຼອດເສັ້ນທາງ',
      svc4_title: 'ໂພຊະນາການ ແລະ ຟື້ນຟູ',
      svc4_desc: 'ອາຫານ ແລະ ໂປຣແກຣມຟື້ນຟູທີ່ອອກແບບໃຫ້ເໝາະສົມກັບແຜນການປິ່ນປົວ',

      ecosystem_title: 'ລະບົບນິເວດຄູ່ຮ່ວມງານຂອງ WOS',
      eco_hospital: 'ໂຮງໝໍ',
      eco_hotel: 'ໂຮງແຮມ',
      eco_wellness: 'ເວວເນສ',
      eco_insurance: 'ປະກັນສຸຂະພາບ',
      eco_travel: 'ບໍລິການເດີນທາງ',
      ecosystem_cta: 'ເຂົ້າຮ່ວມລະບົບນິເວດ →',

      form_title: 'ເປັນຄູ່ຮ່ວມງານກັບ WOS',
      form_sub: 'ສຳລັບຄລີນິກ, ໂຮງແຮມ ແລະ ຄູ່ຮ່ວມງານທີ່ສົນໃຈເຂົ້າຮ່ວມໂຄງການນຳຮ່ອງ',
      investor_line: 'ສົນໃຈຮ່ວມລົງທຶນກັບ WOS ບໍ?',
      investor_link: 'ເບິ່ງຂໍ້ມູນສຳລັບນັກລົງທຶນ',

      footer_tagline: 'ໂຄງລ່າງພື້ນຖານເພື່ອການດູແລສຸຂະພາບ ແລະ ບ່ອນພັກຂ້າມຊາຍແດນໄທ-ລາວ',
      footer_partner_heading: 'ຄູ່ຮ່ວມງານ',
      footer_for_hospital: 'ສຳລັບໂຮງໝໍ',
      footer_for_hotel: 'ສຳລັບໂຮງແຮມ',
      footer_for_investor: 'ສຳລັບນັກລົງທຶນ',
      footer_career: 'ຮ່ວມງານກັບພວກເຮົາ',
      footer_system_heading: 'ລະບົບ',
      footer_contact_heading: 'ຕິດຕໍ່ພວກເຮົາ',
      footer_phone: '+66 85 590 7666',
      footer_company_line: 'ດຳເນີນງານພາຍໃຕ້ Royal Bridge 99 LP',
      footer_copyright: '© 2026 WOS. ສະຫງວນລິຂະສິດທຸກປະການ'
    },

    en: {
      nav_why: 'Why WOS',
      nav_system: 'How It Works',
      nav_services: 'Services',
      nav_ecosystem: 'Ecosystem',
      nav_partner: 'Become a Partner',
      cta_partner_header: 'Become a Partner',

      hero_headline: 'The Operating System for Cross-Border Healthcare & Hospitality',
      hero_body: 'One infrastructure connecting hospitals, hotels, and transport — coordinating cross-border Thai-Lao patients from first appointment to safe return home.',
      cta_partner: 'Apply as a Partner',
      cta_investor: 'Investor Information',

      flow_clinic: 'Clinic / Hospital',
      flow_wos: 'WOS',
      flow_hotel: 'Hotel',
      flow_transport: 'Transport',
      flow_nutrition: 'Nutrition',
      flow_journey: 'Continued Care',

      why_eyebrow: 'Why WOS Exists',
      why_title: 'Healthcare today is fragmented',
      why_sub: 'Hospitals, hotels, transport, nutrition, insurance, and follow-up all operate separately. Patients are left to coordinate everything themselves.',
      why_before_label: 'Today (Fragmented)',
      why_before_gap: 'self-coordinated',
      why_before_caption: 'The patient contacts every party alone — no one owns the full journey.',
      why_after_label: 'With WOS',
      why_after_caption: 'Every party connected in one system.',
      why_closing_quote: 'WOS connects them into one operating system — not just healthcare hospitality, but the single layer that carries a patient through the entire journey.',

      diff_eyebrow: 'The Difference',
      diff_title: 'WOS is not an agency',
      diff_col_agency: 'Traditional Agency',
      diff_col_wos: 'WOS',
      diff_row1_agency: 'Builds a website',
      diff_row1_wos: 'Builds a system',
      diff_row2_agency: 'Runs ads',
      diff_row2_wos: 'Builds growth',
      diff_row3_agency: 'Installs a CRM',
      diff_row3_wos: 'Designs the workflow',
      diff_row4_agency: 'Delivers a project, then exits',
      diff_row4_wos: 'Operates continuously',
      diff_row5_agency: 'A tool',
      diff_row5_wos: 'An operating system',

      case_badge: 'Case Sandbox — In Progress',
      case_title: 'Dr.Dew Clinic, Khon Kaen',
      case_body: 'A live sandbox for the full WOS system — from patient intake to post-treatment follow-up — proving the model before it scales to other clinics.',
      case_location: 'Khon Kaen, Thailand',
      case_status: 'In progress',
      case_timeline_label: '90-Day Transformation',
      case_phase1: 'System setup & onboarding',
      case_phase2: 'Hotel & workflow integration',
      case_phase3: 'Measure & scale',

      pilot_badge: 'Pilot Phase — Khon Kaen · Udon Thani · Vientiane',
      stat_hotels_label: 'Partner Hotels',
      stat_clinics_label: 'Partner Clinics & Hospitals',
      stat_nights_label: 'Room-Nights Coordinated',
      stat_satisfaction_label: 'Patient Satisfaction',

      system_title: 'How the System Works',
      system_sub: 'Five steps, from a patient\u2019s first contact with a clinic to a safe journey home',
      step1_title: '1. Case Intake',
      step1_desc: 'A clinic or hospital submits a cross-border patient case into the WOS system',
      step2_title: '2. Coordination via WOS',
      step2_desc: 'The system matches accommodation, transport, and support services to the patient\u2019s needs',
      step3_title: '3. Journey Planning',
      step3_desc: 'Transfers and routes are scheduled between accommodation and the treatment facility',
      step4_title: '4. Stay & Care',
      step4_desc: 'Partner hotels welcome patients with standards suited to post-treatment recovery',
      step5_title: '5. Follow-up & Case Close',
      step5_desc: 'Post-treatment progress is tracked and reported back to the originating clinic',

      services_title: 'Our Services',
      services_sub: 'Four pillars that make cross-border treatment travel seamless',
      svc1_title: 'Clinic Coordination',
      svc1_desc: 'Connecting case requests, appointments, and treatment records across Thai-Lao facilities',
      svc2_title: 'Patient Accommodation',
      svc2_desc: 'Hotels selected specifically to support recovering patients and accompanying family',
      svc3_title: 'Transport & Transfers',
      svc3_desc: 'Transfers arranged across the border crossing, accommodation, and treatment facility',
      svc4_title: 'Nutrition & Recovery',
      svc4_desc: 'Meals and recovery programs designed around each patient\u2019s treatment plan',

      ecosystem_title: 'The WOS Partner Ecosystem',
      eco_hospital: 'Hospitals',
      eco_hotel: 'Hotels',
      eco_wellness: 'Wellness',
      eco_insurance: 'Health Insurance',
      eco_travel: 'Travel Services',
      ecosystem_cta: 'Join the ecosystem \u2192',

      form_title: 'Become a WOS Partner',
      form_sub: 'For clinics, hotels, and partners interested in joining the pilot program',
      investor_line: 'Interested in investing in WOS?',
      investor_link: 'View investor information',

      footer_tagline: 'Infrastructure for cross-border Thai-Lao healthcare and hospitality',
      footer_partner_heading: 'Partners',
      footer_for_hospital: 'For Hospitals',
      footer_for_hotel: 'For Hotels',
      footer_for_investor: 'For Investors',
      footer_career: 'Careers',
      footer_system_heading: 'System',
      footer_contact_heading: 'Contact',
      footer_phone: '+66 85 590 7666',
      footer_company_line: 'Operated under Royal Bridge 99 LP',
      footer_copyright: '\u00A9 2026 WOS. All rights reserved.'
    }
  };

  var htmlLangMap = { th: 'th', lo: 'lo', en: 'en' };
  var STORAGE_KEY = 'wos_lang';
  var currentLang = 'th';

  function detectDefaultLang() {
    try {
      var nav = (navigator.language || navigator.userLanguage || 'th').toLowerCase();
      if (nav.indexOf('lo') === 0) return 'lo';
      if (nav.indexOf('th') === 0) return 'th';
      if (nav.indexOf('en') === 0) return 'en';
    } catch (e) {}
    return 'th';
  }

  function applyTranslations(lang) {
    var dict = translations[lang] || translations.th;
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        nodes[i].textContent = dict[key];
      }
    }
    document.documentElement.setAttribute('lang', htmlLangMap[lang] || 'th');

    var buttons = document.querySelectorAll('.lang-btn');
    for (var b = 0; b < buttons.length; b++) {
      var isActive = buttons[b].getAttribute('data-lang') === lang;
      buttons[b].classList.toggle('active', isActive);
      buttons[b].setAttribute('aria-pressed', isActive ? 'true' : 'false');
    }
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    applyTranslations(lang);
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
  }

  function initLangSwitcher() {
    var buttons = document.querySelectorAll('.lang-btn');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('role', 'button');
      buttons[i].setAttribute('aria-pressed', 'false');
      buttons[i].addEventListener('click', function () {
        setLanguage(this.getAttribute('data-lang'));
      });
    }
  }

  function initSmoothScroll() {
    var anchors = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < anchors.length; i++) {
      anchors[i].addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (href.length > 1) {
          var target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var saved = null;
    try { saved = window.localStorage.getItem(STORAGE_KEY); } catch (e) {}
    var initial = (saved && translations[saved]) ? saved : detectDefaultLang();
    setLanguage(initial);
    initLangSwitcher();
    initSmoothScroll();
  });
})();
