import styled from "styled-components"
import { Sidebar } from "../../componens/sidebar"
import { Header } from "../../componens/header"
import { WeekDays } from "./components/week-days"
import { MealsList } from "./components/meal-card"
import { useState } from "react"



const weekDayNames = [
  "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
]

export function MyPlans() {
  const [activeDay, setActiveDay] = useState<number>(new Date().getDay())

 
  const today = new Date()
  const selectedDate = new Date(today)
  selectedDate.setDate(today.getDate() + (activeDay - today.getDay()))

  const formattedDate = selectedDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long"
  })

  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Sidebar />
      <MainContent>
        <WeekDays activeDay={activeDay} onChange={setActiveDay} />
        <Title>
          {weekDayNames[activeDay]}, {formattedDate}
        </Title>
        <MealsList />
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
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-top: 4rem;  
  padding: 2rem;
`

const Title = styled.h2`
  font-size: 1.5rem;
  color: #217A47;
  margin-bottom: 3.5rem;
  padding-left: 0.5rem;
`