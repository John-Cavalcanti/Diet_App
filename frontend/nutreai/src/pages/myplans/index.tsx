import styled from "styled-components"
import { Sidebar } from "../../componens/sidebar"
import { Header } from "../../componens/header"
import { WeekDays } from "./components/week-days"
import { MealsList } from "./components/meal-card"
import { useState, useEffect } from "react"
import { TopActions } from "./components/top-actions"
import { getWeeklyDiet } from "../../services/weekly-diet/get"

const weekDayNames = [
  "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
]
const weekDayKeys = [
  "domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"
]

export function MyPlans() {
  const [activeDay, setActiveDay] = useState<number>(new Date().getDay())
  const [weeklyDiet, setWeeklyDiet] = useState<any>(null)

  useEffect(() => {
    async function fetchDiet() {
      const data = await getWeeklyDiet()
      setWeeklyDiet(data)
    }
    fetchDiet()
  }, [])

  const today = new Date()
  const selectedDate = new Date(today)
  selectedDate.setDate(today.getDate() + (activeDay - today.getDay()))

  const formattedDate = selectedDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long"
  })

  const todayKey = weekDayKeys[activeDay]

  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Sidebar />
      <MainContent>
        <Teste>
          <ActionsWeekRow>
            <WeekDays activeDay={activeDay} onChange={setActiveDay} />
            <TopActions />
          </ActionsWeekRow>
          <Title>
            {weekDayNames[activeDay]}, {formattedDate}
          </Title>
          {weeklyDiet && weeklyDiet[todayKey] && (
            <MealsList meals={weeklyDiet[todayKey]} />
          )}
        </Teste>
      </MainContent>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: #fff;
  position: relative;
`

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 10;
`

const MainContent = styled.div`
  width: calc(100% - 4.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;

`
const Teste = styled.div`
  width: fit-content;
  height: fit-content;
`
const Title = styled.h2`
  font-size: 1.5rem;
  color: #217A47;
  margin-bottom: 3.5rem;
  padding-left: 0.5rem;
`

const ActionsWeekRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  margin-top: 1rem;
  gap: 21rem; 
`