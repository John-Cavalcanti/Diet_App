import { Controller, useFormContext } from "react-hook-form"
import { FoodCheckbox } from "./food-checkbox"
import { FormCard } from "./form-card"
import styled from "styled-components"
import { type DietFormItems } from ".."
import { InputError } from "../../../componens/input-error"

export function PartFive() {
    const { control, formState: { errors } } = useFormContext<DietFormItems>()
    return (
        <FormCard
            title={"Quais alimentos você gosta?"}
            description={"Isso nos ajuda a montar refeições que combinam com seu paladar."}
            percentageOfFomsCompletion={100}
            shouldShowPercentage
        >
            {
                errors.foodPreferences &&
                <InputError errorMessage={errors.foodPreferences.message} />
            }
            <Controller
                control={control}
                name="foodPreferences"
                defaultValue={[]}
                render={({ field }) => {
                    const { value, onChange } = field

                    const toggle = (item: string) => {
                        if (value.includes(item)) {
                            onChange(value.filter((v: string) => v !== item))
                        } else {
                            onChange([...value, item])
                        }
                    }

                    return (
                        <CheckBoxContainer>
                            <FoodCheckbox value="Frango" onCheckedChange={toggle}>
                                <p><span>🍗</span>Frango</p>
                            </FoodCheckbox >
                            <FoodCheckbox value="Arroz" onCheckedChange={toggle}>
                                <p><span>🍚</span>Arroz</p>
                            </FoodCheckbox>
                            <FoodCheckbox value="Morango" onCheckedChange={toggle}>
                                <p><span>🍓</span>Morango</p>
                            </FoodCheckbox>
                            <FoodCheckbox value="Pao" onCheckedChange={toggle}>
                                <p><span>🍞</span>Pão</p>
                            </FoodCheckbox>
                            <FoodCheckbox value="Peixe" onCheckedChange={toggle}>
                                <p><span>🐟</span>Peixe</p>
                            </FoodCheckbox>
                            <FoodCheckbox value="Banana" onCheckedChange={toggle}>
                                <p><span>🍌</span>Banana</p>
                            </FoodCheckbox>
                            <FoodCheckbox value="Ovo" onCheckedChange={toggle}>
                                <p><span>🥚</span>Ovo</p>
                            </FoodCheckbox>
                            <FoodCheckbox value="Abacate" onCheckedChange={toggle}>
                                <p><span>🥑</span>Abacate</p>
                            </FoodCheckbox>
                            <FoodCheckbox value="Macarrao" onCheckedChange={toggle}>
                                <p><span>🍝</span>Macarrão</p>
                            </FoodCheckbox>
                        </CheckBoxContainer>
                    )
                }}
            />


            <AddFavoriteFoodButton>
                <p>+ Adicionar alimento favorito<span>🍽️</span></p>
            </AddFavoriteFoodButton>
        </FormCard>
    )
}

const CheckBoxContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 0 auto;
`

const AddFavoriteFoodButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12rem;

    padding-block: 0.5rem;

    font-size: 0.625rem;

    background: none;

    border: 1px solid ${({ theme }) => theme["green-700"]};
    border-radius: 18px;

    margin-inline: auto;
    margin-top: 2rem;
    
    gap: 1rem;

    transition: 1s;

    &:hover {
        background-color: ${({ theme }) => theme["green-100"]};
    }
`