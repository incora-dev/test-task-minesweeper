import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "configureStore";
import LoseModal from "common/LoseModal";

test("renders return Board Title", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const title = screen.getByText("Choose the compexity level:");

  expect(title).toBeInTheDocument();
});
test("renders return Modal", () => {
  render(<LoseModal isOpen handleClose={() => {}} title="You Lose" />);
  const modalTitle = screen.getByText("You Lose");
  expect(modalTitle).toBeInTheDocument();
});
