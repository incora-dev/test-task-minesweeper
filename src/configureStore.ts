import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});
sagaMiddleware.run(watcherSaga);

export default store;
