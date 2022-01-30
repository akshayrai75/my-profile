import { combineReducers } from 'redux'
import imagePopUpReducer from './imagePopUpReducer'

const rootReducer = combineReducers({
  imagePopUp: imagePopUpReducer,
})

export default rootReducer
