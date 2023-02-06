import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import logger from "redux-logger";

import rootReducer from "./reducers"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware , logger))
)
sagaMiddleware.run(rootSaga)

export default store
