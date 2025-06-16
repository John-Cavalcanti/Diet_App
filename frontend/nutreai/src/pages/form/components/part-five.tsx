import { FoodCheckbox } from "./food-checkbox";
import { FormCard } from "./form-card";
import styled from "styled-components";

export function PartFive() {
    return (
        <FormCard
            title={"Quais alimentos você gosta?"}
            description={"Isso nos ajuda a montar refeições que combinam com seu paladar."}
        >
            <CheckBoxContainer>
                <FoodCheckbox>
                    <p><span>🍗</span>Frango</p>
                </FoodCheckbox>
                <FoodCheckbox>
                    <p><span>🍚</span>Arroz</p>
                </FoodCheckbox>
                <FoodCheckbox>
                    <p><span>🍓</span>Morango</p>
                </FoodCheckbox>
                <FoodCheckbox>
                    <p><span>🍞</span>Pão</p>
                </FoodCheckbox>
                <FoodCheckbox>
                    <p><span>🐟</span>Peixe</p>
                </FoodCheckbox>
                <FoodCheckbox>
                    <p><span>🍌</span>Banana</p>
                </FoodCheckbox>
                <FoodCheckbox>
                    <p><span>🥚</span>Ovo</p>
                </FoodCheckbox>
                <FoodCheckbox>
                    <p><span>🥑</span>Abacate</p>
                </FoodCheckbox>
                <FoodCheckbox>
                    <p><span>🍝</span>Macarrão</p>
                </FoodCheckbox>
            </CheckBoxContainer>

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
    width: 10rem;

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
        background-color: ${({theme}) => theme["green-100"]};
    }
`