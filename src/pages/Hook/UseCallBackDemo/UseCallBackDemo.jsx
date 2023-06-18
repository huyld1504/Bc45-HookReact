import React, { useState,useCallback } from 'react'
import Child from './Child'

const UseCallBackDemo = () => {

    const [number,setNumber] = useState(1)
    const [like,setLike]= useState(1)
    const renderNumber = () => {
        return (
            <div>
                {number} <i className='fa fa-user'></i>
            </div>
        )
    }
    //use callback dùng để cache lại địa chỉ hàm phụ thuộc vào tham số nếu tham số thay đổi thì hàm sẽ được tạo mới
    const renderNumberCallBack = useCallback(renderNumber,[number])

    

    console.log('callback demo')
  return (
    <div className='container'>
        <h3>Number: <span className='fs-1 text-danger'>{number}</span></h3>
        <button className="btn btn-outline-dark" onClick={()=>{
            setNumber(number+1)
        }}>+</button>
        <h3 className='mt-3' onClick={()=>{
            setLike(like+1)
        }}>{like} <i className='fa fa-heart text-danger'></i></h3>
        <Child renderNumberCallBack={renderNumberCallBack}/>
    </div>
  )
}

export default UseCallBackDemo