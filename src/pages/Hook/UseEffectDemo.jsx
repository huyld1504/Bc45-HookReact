import React,{useState,useEffect} from 'react'

const UseEffectDemo = () => {

    const [number,setNumber] = useState(1)
    const [like,setLike] = useState(10)
    console.log('render')
    //Trường hợp 1: useEffect 1 tham số
    useEffect(()=>{
        //useEffect chạy lần đầu tiên và mỗi khi state thay đổi
        console.log('useEffect run')

        //Không setState tại đây (muốn setState tại đây phải có condition)
        
        //Giống lifecycle componentDidMount + componentDidUpdate
    })

    useEffect(()=>{
        //useEffect dùng cho các API dạng getDetail (tương tự componentDidUpdate)
        console.log('useEffect like')
    },[number])

    useEffect(() => {
        //useEffect tương tự componentDidMount => thường dùng cho API getAll
        console.log('useEffect đẹp []')
    },[])

    useEffect(()=>{
        return () =>{
            //Kích hoạt khi component mất khỏi giao diện 
            //Clear các biến chạy ngầm
            console.log('will unmount')
        }
    },[])

  return (
    <div className='container'>
        <h3>Number: {number}</h3>
        <button className="btn btn-outline-dark" onClick={()=>{
            setNumber(number+1)
        }}>+</button>
        <h3>{like} <i className='fa fa-heart text-danger'></i></h3>
        <button className="btn btn-outline-danger" onClick={()=>{
            setLike(like+1)
        }}><i className='fa fa-heart'></i></button>
    </div>
  )
}

export default UseEffectDemo