import styled from "styled-components"
import { Header } from "../../componens/header"
import { useContext } from "react"
import { FormStepsContext, FormStepsProvider } from "../../contexts/form-steps-context"

export function DietForm() {
    const { renderStep } = useContext(FormStepsContext)

    return (
        <FormStepsProvider>
            <Container>
                <Header />
                {renderStep()}
            </Container>
        </FormStepsProvider>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100vh;
    background: ${({theme}) => theme["background-color"]};

    gap: 3rem;
`