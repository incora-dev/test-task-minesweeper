import { setComplexity } from "board/boardReducer";
import { useAppDispatch } from "configureStore";
import { Levelbutton, LevelsWrapper } from "./styles";

type Level = 1 | 2 | 3 | 4;

interface TProps {
  reloadBoard: () => void;
  currentLevel: number | null;
}
const Header = ({ reloadBoard, currentLevel }: TProps) => {
  const complexityLevels: Level[] = [1, 2, 3, 4];

  const dispatch = useAppDispatch();

  const changeCompexityLevel = (level: Level) => {
    if (level === currentLevel) {
      reloadBoard();
    } else {
      dispatch(setComplexity(level));
    }
  };
  return (
    <div>
      <div>Choose the compexity level:</div>
      <LevelsWrapper>
        {complexityLevels.map((level) => (
          <Levelbutton key={level} onClick={() => changeCompexityLevel(level)}>
            {level}
          </Levelbutton>
        ))}
      </LevelsWrapper>
    </div>
  );
};
export default Header;
