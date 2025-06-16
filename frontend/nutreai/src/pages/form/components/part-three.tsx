import styled from "styled-components"
import { FormCard } from "./form-card"

export function PartThree() {
    return (
        <FormCard
            title={"Qual é o seu objetivo?"}
            description={"Isso nos ajuda a criar um plano mais adequado para você."}
            percentageOfFomsCompletion={60}
        >
            <RadioContainer>
                <input id="maintain-weight" type="radio" />
                <label htmlFor="maintain-weight">
                    <span>⚖️ Manter peso</span>
                    <Description>Estou satisfeito com meu corpo atual e quero manter.</Description>
                </label>
            </RadioContainer>
            <RadioContainer>
                <input id="muscle-mass" type="radio" />
                <label htmlFor="muscle-mass">
                    <span>🏋️‍♂️ Ganhar massa muscular</span>
                    <Description>Quero aumentar o volume e ganhar força.</Description>
                </label>
            </RadioContainer>
            <RadioContainer>
                <input id="weight-loss" type="radio" />
                <label htmlFor="weight-loss">
                    <span>🔥 Perder peso</span>
                    <Description>Quero reduzir medidas e emagrecer com saúde.</Description>
                </label>
            </RadioContainer>
        </FormCard>
    )
}

const RadioContainer = styled.div`
    display: flex;
    align-items: start;

    margin-bottom: 1rem;

    gap: 0.5rem;

    input {
        margin-top: 0.35rem;
    }
`

const Description = styled.p`
    font-size: 0.875rem;
    color: ${({theme}) => theme["text-color"]};
`