import styled from "styled-components";
import { FormCard } from "./form-card";
import { useFormContext } from "react-hook-form";
import type { DietFormItems } from "..";

export function PartTwo() {
    const { register } = useFormContext<DietFormItems>()
    return (
        <FormCard
            title="Com que frequencia você realiza atividades físicas?"
            description="Entender seu nível de atividade nos ajuda a ajustar sua dieta e metas."
            percentageOfFomsCompletion={40}
            shouldShowPercentage
        >
            <RadioContainer>
                <input 
                    id="Nunca ou quase nunca" 
                    type="radio" 
                    value="Nunca ou quase nunca"
                    {...register('workoutsFrequency')} 
                />
                <label htmlFor="Nunca ou quase nunca">Nunca ou quase nunca</label>
            </RadioContainer>
            <RadioContainer>
                <input 
                    id="1-3 vezes na semana" 
                    type="radio" 
                    value="1-3 vezes na semana"
                    {...register('workoutsFrequency')} 
                />
                <label htmlFor="1-3 vezes na semana">1-3 vezes na semana</label>
            </RadioContainer>
            <RadioContainer>
                <input 
                    id="4-5 vezes na semana" 
                    type="radio" 
                    value="4-5 vezes na semana"
                    {...register('workoutsFrequency')} 
                />
                <label htmlFor="4-5 vezes na semana">4-5 vezes na semana</label>
            </RadioContainer>
            <RadioContainer>
                <input 
                    id="Todo dia ou quase todo dia" 
                    type="radio" 
                    value="Todo dia ou quase todo dia"
                    {...register('workoutsFrequency')} 
                />
                <label htmlFor="Todo dia ou quase todo dia">Todo dia ou quase todo dia</label>
            </RadioContainer>
        </FormCard>
    )
}

const RadioContainer = styled.div`
    display: flex;
    margin-top: 1rem;
    gap: 0.5rem;
`