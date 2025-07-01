import type { ReactNode } from "react"
import styled from "styled-components"

interface LoginCardProps {
  children: ReactNode
}

export function LoginCard({ children }: LoginCardProps) {
  return <Container>{children}</Container>
}

const Container = styled.div`
  width: 385px;
  height: 537px;

  display: flex;
  flex-direction: column;

  background: white;
  border-radius: 16px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);

  padding-inline: 51px;
  padding-top: 60px;
  padding-bottom: 60px;

  box-sizing: border-box;
`