import { useState } from "react"
import styled from "styled-components"

import visivel from "../../../assets/password/visivel.png"
import oculto from "../../../assets/password/oculto.png"

interface LoginInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
}

export function LoginInput({ label, id, type, ...props }: LoginInputProps) {
  const [show, setShow] = useState(false)
  const isPassword = type === "password"

  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <InputWrapper>
        <Input
          id={id}
          type={isPassword ? (show ? "text" : "password") : type}
          {...props}
        />
        {isPassword && (
          <EyeButton type="button" tabIndex={-1} onClick={() => setShow((v) => !v)}>
            <img
              src={show ? oculto : visivel}
              alt={show ? "Ocultar senha" : "Mostrar senha"}
              width={16}
              height={16}
            />
          </EyeButton>
        )}
      </InputWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  width: fit-content;
  display: inline-block;
  font-size: 0.875rem;
  color: #000;
  margin-bottom: -0.5rem;
  margin-left: 1rem;
  padding-inline: 0.5rem;
  background-color: white;
  z-index: 1;
`

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const Input = styled.input`
  padding: 10px 38px 10px 12px; 
  font-size: 16px;
  border: 1px solid #d1d1d1;
  border-radius: 8px;
  outline: none;
  color: #000;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #888;
  }
`

const EyeButton = styled.button`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
