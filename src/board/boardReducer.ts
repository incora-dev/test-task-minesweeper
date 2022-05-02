import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCoordinates = {
  [xy: string]: boolean;
};
type TInitialState = {
  board: string[][];
  complexity: number | null;
  status: string;
  flagList: TCoordinates;
};

const initialState: TInitialState = {
  board: [],
  complexity: 1,
  status: "",
  flagList: {},
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setComplexity(state, action: PayloadAction<number | null>) {
      return { ...state, complexity: action.payload, board: [] };
    },
    setConnection(state, action: PayloadAction<boolean>) {
      return { ...state, connected: action.payload };
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
    setFlagList(state, { payload }: PayloadAction<string>) {
      const isFlag = state.flagList?.[payload];

      return { ...state, flagList: { ...state.flagList, [payload]: !isFlag } };
    },
    clearFlagList(state) {
      return { ...state, flagList: {} };
    },
  },
});

export const {
  getBoardInfo,
  setBoardInfo,
  setConnection,
  setComplexity,
  setStatus,
  startGame,
  sendCoordinates,
  setFlagList,
  clearFlagList,
} = boardSlice.actions;

export default boardSlice.reducer;
