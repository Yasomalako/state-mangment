import { UP,UPDATE_COUNTER,ZERO,DICREAS } from "./conter-type"

export const upCounter  = ()=>{
    return {type:UP}
}

export const dicriseConter = ()=>{
    return{type:DICREAS}
}
export const zeroConter = ()=>{
    return {type:ZERO}
}
export const updateCounter = (number)=>{
    return {type:UPDATE_COUNTER,payload:number}
}