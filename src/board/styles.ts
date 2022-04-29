import { Box } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled(Box)`
  margin: 0 auto;
`;
export const BoardItemWrapper = styled.div`
  width: 12px;
  height: 12px;
  line-height: 12px;
  border: 1px solid black;
  font-size: 12px;
  margin: 1px;
  cursor: pointer;
  text-align: center;
`;

export const RowWrapper = styled(Box)`
  display: flex;
`;
export const ScrollWrapper = styled(Box)`
  width: 98%;
  max-height: 500px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  overflow: auto;
  padding: 10px;
`;
