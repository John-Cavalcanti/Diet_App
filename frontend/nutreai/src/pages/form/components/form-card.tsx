import type { ReactNode } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../../../componens/primary-button";
import { SecondaryButton } from "../../../componens/secondary-button";
import { ProgressBar } from "../../../componens/progress-bar";

interface FormCardProps {
    children: ReactNode
    title: string
    description: string
    percentageOfFomsCompletion: number
}
export function FormCard({ title, description, percentageOfFomsCompletion, children }: FormCardProps) {
    return (
        <div>
            <ProgressBar percentage={percentageOfFomsCompletion} />
            <Container>
                <Title>{title}</Title>
                <Description>{description}</Description>
                {children}
                <ButtonsContainer>
                    <SecondaryButton>Voltar</SecondaryButton>
                    <PrimaryButton>Próximo</PrimaryButton>
                </ButtonsContainer>
            </Container>
        </div>
    )
}

const Container = styled.div`
    width: 25rem;
    height: fit-content;
    min-height: 30rem;

    display: flex;
    flex-direction: column;

    margin: auto;
    padding: 3.5rem;

    background: white;

    border-radius: 8px;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
`
const Title = styled.h2`
    font-size: 1rem;
    font-weight: bold;

    margin-bottom: 0.25rem;
`

const Description = styled.p`
    color: ${({ theme }) => theme["text-color"]};
    font-size: 0.75rem;

    margin-bottom: 1rem;
`

const ButtonsContainer = styled.div`
    display: flex;

    margin-top: auto;

    gap: 1.5rem;
`