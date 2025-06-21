import styled from "styled-components"
import { FormCard } from "./form-card"
import { FormInput } from "./form-inputs"
import { useFormContext } from "react-hook-form"

export function PartOne() {
    const { setValue } = useFormContext()

    function handleFormatBirthdayDate(event: React.ChangeEvent<HTMLInputElement>) {
        let valor = event.target.value.replace(/\D/g, '')

        if (valor.length > 8) valor = valor.slice(0, 8)

        if (valor.length >= 5) {
            valor = valor.replace(/(\d{2})(\d{2})(\d{1,4})/, '$1/$2/$3')
        } else if (valor.length >= 3) {
            valor = valor.replace(/(\d{2})(\d{1,2})/, '$1/$2')
        }

        setValue('birthday', valor)
    }

    const handleFormatFloatNumbers = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = event.target.value.replace(/\D/g, '')

        const cents = rawValue.padStart(3, '0')

        const integerPart = cents.slice(0, -2)
        const decimalPart = cents.slice(-2)

        const formatted = `${parseInt(integerPart)},${decimalPart}`

        setValue(event.currentTarget.id, formatted)
    }

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
                    onChange={handleFormatBirthdayDate}
                    type="date"
                />
                <FormInput
                    id="weight"
                    label={"Peso"}
                    placeholder="0.00kg"
                    onChange={handleFormatFloatNumbers}
                    type="number"
                />
                <FormInput
                    id="height"
                    label={"Altura"}
                    placeholder="Altura (centímetros)"
                    onChange={handleFormatFloatNumbers}
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