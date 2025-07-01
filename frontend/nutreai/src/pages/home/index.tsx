import styled from "styled-components"
import { FeatureCard } from "./components/feature-card"
import { Footer } from "./components/footer"
import { PrimaryButton } from "../../componens/primary-button"

import img1 from "../../assets/home/saudavel1.png"
import img2 from "../../assets/home/saudavel2.png"
import img3 from "../../assets/home/saudavel3.png"

export default function Home() {
  return (
    <Container>
      <Content>
        <Title>
          Comece sua jornada com o <span>Nutre.<Highlight>AI</Highlight></span>
        </Title>
        <Cards>
          <FeatureCard
            image={img1}
            title="Planeje suas refeições"
            description="Veja sugestões de refeições e personalize sua dieta."
          />
          <FeatureCard
            image={img2}
            title="Use IA inteligente"
            description="Tenha recomendações personalizadas com base no seu perfil."
          />
          <FeatureCard
            image={img3}
            title="Alimente seu bem-estar"
            description="Cuide de você com praticidade e inteligência."
          />
        </Cards>
        <ButtonWrapper>
          <div style={{ width: 240, height: 40 }}>
            <PrimaryButton style={{ width: "100%", height: "100%", fontSize: "1rem" }}>
              Começar jornada
            </PrimaryButton>
          </div>
        </ButtonWrapper>
      </Content>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme["background-color"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 7rem;
`

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.5rem;
  margin-top: 3rem;
  color: #222;

  span {
    font-weight: 700;
  }
`

const Highlight = styled.span`
  color: #2B7A4B;
`

const Cards = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`