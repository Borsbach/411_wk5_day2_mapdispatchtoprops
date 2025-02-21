import { combineReducers } from 'redux'

const user = (state = null, action) => state

// add switch statements in here
const cars = (state = [], action) => {
  switch(action.type) {
    case 'ADD_CAR':
      return [ ...state, action.value ]
    case 'REMOVE_CAR':
      const cars = [ ...state ]
      cars.splice(action.value, 1)
      return cars
    default:
      return state
  }
}

export default combineReducers({ user, cars })