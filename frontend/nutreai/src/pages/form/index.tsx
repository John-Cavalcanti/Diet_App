import styled from "styled-components"
import { Header } from "../../componens/header"
import { useFormSteps } from "../../contexts/form-steps-context"
import { PartOne } from "./components/part-one"
import { PartTwo } from "./components/part-two"
import { PartThree } from "./components/part-three"
import { PartFour } from "./components/part-four"
import { PartFive } from "./components/part-five"
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { postForm } from "../../services/form"
import { useUsersInformations } from "../../contexts/user-informations"
import { useNavigate } from "react-router-dom"
import { SignUp } from "./components/signup"
import { ErrorModal } from "../../componens/erro-modal"
import { useState } from "react"

const DietFormSchema = z.object({
    email: z.string().email("Email inválido"),
    name: z.string().min(4, "Nome deve conter pelo menos 4 letras"),
    password: z.string().regex(
        /^(?=.*[A-Z])(?=.*\d).{8,}$/,
        'A senha precisa ter no mínimo 8 caracteres, incluindo 1 letra maiúscula e 1 número.',
    ),
    birthday: z.string().nonempty("Insira sua data de nascimento."),
    height: z.string().nonempty("Insira sua altura em centímetros."),
    weight: z.string().nonempty("Insira seu peso."),
    workoutsFrequency: z.string().nonempty("Insira a frequência que você faz atividade física."),
    goals: z.string().nonempty("Insira suas metas."),
    foodRestrictions: z.array(z.string()),
    foodPreferences: z.array(z.string()),
})

export type DietFormItems = z.infer<typeof DietFormSchema>

export function DietForm() {
    const { createUser } = useUsersInformations()
    const { step } = useFormSteps()
    const navigate = useNavigate();

    const [shouldErrorModalBeOpen, setShouldErrorModalBeOpen] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const formMethods = useForm<DietFormItems>({
        resolver: zodResolver(DietFormSchema)
    })

    const { handleSubmit, formState: { errors } } = formMethods

    console.log(errors)

    const renderStep = () => {
        switch (step) {
            case 0:
                return <SignUp />
            case 1:
                return <PartOne />
            case 2:
                return <PartTwo />
            case 3:
                return <PartThree />
            case 4:
                return <PartFour />
            case 5:
                return <PartFive />
            default:
                return <PartOne />
        }
    }

    const handleFormSubmit: SubmitHandler<DietFormItems> = async (data) => {
        const preferencies = data.foodPreferences.join(", ")
        const restrictions = data.foodRestrictions.join(", ")
        const weightNumber = Number(data.weight)
        const heightNumber = Number(data.height)
        const birthdayISO = new Date(data.birthday).toISOString()

        try {
            const token = await postForm({
                name: data.name,
                email: data.email,
                password: data.password,
                birthday: birthdayISO,
                height: heightNumber,
                weight: weightNumber,
                workoutsFrequency: data.workoutsFrequency,
                goals: data.goals,
                foodPreferences: preferencies,
                foodRestrictions: restrictions
            })

            createUser(token!)
            navigate("/weekly-diet-confirmation")
        } catch (error: any) {
            setErrorMessage(error.response?.data.message)
            setShouldErrorModalBeOpen(true)
        }
    }

    return (
        <FormProvider {...formMethods}>
            <ErrorModal
                isOpen={shouldErrorModalBeOpen}
                handleClose={() => setShouldErrorModalBeOpen(false)}
                error={errorMessage}
            />
            <Container>
                <Header />
                <form id="diet" data-testid="diet" onSubmit={handleSubmit(handleFormSubmit)}>
                    {renderStep()}
                </form>
            </Container>
        </FormProvider>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    min-height: 100vh;
    height: 100%;
    background: ${({ theme }) => theme["background-color"]};

    gap: 3rem;
`