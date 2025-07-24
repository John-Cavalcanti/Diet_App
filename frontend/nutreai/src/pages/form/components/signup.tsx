import styled from "styled-components";
import { FormCard } from "./form-card";
import { FormInput } from "./form-inputs";
import { useFormContext } from "react-hook-form";
import type { DietFormItems } from "..";

export function SignUp() {
    const { formState: { errors } } = useFormContext<DietFormItems>()
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
                    error={errors.name}             
                />
                <FormInput
                    id="email"
                    label={"Email"}
                    placeholder="Email"
                    error={errors.email}
                />
                <FormInput
                    id="password"
                    label={"Senha"}
                    placeholder="Senha"
                    type="password"
                    error={errors.password}
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