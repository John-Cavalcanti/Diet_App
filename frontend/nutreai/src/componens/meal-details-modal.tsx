import styled from "styled-components";
import { Modal } from "./modal";
import { useMemo } from "react";

/* Estrutura a ser passado ao componente do modal
(adaptar com dados do backend)

const mealMock: MealInput = {
  id: "cafe-1",
  name: "Café da Manhã",
  ingredients: [
    "2 ovos mexidos",
    "1 fatia (50g) de pão integral",
    "1 fruta (ex: banana, maçã ou 1 xícara de morangos)",
  ],
  macrosInGrams: {
    carbs: 42,
    protein: 17.5,
    fat: 12.2,
  },
  calories: 335,
}; */

// dados padrão para macros
const MACRO_DEFAULTS = {
  carbs: { name: "Carboidratos", color: "#A060BE", label: "carb" },
  protein: { name: "Proteína", color: "#5A96E3", label: "prot" },
  fat: { name: "Gordura", color: "#F7B731", label: "gord" },
};

export interface MealInput {
  id: string;
  name: string;
  ingredients: string[];
  macrosInGrams: {
    carbs: number;
    protein: number;
    fat: number;
  };
  calories: number;
}

interface MealDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  meal: MealInput | null;
}

export function MealDetailsModal({ isOpen, onClose, meal }: MealDetailsModalProps) {
  // correção e cálculo de porcentagens
  const macroVisuals = useMemo(() => {
    if (!meal) return null;

    const { carbs, protein, fat } = meal.macrosInGrams;
    const totalGrams = carbs + protein + fat;

    return [
      {
        ...MACRO_DEFAULTS.carbs,
        percentage: totalGrams > 0 ? (carbs / totalGrams) * 100 : 0,
      },
      {
        ...MACRO_DEFAULTS.protein,
        percentage: totalGrams > 0 ? (protein / totalGrams) * 100 : 0,
      },
      {
        ...MACRO_DEFAULTS.fat,
        percentage: totalGrams > 0 ? (fat / totalGrams) * 100 : 0,
      },
    ];
  }, [meal]);

  const nutritionList = useMemo(() => {
    if (!meal) return [];
    return Object.entries(meal.macrosInGrams).map(([key, value]) => ({
      name: MACRO_DEFAULTS[key as keyof typeof MACRO_DEFAULTS].name,
      color: MACRO_DEFAULTS[key as keyof typeof MACRO_DEFAULTS].color,
      amount: `${value.toFixed(1)}g`,
    }));
  }, [meal]);

  // confirmação de dados necessários para abrir popup
  if (!isOpen || !meal) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <CustomHeader>
        <h2>{meal.name}</h2>
        <CaloriesInfo>
          <span>≃ {meal.calories} kcal</span>
        </CaloriesInfo>
      </CustomHeader>

      <Separator />

      <MainContent>
        <IngredientsSection>
          <h3>Ingredientes</h3>
          <ul>
            {meal.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </IngredientsSection>

        <NutritionSection>
          <NutritionList>
            {nutritionList.map((item) => (
              <NutritionItem key={item.name} dotColor={item.color}>
                <div />
                <span>
                  <strong>{item.amount}</strong> {item.name}
                </span>
              </NutritionItem>
            ))}
          </NutritionList>
        </NutritionSection>
      </MainContent>

      <MacroBarContainer>
        {macroVisuals?.map((macro) => (
          <MacroBarSegment
            key={macro.name}
            width={macro.percentage}
            color={macro.color}
          >
            {macro.percentage > 10 && `${macro.label} ${macro.percentage.toFixed(0)}%`}
          </MacroBarSegment>
        ))}
      </MacroBarContainer>
    </Modal>
  );
}

// estilos:

const CustomHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["green-700"]};
    font-weight: 600;
  }
`;

const CaloriesInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-right: 2.5rem;
  span {
    font-size: 1.125rem;
    font-weight: 500;
    color: ${(props) => props.theme["text-color"]};
  }
`;

const Separator = styled.hr`
  border: none;
  height: 1px;
  background-color: ${(props) => props.theme["green-100"]};
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2.5rem;
`;

const IngredientsSection = styled.div`
  h3 {
    margin-bottom: 1rem;
    color: ${(props) => props.theme["text-color"]};
    font-weight: 600;
  }
  ul {
    list-style: none;
    padding-left: 1rem;
  }
  li {
    color: ${(props) => props.theme["text-color"]};
    margin-bottom: 0.75rem;
    position: relative;
    &::before {
      content: "•";
      color: ${(props) => props.theme["green-700"]};
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
`;

const NutritionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NutritionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const NutritionItem = styled.div<{ dotColor: string }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  div:first-child {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${(props) => props.dotColor};
  }
  span {
    color: ${(props) => props.theme["text-color"]};
  }
`;

const MacroBarContainer = styled.div`
  width: 100%;
  height: 22px;
  background-color: ${(props) => props.theme["green-100"]};
  border-radius: 9999px;
  display: flex;
  overflow: hidden;
  margin-top: 30%;
  margin-bottom: 1rem;
`;

const MacroBarSegment = styled.div<{ width: number; color: string }>`
  width: ${(props) => props.width}%;
  height: 100%;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.7rem;
  font-weight: 600;
  white-space: nowrap;
  transition: width 0.3s ease-in-out;
`;