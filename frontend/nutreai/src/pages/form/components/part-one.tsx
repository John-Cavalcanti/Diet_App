import styled from "styled-components"
import { FormCard } from "./form-card"
import { FormInput } from "./form-inputs"

export function PartOne() {
    return (
        <FormCard
            title="Vamos te conhecer melhor!"
            description="Informe alguns dados para criar seu plano alimentar. Essas informações são importantes para personalizar sua alimentação."
            percentageOfFomsCompletion={20}
        >
            <InputsContainer>
                <FormInput 
                    id="name" 
                    label={"Nome"} 
                    placeholder="Nome" 
                />
                <FormInput 
                    id="email" 
                    label={"Email"} 
                    placeholder="Email" 
                />
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
                <FormInput 
                    id="sexo" 
                    label={"Sexo"} 
                    placeholder="Sexo"
                />
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