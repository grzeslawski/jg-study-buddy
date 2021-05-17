import { Button } from 'components/atoms/Button/Button';
import React from 'react';
import { ModalWrapper } from './Modal.styles';

function Modal({ handleClose, isOpen, children }) {
  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
      {children}
      <Button onClick={handleClose}>Close</Button>
    </ModalWrapper>
  );
}

export default Modal;
