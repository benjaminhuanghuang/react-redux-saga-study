import {INCREMENT,INCREMENT_ASYNC} from '../constants/counter'


// action creator
export const increment = () =>{
  return {
    type: INCREMENT
  }
}


// action creator
export const incrementAsync = () =>{
  return {
    type: INCREMENT_ASYNC
  }
}