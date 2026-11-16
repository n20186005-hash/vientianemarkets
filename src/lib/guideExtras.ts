import type { GuideLang, GuideSlug } from './guides';

type Extra = { aboutTitle: string; about: string; basicTitle: string; labels: string[]; visitTitle: string; visit: string; historyTitle: string; history: string; architectureTitle: string; architecture: string; photosTitle: string; photos: string; faqTitle: string; faq: { q: string; a: string }[]; nearbyTitle: string; sourceTitle: string; routeTitle: string; route: string[] };

const localized: Record<GuideLang, Omit<Extra, 'route' | 'faq'>> = {
  en: {
    aboutTitle: 'About Talat Sao and its management', about: 'Talat Sao is a working commercial market and shopping area, not a municipal park. Its trading spaces and individual shops are operated and maintained through market or retail management and the respective merchants. The name of one authority responsible for every part of the complex is not established by the sources consulted. The site is a visitor guide, not the market operator.',
    basicTitle: 'Visitor essentials', labels: ['Place', 'Address', 'Type', 'Typical visit', 'Admission', 'Opening'], visitTitle: 'Visiting advice and practical observations', visit: 'Expect a mix of street-level trading and enclosed shopping areas. Compare signs, stall layouts and products as you move between sections. Paths and accessibility can vary; inspect the actual entrances and keep walkways clear. Entry to browse is generally free; purchases are charged by each business. Store opening times and holiday arrangements differ.',
    historyTitle: 'From traditional morning market to retail complex', history: 'Talat Sao means “morning market” in Lao. It developed as a central trading destination on Lane Xang Avenue and later incorporated modern shopping buildings. Its older market identity continues alongside contemporary retail, making the contrast itself a useful way to understand urban commercial change.',
    architectureTitle: 'Buildings and details to notice', architecture: 'Look for the contrast between open, smaller-scale stalls and larger enclosed retail structures. Rather than one unified architectural monument, Talat Sao is a layered shopping complex: entrances, covered passages, shopfronts and the mall each offer a different sense of space.',
    photosTitle: 'Photography points', photos: 'The Lane Xang-side exterior gives context for the market building; inside, frame textiles or stall details with the seller’s permission. Avoid photographing payment details or people without consent.', faqTitle: 'Frequently asked questions', nearbyTitle: 'Nearby Vientiane stops and related guides', sourceTitle: 'Location and background references', routeTitle: 'Suggested walking sequence',
  },
  zh: {
    aboutTitle: '关于 Talat Sao 早市与管理主体', about: 'Talat Sao 是持续经营的商业市场及购物区域，并非市政公园。市场及商场空间由相关运营方负责日常经营管理，各入驻商户负责各自店铺。现有可核实资料未明确整个复合市场均归同一个机构管理，因此不将任何政府部门写成统一管理单位。本站仅提供游客信息，不参与市场运营。',
    basicTitle: '基本资料', labels: ['地点', '地址', '类型', '建议停留', '入场费用', '开放情况'], visitTitle: '游览建议与观察重点', visit: '留意传统摊位与室内商店之间的变化，比较商品陈列、空间尺度和人流动线。各入口及无障碍条件可能不同，现场以实际通道为准。通常可免费入场浏览，购物由商户分别收费；营业和节假日安排也因店铺而异。',
    historyTitle: '从传统早市到现代商业空间', history: 'Talat Sao 的老挝语含义就是“早市”。它在万象的 Lane Xang 大道一带逐渐成为市中心交易场所，随后加入现代购物建筑。传统市场与现代商场并存，正是观察万象都市商业变迁的切入点。',
    architectureTitle: '建筑与空间特色', architecture: '观察较开放的小型摊位、带顶棚的通道与大型封闭式商业建筑之间的对比。这里并非单一纪念性建筑，而是由市场入口、店面、连廊和商场共同组成的商业空间。',
    photosTitle: '拍照机位', photos: 'Lane Xang 大道一侧适合拍摄市场建筑外观；室内可聚焦织品纹样、摊位陈列，但拍摄商家或顾客前请征得同意。', faqTitle: '常见问题', nearbyTitle: '周边游览与相关攻略', sourceTitle: '位置与背景参考', routeTitle: '建议步行路线',
  },
  th: {
    aboutTitle: 'เกี่ยวกับตลาดเช้าและผู้ดูแลพื้นที่', about: 'Talat Sao เป็นตลาดและย่านร้านค้าที่เปิดดำเนินการ ไม่ใช่สวนสาธารณะ พื้นที่ตลาดและอาคารค้าปลีกมีการบริหารตามส่วนของผู้ดำเนินการและร้านค้าแต่ละแห่ง แหล่งข้อมูลที่ตรวจสอบยังไม่ระบุหน่วยงานเดียวที่รับผิดชอบทุกส่วน จึงไม่ระบุชื่อหน่วยงานรัฐเป็นผู้ดูแลทั้งหมด เว็บไซต์นี้เป็นคู่มือนักท่องเที่ยว ไม่ใช่ผู้บริหารตลาด',
    basicTitle: 'ข้อมูลพื้นฐาน', labels: ['สถานที่', 'ที่อยู่', 'ประเภท', 'เวลาเที่ยวแนะนำ', 'ค่าเข้า', 'เวลาเปิด'], visitTitle: 'คำแนะนำและจุดสังเกต', visit: 'สังเกตความแตกต่างระหว่างแผงค้าดั้งเดิมกับร้านในอาคาร ตรวจทางเข้าและทางเดินตามสภาพจริง การเข้าชมเพื่อเดินเลือกซื้อโดยทั่วไปไม่เก็บค่าเข้า แต่ร้านค้าคิดค่าสินค้าเอง และเวลาเปิดอาจแตกต่างกัน',
    historyTitle: 'จากตลาดเช้าสู่พื้นที่ค้าปลีก', history: 'Talat Sao แปลว่าตลาดเช้า เป็นย่านค้าขายสำคัญบริเวณถนนล้านช้างในเวียงจันทน์ ต่อมามีอาคารค้าปลีกสมัยใหม่เพิ่มขึ้น จึงเห็นทั้งรูปแบบตลาดเก่าและร้านค้าร่วมสมัยในบริเวณเดียวกัน',
    architectureTitle: 'อาคารและพื้นที่ที่น่าสังเกต', architecture: 'เปรียบเทียบแผงค้าแบบเปิด ทางเดินมีหลังคา และอาคารร้านค้าขนาดใหญ่ ตลาดนี้ประกอบด้วยพื้นที่หลายรูปแบบ ไม่ใช่อนุสาวรีย์หรืออาคารประวัติศาสตร์หลังเดียว',
    photosTitle: 'จุดถ่ายภาพ', photos: 'บริเวณด้านถนนล้านช้างเหมาะสำหรับภาพภายนอกอาคาร ส่วนในตลาดให้ขออนุญาตก่อนถ่ายร้านค้า สินค้า หรือผู้คน', faqTitle: 'คำถามที่พบบ่อย', nearbyTitle: 'ที่เที่ยวใกล้เคียงและคู่มือ', sourceTitle: 'แหล่งข้อมูลสถานที่', routeTitle: 'ลำดับการเดินเที่ยว',
  },
  lo: {
    aboutTitle: 'ກ່ຽວກັບຕະຫຼາດເຊົ້າ ແລະ ການບໍລິຫານ', about: 'ຕະຫຼາດເຊົ້າເປັນພື້ນທີ່ການຄ້າ ບໍ່ແມ່ນສວນສາທາລະນະ. ພື້ນທີ່ຕະຫຼາດ ແລະ ຮ້ານຄ້າມີຜູ້ດຳເນີນງານແຕ່ລະສ່ວນ ແລະ ຜູ້ຄ້າດູແລຮ້ານຂອງຕົນ. ແຫຼ່ງຂໍ້ມູນທີ່ກວດສອບບໍ່ໄດ້ລະບຸອົງການດຽວທີ່ຄຸ້ມຄອງທຸກສ່ວນ. ເວັບໄຊນີ້ເປັນຄູ່ມືຜູ້ຢ້ຽມຢາມ.',
    basicTitle: 'ຂໍ້ມູນພື້ນຖານ', labels: ['ສະຖານທີ່', 'ທີ່ຢູ່', 'ປະເພດ', 'ເວລາແນະນຳ', 'ຄ່າເຂົ້າ', 'ເວລາເປີດ'], visitTitle: 'ຄຳແນະນຳ ແລະ ຈຸດສັງເກດ', visit: 'ສັງເກດຄວາມແຕກຕ່າງຂອງຮ້ານດັ້ງເດີມ ແລະ ຮ້ານໃນອາຄານ. ກວດທາງເຂົ້າຕາມສະພາບຈິງ. ໂດຍທົ່ວໄປສາມາດເຂົ້າເບິ່ງສິນຄ້າໄດ້ ແຕ່ຮ້ານຄ້າຄິດລາຄາສິນຄ້າແຍກກັນ.',
    historyTitle: 'ຈາກຕະຫຼາດດັ້ງເດີມສູ່ສູນການຄ້າ', history: 'ຕະຫຼາດເຊົ້າເປັນບ່ອນຄ້າຂາຍສຳຄັນໃນໃຈກາງວຽງຈັນ ໃກ້ຖະໜົນລ້ານຊ້າງ. ຕໍ່ມາມີອາຄານຮ້ານຄ້າສະໄໝໃໝ່ ຈຶ່ງຍັງເຫັນທັງຕະຫຼາດເກົ່າ ແລະ ຮ້ານສະໄໝໃໝ່.',
    architectureTitle: 'ລັກສະນະອາຄານ', architecture: 'ເບິ່ງຮ້ານແບບເປີດ ທາງຍ່າງມີຫຼັງຄາ ແລະ ອາຄານການຄ້າຂະໜາດໃຫຍ່. ພື້ນທີ່ນີ້ມີຫຼາຍຮູບແບບ ບໍ່ແມ່ນອາຄານດຽວ.',
    photosTitle: 'ຈຸດຖ່າຍຮູບ', photos: 'ຝັ່ງຖະໜົນລ້ານຊ້າງເໝາະກັບຮູບດ້ານນອກ. ກ່ອນຖ່າຍຮູບຮ້ານຄ້າ ຫຼື ຜູ້ຄົນ ຄວນຂໍອະນຸຍາດ.', faqTitle: 'ຄຳຖາມທີ່ພົບເລື້ອຍ', nearbyTitle: 'ສະຖານທີ່ໃກ້ຄຽງ ແລະ ຄູ່ມື', sourceTitle: 'ແຫຼ່ງຂໍ້ມູນ', routeTitle: 'ເສັ້ນທາງຍ່າງແນະນຳ',
  },
};

const routes: Record<GuideLang, string[]> = {
  en: ['Locate the Talat Sao entrance on Lane Xang Avenue and photograph the exterior.', 'Browse the traditional stalls, comparing textiles and everyday goods.', 'Explore the indoor retail spaces; check individual opening hours.', 'Continue to a nearby city landmark or visit the separate riverside night market later.'],
  zh: ['从 Lane Xang 大道寻找 Talat Sao 入口，先拍摄建筑外观。', '浏览传统摊位，观察纺织品与日用品。', '再进入室内购物区域，并留意各店营业时间。', '之后前往市中心景点；傍晚可另行前往河岸夜市。'],
  th: ['เริ่มจากทางเข้าฝั่งถนนล้านช้างและชมอาคารด้านนอก', 'เดินดูแผงค้าดั้งเดิมและเปรียบเทียบสินค้าผ้าทอ', 'เข้าดูร้านในอาคารโดยตรวจเวลาเปิดของแต่ละร้าน', 'ต่อไปยังจุดชมเมืองใกล้เคียง หรือแวะตลาดกลางคืนริมโขงภายหลัง'],
  lo: ['ເລີ່ມທີ່ທາງເຂົ້າຝັ່ງຖະໜົນລ້ານຊ້າງ', 'ເດີນເບິ່ງຮ້ານດັ້ງເດີມ ແລະ ຜ້າທໍ', 'ເຂົ້າເບິ່ງຮ້ານໃນອາຄານ ແລະ ກວດເວລາເປີດ', 'ຕໍ່ໄປສະຖານທີ່ໃກ້ຄຽງ ຫຼື ໄປຕະຫຼາດກາງຄືນຕອນແລງ'],
};
const faqs: Record<GuideLang, Extra['faq']> = {
  en: [{ q: 'Is Talat Sao the same as the Vientiane Night Market?', a: 'No. Talat Sao is near Lane Xang Avenue; the night market is on the Mekong riverfront.' }, { q: 'Do you need an entry ticket?', a: 'General shopping access is normally free. Pay for purchases or any separately priced services.' }, { q: 'How much time should I allow?', a: 'Around 60–90 minutes is a practical editorial estimate; longer if shopping carefully.' }, { q: 'Can I photograph the stalls?', a: 'Ask permission before photographing vendors, customers or merchandise.' }],
  zh: [{ q: 'Talat Sao 和万象夜市是同一处吗？', a: '不是。早市在 Lane Xang 大道附近，夜市在湄公河岸。' }, { q: '进入早市需要门票吗？', a: '一般逛市场无需门票，购买商品及个别服务另行付费。' }, { q: '建议逛多久？', a: '可先安排 60–90 分钟，认真购物需要更久。' }, { q: '可以拍摄摊位吗？', a: '拍摄商户、顾客或商品前应先征得同意。' }],
  th: [{ q: 'Talat Sao กับตลาดกลางคืนเป็นที่เดียวกันไหม?', a: 'ไม่ใช่ ตลาดเช้าอยู่ใกล้ถนนล้านช้าง ส่วนตลาดกลางคืนอยู่ริมโขง' }, { q: 'ต้องซื้อตั๋วเข้าหรือไม่?', a: 'โดยทั่วไปเดินชมร้านค้าได้ฟรี แต่ชำระค่าสินค้าและบริการแยกต่างหาก' }, { q: 'ควรใช้เวลากี่นาที?', a: 'แนะนำประมาณ 60–90 นาที และเพิ่มเวลาหากเลือกซื้อของจริงจัง' }, { q: 'ถ่ายภาพร้านค้าได้ไหม?', a: 'ควรขออนุญาตผู้ขายและผู้ที่อยู่ในภาพก่อน' }],
  lo: [{ q: 'ຕະຫຼາດເຊົ້າກັບຕະຫຼາດກາງຄືນແມ່ນບ່ອນດຽວກັນບໍ?', a: 'ບໍ່ແມ່ນ. ຕະຫຼາດເຊົ້າຢູ່ໃກ້ຖະໜົນລ້ານຊ້າງ ສ່ວນຕະຫຼາດກາງຄືນຢູ່ແຄມຂອງ.' }, { q: 'ຕ້ອງຊື້ປີ້ເຂົ້າບໍ?', a: 'ໂດຍທົ່ວໄປເຂົ້າເບິ່ງຮ້ານໄດ້ຟຣີ ແຕ່ຈ່າຍຄ່າສິນຄ້າແຍກກັນ.' }, { q: 'ຄວນໃຊ້ເວລາເທົ່າໃດ?', a: 'ແນະນຳ 60–90 ນາທີ ຫຼື ດົນກວ່ານັ້ນຖ້າຈະຊື້ຫຼາຍ.' }, { q: 'ຖ່າຍຮູບຮ້ານໄດ້ບໍ?', a: 'ຄວນຂໍອະນຸຍາດກ່ອນຖ່າຍຮູບຜູ້ຄ້າ ຫຼື ລູກຄ້າ.' }],
};

export function guideExtra(lang: GuideLang, _slug: GuideSlug): Extra { return { ...localized[lang], route: routes[lang], faq: faqs[lang] }; }

export const visitDetails: Record<GuideLang, {
  discover: string; tips: string; highlights: string; hours: string; hoursText: string; tickets: string; ticketText: string;
  transport: string; transportText: string; cautions: string; cautionText: string; stay: string; stayText: string;
  reviews: string; reviewText: string; direction: string; compare: string; nearby: string;
}> = {
  en: {
    discover: 'Explore the market', tips: 'Before you visit', highlights: 'What makes this place distinctive', hours: 'Opening hours', hoursText: 'The site’s October 2026 reference lists Talat Sao at approximately 07:00–17:00 and the riverside Night Market at approximately 18:00–22:00. These are reference ranges, not live opening status. Individual stalls, mall shops and holiday hours vary; check on site before travelling.',
    tickets: 'Admission and costs', ticketText: 'Browsing public market trading areas normally does not require an entry ticket. Goods, transport, food and any privately operated services are paid separately. No fixed shopping budget can be promised; compare displayed prices before paying.',
    transport: 'Getting here', transportText: 'For Talat Sao, use Lane Xang Avenue at the Khu Vieng Road intersection. Choose a walk from central accommodation, a tuk-tuk or an app-based car after checking your route. For the Night Market, navigate separately to the Mekong riverfront by Chao Anouvong Park. Do not use one market pin for both.',
    cautions: 'Visitor notes', cautionText: 'Keep valuables secure in busy aisles; protect yourself from midday sun when walking between buildings. Some passages may be uneven or crowded. Ask before photographing people or shop interiors and verify accessibility with the venue on arrival.',
    stay: 'Where to stay', stayText: 'For daytime visits, accommodation around central Vientiane and Lane Xang Avenue reduces transfers. For an evening market walk, consider the Mekong riverfront area. Compare real walking routes, access needs and return transport before booking; this guide does not endorse a specific hotel.',
    reviews: 'Visitor reviews', reviewText: 'For current visitor comments and rating counts, open the destination’s own Google Maps listing. Ratings are dynamic and have not been independently synchronized for these new guide pages; no invented rating is displayed.',
    direction: 'Address and navigation', compare: 'Two separate market locations', nearby: 'Explore nearby',
  },
  zh: {
    discover: '探索市场', tips: '出发前建议', highlights: '景区特色', hours: '开放时间', hoursText: '本站 2026 年 10 月资料记录：Talat Sao 早市参考时段约为 07:00–17:00，湄公河夜市约为 18:00–22:00。这不是实时营业状态。摊位、商场店铺与节假日时间可能不同，出发前请再次核对。',
    tickets: '门票与消费', ticketText: '一般浏览市场交易区域无需购票，商品、餐饮、交通及个别服务另行收费。商品价格随商户变化，建议购买前比较标价和品质。',
    transport: '交通方式', transportText: '前往早市请导航至 Lane Xang 大道与 Khu Vieng 路交界处。住在市中心可按实际距离步行，也可选择嘟嘟车或网约车。夜市则应单独导航至 Chao Anouvong Park 附近湄公河岸，不能用同一市场定位。',
    cautions: '游览须知', cautionText: '繁忙通道中保管随身物品，建筑之间步行注意防晒；部分通道可能拥挤或不平整。拍摄人物、商店内部或商品前先询问，行动不便者应在现场核实入口及无障碍情况。',
    stay: '住宿建议', stayText: '以早市购物为主，可考虑万象市中心、Lane Xang 大道一带的住宿；若想晚间逛夜市，可比较湄公河岸附近住宿。订房前核对实际步行路线、返程交通与设施，不在此虚构酒店推荐。',
    reviews: '游客评价', reviewText: '请通过对应景点的 Google 地图页面查看最新游客评论及评分数量。新专题未单独同步动态评分，因此不展示未经核实的分数。',
    direction: '交通指南与地址', compare: '两座市场的独立位置', nearby: '探索周边',
  },
  th: {
    discover: 'สำรวจตลาด', tips: 'คำแนะนำก่อนเที่ยว', highlights: 'จุดเด่นของสถานที่', hours: 'เวลาเปิด', hoursText: 'ข้อมูลอ้างอิงเดือนตุลาคม 2026 ระบุตลาดเช้าประมาณ 07:00–17:00 และตลาดกลางคืนริมโขงประมาณ 18:00–22:00 ไม่ใช่สถานะเปิดแบบเรียลไทม์ ร้านค้าแต่ละแห่งและวันหยุดอาจมีเวลาแตกต่างกัน',
    tickets: 'ค่าเข้าและค่าใช้จ่าย', ticketText: 'โดยทั่วไปเดินชมพื้นที่ตลาดได้ฟรี แต่ต้องชำระค่าสินค้า อาหาร การเดินทาง และบริการของเอกชนแยกต่างหาก ควรเปรียบเทียบราคาและคุณภาพก่อนซื้อ',
    transport: 'การเดินทาง', transportText: 'ตลาดเช้าอยู่บริเวณถนนล้านช้างตัดถนนคูเวียง สามารถเดินจากที่พักกลางเมืองตามระยะทางหรือนั่งตุ๊กตุ๊กและรถผ่านแอป ส่วนตลาดกลางคืนอยู่ริมแม่น้ำโขงใกล้สวนเจ้าอนุวงศ์ ต้องใช้พิกัดแยกกัน',
    cautions: 'ข้อควรรู้', cautionText: 'รักษาของมีค่าในทางเดินที่มีคนมาก ป้องกันแดดระหว่างอาคาร บางทางอาจไม่เรียบหรือแออัด ขออนุญาตก่อนถ่ายภาพผู้อื่นและตรวจทางเข้าที่เหมาะกับการเดินทางของตน',
    stay: 'คำแนะนำที่พัก', stayText: 'หากเน้นตลาดเช้าควรเปรียบเทียบที่พักในใจกลางเวียงจันทน์ใกล้ถนนล้านช้าง หากอยากเดินตลาดเย็นให้พิจารณาย่านริมโขง ตรวจเส้นทางเดินกลับและสิ่งอำนวยความสะดวกก่อนจอง',
    reviews: 'รีวิวผู้มาเยือน', reviewText: 'เปิดหน้าสถานที่แต่ละแห่งใน Google Maps เพื่อดูรีวิวและจำนวนคะแนนล่าสุด คู่มือใหม่นี้ไม่ได้ซิงก์คะแนนแบบสด จึงไม่แสดงตัวเลขที่ยังไม่ได้ตรวจสอบ',
    direction: 'ที่อยู่และแผนที่', compare: 'ตลาดสองแห่งอยู่คนละจุด', nearby: 'เที่ยวใกล้เคียง',
  },
  lo: {
    discover: 'ສຳຫຼວດຕະຫຼາດ', tips: 'ຄຳແນະນຳກ່ອນທ່ຽວ', highlights: 'ຈຸດເດັ່ນ', hours: 'ເວລາເປີດ', hoursText: 'ຂໍ້ມູນອ້າງອີງເດືອນຕຸລາ 2026 ລະບຸຕະຫຼາດເຊົ້າປະມານ 07:00–17:00 ແລະ ຕະຫຼາດກາງຄືນປະມານ 18:00–22:00. ບໍ່ແມ່ນສະຖານະເປີດແບບທັນທີ; ແຕ່ລະຮ້ານອາດມີເວລາຕ່າງກັນ.',
    tickets: 'ຄ່າເຂົ້າ ແລະ ຄ່າໃຊ້ຈ່າຍ', ticketText: 'ໂດຍທົ່ວໄປເຂົ້າເບິ່ງຕະຫຼາດໄດ້ຟຣີ ແຕ່ຕ້ອງຈ່າຍຄ່າສິນຄ້າ ອາຫານ ການເດີນທາງ ແລະ ບໍລິການແຍກ. ປຽບທຽບລາຄາກ່ອນຊື້.',
    transport: 'ວິທີເດີນທາງ', transportText: 'ຕະຫຼາດເຊົ້າຢູ່ບໍລິເວນຖະໜົນລ້ານຊ້າງຕັດຄູວຽງ. ອາດຍ່າງຈາກທີ່ພັກກາງເມືອງ ຫຼື ໃຊ້ລົດຕຸກຕຸກ. ຕະຫຼາດກາງຄືນຢູ່ແຄມຂອງໃກ້ສວນເຈົ້າອານຸວົງ ໃຊ້ຈຸດແຜນທີ່ແຍກກັນ.',
    cautions: 'ຂໍ້ຄວນຮູ້', cautionText: 'ຮັກສາຊັບສິນໃນບ່ອນຄົນຫຼາຍ ກຽມປ້ອງກັນແດດ ແລະ ສັງເກດທາງຍ່າງ. ຂໍອະນຸຍາດກ່ອນຖ່າຍຮູບຜູ້ຄົນ ແລະ ກວດທາງເຂົ້າຕາມສະພາບຈິງ.',
    stay: 'ຄຳແນະນຳທີ່ພັກ', stayText: 'ຖ້າຈະໄປຕະຫຼາດເຊົ້າ ລອງເບິ່ງທີ່ພັກກາງວຽງຈັນໃກ້ຖະໜົນລ້ານຊ້າງ. ສຳລັບຕະຫຼາດກາງຄືນ ລອງເບິ່ງຍ່ານແຄມຂອງ. ກວດເສັ້ນທາງ ແລະ ສິ່ງອຳນວຍຄວາມສະດວກກ່ອນຈອງ.',
    reviews: 'ຄຳຄິດເຫັນຜູ້ຢ້ຽມຢາມ', reviewText: 'ເບິ່ງຄຳຄິດເຫັນ ແລະ ຄະແນນຫຼ້າສຸດໃນ Google Maps ຂອງແຕ່ລະສະຖານທີ່. ຄູ່ມືນີ້ບໍ່ໄດ້ດຶງຄະແນນສົດ ຈຶ່ງບໍ່ສະແດງໂຕເລກທີ່ຍັງບໍ່ໄດ້ກວດ.',
    direction: 'ທີ່ຢູ່ ແລະ ແຜນທີ່', compare: 'ສອງຕະຫຼາດຢູ່ຄົນລະບ່ອນ', nearby: 'ທ່ຽວໃກ້ຄຽງ',
  },
};
