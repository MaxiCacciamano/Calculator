import React from 'react';
import Display from '../component/Display';
import useCalculator from '../hooks/useCalculator';

export const Calculator = () => {
  const { input, result, handleInput, calcularResult, clearInput } = useCalculator();

  return (
    <div>
      <Display value={result !== null ? result : input || "0"}  />
      <div style={{ display: 'grid', gridTemplateColumns: "repeat(4, 1fr)", gap: '20px', padding: '10px', backgroundColor:'black' }}>
        {['7', '8', '9', 'DEL'].map((item) => (
          <button 
            key={item} 
            style={{ height: '100%', width: '80px', backgroundColor: 'white', color: 'black', fontWeight: '900' }} 
            onClick={() => item === 'DEL' ? clearInput() : handleInput(item)}
          >
            {item}
          </button>
        ))}
        {['4', '5', '6', '+'].map((item) => (
          <button 
            key={item} 
            style={{ height: '100%', width: '80px', backgroundColor: 'white', color: 'black', fontWeight: '900' }} 
            onClick={() => handleInput(item)}
          >
            {item}
          </button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button 
            key={item} 
            style={{ height: '100%', width: '80px', backgroundColor: 'white', color: 'black', fontWeight: '900' }} 
            onClick={() => handleInput(item)}
          >
            {item}
          </button>
        ))}
        {['.', '0', '/', 'x'].map((item) => (
          <button 
            key={item} 
            style={{ height: '100%', width: '80px', backgroundColor: 'white', color: 'black', fontWeight: '900' }} 
            // onClick={handleInput()}
          >
            {item}
          </button>
        ))}
      </div>
        <div style={{display:'flex', flexDirection:'row', padding:"10px"}}>
        <button
        onClick={calcularResult}
        style={{width:"100%"}}
         >
          =
        </button>
        <button 
          style={{height: '100%', width: '100%', backgroundColor: 'white', color: 'black' }} 
          onClick={calcularResult}
        >
          RES
        </button>
        </div>
    </div>
  );
};
