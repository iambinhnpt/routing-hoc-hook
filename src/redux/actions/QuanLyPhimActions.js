import Axios from "axios";

import { layDanhSachPhim } from "../type/QuanLyPhimType";

export const layDanhSachPhimAxios = (dispatch) => {
  return (dispatch) => {
    Axios({
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    }).then((res) => {
      dispatch({
        type: layDanhSachPhim,
        payload: res.data,
      });
    });
  };
};
