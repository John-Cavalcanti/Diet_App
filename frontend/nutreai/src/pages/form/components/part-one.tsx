import styled from "styled-components"
import { FormCard } from "./form-card"
import { FormInput } from "./form-inputs"
import { FormSelect } from "./form-select"
import { useFormContext } from "react-hook-form"
import type { DietFormItems } from ".."

export function PartOne() {
    const { formState: { errors } } = useFormContext<DietFormItems>()

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
                    error={errors.birthday}
                />
                <FormInput 
                    id="weight" 
                    label={"Peso"} 
                    placeholder="0.00kg" 
                    type="number" 
                    error={errors.weight}
                />
                <FormInput 
                    id="height" 
                    label={"Altura"} 
                    placeholder="Altura (centímetros)" 
                    type="number"
                    error={errors.height}
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