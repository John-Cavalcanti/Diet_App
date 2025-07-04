import { useForm } from "react-hook-form"
import styled from "styled-components"
import { PrimaryButton } from "../../../componens/primary-button"
import { Link } from "react-router-dom"
import { LoginInput } from "./login-input"

export function LoginForm() {
  const { register, handleSubmit } = useForm()
  function onSubmit(data: any) {
    // Por enquanto, não faz nada
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Title>Entrar</Title>
      <InputsContainer>
        <LoginInput id="email" label="E-mail" type="email" {...register("email")} />
        <LoginInput id="password" label="Senha" type="password" {...register("password")} />
      </InputsContainer>
      <ForgotPassword href="#">Esqueci a minha senha</ForgotPassword>
      <SignupContainer>
        Não tem uma conta?{" "}
        <Link to="/weekly-diet-form">
          <b>Criar Conta</b>
        </Link>
      </SignupContainer>
      <ButtonWrapper>
        <PrimaryButton type="submit">
          Entrar
        </PrimaryButton>
      </ButtonWrapper>
    </FormContainer>
  )
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h2`
  text-align: center;
  margin-bottom: 0.8rem;
  font-size: 1.3rem;
  font-family: "Inter", sans-serif;
  font-weight: 500;
`

const ForgotPassword = styled.a`
  font-size: 0.85rem;
  text-align: left;
  margin-bottom: 3.5rem;
  text-decoration: underline;
  color: #000;
  cursor: pointer;
`

const SignupContainer = styled.div`
  font-size: 0.95rem;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: light;

  b {
    text-decoration: underline;
    color: #000;
    cursor: pointer;
    font-weight: normal;
  }
`
const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1.2rem;
`
const ButtonWrapper = styled.div`
  width: 8.3rem;
  height: 2.75rem;
  margin: 0 auto;
`
