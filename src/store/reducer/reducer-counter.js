import { UP , DICREAS, ZERO,UPDATE_COUNTER} from "../actions/conter-type";
 export  default function reducerCounter (state,action){
    switch(action.type){
       case UP:
        return state + 1;
        case DICREAS:
          return state - 1
          case ZERO:
            return state = 0;
            case UPDATE_COUNTER:
              return action.payload
        default:
          return state
    }
   }