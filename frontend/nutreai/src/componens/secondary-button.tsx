import type { ReactNode } from "react"
import styled from "styled-components"

interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}
export function SecondaryButton({children, onClick}: SecondaryButtonProps){
    return (
        <Container onClick={onClick}>
            {children}
        </Container>
    )
}

const Container = styled.button`
    width: 100%;
    color: ${({theme}) => theme["green-700"]};
    font-weight: 600;
    font-size: 0.75rem;
    background: white;
    border: 1px solid ${({theme}) => theme["green-700"]};
    padding-block: 0.75rem;
    border-radius: 8px;
`