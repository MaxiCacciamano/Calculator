import React from 'react';
import Display from '../component/Display';
import useCalculator from '../hooks/useCalculator';
import style from './calculator.module.css'

export const Calculator = () => {
  const { input, result, handleInput, calcularResult, clearInput } = useCalculator();


  function checkItem(item){
    switch(item){
      case'.':
        return '.';
      case '0':
        return '0';
      case '/':
        return '%';
      case '*':
        return 'x'
    }
  }

  function checkColor(item){
    switch(item){
      case 'DEL':
        return <p style={{backgroundColor:'hsl(225, 21%, 49%)',  margin:'0 auto',
          padding: '6px',
          borderRadius: '5px'

        }}>DEL</p>
      case '9':
        return '9';
      case '8':
        return '8';
      case '7':
        return '7'
    }
  }



  return (
    <div>
      <h3 style={{margin:'0', textAlign:'left', fontWeight:'bold', paddingTop:'10px', paddingBottom:'10px'}}>Calc</h3>
      <Display value={result !== null ? result : input || "0"} />
      <div style={{ backgroundColor: 'hsl(223, 31%, 20%)', borderRadius: '7px', padding: '13px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: "repeat(4, 1fr)", gap: '0',alignItems:'center'}}>
        {['7', '8', '9', 'DEL'].map((item) => (
          <button 
          className={style.button}
            key={item} 
            style={{width:'80%',height:'40px',margin:'8px auto',fontSize:'30px' ,padding: '0', backgroundColor: ' hsl(0, 0%, 100%)', color: 'hsl(221, 14%, 31%)', fontWeight: '700', border: 'none' }} 
            onClick={() => item === 'DEL' ? clearInput() : handleInput(item)}
          >
          {/* <p style={{margin:'10px auto'}}> */}
            {checkColor(item)}
          {/* </p> */}
          </button>
        ))}
        {['4', '5', '6', '+'].map((item) => (
          <button 
            className={style.button}
            key={item} 
            style={{width:'80%',height:'40px',margin:'8px auto',fontSize:'30px' , padding: '0', backgroundColor: ' hsl(0, 0%, 100%)', color: 'hsl(221, 14%, 31%)', fontWeight: '700', border: 'none' }} 
            onClick={() => handleInput(item)}
          >
          <p style={{margin:'10px auto'}}>
            {item}
          </p>
          </button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button 
            className={style.button}
            key={item} 
            style={{width:'80%',height:'40px',margin:'8px auto' ,padding: '0',fontSize:'30px' , backgroundColor: ' hsl(0, 0%, 100%)', color: 'hsl(221, 14%, 31%)', fontWeight: '700', border: 'none' }} 
            onClick={() => handleInput(item)}
          >
          <p style={{margin:'10px auto'}}>
            {item}
          </p>
          </button>
        ))}
        {['.', '0', '/', '*'].map((item) => (
          <button 
            className={style.button}
            key={item} 
            style={{width:'80%',height:'40px',margin:'8px auto',fontSize:'30px', textAlign:'center' ,padding: '0', backgroundColor: ' hsl(0, 0%, 100%)', color: 'hsl(221, 14%, 31%)', fontWeight: '700', border: 'none' }} 
            onClick={() => handleInput(item)}
          >
          <p style={{margin:'10px auto'}}>
            {checkItem(item)}
          </p>
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', padding: "0px" }}>
        <button
        className={style.button}
          onClick={calcularResult}
          style={{ width: "100%", margin: '8px', backgroundColor:'hsl(225, 21%, 49%)', fontWeight:'bold' }}
        >
          RESET
        </button>
        <button 
          className={style.button}
          style={{ height: '100%', width: '100%', backgroundColor: 'hsl(6, 63%, 50%)',fontWeight:'bold' ,color: 'white', margin: '8px' }} 
          onClick={calcularResult}
        >
        <span style={{fontWeight:'bold'}}>
          =
        </span>
        </button>
      </div>
      </div>
    </div>
  );
};
