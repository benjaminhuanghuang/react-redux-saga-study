const initState = {
  name: 'hello，redux(init)'
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, name: action.text }
    default:
      return state;
  }
}