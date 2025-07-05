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
        {/* Conteúdo da página Meus Planos */}
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
  margin-left: 80px; // largura da sidebar
  margin-top: 72px;  // altura do header (ajuste conforme necessário)
  padding: 2rem;
`