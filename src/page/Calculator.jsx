import React from 'react';
import Display from '../component/Display';
import useCalculator from '../hooks/useCalculator';

export const Calculator = () => {
  const { input, result, handleInput, calcularResult, clearInput } = useCalculator();

  return (
    <div>
      <Display value={result !== null ? result : input || "0"} />
      <div style={{ display: 'grid', gridTemplateColumns: "repeat(4, 1fr)", gap: '0', padding: '10px',alignItems:'center', backgroundColor: 'black', borderRadius: '9px' }}>
        {['7', '8', '9', 'DEL'].map((item) => (
          <button 
            key={item} 
            style={{width:'90%',height:'35px',margin:'5px auto' ,padding: '0', backgroundColor: 'white', color: 'black', fontWeight: '900', border: 'none' }} 
            onClick={() => item === 'DEL' ? clearInput() : handleInput(item)}
          >
            {item}
          </button>
        ))}
        {['4', '5', '6', '+'].map((item) => (
          <button 
            key={item} 
            style={{width:'90%',height:'35px',margin:'5px auto' , padding: '0', backgroundColor: 'white', color: 'black', fontWeight: '900', border: 'none' }} 
            onClick={() => handleInput(item)}
          >
            {item}
          </button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button 
            key={item} 
            style={{width:'90%',height:'35px',margin:'5px auto' ,padding: '0', backgroundColor: 'white', color: 'black', fontWeight: '900', border: 'none' }} 
            onClick={() => handleInput(item)}
          >
            {item}
          </button>
        ))}
        {['.', '0', '/', 'x'].map((item) => (
          <button 
            key={item} 
            style={{width:'90%',height:'35px',margin:'5px auto' ,padding: '0', backgroundColor: 'white', color: 'black', fontWeight: '900', border: 'none' }} 
            onClick={() => handleInput(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', padding: "10px" }}>
        <button
          onClick={calcularResult}
          style={{ width: "100%", margin: '0' }}
        >
          =
        </button>
        <button 
          style={{ height: '100%', width: '100%', backgroundColor: 'white', color: 'black', margin: '0' }} 
          onClick={calcularResult}
        >
          RES
        </button>
      </div>
    </div>
  );
};
