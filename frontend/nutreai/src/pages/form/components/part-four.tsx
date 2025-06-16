import styled from "styled-components";
import { FormCard } from "./form-card";

export function PartFour() {
    return (
        <FormCard
            title={"Você possui alguma restrição alimentar?"}
            description={"Informe se possui alergias, intolerâncias ou adota uma dieta específica (vegetariana, vegana etc.). "}
        >
            <CheckboxContainer>
                <input id="lactose-intolerance" type="checkbox" />
                <label htmlFor="lactose-intolerance">Intolerância à lactose</label>
            </CheckboxContainer>
            <CheckboxContainer>
                <input id="gluten-alergy" type="checkbox" />
                <label htmlFor="gluten-alergy">Alergia ao glúten</label>
            </CheckboxContainer>
            <CheckboxContainer>
                <input id="vegeterian-diet" type="checkbox" />
                <label htmlFor="vegeterian-diet">Dieta vegetariana</label>
            </CheckboxContainer>
            <CheckboxContainer>
                <input id="vegan-diet" type="checkbox" />
                <label htmlFor="vegan-diet">Dieta vegana</label>
            </CheckboxContainer>
        </FormCard>
    )
}

const CheckboxContainer = styled.div`
    display: flex;

    margin-bottom: 0.5rem;

    gap: 0.875rem;
`