import styled from "styled-components";
import { FormCard } from "./form-card";
import { FormInput } from "./form-inputs";

export function SignUp() {
    return (
        <FormCard 
            title={"Crie sua conta"} 
            description={"Informe alguns dados para criar sua conta"} 
            percentageOfFomsCompletion={0} 
            shouldShowPercentage={false}
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
                    id="password"
                    label={"Senha"}
                    placeholder="Senha"
                    type="password"
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