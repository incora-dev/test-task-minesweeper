import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  board: number[][];
  complexity: number | null;
  status: string;
};

const initialState: TInitialState = {
  board: [],
  complexity: null,
  status: "",
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setComplexity(state, action: PayloadAction<number>) {
      return { ...state, complexity: action.payload, board: [] };
    },
    setConnection(state, action: PayloadAction<boolean>) {
      return { ...state, connected: action.payload };
    },
    getBoardInfo() {},
    getMessage() {},
    setBoardInfo(state, action: PayloadAction<number[][]>) {
      return { ...state, board: action.payload };
    },
    sendCommand(state, action: PayloadAction<string>) {},
    setStatus(state, { payload }: PayloadAction<string>) {
      return { ...state, status: payload };
    },
  },
});

export const {
  getBoardInfo,
  setBoardInfo,
  setConnection,
  setComplexity,
  sendCommand,
  setStatus,
} = boardSlice.actions;

export default boardSlice.reducer;
