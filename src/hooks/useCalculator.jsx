import { useState } from "react";
import {initialState} from "../store/index.js";

const useCalculator = () => {
    //Estado inicial de la calculadora
    const [state, setState] = useState(initialState)
    const {input, result } = state;

    //funciona para actualizar el input
    const handleInput = (value)=>{
        if( result !== null){
            setState({...state, input: result +  value, result:null})
        }else{
            setState({...state, input:input + value})
        }
    };

    //funcion para calcular el resultado
    const calcularResult = ()=>{
        try{
            const evaluarResultado = eval(input)
            if(isNaN(evaluarResultado)){
                throw new Error('Resultado no valido.');
            }

            //actualizo el estado, concatenando el resultado anterior al input
            const newInput = evaluarResultado.toString() // convierto en cadena
            //actualizo
            setState({
                input: newInput,
                result: evaluarResultado
            })
            console.log()
        }
        catch(err){
            setState({input:'', result: 'Error',err})
            console.log(err)
        }
    }

    //funcion para limpar el imput
    const clearInput = () => {
        setState(initialState)
    }

    return {input, result, handleInput, calcularResult, clearInput};
    
}

export default useCalculator;