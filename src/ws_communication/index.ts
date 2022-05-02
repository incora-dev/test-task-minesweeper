import { take, put, call, fork, StrictEffect } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import {
  getBoardInfo,
  sendCoordinates,
  setBoardInfo,
  setStatus,
  startGame,
} from "board/boardReducer";

function connect(): Promise<WebSocket> {
  const socket = new WebSocket("wss://hometask.eg1236.com/game1/");
  return new Promise((resolve) => {
    socket.onopen = () => {
      resolve(socket);
      socket.send("new 1");
      socket.send("map");
    };
  });
}

function websocketInitChannel(socket: WebSocket) {
  return eventChannel((emitter) => {
    socket.onmessage = (message: { data: string }) => {
      const isBoardMessage = message.data.startsWith("map:");
      const isOpenResponse = message.data.startsWith("open:");
      if (isBoardMessage) {
        const formatedData = message.data
          .slice(5, -1)
          .split("\n")
          .map((row) => row.split(""));
        emitter({ type: setBoardInfo.type, payload: formatedData });
      } else if (isOpenResponse) {
        const isLose = message.data.includes("You lose");
        const isWinner = message.data.includes("You win");

        if (isLose) {
          emitter({ type: setStatus.type, payload: "You lose" });
        } else if (isWinner) {
          emitter({ type: setStatus.type, payload: "You win" });
        }
      }
    };
    return () => {};
  });
}

export function* readMessageSaga(
  socket: WebSocket
): Generator<StrictEffect, any, any> {
  const channel = yield call(websocketInitChannel, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export function* getBoard(
  socket: WebSocket
): Generator<StrictEffect, void, any> {
  while (true) {
    yield take(getBoardInfo.type);
    socket.send("map");
  }
}

export function* startGameSaga(
  socket: WebSocket
): Generator<StrictEffect, void, any> {
  while (true) {
    const { payload } = yield take(startGame.type);
    socket.send(`new ${payload}`);
  }
}

export function* sendCoordiantesSaga(
  socket: WebSocket
): Generator<StrictEffect, void, any> {
  while (true) {
    const { payload } = yield take(sendCoordinates.type);
    socket.send(`open ${payload}`);
  }
}

export default function* wsSagas(): Generator<StrictEffect, void, any> {
  const socket = yield call(connect);
  yield fork(readMessageSaga, socket);
  yield fork(startGameSaga, socket);
  yield fork(getBoard, socket);
  yield fork(sendCoordiantesSaga, socket);
}
