import type {ReactNode} from 'react';
import styled from 'styled-components';


interface ModalProps {
    children: ReactNode // Conteudo do modal(div com o conteudo)
    isOpen: boolean; // Estado do modal (aberto ou fechado)
    setIsOpen: (isOpen : boolean) => void; // Função para alterar o estado do modal
}


export function Modal({children,isOpen, setIsOpen}: ModalProps) {


    if (!isOpen) return null; //Modal fechado
    
    return (
        <Container>
            <ModalContent>
                <CloseModal>
                    <CloseButton onClick={() =>{setIsOpen(!isOpen)}}>X</CloseButton>
                </CloseModal>
                {children}
            </ModalContent>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;

    background-color: rgba(0, 0, 0, 0.5);
   
    padding: 20px;
    box-sizing: border-box;
`

const ModalContent = styled.div`
    width: fit-content;
    height: fit-content;

    background: white;

    border-radius: 5px;

    display: flex;
    flex-direction: column;
`

const CloseModal = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 10px;

`

const CloseButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: black;
    font-weight: 600;
    

    &:hover{
        color: #2B7A4B
    }
`