import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [ArrProduct, setArrProduct] = useState([]);
  const getProductAPI = async () => {
    const res = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });

    //Sau khi lấy dữ liệu từ API
    setArrProduct(res.data.content);
  };

  useEffect(()=>{
    //Chạy sau khi component render (tương tự componentDidMount chỉ chạy duy nhất 1 lần sau khi render)
    getProductAPI()
    console.log('ArrProduct', ArrProduct)
  },[])

  return (
    <div className="container">
      <h3>Shoes Shop</h3>
      <button className="btn btn-outline-success" onClick={()=>{
        getProductAPI()
      }}>Get Product</button>
      <div className="row">
        {ArrProduct.map((item) => {
          return (
            <div className="col-4 my-2" key={item.id}>
              <div className="card">
                <img src={item.image} alt="..." />
                <div className="card-body">
                  <h3>{item.name}</h3>
                  <p className="text-danger">{item.shortDescription}</p>
                  <h3>{item.price}$</h3>
                  <NavLink
                    className={"btn btn-outline-dark"}
                    to={`/detail/${item.id}`}>
                    View Detail
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
