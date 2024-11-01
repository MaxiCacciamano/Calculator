import React from 'react';
import Display from '../component/Display';
import useCalculator from '../hooks/useCalculator';

export const Calculator = () => {
  const { input, result, handleInput, calcularResult, clearInput } = useCalculator();

  return (
    <div>
      <Display value={result !== null ? result : input || "0"} />
      <div style={{ backgroundColor: 'hsl(223, 31%, 20%)', borderRadius: '7px', padding: '13px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: "repeat(4, 1fr)", gap: '0',alignItems:'center'}}>
        {['7', '8', '9', 'DEL'].map((item) => (
          <button 
            key={item} 
            style={{width:'80%',height:'40px',margin:'8px auto',fontSize:'30px' ,padding: '0', backgroundColor: 'white', color: 'hsl(221, 14%, 31%)', fontWeight: '700', border: 'none' }} 
            onClick={() => item === 'DEL' ? clearInput() : handleInput(item)}
          >
          <p style={{margin:'-20px auto'}}>
            {item}
          </p>
          </button>
        ))}
        {['4', '5', '6', '+'].map((item) => (
          <button 
            key={item} 
            style={{width:'80%',height:'40px',margin:'8px auto',fontSize:'30px' , padding: '0', backgroundColor: 'white', color: 'hsl(221, 14%, 31%)', fontWeight: '700', border: 'none' }} 
            onClick={() => handleInput(item)}
          >
          <p style={{margin:'-20px auto'}}>
            {item}
          </p>
          </button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button 
            key={item} 
            style={{width:'80%',height:'40px',margin:'8px auto' ,padding: '0',fontSize:'30px' ,backgroundColor: 'white', color: 'hsl(221, 14%, 31%)', fontWeight: '700', border: 'none' }} 
            onClick={() => handleInput(item)}
          >
          <p style={{margin:'-20px auto'}}>
            {item}
          </p>
          </button>
        ))}
        {['.', '0', '/', 'x'].map((item) => (
          <button 
            key={item} 
            style={{width:'80%',height:'40px',margin:'8px auto',fontSize:'30px', textAlign:'center' ,padding: '0', backgroundColor: 'white', color: 'hsl(221, 14%, 31%)', fontWeight: '700', border: 'none' }} 
            onClick={() => handleInput(item)}
          >
          <p style={{margin:'-23px auto'}}>
            {item}
          </p>
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', padding: "0px" }}>
        <button
          onClick={calcularResult}
          style={{ width: "100%", margin: '8px', backgroundColor:'hsl(225, 21%, 49%)', fontWeight:'bold' }}
        >
          RESET
        </button>
        <button 
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
