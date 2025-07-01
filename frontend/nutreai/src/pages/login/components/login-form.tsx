import { useForm, FormProvider } from "react-hook-form"
import styled from "styled-components"
import { PrimaryButton } from "../../../componens/primary-button"
import { Link } from "react-router-dom"
import { FormInput } from "../../form/components/form-inputs"

export function LoginForm() {
  const methods = useForm()
  function handleSubmit(data: any) {
    // Por enquanto, não faz nada
  }

  return (
    <FormProvider {...methods}>
      <FormContainer onSubmit={methods.handleSubmit(handleSubmit)}>
        <Title>Entrar</Title>
        <InputsContainer>
            <FormInput id="email" label="E-mail" type="email" />
            <FormInput id="password" label="Senha" type="password" />
        </InputsContainer>
        <ForgotPassword href="#">Esqueci a minha senha</ForgotPassword>
        <SignupContainer>
          Não tem uma conta?{" "}
          <Link to="/weekly-diet-form">
            <b>Criar Conta</b>
          </Link>
        </SignupContainer>
        <PrimaryButton type="submit">Entrar</PrimaryButton>
      </FormContainer>
    </FormProvider>
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


