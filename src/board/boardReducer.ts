import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  board: string[][];
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
    setComplexity(state, action: PayloadAction<number | null>) {
      return { ...state, complexity: action.payload, board: [] };
    },
    getBoardInfo() {},
    startGame(state, action: PayloadAction<number>) {},
    getMessage() {},
    setBoardInfo(state, action: PayloadAction<string[][]>) {
      return { ...state, board: action.payload };
    },
    setStatus(state, { payload }: PayloadAction<string>) {
      return { ...state, status: payload };
    },
    sendCoordinates(state, action: PayloadAction<string>) {},
  },
});

export const {
  getBoardInfo,
  setBoardInfo,
  setComplexity,
  setStatus,
  startGame,
  sendCoordinates,
} = boardSlice.actions;

export default boardSlice.reducer;
