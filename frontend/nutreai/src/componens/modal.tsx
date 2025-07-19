import { type ReactNode } from 'react';
import styled from 'styled-components';


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}


export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Header hasTitle={!!title}>
          {title && <Title>{title}</Title>}
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </Header>
        {children}
      </Container>
    </Overlay>
  );
}

// adição de overlay para fundo do popup
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

const Container = styled.div`
  background: white;
  color: ${(props) => props.theme['text-color']};
  
  border-radius: 8px;
  padding: 1.5rem 2rem;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.8);
  min-width: 320px;
  max-width: 50rem;
  width: auto;
`;

// header para título do popup
const Header = styled.header<{ hasTitle: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.hasTitle ? 'space-between' : 'flex-end')};
  align-items: center;
  margin-bottom: ${(props) => (props.hasTitle ? '1.5rem' : '0')};
  gap: 1rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  color: ${(props) => props.theme['green-700']};
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme['text-color']};
  font-size: 2rem;
  line-height: 1;

  &:hover {
    color: ${(props) => props.theme['green-700']};
  }
`;