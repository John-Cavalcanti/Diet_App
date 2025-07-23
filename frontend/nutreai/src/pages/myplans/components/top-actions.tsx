import styled from "styled-components"
import clipboardIcon from "../../../assets/button/prancheta.png"
import addIcon from "../../../assets/button/add.png"

export function TopActions() {
  return (
    <ActionsRow>
      <ActionButton>
        <Icon src={clipboardIcon} alt="Meus Dados" />
        Meus Dados
      </ActionButton>
      <ActionButton>
        <Icon src={addIcon} alt="Gerar Nova Dieta" />
        Gerar Nova Dieta
      </ActionButton>
    </ActionsRow>
  )
}

const ActionsRow = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`

const ActionButton = styled.button`
  background: #fff;
  color: #4A4A4A;
  border: 1px solid #4A4A4A;
  border-radius: 8px;
  padding: 0.7rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.08);
  display: flex;
  align-items: center;
  gap: 0.7rem;

  &:hover {
    background: #E9E9E9;
  }
`

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
`