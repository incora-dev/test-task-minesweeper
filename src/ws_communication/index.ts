import { take, put, call, fork, StrictEffect } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { sendCommand, setBoardInfo, setStatus } from "board/boardReducer";

function connect(): Promise<WebSocket> {
  const socket = new WebSocket("wss://hometask.eg1236.com/game1/");
  return new Promise((resolve) => {
    socket.onopen = () => {
      resolve(socket);
    };
  });
}

function websocketInitChannel(socket: WebSocket) {
  return eventChannel((emitter) => {
    socket.onopen = () => {};
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
        const status = message.data.includes("You lose");
        if (status) {
          emitter({ type: setStatus.type, payload: "You lose" });
        }
      }
    };

    return () => {};
  });
}

export function* readMessage(
  socket: WebSocket
): Generator<StrictEffect, any, any> {
  const channel = yield call(websocketInitChannel, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export function* writeMessage(
  socket: WebSocket
): Generator<StrictEffect, any, any> {
  while (true) {
    const { payload } = yield take(sendCommand.type);

    socket.send(payload);
  }
}
export default function* wsSagas(): Generator<StrictEffect, void, any> {
  const socket = yield call(connect);
  yield fork(readMessage, socket);
  yield fork(writeMessage, socket);
}
