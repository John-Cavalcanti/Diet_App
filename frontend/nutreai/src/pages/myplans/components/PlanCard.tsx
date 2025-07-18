import styled from "styled-components";

interface PlanCardProps {
  title: string;
  kcal: number;
  percCarb: number;
  percProt: number;
  percGord: number;
  active?: boolean;
}

export function PlanCard({ title, kcal, percCarb, percProt, percGord }: PlanCardProps) {
  return (
    <Card>      
        <PlanTitle>{title}</PlanTitle>      
      <Right>
        <Macro>
          <Kcal>{kcal}</Kcal>
          <MacroLabel>Kcal</MacroLabel>
        </Macro>
        <Macro>
          <Carb>{percCarb}%</Carb>
          <MacroLabel>Carb</MacroLabel>
        </Macro>
        <Macro>
          <Prot>{percProt}%</Prot>
          <MacroLabel>Prot</MacroLabel>
        </Macro>
        <Macro>
          <Gord>{percGord}%</Gord>
          <MacroLabel>Gord</MacroLabel>
        </Macro>
      </Right>
    </Card>
  );
}

const Card = styled.div<{active?: boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.2);
  padding: 2.5rem;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  margin-right: 8.5rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: background 0.2s;

  // Hover effect
  &:hover {
    background: ${({ theme }) => theme["background-color"]};
  }

  // Active left bar
  &::before {
    content: '';
    display: ${({active}) => active ? 'block' : 'none'};
    position: absolute;
    left: 0;
    top: 0;
    width: 16px;
    height: 100%;
    background: ${({ theme }) => theme["green-700"]};
    border-radius: 18px 0 0 18px;
  }
`

const PlanTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme["green-700"]};
`

const Right = styled.div`
  display: flex;
  gap: 2.3rem;
`

const Macro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MacroLabel = styled.span`
  font-size: 1rem;
  color: #888;
`

const Kcal = styled.span`
  color: #2e7d32;
  font-size: 1.5rem;
  font-weight: 700;
`

const Carb = styled.span`
  color: #8e24aa;
  font-size: 1.5rem;
  font-weight: 700;
`

const Prot = styled.span`
  color: #1976d2;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Gord = styled.span`
  color: #f9a825;
  font-size: 1.5rem;
  font-weight: 700;
`;