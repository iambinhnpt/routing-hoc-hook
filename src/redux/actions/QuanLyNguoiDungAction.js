import axios from "axios";

export const dangNhapAxios = (nguoiDung) => {
  return (dispatch) => {
    axios({
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: nguoiDung,
    })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("userLogin", res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};
