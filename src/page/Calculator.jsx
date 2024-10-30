import React from 'react';
import Display from '../component/Display';
import useCalculator from '../hooks/useCalculator';

export const Calculator = () => {
  const { input, result, handleInput, calcularResult, clearInput } = useCalculator();

  return (
    <div>
      <Display value={result !== null ? result : input || "0"} />
      <div style={{ display: 'grid', gridTemplateColumns: "repeat(4, 1fr)", gap: '20px', padding: '25px' }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button style={{ height: '100%', width: '80px', backgroundColor: 'white', color: 'black', fontWeight: '900' }} key={num} onClick={() => handleInput(num.toString())}>
            {num}
          </button>
        ))}
        {/* Agrega un espacio vacío para centrar el 0 */}
            <button style={{ height: '100%', width: '80px', backgroundColor: 'white', color: 'black', fontWeight: '900' }}>
                .
            </button>
        <button style={{ height: '100%', width: '80px', backgroundColor: 'white', color: 'black', fontWeight: '900' }} onClick={() => handleInput('0')}>
          0
        </button>
        <button style={{ height: '100%', width: '80px', backgroundColor: 'white', color: 'black', fontWeight: '900' }}>
            /
        </button>
      {['+', '-', '*'].map((op) => (
        <button style={{ height: '100%', width: '80px', backgroundColor: 'white', color: 'black', fontWeight: '900' }} key={op} onClick={() => handleInput(op)}>
          {op}
        </button>
      ))}
      </div>
      <button label='c' onClick={clearInput}>DEL</button>
      <button label='=' onClick={calcularResult}>=</button>
    </div>
  );
};