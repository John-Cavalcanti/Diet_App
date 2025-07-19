import styled from "styled-components"
import { Sidebar } from "../../componens/sidebar"
import { Header } from "../../componens/header"
import { WeekDays } from "./components/week-days"
import { useState } from "react"



export function MyPlans() {
  const [activeDay, setActiveDay] = useState<number>(new Date().getDay())

  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Sidebar />
      <MainContent>
        <WeekDays activeDay={activeDay} onChange={setActiveDay} />
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