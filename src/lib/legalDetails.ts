export type LegalLanguage = 'lo' | 'en' | 'zh' | 'th';
type Section = { title: string; body: string };
export const legalDetails: Record<LegalLanguage, { privacy: Section[]; terms: Section[]; cookieNotice: string }> = {
  zh: {
    privacy: [
      {title:'实际处理的数据',body:'本站不要求注册账号，也不直接处理在线付款。访问网站时，托管服务可能记录 IP、请求时间、浏览器和错误信息以维护安全。仅在您同意分析型 Cookie 后加载 Google Analytics。您主动发送的电子邮件仅用于回复和更正信息。'},
      {title:'Cookie 与选择',body:'必要的本地存储用于记住 Cookie 选择；分析统计默认关闭。您可以随时在页脚的 Cookie 设置中改变偏好。营销 Cookie 目前没有启用。'},
      {title:'第三方链接与图片',body:'Google Maps、外部参考资料及图片来源链接可能将您带往第三方网站；访问后适用其自己的隐私规则。网页字体和脚本可能由第三方内容分发服务提供。'},
      {title:'保存期限与安全',body:'Cookie 偏好保存在您的浏览器，您可清除网站数据。与更正请求相关的邮件会在处理所需期间保存。我们采取合理措施保护资料，但互联网传输无法保证绝对安全。'},
      {title:'隐私联系与更正',body:'如需查询、更正或删除您主动提供的信息，或询问数据处理事宜，请联系 laupetter72@gmail.com。适用法律赋予您的权利不受本说明限制。'},
    ],
    terms: [
      {title:'网站性质及适用范围',body:'本站是独立的非营利旅游资讯指南，并非景点管理机构、政府机关、Google Maps 或商家的官方网站。本站不销售门票、住宿或交通服务。'},
      {title:'参观信息与安全',body:'开放时间、票价、路线、无障碍条件及当地规定可能随时变化。重要安排请与景点运营方或现场公告核实；参观时须遵守当地法律及现场安全指示。'},
      {title:'地图、评价与外部网站',body:'地图按钮指向对应地点的外部服务。第三方评分、意见及页面不由本站控制，用户应自行判断其适用性。本站不保证外部服务始终可用。'},
      {title:'原创文字、照片与引用',body:'本站原创文字和设计受适用法律保护；照片及第三方材料归各自权利人所有。保留原作者署名和出处，不应将本站内容冒充官方公告。'},
      {title:'责任与变更',body:'本站尽力更新资料，但不保证无误或持续可用。对于实际出行决策，请独立核查。我们可能更新网页内容与条款，并在本页标注修订日期。'},
      {title:'问题反馈',body:'发现内容错误、链接失效或需要技术支援，请联系 laupetter72@gmail.com。'},
    ],
    cookieNotice:'分析型 Cookie 默认关闭，只有主动允许后才加载 Google Analytics。必要的 Cookie 选择记录保存在浏览器中；本站目前没有启用广告营销 Cookie。',
  },
  en: {
    privacy: [
      {title:'Data actually processed',body:'No account or payment is required. Hosting infrastructure may log IP addresses, request times, browser details and errors for security. Google Analytics loads only after analytics consent. Emails you send voluntarily are used to respond to questions and corrections.'},
      {title:'Cookies and choices',body:'Local storage remembers your consent choice. Analytics is off by default and can be changed through Cookie Settings in the footer. Marketing cookies are not currently used.'},
      {title:'Third-party links and media',body:'Google Maps, reference sites and photo-source links lead to services with their own privacy policies. Fonts and scripts may be served by external content providers.'},
      {title:'Retention and security',body:'Consent preferences remain in your browser until cleared. Correction emails are retained for the time needed to address the request. Reasonable safeguards are used, but no online transmission is perfectly secure.'},
      {title:'Contact and rights',body:'For access, correction, deletion or privacy questions about information you supplied, email laupetter72@gmail.com. Rights under applicable law remain unaffected.'},
    ],
    terms: [
      {title:'Independent guide',body:'This non-profit travel information guide is not operated by a destination authority, government body, Google Maps or any featured business. It does not sell tickets, accommodation or transport.'},
      {title:'Visitor information and safety',body:'Hours, prices, routes, accessibility and local rules can change. Check critical arrangements with the venue or on-site notices and follow local law and safety instructions.'},
      {title:'Maps, reviews and external services',body:'Map links open third-party place listings. External opinions, ratings and services are outside our control, and their availability is not guaranteed.'},
      {title:'Text, photography and attribution',body:'Original text and site design are protected under applicable law. Photographs and third-party materials belong to their respective owners. Do not present this guide as an official notice.'},
      {title:'Updates and limitations',body:'We aim for accuracy but cannot warrant completeness or uninterrupted availability. Verify travel decisions independently. These terms may be updated with a revision date.'},
      {title:'Corrections and technical support',body:'Report errors, broken links or technical issues to laupetter72@gmail.com.'},
    ],
    cookieNotice:'Analytics is off by default and Google Analytics loads only after your consent. Your choice is saved in this browser; advertising or marketing cookies are not currently used.',
  },
  th: {
    privacy: [
      {title:'ข้อมูลที่ประมวลผล',body:'ไม่ต้องสมัครบัญชีหรือชำระเงิน ระบบโฮสติ้งอาจบันทึก IP เวลาเข้าชม เบราว์เซอร์ และข้อผิดพลาดเพื่อความปลอดภัย Google Analytics จะโหลดเมื่อยินยอมเท่านั้น อีเมลที่ส่งมาใช้ตอบคำถามและแก้ไขข้อมูล'},
      {title:'คุกกี้และทางเลือก',body:'ระบบจัดเก็บในเบราว์เซอร์จดจำการตั้งค่าคุกกี้ ปิดการวิเคราะห์เป็นค่าเริ่มต้น และเปลี่ยนได้ที่ตั้งค่าคุกกี้ท้ายหน้า ขณะนี้ไม่มีคุกกี้โฆษณา'},
      {title:'บริการภายนอก',body:'Google Maps เว็บไซต์อ้างอิง และลิงก์ที่มาของภาพมีนโยบายความเป็นส่วนตัวของตนเอง แบบอักษรและสคริปต์อาจมาจากผู้ให้บริการภายนอก'},
      {title:'การเก็บรักษาและความปลอดภัย',body:'ค่าความยินยอมเก็บในเบราว์เซอร์จนกว่าจะลบข้อมูลเว็บไซต์ อีเมลเก็บเท่าที่จำเป็นเพื่อดำเนินการ เราดูแลข้อมูลอย่างเหมาะสมแต่ไม่อาจรับประกันความปลอดภัยทั้งหมด'},
      {title:'ติดต่อและสิทธิ',body:'สอบถาม แก้ไข หรือลบข้อมูลที่คุณส่งมาได้ที่ laupetter72@gmail.com โดยไม่กระทบสิทธิตามกฎหมาย'},
    ],
    terms: [
      {title:'สถานะของเว็บไซต์',body:'คู่มือข้อมูลท่องเที่ยวอิสระไม่แสวงหากำไร ไม่ใช่เว็บไซต์ทางการของหน่วยงานรัฐ สถานที่ท่องเที่ยว Google Maps หรือร้านค้า และไม่มีบริการขายตั๋วหรือจอง'},
      {title:'ข้อมูลเดินทางและความปลอดภัย',body:'เวลาเปิด ราคา เส้นทาง และกฎอาจเปลี่ยนได้ โปรดตรวจจากสถานที่จริงและทำตามกฎหมายและข้อกำหนดด้านความปลอดภัย'},
      {title:'แผนที่และเว็บไซต์ภายนอก',body:'ลิงก์แผนที่ไปยังบริการภายนอก ความเห็น คะแนน และความพร้อมใช้งานไม่ได้อยู่ในการควบคุมของเว็บไซต์นี้'},
      {title:'ข้อความและภาพ',body:'ข้อความต้นฉบับและการออกแบบได้รับความคุ้มครอง ภาพและเนื้อหาของบุคคลภายนอกเป็นของเจ้าของสิทธิ ห้ามนำเสนอคู่มือนี้เป็นประกาศทางการ'},
      {title:'ข้อจำกัดและการเปลี่ยนแปลง',body:'เราพยายามให้ข้อมูลถูกต้องแต่ไม่รับประกันความสมบูรณ์ ควรตรวจสอบก่อนตัดสินใจเดินทาง ข้อกำหนดอาจมีการปรับปรุง'},
      {title:'ติดต่อ',body:'แจ้งข้อมูลผิด ลิงก์เสีย หรือปัญหาทางเทคนิคที่ laupetter72@gmail.com'},
    ],
    cookieNotice:'ปิดการวิเคราะห์เป็นค่าเริ่มต้น Google Analytics จะโหลดเมื่อคุณยินยอมเท่านั้น ระบบจดจำการตั้งค่าในเบราว์เซอร์และขณะนี้ไม่มีคุกกี้โฆษณา',
  },
  lo: {
    privacy: [
      {title:'ຂໍ້ມູນທີ່ປະມວນຜົນ',body:'ບໍ່ຈຳເປັນຕ້ອງລົງທະບຽນ ຫຼື ຊຳລະເງິນ. ຜູ້ໃຫ້ບໍລິການໂຮສຕິ້ງອາດບັນທຶກ IP ເວລາ ແລະ ຂໍ້ຜິດພາດເພື່ອຄວາມປອດໄພ. Google Analytics ໂຫຼດຫຼັງຈາກຍິນຍອມເທົ່ານັ້ນ.'},
      {title:'ຄຸກກີ ແລະ ທາງເລືອກ',body:'ລະບົບຈື່ຈຳຄ່າຄຸກກີໃນເບຣາວເຊີ. ການວິເຄາະປິດໄວ້ເປັນຄ່າເລີ່ມຕົ້ນ ແລະ ປ່ຽນໄດ້ທີ່ໜ້າຕັ້ງຄ່າ.'},
      {title:'ບໍລິການພາຍນອກ',body:'Google Maps ແລະ ເວັບໄຊອ້າງອີງມີນະໂຍບາຍຂໍ້ມູນຂອງຕົນ. ຟອນ ແລະ ສະຄຣິບອາດມາຈາກຜູ້ໃຫ້ບໍລິການພາຍນອກ.'},
      {title:'ການເກັບຮັກສາ',body:'ການຕັ້ງຄ່າຖືກເກັບໃນເບຣາວເຊີຈົນກວ່າຈະລຶບ. ອີເມວຖືກເກັບເທົ່າທີ່ຈຳເປັນເພື່ອຕອບຄຳຖາມ.'},
      {title:'ຕິດຕໍ່',body:'ສອບຖາມ ແກ້ໄຂ ຫຼື ຂໍລຶບຂໍ້ມູນທີ່ສົ່ງມາໄດ້ທີ່ laupetter72@gmail.com.'},
    ],
    terms: [
      {title:'ສະຖານະເວັບໄຊ',body:'ນີ້ແມ່ນຄູ່ມືທ່ອງທ່ຽວອິດສະລະບໍ່ຫວັງຜົນກຳໄລ ບໍ່ແມ່ນເວັບໄຊທາງການ ແລະ ບໍ່ຂາຍປີ້ ຫຼື ການຈອງ.'},
      {title:'ຂໍ້ມູນ ແລະ ຄວາມປອດໄພ',body:'ເວລາເປີດ ລາຄາ ເສັ້ນທາງ ແລະ ກົດລະບຽບອາດປ່ຽນໄດ້. ຄວນກວດກັບສະຖານທີ່ ແລະ ເຮັດຕາມກົດຄວາມປອດໄພ.'},
      {title:'ແຜນທີ່ ແລະ ພາຍນອກ',body:'ລິ້ງແຜນທີ່ເປີດບໍລິການພາຍນອກ. ຄຳເຫັນ ແລະ ຄະແນນບໍ່ຢູ່ໃນການຄວບຄຸມຂອງເຮົາ.'},
      {title:'ຂໍ້ຄວາມ ແລະ ຮູບພາບ',body:'ຂໍ້ຄວາມຕົ້ນສະບັບ ແລະ ການອອກແບບມີການຄຸ້ມຄອງ. ຮູບພາບຂອງບຸກຄົນອື່ນເປັນຂອງເຈົ້າຂອງສິດ.'},
      {title:'ຂໍ້ຈຳກັດ ແລະ ການປ່ຽນແປງ',body:'ເຮົາພະຍາຍາມໃຫ້ຂໍ້ມູນຖືກຕ້ອງ ແຕ່ບໍ່ຮັບປະກັນຄວາມຄົບຖ້ວນ. ຄວນກວດຂໍ້ມູນກ່ອນເດີນທາງ.'},
      {title:'ຕິດຕໍ່',body:'ແຈ້ງຂໍ້ຜິດພາດ ຫຼື ຂໍຊ່ວຍເຫຼືອທີ່ laupetter72@gmail.com.'},
    ],
    cookieNotice:'ການວິເຄາະປິດໄວ້ເປັນຄ່າເລີ່ມຕົ້ນ. Google Analytics ໂຫຼດຫຼັງຈາກຍິນຍອມ. ການຕັ້ງຄ່າຖືກເກັບໃນເບຣາວເຊີ ແລະ ບໍ່ມີຄຸກກີໂຄສະນາໃນຂະນະນີ້.',
  },
};
