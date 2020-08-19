import { layDanhSachPhim } from "../type/QuanLyPhimType";

const initialState = {
  danhSachPhim: [
    {
      maPhim: 1314,
      tenPhim: "Phim Không tên",
      biDanh: "phim-khong-ten",
      trailer: "AngryBird Cosplay",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/phim-khong-ten_gp01.jpg",
      moTa: "AngryBird Cosplay",
      maNhom: "GP01",
      ngayKhoiChieu: "2020-02-06T00:00:00",
      danhGia: 10,
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case layDanhSachPhim:
      return { ...state, danhSachPhim: action.payload };

    default:
      return state;
  }
};
