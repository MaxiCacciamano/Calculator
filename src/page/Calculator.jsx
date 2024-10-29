import React from 'react'
import Display  from '../component/Display'
import useCalculator from '../hooks/useCalculator'

export const Calculator = () => {
    const {input, result, handleInput, calcularResult, clearInput} = useCalculator();

  return (
    <div>
        <Display value={result !== null ? result:input||"0"} />
        <div>
            <button label='c' onClick={clearInput}>C</button>
                {[1,2,3,4,5,6,7,8,9,0].map((num)=>(
                    <button style={{color:'white'}} key={num} label={num.toString()} onClick={()=> handleInput(num.toString())}> {num} </button>
                ))}
                {['+','-','*','/'].map((op)=>(
                    <button key={op} label= {op} onClick={()=>handleInput(op)} > {op} </button>
                ))}
            <button label='=' onClick={calcularResult}>=</button>
        </div>
    </div>
  )
}
