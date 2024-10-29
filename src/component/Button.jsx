import React from 'react'
import '../index.css';

const Button = ({label, onclick})=>(
    <button   onClick={onclick} >  {label} </button>
)

export default Button