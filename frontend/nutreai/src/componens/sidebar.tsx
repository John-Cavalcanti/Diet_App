import styled from "styled-components"
import { NavLink } from "react-router-dom"
import homeIcon from "../assets/sidebar/home.png"
import plansIcon from "../assets/sidebar/clipboard.png"
import profileIcon from "../assets/sidebar/profile.png"
import logoutIcon from "../assets/sidebar/logout.png"

export function Sidebar() {
  return (
    <Container>
      <Nav>
        <IconLink to="/home">
          <img src={homeIcon} alt="Início" />
        </IconLink>
        <IconLink to="/meus-planos">
          <img src={plansIcon} alt="Meus Planos" />
        </IconLink>
        <IconLink to="/perfil">
          <img src={profileIcon} alt="Perfil" />
        </IconLink>
        <IconLink to="/login">
          <img src={logoutIcon} alt="Sair" />
        </IconLink>
      </Nav>
    </Container>
  )
}

const Container = styled.aside`
  width: 4.5rem;
  background: #c8e6c9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5.5rem;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const IconLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  transition: background 0.2s;

  &:hover,
  &.active {
    background: #ebf6eb;
  }

  img {
    width: 1.75rem;
    height: 1.75rem;
  }
`