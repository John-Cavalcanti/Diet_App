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
  onOpenMore: () => void
}

export function MealCard({ icon, title, items, calories, onOpenMore }: MealCardProps) {
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
      <Calories>{`≈ ${calories} kcal`}</Calories>
      </Items>
      <Button onClick={onOpenMore}>Ver mais</Button>
    </Card>
  )
}

const mealIcons: Record<string, string> = {
  cafe_da_manha: cafeDaManhaIcon,
  almoco: almocoIcon,
  jantar: jantarIcon,
  lanche: lancheIcon,
};

interface MealsListProps{
  meals: any[],
  onOpenDetails: (meal: any)=>void
}

export function MealsList({ meals, onOpenDetails }: MealsListProps) {
  if (!meals) return null;
  return (
    <CardsRow>
      {meals.map((meal, idx) => (
        <MealCard onOpenMore={() => onOpenDetails(meal)}
          key={idx}
          icon={mealIcons[meal.tipoRefeicao] || cafeDaManhaIcon}
          title={
            meal.tipoRefeicao
              ? meal.tipoRefeicao.replace(/_/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase())
              : "Refeição"
          }
          items={meal.descricao ? meal.descricao.split(",") : []}
          calories={meal.calorias || 0}
        />
      ))}
    </CardsRow>
  );
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
  font-size: 0.9rem;
  color: #333;
  list-style: disc;
  padding-left: 1rem;
  max-height: 8rem;
  overflow-y: auto;
  width: 100%;
`

const Calories = styled.div`
  font-size: 0.9rem;
  color: #4A4A4A;
  background: #E9E9E9;
  border-radius: 16px;
  padding: 0.1rem 1rem;
  display: inline-block;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

const Button = styled.button`
  background: ${({ theme }) => theme["green-700"]};
  color: #fff;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.08);
  width: 8.5rem;
  height: 2.3rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  align-self: center;
`