import React, { useState } from "react";

const UseStateDemo = () => {
  const [number, setNumber] = useState(0);
  const [img, setImage] = useState("https://i.pravatar.cc?u=2");
  const [fontSize, setFontSize] = useState(10)
  const  changefontSize = (value) => {
    let newFontSize = fontSize + value
        setFontSize(newFontSize)
    }


  return (
    <div className="container">
      <div className="vd1">
        <h3>Number: {number}</h3>
        <button
          className="btn btn-outline-danger fw-bold mx-3"
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          +
        </button>
        <button
          className="btn btn-outline-danger fw-bold"
          onClick={() => {
            setNumber(number - 1);
          }}
        >
          -
        </button>
      </div> <hr />
      <div className="vd2">
        <h3>Ví dụ 2: Load ra card hình ảnh</h3>
        <div className="card w-50">
            <img src={img} alt={'...'} />
            <div className="card-body">
            <button className="btn btn-outline-success d-block text-center mx-auto w-25 fs-2" onClick={()=>{
                let newImg = `https:i.pravatar.cc?u=${Math.floor(Math.random() * 10)}`
                setImage(newImg)
            }}>Random</button>
            </div>
        </div>
      </div> <r />
      <div className="vd3">
        <h3>Ví dụ 3: Tăng giảm font size chữ</h3>
        <p style={{fontSize}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, dolorum?</p>
        <button className="btn btn-outline-danger mx-2" onClick={()=>{
            changefontSize(+10)
        }}>+</button>
        <button className="btn btn-outline-danger mx-2" onClick={()=>{
            changefontSize(-10)
        }}>-</button>
      </div>
    </div>
  );
};

export default UseStateDemo;
