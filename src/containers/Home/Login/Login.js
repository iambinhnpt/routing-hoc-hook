import React from "react";
import { useState } from "react";
import { dangNhapAxios } from "../../../redux/actions/QuanLyNguoiDungAction";
import { useDispatch } from "react-redux";
export default function Login() {
  let [nguoiDung, setNguoiDung] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const dispatch = useDispatch();

  console.log(nguoiDung);
  let handleChange = (e) => {
    let { value, name } = e.target;
    setNguoiDung({
      ...nguoiDung,
      [name]: value,
    });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(dangNhapAxios(nguoiDung));
  };
  return (
    <form action="" className="container">
      <h3>Login</h3>
      <div className="form-group">
        <span>Tài khoản</span>
        <input
          name="taiKhoan"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <span>Mật khẩu</span>
        <input
          name="matKhau"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Đăng nhập
        </button>
      </div>
    </form>
  );
}
