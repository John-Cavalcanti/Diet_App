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
          <LineRow>
            <Line />
            <NewPlanButton>
              + Gerar nova dieta
            </NewPlanButton>
          </LineRow>
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
`

const LineRow = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme["green-700"]};
`

const Line = styled.div`
  flex: 100%;
  height: 3px;
  background: ${({ theme }) => theme["green-100"]};
`

const NewPlanButton = styled.button`
  background: ${({theme}) => theme["green-700"]};
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.6rem 1.5rem;
  margin-right: 8.5rem;
  border: none;
  border-radius: 24px;
  width: 16.4rem;
  height: 2.75rem;
  cursor: pointer;
`