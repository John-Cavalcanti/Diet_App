import type { ReactNode } from "react"
import styled from "styled-components"

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}
export function PrimaryButton({children, onClick}: PrimaryButtonProps){
    return (
        <Container onClick={onClick}>
            {children}
        </Container>
    )
}

const Container = styled.button`
    width: 100%;
    background: ${({theme}) => theme["green-700"]};
    color: white;
    font-weight: 600;
    font-size: 0.75rem;
    padding-block: 0.75rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
`