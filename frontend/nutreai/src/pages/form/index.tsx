import styled from "styled-components"
import { Header } from "../../componens/header"
import { useFormSteps } from "../../contexts/form-steps-context"
import { PartOne } from "./components/part-one"
import { PartTwo } from "./components/part-two"
import { PartThree } from "./components/part-three"
import { PartFour } from "./components/part-four"
import { PartFive } from "./components/part-five"

export function DietForm() {
    const { step } = useFormSteps()

    const renderStep = () => {
        switch (step) {
            case 0:
                return <PartOne />
            case 1:
                return <PartTwo />
            case 2:
                return <PartThree />
            case 3:
                return <PartFour />
            case 4:
                return <PartFive />
            default:
                return <PartOne />
        }
    }

    return (
        <Container>
            <Header />
            {renderStep()}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme["background-color"]};

    gap: 3rem;
`