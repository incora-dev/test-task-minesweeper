import "./App.css";
import { sendCommand, setStatus } from "board/boardReducer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "configureStore";
import Board from "board/Board";

import Header from "common/Header";
import { PageWrapper, StyledPaper } from "common/styles";
import LoseModal from "common/LoseModal";

function App() {
  const { complexity, status, board } = useSelector(
    (state: RootState) => state.board
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const reloadBoard = () => {
    dispatch(setStatus(""));
    dispatch(sendCommand(`new ${complexity}`));
    dispatch(sendCommand("map"));
  };
  useEffect(() => {
    if (complexity) {
      reloadBoard();
    }
  }, [complexity]);

  useEffect(() => {
    if (status) {
      setIsModalOpen(true);
    }
  }, [status]);

  const closeModal = () => {
    setIsModalOpen(false);
    reloadBoard();
  };
  return (
    <PageWrapper>
      <StyledPaper>
        <Header reloadBoard={reloadBoard} currentLevel={complexity} />
        {board.length > 0 && <Board />}
      </StyledPaper>
      <LoseModal
        isOpen={isModalOpen}
        title="You Lose"
        handleClose={closeModal}
      />
    </PageWrapper>
  );
}

export default App;
