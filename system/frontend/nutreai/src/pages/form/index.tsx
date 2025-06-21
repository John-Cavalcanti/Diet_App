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

const DietFormSchema = z.object({
    email: z.string(),
    name: z.string(),
    birthday: z.string(),
    height: z.string(),
    weight: z.string(),
    workoutsFrequency: z.string(),
    goals: z.string(),
    foodRestrictions: z.array(z.string()),
    foodPreferences: z.array(z.string()),
})

export type DietFormItems = z.infer<typeof DietFormSchema>

export function DietForm() {
    const { createUser } = useUsersInformations()
    const { step } = useFormSteps()
    const navigate = useNavigate();

    const formMethods = useForm<DietFormItems>({
        resolver: zodResolver(DietFormSchema)
    })

    const { handleSubmit, formState: { errors } } = formMethods

    console.log(errors)

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

    const handleFormSubmit: SubmitHandler<DietFormItems> = async (data) => {
        const preferencies = data.foodPreferences.join(", ")
        const restrictions = data.foodRestrictions.join(", ")
        const weightNumber = Number(data.weight)
        const heightNumber = Number(data.height)
        const birthdayISO = new Date(data.birthday).toISOString()

        const userId = await postForm({
            name: data.name,
            email: data.email,
            birthday: birthdayISO,
            height: heightNumber,
            weight: weightNumber,
            workoutsFrequency: data.workoutsFrequency,
            goals: data.goals,
            foodPreferences: preferencies,
            foodRestrictions: restrictions
        })

        if (userId != undefined) {
            createUser(userId!)
            navigate("/weekly-diet-confirmation");
        }
    }

    return (
        <FormProvider {...formMethods}>
            <Container>
                <Header />
                <form id="diet" onSubmit={handleSubmit(handleFormSubmit)}>
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