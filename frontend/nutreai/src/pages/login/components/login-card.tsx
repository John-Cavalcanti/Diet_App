import type { ReactNode } from "react"
import styled from "styled-components"

interface LoginCardProps {
  children: ReactNode
}

export function LoginCard({ children }: LoginCardProps) {
  return <Container>{children}</Container>
}

const Container = styled.div`
  width: 24.06rem;
  height: 33.56rem;

  display: flex;
  flex-direction: column;

  background: white;
  border-radius: 16px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);

  padding-inline: 3.20rem;
  padding-top: 3.75rem;
  padding-bottom: 3.75rem;

  box-sizing: border-box;
`