import React from 'react'

const Display = ({value}) => <div 
    style={{
    /* width: 100%; */
    backgroundColor:'hsl(224, 36%, 15%)',
    color: 'white',
    // padding: '10px', 
    borderRadius: '7px',
    /* box-sizing: border-box; */
    // height: '60px',
    /* align-content: center; */
    // aligItem: 'center',
    textAlign:'end',
    // fontSize:'20px',
    // padding: '10px',
    }}
    >
        
    <h1 style={{padding:'27px', marginTop:'0', fontSize:'35px'}}> {value} </h1>
    
    </div>

export default Display
