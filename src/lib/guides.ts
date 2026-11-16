export const guideSlugs = ['talat-sao-shopping', 'talat-sao-transport', 'morning-vs-night-market'] as const;
export type GuideSlug = typeof guideSlugs[number];
export type GuideLang = 'lo' | 'en' | 'zh' | 'th';
type Guide = { title: string; intro: string; sections: { heading: string; body: string }[] };

export const guides: Record<GuideLang, Record<GuideSlug, Guide>> = {
  en: {
    'talat-sao-shopping': { title: 'What to Buy at Talat Sao Morning Market', intro: 'A practical shopping walk through Vientiane’s traditional morning-market stalls and indoor retail spaces. Stock and prices vary by seller and day.', sections: [
      { heading: 'Textiles and Lao handicrafts', body: 'Look at woven scarves, sinh skirts and small textile gifts. Ask where an item was made and compare fabric, stitching and price at more than one stall before buying.' },
      { heading: 'Jewellery, clothing and electronics', body: 'Talat Sao also has jewellery and everyday retail shops. For valuable purchases, request a written receipt, check specifications and warranty terms, and never assume an item is locally made.' },
      { heading: 'Shopping etiquette and payment', body: 'Carry small Lao kip notes for small stalls. Ask politely before photographing people or merchandise. Bargaining may be possible in some stalls, while fixed-price shops may not negotiate.' },
      { heading: 'A simple 60–90 minute route', body: 'Start at the Lane Xang Avenue side, browse the traditional stalls, then compare the indoor shops. Allow extra time if you plan to examine textiles or make a larger purchase.' },
    ] },
    'talat-sao-transport': { title: 'Getting to Talat Sao: Location, Transport and Visit Tips', intro: 'Talat Sao lies by Lane Xang Avenue in central Vientiane. Check the exact entrance and current traffic conditions before setting off.', sections: [
      { heading: 'Find the correct market', body: 'Use the dedicated Talat Sao Google Maps place link below. Talat Sao is the daytime shopping area; the Mekong riverside night market is a different destination.' },
      { heading: 'Walking and local transport', body: 'From central Vientiane, walking may be convenient depending on your hotel. Tuk-tuks and app-based cars are alternatives; agree on the fare or confirm the app estimate before departure.' },
      { heading: 'When to arrive', body: 'Go during the daytime, preferably earlier for a relaxed visit. Individual vendors and mall businesses can keep different hours, and public holidays may change operations.' },
      { heading: 'Before you leave', body: 'Save the map offline or keep the destination in Lao script (ຕະຫຼາດເຊົ້າ). Bring drinking water, keep valuables secure and check payment options before buying.' },
    ] },
    'morning-vs-night-market': { title: 'Talat Sao vs Vientiane Night Market: Which to Visit?', intro: 'These are two different markets with different locations and visitor experiences. Choose by your shopping interests and the time of day.', sections: [
      { heading: 'Talat Sao: daytime shopping', body: 'Talat Sao near Lane Xang Avenue is suited to textiles, everyday goods, indoor retail and browsing the traditional market area. Shops operate on their own schedules.' },
      { heading: 'Night Market: Mekong evening walk', body: 'The Vientiane Night Market is by the Mekong riverfront near Chao Anouvong Park. Its appeal is an evening stroll, casual souvenir browsing and a riverside atmosphere.' },
      { heading: 'Can you see both?', body: 'Yes. Visit Talat Sao during the day, take a break and head to the riverfront later. Check current opening arrangements and do not expect the two markets to be at the same address.' },
      { heading: 'What to compare', body: 'Talat Sao is useful for focused daytime shopping; the night market is better for an evening walk. Compare quality and prices independently, especially for textiles and souvenirs.' },
    ] },
  },
  zh: {
    'talat-sao-shopping': { title: '万象早市 Talat Sao 购物攻略：买什么与怎么逛', intro: '从传统摊位到室内商场，整理老挝万象早市的购物重点。商品与价格会随商家及日期变化。', sections: [
      { heading: '老挝织品与手工艺', body: '可留意围巾、筒裙和小型纺织纪念品。购买前询问产地，比较面料、织法及不同摊位的报价。' },
      { heading: '首饰、服装与电子用品', body: '市场也有金饰、服饰及日用品店。高价商品应索取收据、核对规格与保修，不要仅凭外观推断为老挝制造。' },
      { heading: '付款与购物礼仪', body: '小摊购买可准备小额老挝基普。拍摄人物或商品前先征求同意；部分摊位可议价，但固定价格商店未必接受。' },
      { heading: '60–90 分钟逛法', body: '从 Lane Xang 大道一侧进入，先浏览传统摊位，再比较室内商店。若要认真挑选织品或购买贵重商品，请预留更多时间。' },
    ] },
    'talat-sao-transport': { title: '万象早市 Talat Sao 交通、位置与到访建议', intro: '早市位于万象市中心 Lane Xang 大道附近。出发前建议确认实际入口与当日路况。', sections: [
      { heading: '确认正确市场', body: '使用下方 Talat Sao 独立 Google 地图链接。早市是日间购物区域，与湄公河畔夜市不是同一地点。' },
      { heading: '步行与市内交通', body: '从市中心住宿点出发，可根据距离选择步行、嘟嘟车或网约车。搭车前先谈好车资或核对应用程序报价。' },
      { heading: '什么时候去', body: '建议白天到访，较早抵达通常更从容。传统摊位与商场各店营业时间可能不同，节假日亦可能调整。' },
      { heading: '出发准备', body: '保存地图或老挝语名称「ຕະຫຼາດເຊົ້າ」，带饮水、保管贵重物品，购物前确认付款方式。' },
    ] },
    'morning-vs-night-market': { title: '万象早市与湄公河夜市比较：应该去哪个？', intro: '两座市场的位置、时间和购物体验不同，可按行程选择，也可安排同一天分别游览。', sections: [
      { heading: 'Talat Sao：日间采购', body: '位于 Lane Xang 大道附近，适合看织品、日用品、传统摊位及室内商店；各商家时间可能不同。' },
      { heading: '湄公河夜市：傍晚散步', body: '夜市位于 Chao Anouvong Park 附近河岸，适合傍晚散步、看纪念品与欣赏河岸氛围。' },
      { heading: '一天逛两个市场', body: '白天先逛早市，休息后傍晚再前往河岸。两处地址不同，出发前分别确认地图和营业情况。' },
      { heading: '怎么选择', body: '想集中购物选早市；想在傍晚散步选夜市。织品及纪念品应自行比较品质与价格。' },
    ] },
  },
  th: {
    'talat-sao-shopping': { title: 'ซื้ออะไรที่ตลาดเช้าเวียงจันทน์ Talat Sao', intro: 'คู่มือเลือกซื้อของในตลาดดั้งเดิมและอาคารร้านค้า สินค้าและราคาอาจเปลี่ยนตามร้านและวัน', sections: [
      { heading: 'ผ้าทอและงานฝีมือลาว', body: 'ลองดูผ้าพันคอ ผ้าซิ่น และของฝากจากผ้า ถามแหล่งผลิตและเปรียบเทียบเนื้อผ้า งานเย็บ และราคาหลายร้านก่อนซื้อ' },
      { heading: 'เครื่องประดับ เสื้อผ้า และอุปกรณ์ไฟฟ้า', body: 'มีร้านขายเครื่องประดับและสินค้าทั่วไปด้วย หากซื้อของมูลค่าสูงควรขอใบเสร็จ ตรวจรายละเอียดสินค้าและเงื่อนไขรับประกัน' },
      { heading: 'การจ่ายเงินและมารยาท', body: 'เตรียมเงินกีบย่อยสำหรับร้านเล็ก ขออนุญาตก่อนถ่ายภาพคนหรือสินค้า บางร้านต่อรองได้แต่ร้านราคาตายตัวอาจไม่ลด' },
      { heading: 'เส้นทางเดิน 60–90 นาที', body: 'เริ่มจากฝั่งถนนล้านช้าง เดินดูแผงค้าดั้งเดิมแล้วค่อยเข้าร้านในอาคาร เผื่อเวลาเพิ่มหากเลือกซื้อผ้าหรือสินค้าราคาสูง' },
    ] },
    'talat-sao-transport': { title: 'การเดินทางไปตลาดเช้าเวียงจันทน์ Talat Sao', intro: 'ตลาดเช้าอยู่บริเวณถนนล้านช้างในใจกลางเวียงจันทน์ ตรวจทางเข้าและสภาพการจราจรก่อนเดินทาง', sections: [
      { heading: 'เลือกจุดหมายให้ถูก', body: 'เปิดลิงก์ Google Maps ของ Talat Sao ด้านล่าง ตลาดเช้าและตลาดกลางคืนริมโขงเป็นคนละแห่ง' },
      { heading: 'เดินเท้าหรือรถในเมือง', body: 'จากที่พักในตัวเมืองอาจเดินได้ตามระยะทาง หรือเลือกตุ๊กตุ๊กและรถผ่านแอป ตกลงค่าโดยสารหรือตรวจราคาก่อนออกเดินทาง' },
      { heading: 'ควรมาเวลาใด', body: 'ควรมาในช่วงกลางวัน โดยช่วงเช้ามักเดินได้สบายกว่า เวลาเปิดของแต่ละร้านอาจต่างกันและวันหยุดอาจเปลี่ยนแปลง' },
      { heading: 'เตรียมตัวก่อนออกเดินทาง', body: 'บันทึกแผนที่หรือชื่อภาษาลาว ຕະຫຼາດເຊົ້າ พกน้ำ เก็บของมีค่าให้ปลอดภัย และสอบถามวิธีจ่ายเงินก่อนซื้อ' },
    ] },
    'morning-vs-night-market': { title: 'ตลาดเช้าเวียงจันทน์เทียบกับตลาดกลางคืนริมโขง', intro: 'ตลาดสองแห่งอยู่คนละจุดและเหมาะกับกิจกรรมต่างช่วงเวลา เลือกตามสิ่งที่อยากซื้อและแผนเที่ยว', sections: [
      { heading: 'Talat Sao: ช้อปตอนกลางวัน', body: 'ตลาดเช้าใกล้ถนนล้านช้างเหมาะกับผ้าทอ สินค้าทั่วไป แผงค้าเก่าและร้านในอาคาร เวลาเปิดแต่ละร้านอาจไม่เท่ากัน' },
      { heading: 'ตลาดกลางคืน: เดินเล่นริมโขง', body: 'ตลาดกลางคืนอยู่ใกล้สวนเจ้าอนุวงศ์ เหมาะกับการเดินตอนเย็น ดูของฝากและบรรยากาศริมแม่น้ำโขง' },
      { heading: 'เที่ยวทั้งสองแห่งในวันเดียว', body: 'ไปตลาดเช้าในเวลากลางวัน พักแล้วค่อยไปริมโขงตอนเย็น ตรวจพิกัดและเวลาเปิดแยกกันก่อนเดินทาง' },
      { heading: 'เลือกแห่งไหนดี', body: 'หากต้องการซื้อของจริงจังให้เลือกตลาดเช้า หากต้องการเดินเล่นยามเย็นให้เลือกตลาดกลางคืน และเปรียบเทียบคุณภาพกับราคาเสมอ' },
    ] },
  },
  lo: {
    'talat-sao-shopping': { title: 'ຊື້ຫຍັງຢູ່ຕະຫຼາດເຊົ້າ ວຽງຈັນ', intro: 'ຄູ່ມືເລືອກຊື້ສິນຄ້າຈາກຮ້ານດັ້ງເດີມ ແລະ ຮ້ານໃນອາຄານ. ສິນຄ້າແລະລາຄາປ່ຽນໄດ້.', sections: [
      { heading: 'ຜ້າທໍ ແລະ ຫັດຖະກຳ', body: 'ລອງເບິ່ງຜ້າພັນຄໍ ຜ້າຊິ່ນ ແລະ ຂອງຝາກ. ຖາມແຫຼ່ງຜະລິດ ແລະ ປຽບທຽບຄຸນນະພາບກັບລາຄາກ່ອນຊື້.' },
      { heading: 'ເຄື່ອງປະດັບ ແລະ ສິນຄ້າທົ່ວໄປ', body: 'ມີຮ້ານເສື້ອຜ້າ ແລະ ເຄື່ອງໃຊ້. ຖ້າຊື້ຂອງມີມູນຄ່າສູງ ຄວນຂໍໃບຮັບເງິນ ແລະ ກວດເງື່ອນໄຂຮັບປະກັນ.' },
      { heading: 'ການຈ່າຍເງິນ ແລະ ມາລະຍາດ', body: 'ກຽມເງິນກີບຍ່ອຍ ແລະ ຂໍອະນຸຍາດກ່ອນຖ່າຍຮູບ. ບາງຮ້ານອາດຕໍ່ລອງລາຄາໄດ້ ແຕ່ບາງຮ້ານມີລາຄາຄົງທີ່.' },
      { heading: 'ເສັ້ນທາງຍ່າງ 60–90 ນາທີ', body: 'ເລີ່ມຈາກຝັ່ງຖະໜົນລ້ານຊ້າງ ເບິ່ງຮ້ານດັ້ງເດີມ ແລ້ວໄປຮ້ານໃນອາຄານ. ເຜື່ອເວລາຖ້າຈະເລືອກຊື້ຜ້າ.' },
    ] },
    'talat-sao-transport': { title: 'ວິທີໄປຕະຫຼາດເຊົ້າ ວຽງຈັນ', intro: 'ຕະຫຼາດເຊົ້າຢູ່ໃກ້ຖະໜົນລ້ານຊ້າງໃນໃຈກາງວຽງຈັນ. ກວດທາງເຂົ້າ ແລະ ການຈະລາຈອນກ່ອນໄປ.', sections: [
      { heading: 'ກວດຈຸດໝາຍ', body: 'ໃຊ້ລິ້ງ Google Maps ຂອງຕະຫຼາດເຊົ້າດ້ານລຸ່ມ. ຕະຫຼາດກາງຄືນຢູ່ແຄມຂອງເປັນຄົນລະແຫ່ງ.' },
      { heading: 'ຍ່າງ ຫຼື ນັ່ງລົດ', body: 'ຈາກທີ່ພັກກາງເມືອງອາດຍ່າງໄດ້ ຫຼື ໃຊ້ລົດຕຸກຕຸກ ແລະ ລົດຜ່ານແອັບ. ຕົກລົງຄ່າໂດຍສານກ່ອນເດີນທາງ.' },
      { heading: 'ເວລາທີ່ເໝາະສົມ', body: 'ຄວນມາຕອນກາງເວັນ ແລະ ມາໄວຈະມີເວລາເດີນເບິ່ງ. ແຕ່ລະຮ້ານອາດເປີດບໍ່ຄືກັນ.' },
      { heading: 'ກ່ອນອອກເດີນທາງ', body: 'ບັນທຶກແຜນທີ່ ກຽມນ້ຳດື່ມ ຮັກສາຂອງມີຄ່າ ແລະ ຖາມວິທີຈ່າຍເງິນກ່ອນຊື້.' },
    ] },
    'morning-vs-night-market': { title: 'ປຽບທຽບຕະຫຼາດເຊົ້າ ແລະ ຕະຫຼາດກາງຄືນວຽງຈັນ', intro: 'ສອງຕະຫຼາດຢູ່ຄົນລະບ່ອນ ແລະ ເໝາະກັບຄົນລະເວລາ. ເລືອກຕາມແຜນການເດີນທາງ.', sections: [
      { heading: 'ຕະຫຼາດເຊົ້າ: ຊື້ຂອງກາງເວັນ', body: 'ຢູ່ໃກ້ຖະໜົນລ້ານຊ້າງ ມີຜ້າທໍ ສິນຄ້າທົ່ວໄປ ແລະ ຮ້ານໃນອາຄານ. ເວລາເປີດແຕ່ລະຮ້ານອາດຕ່າງກັນ.' },
      { heading: 'ຕະຫຼາດກາງຄືນ: ຍ່າງແຄມຂອງ', body: 'ຕະຫຼາດກາງຄືນຢູ່ໃກ້ສວນເຈົ້າອານຸວົງ ເໝາະສຳລັບຍ່າງຕອນແລງ ແລະ ເບິ່ງຂອງຝາກ.' },
      { heading: 'ໄປທັງສອງໃນມື້ດຽວ', body: 'ໄປຕະຫຼາດເຊົ້າຕອນກາງເວັນ ພັກຜ່ອນ ແລ້ວໄປແຄມຂອງຕອນແລງ. ກວດແຜນທີ່ແລະເວລາເປີດແຍກກັນ.' },
      { heading: 'ເລືອກແນວໃດ', body: 'ຖ້າຢາກຊື້ສິນຄ້າຕອນກາງເວັນໃຫ້ໄປຕະຫຼາດເຊົ້າ; ຖ້າຢາກຍ່າງຕອນແລງໃຫ້ໄປຕະຫຼາດກາງຄືນ.' },
    ] },
  },
};
