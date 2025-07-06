// BreakfastModal.tsx
import React from 'react';
import styled from 'styled-components';

// --- TIPAGEM ---
interface MacroNutrient {
  name: string;
  value: string;
  color: string;
}

interface MealOption {
  title: string;
  description: string;
  calories: number;
  macros: MacroNutrient[];
}

interface BreakfastModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// --- DADOS (substituir no backend os dados joao ou ian) ---
const mealOptionsData: MealOption[] = [
  {
    title: '• Opção 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    calories: 888,
    macros: [
      { name: 'Carboidratos', value: '00g', color: '#4A90E2' },
      { name: 'Proteína', value: '00g', color: '#E24A4A' },
      { name: 'Gordura', value: '00.0g', color: '#F5A623' },
    ],
  },
  {
    title: '• Opção 2',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    calories: 888,
    macros: [
      { name: 'Carboidratos', value: '00g', color: '#4A90E2' },
      { name: 'Proteína', value: '00g', color: '#E24A4A' },
      { name: 'Gordura', value: '00g', color: '#F5A623' },
    ],
  },
  {
    title: '• Opção 3',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    calories: 888,
    macros: [
      { name: 'Carboidratos', value: '00g', color: '#4A90E2' },
      { name: 'Proteína', value: '00g', color: '#E24A4A' },
      { name: 'Gordura', value: '00g', color: '#F5A623' },
    ],
  },
];


// --- STYLED COMPONENTS ---

const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 800px;
  padding: 2rem;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #888;
  padding: 0.5rem;
  line-height: 1;
  &:hover {
    color: #000;
  }
`;

const OptionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const OptionItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 2rem;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const OptionDetails = styled.div`
  flex: 1;
`;

const OptionTitle = styled.h3`
  font-weight: 600;
  margin: 0 0 0.5rem 0;
`;

const OptionDescription = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const NutrientSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

const CalorieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #555;
  font-weight: 500;
`;

const MacroList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const MacroItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
`;

const ColorDot = styled.span<{ color: string }>`
  width: 10px;
  height: 10px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
`;


// --- COMPONENTE REACT ---
const BreakfastModal: React.FC<BreakfastModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay $isOpen={isOpen} onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <Title>
            <span>&#127838;</span> {/* Emoji de pão */}
            Café da manhã
          </Title>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <OptionsList>
          {mealOptionsData.map((option, index) => (
            <OptionItem key={index}>
              <OptionDetails>
                <OptionTitle>{option.title}</OptionTitle>
                <OptionDescription>{option.description}</OptionDescription>
              </OptionDetails>
              <NutrientSection>
                <CalorieInfo>
                  <span>&#128293;</span> {/* Emoji de fogo */}
                  ≈ {option.calories} kcal
                </CalorieInfo>
                <MacroList>
                  {option.macros.map((macro) => (
                    <MacroItem key={macro.name}>
                      <ColorDot color={macro.color} />
                      <span>
                        <strong>{macro.value}</strong> {macro.name}
                      </span>
                    </MacroItem>
                  ))}
                </MacroList>
              </NutrientSection>
            </OptionItem>
          ))}
        </OptionsList>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default BreakfastModal;