import { BoardItemWrapper } from "./styles";

interface TProps {
  coordinates: {
    x: number;
    y: number;
  };
  point: string | null;
  onOpen(coordinates: string): void;
}

const emptyCell = "□";

const BoardItem = ({ coordinates: { x, y }, point, onOpen }: TProps) => {
  return (
    <BoardItemWrapper onClick={() => point !== null && onOpen(`${x} ${y}`)}>
      {emptyCell !== point && point}
    </BoardItemWrapper>
  );
};

export default BoardItem;
