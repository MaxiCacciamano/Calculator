import { useState } from "react";
import {initialState} from "../store/index.js";

const useCalculator = () => {
    //Estado inicial de la calculadora
    const [state, setState] = useState(initialState)
    const {input, result } = state;

    //funciona para actualizar el input
    const handleInput = (value)=>{
        setState({...state, input: input + value})
    };

    //funcion para calcular el resultado
    const calcularResult = ()=>{
        try{
            setState({input:'', result:eval(input)}) //calcula el resultado de la operacion
        }
        catch(err){
            setState({input:'', result: 'Error',err})
        }
    }

    //funcion para limpar el imput
    const clearInput = () => {
        setState(initialState)
    }

    return {input, result, handleInput, calcularResult, clearInput};
    
}

export default useCalculator;