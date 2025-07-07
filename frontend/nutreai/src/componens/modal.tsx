import {useState, type ReactNode} from 'react';
import styled from 'styled-components';


interface ModalProps {
    children: ReactNode // Conteudo do modal(div com o conteudo)
}


export function Modal({children}: ModalProps) {
    const [ isOpen, setIsOpen ] = useState(false)

    if (!isOpen) return null
    
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
    width: 50vw;
    height: 30vh;

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