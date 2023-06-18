import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Detail = () => {
  const [Detail, setDetail] = useState({
    "id": 1,
    "name": "Adidas Prophere",
    "alias": "adidas-prophere",
    "price": 350,
    "feature": false,
    "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    "size": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42"
    ],
    "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    "quantity": 995,
    "image": "https://shop.cyberlearn.vn/images/adidas-prophere.png",
    "categories": [
      {
        "id": "ADIDAS",
        "category": "ADIDAS"
      },
      {
        "id": "MEN",
        "category": "MEN"
      },
      {
        "id": "WOMEN",
        "category": "WOMEN"
      }
    ],
    "relatedProducts": [
      {
        "id": 2,
        "name": "Adidas Prophere Black White",
        "alias": "adidas-prophere-black-white",
        "feature": false,
        "price": 450,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "image": "https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png"
      },
      {
        "id": 3,
        "name": "Adidas Prophere Customize",
        "alias": "adidas-prophere-customize",
        "feature": false,
        "price": 375,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "image": "https://shop.cyberlearn.vn/images/adidas-prophere-customize.png"
      },
      {
        "id": 5,
        "name": "Adidas Swift Run",
        "alias": "adidas-swift-run",
        "feature": false,
        "price": 550,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "image": "https://shop.cyberlearn.vn/images/adidas-swift-run.png"
      }
    ]
  })
  //Lấy params 
  const params = useParams()
  //Gọi API cho sản phẩm
  const getProductAPIbyID =  async () => {
    const res = await axios({
      url:`https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.id}`,
      method:'GET'
    })
    setDetail(res.data.content)
  }
  //console.log(params.id)
  useEffect(()=>{
    //Call API
    getProductAPIbyID()
  },[params.id])
  return (
    <div className='container my-3'>
      <div className='row mt-2'>
        <div className='col-4'>
          <div className="card">
            <img src="https://shop.cyberlearn.vn/images/adidas-prophere.png" alt="..." />
          </div>
        </div>
        <div className="col-8">
          <h3>{Detail.name}</h3>
          <p>{Detail.description}</p>
          <p>{Detail.price}$</p>
          <button className='btn btn-dark mt-2'>Add to cart <i className='fa fa-cart-plus'></i></button>
        </div>
      </div>
      <h2 className='mt-5 text-center'>Realted Product</h2>
      <div className='mt-2 row'>
        {Detail.relatedProducts?.map((item)=>{
          return (
            <div className='col-4' key={item.id}>
              <div className="card">
                <img src={item.image} alt="..." />
                <div className="card-body">
                  <h3>{item.name}</h3>
                  <p className='text-danger'>{item.description}</p>
                  <h2>{item.price} <span className=''>$</span> </h2>
                  <NavLink to={`/detail/${item.id}`}>
                    <button className="btn btn-outline-dark">Add to cart</button>
                  </NavLink>
                </div>
              </div>
            </div>
          )
        })}
        
      </div>
    </div>
  )
}

export default Detail