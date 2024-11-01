import React from 'react'

const Display = ({value}) => <div 
    style={{
    /* width: 100%; */
    backgroundColor:'white',
    color: 'black',
    /* padding: 10px; */
    borderRadius: '9px',
    /* box-sizing: border-box; */
    height: '60px',
    /* align-content: center; */
    aligItem: 'center',
    padding: '10px',
    marginBottom:'15px'
    }}
    >
    <h2> {value} </h2>
    
    </div>

export default Display
