import styled from "styled-components"
import { Header } from "../../componens/header"
import { LoginCard } from "./components/login-card"
import { LoginForm } from "./components/login-form"

export function LoginPage() {
  return (
    <Container>
      <Header />
      <Content>
        <LoginCard>
          <LoginForm />
        </LoginCard>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme["background-color"]};
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start; 
  justify-content: center;
  margin-top: 10rem; 
`