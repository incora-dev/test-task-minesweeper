import { BoardItemWrapper, StyledFlag } from "./styles";

interface TProps {
  coordinates: {
    x: number;
    y: number;
  };
  point: string | null;
  onOpen(coordinates: string): void;
  isFlag: boolean;
  handleFlagChange(payload: string): void;
}

const emptyCell = "□";

const BoardItem = ({
  coordinates: { x, y },
  point,
  onOpen,
  handleFlagChange,
  isFlag,
}: TProps) => {
  const handleContextMenu: React.MouseEventHandler = (event) => {
    event.preventDefault();
    if (emptyCell === point) {
      handleFlagChange(`${x}${y}`);
    }
  };

  const handleOpenCell = () => {
    if (!isFlag) {
      point !== null && onOpen(`${x} ${y}`);
    }
  };

  return (
    <BoardItemWrapper
      onClick={handleOpenCell}
      onContextMenu={handleContextMenu}
    >
      {emptyCell !== point && point}
      {emptyCell === point && isFlag && <StyledFlag>*</StyledFlag>}
    </BoardItemWrapper>
  );
};

export default BoardItem;
