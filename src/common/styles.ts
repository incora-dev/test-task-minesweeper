import { Box, Button, Paper } from "@mui/material";
import styled from "styled-components";

export const StyledPaper = styled(Paper)`
  width: 70%;
  height: auto;
  margin: 0 auto;
  padding: 20px 10px;
`;

export const LevelsWrapper = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const Levelbutton = styled(Button)`
  &.MuiButton-root {
    min-width: 50px;
  }
`;

export const ModalWrapper = styled(Paper)`
  width: 50%;
  height: 200px;
  margin: 20% auto;
  transform: translateY(-50%));
  padding:20px;
  display: flex;
  flex-direction:column;
  justify-content: space-between
`;

export const ModalTitle = styled(Box)`
  text-align: center;
  margin-top: 50px;
`;
export const PageWrapper = styled(Box)`
  padding-top: 100px;
`;
