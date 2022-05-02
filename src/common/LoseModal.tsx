import { Button, Modal } from "@mui/material";
import { ModalTitle, ModalWrapper } from "./styles";

interface TProps {
  isOpen: boolean;
  handleClose(): void;
  title: string;
}
const LoseModal = ({ isOpen, handleClose, title }: TProps) => {
  return (
    <Modal open={isOpen} onClose={handleClose} disableAutoFocus>
      <ModalWrapper>
        <ModalTitle>{title}</ModalTitle>
        <Button onClick={handleClose}> Retry</Button>
      </ModalWrapper>
    </Modal>
  );
};
export default LoseModal;
