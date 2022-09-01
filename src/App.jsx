import { useReducer } from 'react'
import './App.css'
import reducerCounter from "./store/reducer/reducer-counter"
import { upCounter, zeroConter,dicriseConter, updateCounter} from './store/actions/action-conter';



 export let intialState = 0;

 
function App() {
 const [myStat,dispatch] = useReducer(reducerCounter,intialState)

  return (
    <div className="App">
     <h1>{myStat}</h1>
     <button id='button' onClick={()=>dispatch(upCounter())}>increas</button>
     <button id='button' onClick={()=>dispatch( dicriseConter())}>decreas</button>
     <button id='button' onClick={()=>dispatch( zeroConter())}>zero</button>
     <button id='button' onClick={()=>dispatch( updateCounter(7))}>updatecount</button>
    </div>
  )
}

export default App
