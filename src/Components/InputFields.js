import React from 'react'
import '../index.css'
import Button from './Button'
function InputFields(props) {
  return (
    <form>

            <div className='inputtype'>
            <label>{props.label}</label><br/>
            <input type={props.type} placeholder={props.placeholder}/>
            </div>
    </form>
  )
}

export default InputFields