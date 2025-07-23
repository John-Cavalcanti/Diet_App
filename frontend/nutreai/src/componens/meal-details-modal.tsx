import styled from "styled-components";
import { Modal } from "./modal";
import { useMemo } from "react";
// importação de ícones
import breakfastIcon from "../assets/icons/cafe-da-manha.png";
import lunchIcon from "../assets/icons/almoco.png";
import dinnerIcon from "../assets/icons/jantar.png";
import snackIcon from "../assets/icons/lanche.png";
import calorieIcon from "../assets/icons/calorie-icon.png"

// dados padrão para macros
const MACRO_DEFAULTS = {
  carbs: { name: "Carboidratos", color: "#A060BE", label: "carb" },
  protein: { name: "Proteína", color: "#5A96E3", label: "prot" },
  fat: { name: "Gordura", color: "#F7B731", label: "gord" },
};

export interface MealInput {
  name: string;
  ingredients: string[];
  macrosInGrams: {
    carbs: number;
    protein: number;
    fat: number;
  };
  totalCalories: number;
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
      amount: `${(value || 0).toFixed(1)}g`,
    }));
  }, [meal]);

  // formatação da lista de ingredientes
  const formattedIngredients = useMemo(() => {
    const descriptionString = meal?.ingredients?.[0];
    if (typeof descriptionString !== 'string') {
      return [];
    }

    // Divide a string por " com " ou " e " e limpa espaços extras
    return descriptionString
      .split(/ com | e /)
      .map(item => item.trim())
      .filter(item => item.length > 0); // Remove itens vazios
  }, [meal]);

  // função para colocar a primeira letra como maiúscula
  function capitalizeFirstLetter(val: string) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

  const icon = () => {
    switch(meal?.name){
      case "Café da Manhã": return breakfastIcon;
      case "Almoço": return lunchIcon;
      case "Jantar": return dinnerIcon;
      case "Lanche": return snackIcon;
      default: return " ";
    }
  }

  // confirmação de dados necessários para abrir popup
  if (!isOpen || !meal) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <CustomHeader>
        <TitleContainer>
          <Icon $iconSize="36px" src={icon()} alt={"Ícone de " + meal.name} />
          <h2>{meal.name}</h2>
        </TitleContainer>
        <CaloriesInfo>
          <span>≃ {meal.totalCalories} kcal</span>
          <Icon $iconSize="28px" src={calorieIcon} alt="Ícone de calorias" />
        </CaloriesInfo>
      </CustomHeader>

      <Separator />

      <MainContent>
        <IngredientsSection>
          <h3>Ingredientes</h3>
          <ul>
            {formattedIngredients.map((item, index) => (
              <li key={index}>{capitalizeFirstLetter(item)}</li>
            ))}
          </ul>
        </IngredientsSection>

        <NutritionSection>
          <NutritionList>
            {nutritionList.map((item) => (
              <NutritionItem key={item.name} $dotColor={item.color}>
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
  align-items: end;
  gap: 0.75rem;
  margin-right: 1rem;
  span {
    font-size: 1.125rem;
    font-weight: 500;
    color: ${(props) => props.theme["text-color"]};
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
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

const NutritionItem = styled.div<{ $dotColor: string }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  div:first-child {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${(props) => props.$dotColor};
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

const Icon = styled.img<{ $iconSize: string }>`
  width: ${(props) => props.$iconSize};
  height: auto;
  margin-right: 1rem;
`;