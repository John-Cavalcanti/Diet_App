import styled from "styled-components"
import { FormCard } from "./form-card"
import { FormInput } from "./form-inputs"
import { FormSelect } from "./form-select"

export function PartOne() {
    return (
        <FormCard
            title="Vamos te conhecer melhor!"
            description="Informe alguns dados para criar seu plano alimentar. Essas informações são importantes para personalizar sua alimentação."
            percentageOfFomsCompletion={20}
            shouldShowPercentage
        >
            <InputsContainer>
                <FormInput 
                    id="birthday" 
                    label={"Data de nascimento"} 
                    placeholder="dd/mm/aaaa" 
                    type="date" 
                />
                <FormInput 
                    id="weight" 
                    label={"Peso"} 
                    placeholder="0.00kg" 
                    type="number" 
                />
                <FormInput 
                    id="height" 
                    label={"Altura"} 
                    placeholder="Altura (centímetros)" 
                    type="number"
                />
                <FormSelect />
            </InputsContainer>
        </FormCard>
    )
}

const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin-block: 2rem;

    gap: 0.5rem;
`