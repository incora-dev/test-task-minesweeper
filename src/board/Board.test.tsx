import reducer, {
  setBoardInfo,
  setComplexity,
  setFlagList,
  setStatus,
} from "board/boardReducer";
import expect from "expect";

const inititalState = {
  board: [],
  complexity: 1,
  status: "",
  flagList: {},
};

describe("board reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "" })).toEqual(inititalState);
  });
  it("should cahnge complexity state", () => {
    expect(
      reducer(inititalState, { type: setComplexity.type, payload: 2 })
    ).toEqual({ ...inititalState, complexity: 2 });
  });
  it("should cahnge status state", () => {
    expect(
      reducer(inititalState, { type: setStatus.type, payload: "test" })
    ).toEqual({ ...inititalState, status: "test" });
  });
  it("should set data for board", () => {
    expect(
      reducer(inititalState, {
        type: setBoardInfo.type,
        payload: [[0, 1, 3, 4]],
      })
    ).toEqual({ ...inititalState, board: [[0, 1, 3, 4]] });
  });
  it("should change flag list", () => {
    expect(
      reducer(inititalState, { type: setFlagList.type, payload: "11" })
    ).toEqual({ ...inititalState, flagList: { "11": true } });
  });
});
