import React, {memo} from 'react'

const Child = (props) => {
    console.log('child')
  return (
    <div className='container bg-dark text-light fs-1 mt-3 p-3 text-center'>
        Child
        <p>User: {props.renderNumberCallBack()}</p>
    </div>
  )
}

export default memo(Child)