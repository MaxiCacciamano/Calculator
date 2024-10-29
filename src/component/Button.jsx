import React from 'react'

const Button = ({label, onclick})=>(
    <button onClick={onclick} > {label} </button>
)

export default Button