import styled from "styled-components"
import { FormCard } from "./form-card"
import { useFormContext } from "react-hook-form"
import { type DietFormItems } from ".."

export function PartThree() {
    const { register } = useFormContext<DietFormItems>()
    return (
        <FormCard
            title={"Qual é o seu objetivo?"}
            description={"Isso nos ajuda a criar um plano mais adequado para você."}
            percentageOfFomsCompletion={60}
        >
            <RadioContainer>
                <input 
                    id="Manter peso" 
                    type="radio" 
                    value="Manter peso"
                    {...register('goals')}
                />
                <label htmlFor="Manter peso">
                    <span>⚖️ Manter peso</span>
                    <Description>Estou satisfeito com meu corpo atual e quero manter.</Description>
                </label>
            </RadioContainer>
            <RadioContainer>
                <input 
                    id="Ganhar massa muscular" 
                    type="radio" 
                    value="Ganhar massa muscular"
                    {...register('goals')}
                />
                <label htmlFor="Ganhar massa muscular">
                    <span>🏋️‍♂️ Ganhar massa muscular</span>
                    <Description>Quero aumentar o volume e ganhar força.</Description>
                </label>
            </RadioContainer>
            <RadioContainer>
                <input 
                    id="Perder peso" 
                    type="radio" 
                    value="Perder peso"
                    {...register('goals')}
                />
                <label htmlFor="Perder peso">
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