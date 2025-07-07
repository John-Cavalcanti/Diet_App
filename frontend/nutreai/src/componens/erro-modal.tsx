import Modal from 'react-modal'
import styled from 'styled-components'
import { Card } from './card'

interface ErrorModalProps {
    isOpen: boolean,
    handleClose: () => void
    error: string
}

export function ErrorModal({ isOpen, handleClose, error }: ErrorModalProps) {
    return (
        <Container isOpen={isOpen} onRequestClose={handleClose} >
            <Card>
                <CardContainer>
                    <CloseButton onClick={handleClose}>X</CloseButton>
                    <Title>Houve um erro ao finalizar ao realizar sua requisição!</Title>
                    <Messages>
                        {
                            <p>{error}</p>
                        }
                    </Messages>
                </CardContainer>

            </Card>
        </Container>
    )
}

const Container = styled(Modal)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem;
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 35rem;
    height: 20rem;

    padding: 2rem;
`

const CloseButton = styled.button`
    height: 1rem;
    width: 1rem;

    background: transparent;
    border: none;

    margin-left: 100%;

    cursor: pointer;
`

const Title = styled.h2`
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;

    margin-top: 0.5rem;
`

const Messages = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 2rem;

    gap: 0.5rem;

    p {
        font-size: 1rem;
        color: ${({theme}) => theme['text-color']};
        text-align: center;
    }
`