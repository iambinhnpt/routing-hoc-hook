import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { layDanhSachPhimAxios } from "../../../redux/actions/QuanLyPhimActions";

export default function HomePage() {
  const dsPhim = useSelector((state) => state.QuanLyPhimReducer.danhSachPhim);

  //useState thay thế this.state ứng với react class component
  // let [state, setState] = useState({
  //   dsPhim: [],
  // });

  const dispatch = useDispatch();
  //useEffect chạy sau khi nội dung được render
  // useEffect(()=>{
  //   console.log('useEffect thay thế cho didmount và didupdate');
  // });

  useEffect(() => {
    dispatch(layDanhSachPhimAxios());
  }, []);

  // useEffect(() => {
  //   console.log('Didupdate sẽ thực thi tại đây')
  //   return () => {
  //     console.log('willunmount sẽ thực thi tại đây')
  //   }
  // }, [state.dsPhim])

  const renderPhim = () => {
    return dsPhim.map((item, index) => {
      return (
        <div className="col-3" style={{ marginBottom: "50px" }}>
          <img className="w-100 h-100 d-block" src={item.hinhAnh} alt="" />
          <h3>{item.tenPhim}</h3>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className="row">{renderPhim()}</div>
    </div>
  );
}
