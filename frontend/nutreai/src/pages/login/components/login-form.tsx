import { useForm } from "react-hook-form"
import styled from "styled-components"
import { PrimaryButton } from "../../../componens/primary-button"
import { Link } from "react-router-dom"
import { z } from "zod"
import { LoginInput } from "./login-input"
import { zodResolver } from "@hookform/resolvers/zod"
import { PostLogin } from "../../../services/login"
import { saveToken } from "../../../utils/save-token"
import { useState } from "react"
import { ErrorModal } from "../../../componens/erro-modal"
import { useNavigate } from "react-router-dom"

const LoginFormSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().regex(
    /^(?=.*[A-Z])(?=.*\d).{8,}$/,
    'A senha precisa ter no mínimo 8 caracteres, incluindo 1 letra maiúscula e 1 número.',
  ),
})

export type LoginFormItems = z.infer<typeof LoginFormSchema>

export function LoginForm() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<LoginFormItems>({
    resolver: zodResolver(LoginFormSchema)
  })

  const [shouldErrorModalBeOpen, setShouldErrorModalBeOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  async function onSubmit(data: LoginFormItems) {
    try {
      const token = await PostLogin({
        email: data.email,
        password: data.password
      })
      saveToken(token)
      navigate("/myplans")
    } catch (error: any) {
      setErrorMessage(error.response?.data.message)
      setShouldErrorModalBeOpen(true)
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <ErrorModal 
        isOpen={shouldErrorModalBeOpen} 
        handleClose={() => setShouldErrorModalBeOpen(false)} 
        error={errorMessage} 
      />
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
