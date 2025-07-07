import styled from "styled-components"
import { FormCard } from "./form-card"
import { useFormContext } from "react-hook-form"
import { type DietFormItems } from ".."

export function PartFour() {
    const { register } = useFormContext<DietFormItems>()
    return (
        <FormCard
            title={"Você possui alguma restrição alimentar?"}
            description={"Informe se possui alergias, intolerâncias ou adota uma dieta específica (vegetariana, vegana etc.). "}
            percentageOfFomsCompletion={80}
            shouldShowPercentage
        >
            <CheckboxContainer>
                <input 
                    id="Intolerância a lactose" 
                    type="checkbox" 
                    value="Intolerância a lactose"
                    {...register('foodRestrictions')}
                />
                <label htmlFor="Intolerância a lactose">Intolerância à lactose</label>
            </CheckboxContainer>
            <CheckboxContainer>
                <input 
                    id="Alergia ao gluten"
                    type="checkbox" 
                    value="Alergia ao gluten"
                    {...register('foodRestrictions')} 
                />
                <label htmlFor="Alergia ao gluten">Alergia ao glúten</label>
            </CheckboxContainer>
            <CheckboxContainer>
                <input 
                    id="Dieta vegetariana" 
                    type="checkbox" 
                    value="Dieta vegetariana"
                    {...register('foodRestrictions')} 
                />
                <label htmlFor="Dieta vegetariana">Dieta vegetariana</label>
            </CheckboxContainer>
            <CheckboxContainer>
                <input 
                    id="Dieta vegana" 
                    type="checkbox" 
                    value="Dieta vegana"
                    {...register('foodRestrictions')} 
                />
                <label htmlFor="Dieta vegana">Dieta vegana</label>
            </CheckboxContainer>
        </FormCard>
    )
}

const CheckboxContainer = styled.div`
    display: flex;

    margin-bottom: 0.5rem;

    gap: 0.875rem;
`