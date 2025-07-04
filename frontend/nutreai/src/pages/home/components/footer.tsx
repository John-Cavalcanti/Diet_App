import styled from "styled-components"

export function Footer() {
  return (
    <FooterContainer>
      <Info>
        INFORMAÇÕES - SUPORTE - TERMOS DE USO
      </Info>
      <Copyright>
        © 2025 - Todos os direitos reservados - Grupo1
      </Copyright>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  width: 100%;
  background: #106861;
  color: #fff;
  text-align: center;
  padding: 1rem 0 0.5rem 0;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 4px 16px 0 rgba(0,0,0,0.20);
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 10;
`

const Info = styled.div`
  font-weight: extra-bold;
  letter-spacing: 0.05rem;
  font-size: 0.875rem;
`

const Copyright = styled.div`
  font-weight: extra-bold;
  font-size: 0.875rem;
`