import type {ReactNode} from 'react';
import styled from 'styled-components';


interface ModalProps {
    children: ReactNode // Conteudo do modal(div com o conteudo)
    isOpen: boolean; // Estado do modal (aberto ou fechado)
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



export function Modal({children,isOpen}: ModalProps) {


    if (!isOpen) return null; //Modal fechado
    
    return (
        <Container>
            <ModalContent>
                {children}
            </ModalContent>
        </Container>
    )
}