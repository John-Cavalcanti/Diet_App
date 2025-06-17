import { createContext, useState, type ReactNode } from "react";
import { PartOne } from "../pages/form/components/part-one";
import { PartTwo } from "../pages/form/components/part-two";
import { PartThree } from "../pages/form/components/part-three";
import { PartFour } from "../pages/form/components/part-four";
import { PartFive } from "../pages/form/components/part-five";

interface FormStepsContextProps {
    renderStep: () => ReactNode
    handlePreviuosStep: () => void
    handleNextStep: () => void
}

export const FormStepsContext = createContext({} as FormStepsContextProps)

export function FormStepsProvider({ children }: { children: ReactNode }) {
        const [step, setStep] = useState(0)

    function handleNextStep () {
        setStep(state => state + 1)
    }

    function handlePreviuosStep () {
        setStep(state => state - 1)
    }

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
        <FormStepsContext.Provider value={{renderStep, handlePreviuosStep, handleNextStep}}>
            { children }
        </FormStepsContext.Provider>
    )
}