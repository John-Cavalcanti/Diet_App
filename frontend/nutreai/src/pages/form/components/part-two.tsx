import styled from "styled-components";
import { FormCard } from "./form-card";

export function PartTwo() {
    return (
        <FormCard 
            title="Com que frequencia você realiza atividades físicas?" 
            description="Entender seu nível de atividade nos ajuda a ajustar sua dieta e metas."
        >
            <RadioContainer>
                <input id="0" type="radio" />
                <label htmlFor="0">Nunca ou quase nunca</label>
            </RadioContainer>
            <RadioContainer>
                <input id="1" type="radio" />
                <label htmlFor="1">1-3 vezes na semana</label>
            </RadioContainer>
            <RadioContainer>
                <input id="2" type="radio" />
                <label htmlFor="2">4-5 vezes na semana</label>
            </RadioContainer>
            <RadioContainer>
                <input id="3" type="radio" />
                <label htmlFor="3">Todo dia ou quase todo dia</label>
            </RadioContainer>
        </FormCard>
    )
}

const RadioContainer = styled.div`
    display: flex;
    margin-top: 1rem;
    gap: 0.5rem;
`