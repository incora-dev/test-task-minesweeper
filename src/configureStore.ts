import { combineReducers, configureStore } from "@reduxjs/toolkit";
import boardReducer from "board/boardReducer";
import { useDispatch } from "react-redux";
import createSagaMiddleware from "redux-saga";
import websocketSagas from "ws_communication";

const websocketMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  board: boardReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    websocketMiddleware,
  ],
});

websocketMiddleware.run(websocketSagas);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
