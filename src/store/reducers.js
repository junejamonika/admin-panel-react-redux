import { combineReducers } from "redux"

import AccountReducer from "./Account/reducer"

const rootReducer = combineReducers({
  account : AccountReducer,
})

export default rootReducer
