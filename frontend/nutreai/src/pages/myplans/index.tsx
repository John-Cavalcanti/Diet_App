import styled from "styled-components"
import { Sidebar } from "../../componens/sidebar"
import { Header } from "../../componens/header"

export function MyPlans() {
  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Sidebar />
      <MainContent>
        <TitleRow>
          <Title>Meus planos</Title>
          <Line />
        </TitleRow>
        
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
  margin-left: 5rem;
  margin-top: 4.5rem;  
  padding: 2rem;
`
const TitleRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
`
const Title = styled.h1`
  font-size: 2rem;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  color: ${({ theme }) => theme["green-700"]};
  margin: 0;
`
const Line = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme["green-100"]};
`
