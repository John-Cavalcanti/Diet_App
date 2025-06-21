import type { ReactNode } from "react"
import styled from "styled-components"

interface CardProps {
    children: ReactNode
}

export function Card({ children }: CardProps){
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    width: fit-content;
    height: fit-content;

    display: flex;
    flex-direction: column;

    background: white;

    border-radius: 8px;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
`