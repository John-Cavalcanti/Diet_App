import { Modal } from "./modal";
import styled from "styled-components";
import { PrimaryButton } from "./primary-button";
import { SecondaryButton } from "./secondary-button";
import { useMemo } from "react";
import type {UserInfo} from "../@types/user-info";

interface ConfirmInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onEdit: () => void;
  userData: UserInfo | null;
  isSubmitting: boolean
}

export function ConfirmInfoModal({ isOpen, onClose, onConfirm, onEdit, userData, isSubmitting }: ConfirmInfoModalProps) {
  if (!isOpen || !userData) {
    return null;
  }

  // converter string para lista
  const restrictionsList = useMemo(()=>{
    const restrictions = userData._foodRestrictions;
    const lista: string[] = restrictions.split(',').map(item => {
      const trimmed = item.trim();  
      return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);;
    });
    return lista;
  }, [userData]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Confirme suas informações">
      <InfoGrid>
        <InfoItem>
          <Label>Altura:</Label>
          <Value>{userData._height} cm</Value>
        </InfoItem>

        <InfoItem>
          <Label>Peso:</Label>
          <Value>{userData._weight} kg</Value>
        </InfoItem>

        <InfoItem>
          <Label>Frequência de Atividade Fisica:</Label>
          <Value>{userData._workoutsFrequency}</Value>
        </InfoItem>

        <InfoItem>
          <Label>Objetivo:</Label>
          <Value>{userData._goals}</Value>
        </InfoItem>

        {restrictionsList.length > 0 && (
          <InfoItem $fullWidth>
            <Label>Restrições Alimentares:</Label>
            <RestrictionsList>
              {restrictionsList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </RestrictionsList>
          </InfoItem>
        )}
      </InfoGrid>

      <ButtonContainer>
        <ButtonInnerContainer>
            <SecondaryButton onClick={onEdit}>Editar</SecondaryButton>
            <PrimaryButton onClick={onConfirm} disabled = {isSubmitting}>
              {isSubmitting ? "Carregando..." : "Confirmar"}
            </PrimaryButton>
        </ButtonInnerContainer>
      </ButtonContainer>
    </Modal>
  );
}

// estilos:

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem 2rem;
  padding-right: 8rem;
`;

const InfoItem = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  align-items: baseline;
  grid-column: ${(props) => (props.$fullWidth ? "1 / -1" : "auto")};
`;

const Label = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme["text-color"]};
  margin-right: 0.5rem;
  white-space: nowrap;
`;

const Value = styled.span`
  color: ${(props) => props.theme["text-color"]};
`;

const RestrictionsList = styled.ul`
  list-style: disc inside;
  padding-left: 1rem;

  li {
    margin-bottom: 0.25rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const ButtonInnerContainer = styled.div`
  width: 50%;
  margin-right: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
