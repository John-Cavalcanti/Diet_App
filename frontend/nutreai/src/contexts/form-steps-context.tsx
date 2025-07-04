import { createContext, useContext, useState, type ReactNode } from "react"
interface FormStepsContextProps {
    step: number
    handlePreviuosStep: () => void
    handleNextStep: () => void
}

const FormStepsContext = createContext({} as FormStepsContextProps)

export function FormStepsProvider({ children }: { children: ReactNode }) {
    const [step, setStep] = useState<number>(0)

    function handleNextStep () {
        if(step <= 3){
            setStep(state => state + 1)
            console.log(step)
        }
    }

    function handlePreviuosStep () {
        if (step >= 1){
            setStep(state => state - 1)
            console.log(step)
        }
    }

    return (
        <FormStepsContext.Provider value={{step, handlePreviuosStep, handleNextStep}}>
            { children }
        </FormStepsContext.Provider>
    )
}

export const useFormSteps = () => useContext(FormStepsContext)