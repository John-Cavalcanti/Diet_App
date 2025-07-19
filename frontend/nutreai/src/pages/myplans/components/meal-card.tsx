import styled from "styled-components"
import cafeDaManhaIcon from "../../../assets/icons/cafe-da-manha.png"
import almocoIcon from "../../../assets/icons/almoco.png"
import jantarIcon from "../../../assets/icons/jantar.png"
import lancheIcon from "../../../assets/icons/lanche.png"

interface MealCardProps {
  icon: string
  title: string
  items: string[]
  calories: number
}

export function MealCard({ icon, title, items, calories }: MealCardProps) {
  return (
    <Card>
      <Header>
        <Icon src={icon} alt={title} />
        <Title>{title}</Title>
      </Header>
      <Items>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </Items>
      <Calories>{`≈ ${calories} kcal`}</Calories>
      <Button>Ver mais</Button>
    </Card>
  )
}

export function MealsList() {
  return (
    <CardsRow>
      <MealCard
        icon={cafeDaManhaIcon}
        title="Café da manhã"
        items={["2 ovos mexidos", "1 fatia de pão integral", "1 fruta"]}
        calories={300}
      />
      <MealCard
        icon={almocoIcon}
        title="Almoço"
        items={[
          "120g de peito de frango grelhado",
          "4 colheres de sopa de arroz integral",
          "1 concha de feijão",
          "Salada à vontade"
        ]}
        calories={470}
      />
      <MealCard
        icon={jantarIcon}
        title="Jantar"
        items={["Sopa de legumes com cubos de frango"]}
        calories={280}
      />
      <MealCard
        icon={lancheIcon}
        title="Lanches"
        items={["Iogurte natural", "1/2 xícara de frutas"]}
        calories={200}
      />
    </CardsRow>
  )
}

const CardsRow = styled.div`
  display: flex;
  gap: 4rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0px 4px 16px rgba(0,0,0,0.2);
  padding: 1.5rem 1.2rem;
  width: 17rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
`

const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 400;
  color: #4A4A4A;
`

const Items = styled.ul`
  margin-left: 1rem;
  font-size: 0.9rem;
  color: #333;
  list-style: disc;
  padding-left: 0;
`

const Calories = styled.div`
  font-size: 0.95rem;
  color: #888;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

const Button = styled.button`
  background: #217A47;
  color: #fff;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.08);
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: auto;
  align-self: center;
  transition: background 0.2s;
  display: block; 

  &:hover {
    background: #2B7A4B;
  }
`