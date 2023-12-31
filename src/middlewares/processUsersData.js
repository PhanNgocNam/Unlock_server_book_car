module.exports.processUsersData = (req, res, next) => {
  const users = [
    {
      fullname: "Trương Công Nhật",
      phoneNumber: "0965639987",
      email: "truongcongnhat@gmail.com",
      password: "0965639987",
      isActive: 1,
    },
    {
      fullname: "Nguyễn Lưu Duy Khánh",
      phoneNumber: "0585927777",
      email: "Khanhankhang9999@gmail.com",
      password: "0585927777",
      isActive: 1,
    },
    {
      fullname: "Nguyễn Thanh Khiết",
      phoneNumber: "0902322796",
      email: "khietnguyen88@gmail.com",
      password: "0902322796",
      isActive: 1,
    },
    {
      fullname: "Võ Đình Phương",
      phoneNumber: "0932218149",
      email: "khanhgrabcar@gmail.com",
      password: "0932218149",
      isActive: 1,
    },
    {
      fullname: "Phan Công Khanh",
      phoneNumber: "0908496383",
      email: "Tuanphamcka471@gmail.com ",
      password: "0908496383",
      isActive: 1,
    },
    {
      fullname: "Văn Tiến Cường",
      phoneNumber: "0922027711",
      email: "gidauco7@gmail.com",
      password: "0922027711",
      isActive: 1,
    },
    {
      fullname: "Lê Mình Xuân Diễm ",
      phoneNumber: "0902.323.316 ",
      email: "Hienky1974@gmail.com",
      password: "0902.323.316 ",
      isActive: 1,
    },
    {
      fullname: "Nguyễn thanh Tuấn ",
      phoneNumber: "0906388379",
      email: "Thanhtuan388379@gmail.com",
      password: "0906388379",
      isActive: 1,
    },
    {
      fullname: "Lương hoàng thi ",
      phoneNumber: "0908499199",
      email: "Luongthi7781@gmail.com ",
      password: "0908499199",
      isActive: 1,
    },
    {
      fullname: "Nguyễn Xuân thịnh ",
      phoneNumber: "0906668873",
      email: "Huynhkhoaquang@gmail.com",
      password: "0906668873",
      isActive: 1,
    },
    {
      fullname: "Công ty TNHH MTV Du lịch Dế Mèn ",
      phoneNumber: "Nguyễn Nguyên Hà ",
      email: "nguyenha@dulichdemen.vn ",
      password: "Nguyễn Nguyên Hà ",
      isActive: 1,
    },
    {
      fullname: "Phan Gia Tiến",
      phoneNumber: "0948368139",
      email: "Congau2107@gmail.com",
      password: "0948368139",
      isActive: 1,
    },
    {
      fullname: "Huỳnh Thành Đạt",
      phoneNumber: "0703748066",
      email: "Dathuynh10101997@gmail.com",
      password: "0703748066",
      isActive: 1,
    },
    {
      fullname: "Công Ty TNHH Hà Duy Trang",
      phoneNumber: "0903080308",
      email: "Congtyhaduytrang@gmail.com",
      password: "0903080308",
      isActive: 1,
    },
    {
      fullname: "Lẻ Phương Hạnh",
      phoneNumber: "0903901961",
      email: "Ngoclp@gmail.com ",
      password: "0903901961",
      isActive: 1,
    },
    {
      fullname: "Nguyễn đình Hạnh",
      phoneNumber: "0921538538",
      email: "hanh.hpmedical@gmail.com",
      password: "0921538538",
      isActive: 1,
    },
    {
      fullname: "Trần xuân Nga",
      phoneNumber: "0908877905",
      email: "phantiendat2111@gmail.com",
      password: "0908877905",
      isActive: 1,
    },
    {
      fullname: "Nguyễn Thị Thuỳ",
      phoneNumber: "0909910407",
      email: "Letruongngocqui@gmail.com",
      password: "0909910407",
      isActive: 1,
    },
    {
      fullname: "Công ty TNHH ĐO KIỂM VÀ LẮP ĐẶT VIỄN THÔNG AZ ",
      phoneNumber: "0901233366",
      email: "ductdt09@gmail.com",
      password: "0901233366",
      isActive: 1,
    },
    {
      fullname: "nguyễn võ sơn hải",
      phoneNumber: "0909350164",
      email: "alebubu@gmail.com",
      password: "0909350164",
      isActive: 1,
    },
    {
      fullname: "nguyễn hoàng duy",
      phoneNumber: "là của chủ xe",
      email: "duyanh0022@gmail.com",
      password: "là của chủ xe",
      isActive: 1,
    },
    {
      fullname: "Huỳnh Đình Khoa",
      phoneNumber: "0707738817",
      email: "Khoahuynh2306@gmail.com",
      password: "0707738817",
      isActive: 1,
    },
    {
      fullname: "Huỳnh thị trúc thảo",
      phoneNumber: "0938985733",
      email: "ledung2401685@gmail.com",
      password: "0938985733",
      isActive: 1,
    },
    {
      fullname: "Nguyễn Thị Kim Loan",
      phoneNumber: "0375962001",
      email: "nguyenhoai1286@gmail.com",
      password: "0375962001",
      isActive: 1,
    },
    {
      fullname: "NGUYỄN THỊ THUẬN",
      phoneNumber: "0938491321",
      email: "jacklap38@gmail.com",
      password: "0938491321",
      isActive: 1,
    },
    {
      fullname: "Trần Huy Khanh",
      phoneNumber: "0932218139",
      email: "Khanhgrabcar@gmail.com",
      password: "0932218139",
      isActive: 1,
    },
    {
      fullname: "Lâm Thị Thu Nga",
      phoneNumber: "0933196411",
      email: "minhtri190688@gmail.com",
      password: "0933196411",
      isActive: 1,
    },
    {
      fullname: "Trần Anh Tuấn",
      phoneNumber: "0908785839",
      email: "null",
      password: "0908785839",
      isActive: 1,
    },
    {
      fullname: "Trần Hữu Quí",
      phoneNumber: "0906708779",
      email: "tranhuuqui779@gmail.com",
      password: "0906708779",
      isActive: 1,
    },
    {
      fullname: "Ngô Túc Lực",
      phoneNumber: "0909251128",
      email: "Lucngo10111980@gmail.com",
      password: "0909251128",
      isActive: 1,
    },
    {
      fullname: "Đinh Quang Nhật",
      phoneNumber: "0328130010",
      email: "dinhquangnhat1989@gmail.com ",
      password: "0328130010",
      isActive: 1,
    },
    {
      fullname: "Lê Thị Loan ",
      phoneNumber: "0934085964",
      email: "null",
      password: "0934085964",
      isActive: 1,
    },
    {
      fullname: "Nguyễn trung hiếu",
      phoneNumber: "0936454655",
      email: "hieunguyen.lotus@gmail.com",
      password: "0936454655",
      isActive: 1,
    },
    {
      fullname: "Phạm Minh Hạc",
      phoneNumber: "0777111256",
      email: "null",
      password: "0777111256",
      isActive: 1,
    },
    {
      fullname: "Đặng Ngọc Minh Chương ",
      phoneNumber: "0907520072",
      email: "minhchuong2520@gmail.com",
      password: "0907520072",
      isActive: 1,
    },
    {
      fullname: "Nguyễn thịnh hoàng sơn ",
      phoneNumber: "0901564541",
      email: "Hson050383@gmail.com ",
      password: "0901564541",
      isActive: 1,
    },
    {
      fullname: "Trần Đức Hảo ",
      phoneNumber: "0906222130",
      email: "huynhvandaithang.gc@gmail.com",
      password: "0906222130",
      isActive: 1,
    },
    {
      fullname: "Lý Mỹ Tú Liên",
      phoneNumber: "0942811855",
      email: "tqhung1979@gmail.com",
      password: "0942811855",
      isActive: 1,
    },
    {
      fullname: "Luong Vu Son Toan",
      phoneNumber: "0938732305",
      email: "sontoan10992@gmail.com",
      password: "0938732305",
      isActive: 1,
    },
    {
      fullname: "Quách Tuyết Vân ",
      phoneNumber: "0775643536",
      email: "Tuyetvan3536@gmail.com ",
      password: "0775643536",
      isActive: 1,
    },
    {
      fullname: "Đỗ thị Hồng Đào",
      phoneNumber: "0924186868",
      email: "Khoingocnhien@gmail.com",
      password: "0924186868",
      isActive: 1,
    },
    {
      fullname: "Nguyễn Ngọc Anh Khoa",
      phoneNumber: "0909393378",
      email: "khoanguyen.dsg@gmail.com",
      password: "0909393378",
      isActive: 1,
    },
    {
      fullname: "Trương Hoà Thiện",
      phoneNumber: "0981821782",
      email: "Beokhpromotion@gmail.com ",
      password: "0981821782",
      isActive: 1,
    },
    {
      fullname: "Đào Đức Lâm",
      phoneNumber: "0943040009",
      email: "daoduclam88@gmail.com",
      password: "0943040009",
      isActive: 1,
    },
    {
      fullname: "Trần Thị Thảo Uyên",
      phoneNumber: "0934998282",
      email: "Phansy021181@gmail.com",
      password: "0934998282",
      isActive: 1,
    },
    {
      fullname: "Công ty TNHH Tư Vấn H.A.S",
      phoneNumber: "0932087446",
      email: "null",
      password: "0932087446",
      isActive: 1,
    },
    {
      fullname: "Hồ hoàng ngọc thắng",
      phoneNumber: "0901347880",
      email: "Hothang0388@gmail.com",
      password: "0901347880",
      isActive: 1,
    },
    {
      fullname: "Cao Thuỳ linh ",
      phoneNumber: "0797963338",
      email: "null",
      password: "0797963338",
      isActive: 1,
    },
    {
      fullname: "Huỳnh Thụy Thùy Dung",
      phoneNumber: "0933218088",
      email: "tranduonglam@gmail.com",
      password: "0933218088",
      isActive: 1,
    },
    {
      fullname: "Phạm Lại Ngọc Huy",
      phoneNumber: "0903884191",
      email: "Phamlaingochuy@gmail.com",
      password: "0903884191",
      isActive: 1,
    },
    {
      fullname: "Tô thanh hoàng",
      phoneNumber: "0933772262",
      email: "hoang.tt290690@gmail.com",
      password: "0933772262",
      isActive: 1,
    },
    {
      fullname: "Phạm Trần Tuyết Mai",
      phoneNumber: "0336512103",
      email: "ngbanhtung@gmail.com",
      password: "0336512103",
      isActive: 1,
    },
    {
      fullname: "Nguyễn Hoàng Kim ",
      phoneNumber: "0346076855",
      email: "Maithanhcuong2013@gmail.com",
      password: "0346076855",
      isActive: 1,
    },
    {
      fullname: "Nguyễn phan trúc phuong",
      phoneNumber: "0909552696",
      email: "giakhang0804@gmail.com",
      password: "0909552696",
      isActive: 1,
    },
    {
      fullname: "Lê thị Bích Trâm ",
      phoneNumber: "0903112321",
      email: "Nguyenthanhphong2321@gmail.com",
      password: "0903112321",
      isActive: 1,
    },
    {
      fullname: "Nguyễn Anh Tuấn",
      phoneNumber: "0903322507",
      email: "baotien53@yahoo.com",
      password: "0903322507",
      isActive: 1,
    },
    {
      fullname: "Cổ Bội Nhân",
      phoneNumber: "0902857270",
      email: "azsoft.dienthoailaptop@gmail.com",
      password: "0902857270",
      isActive: 1,
    },
    {
      fullname: "ĐOÀN KHÁNH AN THƯ",
      phoneNumber: "0902307870",
      email: "vntruong@gmail.com",
      password: "0902307870",
      isActive: 1,
    },
    {
      fullname: "Lương Hoài Nam",
      phoneNumber: "0879954918",
      email: "null",
      password: "0879954918",
      isActive: 1,
    },
    {
      fullname: "Trần Vũ Thịnh",
      phoneNumber: "0971428468",
      email: "Hbl071810@gmail.com",
      password: "0971428468",
      isActive: 1,
    },
    {
      fullname: "Nghiêm Thị Thu Hương ",
      phoneNumber: "0902929539",
      email: "Tritamnguyen82@gmail.com",
      password: "0902929539",
      isActive: 1,
    },
    {
      fullname: "Võ Chí Thành",
      phoneNumber: "0903391992",
      email: "vochithanh.gc@gmail.com",
      password: "0903391992",
      isActive: 1,
    },
    {
      fullname: "Lâm trường huy",
      phoneNumber: "0903166121",
      email: "lamht1000@gmail.com ",
      password: "0903166121",
      isActive: 1,
    },
    {
      fullname: "Nguyen Si Hung",
      phoneNumber: "0938126099",
      email: "null",
      password: "0938126099",
      isActive: 1,
    },
    {
      fullname: "Nguyễn ngọc thành long",
      phoneNumber: "0971709871",
      email: "Kaclong@ymail.com",
      password: "0971709871",
      isActive: 1,
    },
    {
      fullname: "Dương Đình Long",
      phoneNumber: "0908442437",
      email: "Duongdinhong1983@gmail.com",
      password: "0908442437",
      isActive: 1,
    },
    {
      fullname: "Lê Thị Thu Tâm",
      phoneNumber: "0939040807",
      email: "null",
      password: "0939040807",
      isActive: 1,
    },
    {
      fullname: "Lê Thị Thúy Hạnh",
      phoneNumber: "0938175254",
      email: "nottram0179@gmail.com",
      password: "0938175254",
      isActive: 1,
    },
    {
      fullname: "Vũ Thị Tuyết ",
      phoneNumber: "0903171753",
      email: "vuquocviet8865@gmail.com ",
      password: "0903171753",
      isActive: 1,
    },
    {
      fullname: "LÊ DUY CƯỜNG",
      phoneNumber: "0935928669",
      email: "ldcuong2111@gmail.com",
      password: "0935928669",
      isActive: 1,
    },
    {
      fullname: "Trần Thị Thủy Tiên",
      phoneNumber: "0934221185",
      email: "ngocduy12122018@gmail.com",
      password: "0934221185",
      isActive: 1,
    },
    {
      fullname: "CNTPHCM-CTCP DCX VÀ TM GSM ",
      phoneNumber: "02439756699",
      email: "nanhdung718@gmail.com",
      password: "02439756699",
      isActive: 1,
    },
    {
      fullname: "Tống Thị Tình",
      phoneNumber: "0937738996",
      email: "nguyenthanhnguyen341@gmail.com",
      password: "0937738996",
      isActive: 1,
    },
    {
      fullname: "Bùi Thị Ngọc Lan",
      phoneNumber: "0906956683",
      email: "nhangrabcar@gmail.com",
      password: "0906956683",
      isActive: 1,
    },
    {
      fullname: "Đoàn Duy Lâm",
      phoneNumber: "0931027273",
      email: "duylam0590@gmail.com",
      password: "0931027273",
      isActive: 1,
    },
    {
      fullname: "Lâm Hoàng Phi",
      phoneNumber: "0982777729",
      email: "Lamhoangphi1982@gmail.com",
      password: "0982777729",
      isActive: 1,
    },
    {
      fullname: "Hồng văn dũng",
      phoneNumber: "0939374203",
      email: "Thuexedaiduong",
      password: "0939374203",
      isActive: 1,
    },
    {
      fullname: "Nguyễn Huy Đức Thắng ",
      phoneNumber: "0903014014",
      email: "utthang@yahoo.com",
      password: "0903014014",
      isActive: 1,
    },
    {
      fullname: "Le xuan trọng",
      phoneNumber: "0902961393",
      email: "Thanhbinh190290@gmail.com",
      password: "0902961393",
      isActive: 1,
    },
    {
      fullname: "Nguyễn Thị Quỳnh",
      phoneNumber: "0922932333",
      email: "legend.leon.88@gmail.com ",
      password: "0922932333",
      isActive: 1,
    },
    {
      fullname: "Đoàn Việt Hải",
      phoneNumber: "0977819328",
      email: "haidoanviet1980@gmail.com",
      password: "0977819328",
      isActive: 1,
    },
    {
      fullname: "Đỗ Thị Thương",
      phoneNumber: "0904303888",
      email: "Hungmttd@gmail.com",
      password: "0904303888",
      isActive: 1,
    },
    {
      fullname: "Nguyễn Đình Phúc ",
      phoneNumber: "0977845238",
      email: "Nguyendinhphuc562@gmai.com",
      password: "0977845238",
      isActive: 1,
    },
    {
      fullname: "Nguyễn Ngọc Huấn",
      phoneNumber: "0799250280",
      email: "mioto86418@gmail.com",
      password: "0799250280",
      isActive: 1,
    },
    {
      fullname: "Đang Ngọc Minh Chương ",
      phoneNumber: "0707430992",
      email: "minhchuong2520@gmail.com",
      password: "0707430992",
      isActive: 1,
    },
    {
      fullname: "Trần Đức Tín",
      phoneNumber: "0986423327",
      email: "Langtumamatmam@gmail.com",
      password: "0986423327",
      isActive: 1,
    },
    {
      fullname: "Bùi Đức Duy",
      phoneNumber: "0928117117",
      email: "Ducduy6067@gmail.com",
      password: "0928117117",
      isActive: 1,
    },
    {
      fullname: "TRẦN HUY KHANH",
      phoneNumber: "0932218139",
      email: "Khanhgrabcar@gmail.com",
      password: "0932218139",
      isActive: 1,
    },
    {
      fullname: "Trần Hữu Tâm",
      phoneNumber: "0902799221",
      email: "huutam75@gmail.com",
      password: "0902799221",
      isActive: 1,
    },
    {
      fullname: "Phan tấn lộc",
      phoneNumber: "0903870727",
      email: "quay189@gmail.com",
      password: "0903870727",
      isActive: 1,
    },
    {
      fullname: "Trịnh Trần Minh Tiến",
      phoneNumber: "0966164166",
      email: "minhtien.fsc@gmail.com",
      password: "0966164166",
      isActive: 1,
    },
    {
      fullname: "Lê Thị Luyến",
      phoneNumber: "0908904908",
      email: "ming.guangty@gmail.com",
      password: "0908904908",
      isActive: 1,
    },
    {
      fullname: "TRẦN THỊ LỆ VÂN",
      phoneNumber: "0907455772",
      email: "thanhvan772@gmail.com",
      password: "0907455772",
      isActive: 1,
    },
    {
      fullname: "Trần Trường Khoa",
      phoneNumber: "0917803249",
      email: "Tkhoa3012@gmail.com",
      password: "0917803249",
      isActive: 1,
    },
    {
      fullname: "nguyễn hoàng duy ",
      phoneNumber: "0907219353",
      email: "hoangson12112014@gmail.com",
      password: "0907219353",
      isActive: 1,
    },
    {
      fullname: "Trần Đức Tín",
      phoneNumber: "0986423327",
      email: "Langtumamatmam@gmail.com ",
      password: "0986423327",
      isActive: 1,
    },
    {
      fullname: "Trần đình huỳnh",
      phoneNumber: "0988916867",
      email: "Huynh.dinhtran@gmail.com",
      password: "0988916867",
      isActive: 1,
    },
    {
      fullname: "Nguyễn Văn Trọn ",
      phoneNumber: "0937372255",
      email: "Vantron368@gmail.com",
      password: "0937372255",
      isActive: 1,
    },
    {
      fullname: "Nguyễn Thị Bảo Anh",
      phoneNumber: "0909098304",
      email: "Nguyensongchauanh@gmail.com",
      password: "0909098304",
      isActive: 1,
    },
    {
      fullname: "Ngô Trung Hiếu",
      phoneNumber: "0911760770",
      email: "hieu.ngotrung2708@gmail.com",
      password: "0911760770",
      isActive: 1,
    },
    {
      fullname: "Lê Quốc Thái",
      phoneNumber: "0948144406",
      email: "kwtrongtin@gmail.com",
      password: "0948144406",
      isActive: 1,
    },
    {
      fullname: "LÊ NGỌC TRÂM ANH",
      phoneNumber: "0938110115",
      email: "hltaf0903@gmail.com",
      password: "0938110115",
      isActive: 1,
    },
    {
      fullname: "Nguyễn Minh Tuấn",
      phoneNumber: "0907439823",
      email: "duongdatnguyentran@gmail.com",
      password: "0907439823",
      isActive: 1,
    },
    {
      fullname: "Bùi Tấn Đạt",
      phoneNumber: "0906365877",
      email: "buitandat0801@gmail.com",
      password: "0906365877",
      isActive: 1,
    },
    {
      fullname: "Đặng văn yên",
      phoneNumber: "0968709709",
      email: "Viethantours@gmail.com",
      password: "0968709709",
      isActive: 1,
    },
    {
      fullname: "Tô Thị Tuyết ",
      phoneNumber: "0814999905",
      email: "andypham2020@gmail.com",
      password: "0814999905",
      isActive: 1,
    },
    {
      fullname: "CTY TNHH INDUSTRY ĐĂNG VIỆT ",
      phoneNumber: "0969300478",
      email: "phancongnguyen1978@gmail.com",
      password: "0969300478",
      isActive: 1,
    },
    {
      fullname: "Trần Ngọc Tuấn Anh ",
      phoneNumber: "0903070938",
      email: "bachma3517081982@gmail.com",
      password: "0903070938",
      isActive: 1,
    },
    {
      fullname: "Vương Thị Nga",
      phoneNumber: "0935657553",
      email: "72dattran@gnail.com",
      password: "0935657553",
      isActive: 1,
    },
    {
      fullname: "Ngô Quang Hiển",
      phoneNumber: "0969920041",
      email: "byebyemylove251087@gmail.com",
      password: "0969920041",
      isActive: 1,
    },
    {
      fullname: "Lữ Ngọc Hân",
      phoneNumber: "0989999941",
      email: "namdisco@gmail.com",
      password: "0989999941",
      isActive: 1,
    },
    {
      fullname: "Huỳnh Ngô Thanh Thy",
      phoneNumber: "0902398286",
      email: "tanledang2212@gmail.com",
      password: "0902398286",
      isActive: 1,
    },
    {
      fullname: "Nguyễn Thị Mộng Tuyền",
      phoneNumber: "0976810070",
      email: "Vanthudl@gmail.com",
      password: "0976810070",
      isActive: 1,
    },
    {
      fullname: "Võ Tấn Cường",
      phoneNumber: "0938232548",
      email: "tancuongcamtu@gmail.com",
      password: "0938232548",
      isActive: 1,
    },
    {
      fullname: "Nguyen van thanh",
      phoneNumber: "0939073183",
      email: "Thachthanhnhan19922@gmai.com",
      password: "0939073183",
      isActive: 1,
    },
    {
      fullname: "Nguyễn Thanh Khiết",
      phoneNumber: "0902322796",
      email: "khietnguyen88@gmail.com",
      password: "0902322796",
      isActive: 1,
    },
    {
      fullname: "Đặng thị ái vân",
      phoneNumber: "0909883800",
      email: "null",
      password: "0909883800",
      isActive: 1,
    },
    {
      fullname: "Vũ Thế Linh ",
      phoneNumber: "0902568950",
      email: "Thelinhvu091171@gmail.com",
      password: "0902568950",
      isActive: 1,
    },
    {
      fullname: "Nguyễn Ngọc Thảo",
      phoneNumber: "0774579407",
      email: "Ngocthao1114@gmail.com",
      password: "0774579407",
      isActive: 1,
    },
  ];

  req.users = users;
  next();
};
