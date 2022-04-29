import { RootState, useAppDispatch } from "configureStore";
import { useSelector } from "react-redux";
import BoardItem from "./BoardItem";
import { getBoardInfo, sendCoordinates } from "./boardReducer";
import { RowWrapper, Wrapper, ScrollWrapper } from "./styles";

const Board = () => {
  const { board } = useSelector((state: RootState) => state.board);
  const dispatch = useAppDispatch();

  const handleOpenItem = (coordinates: string) => {
    dispatch(sendCoordinates(coordinates));
    dispatch(getBoardInfo());
  };
  return (
    <Wrapper>
      <ScrollWrapper>
        {board.map((row, rowIndex) => (
          <RowWrapper key={rowIndex}>
            {row.map((cell, index) => (
              <BoardItem
                key={`${rowIndex} ${index}`}
                coordinates={{ x: index, y: rowIndex }}
                point={cell}
                onOpen={handleOpenItem}
              />
            ))}
          </RowWrapper>
        ))}
      </ScrollWrapper>
    </Wrapper>
  );
};
export default Board;
