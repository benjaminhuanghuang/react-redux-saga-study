import {INCREMENT, INCREMENT_ASYNC} from '../constants/counter'

const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return ++state;
    default: 
      return state;
  }

}

export default counter