import styled from "styled-components"

interface LoginInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
}

export function LoginInput({ label, id, ...props }: LoginInputProps) {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...props} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const Label = styled.label`
  width: fit-content;
  display: inline-block;
  font-size: 0.95rem;
  color: #000;
  margin-bottom: 0.3rem;
  margin-left: 0.5rem;
  background: white;
  padding-inline: 0.3rem;
  z-index: 1;
`

const Input = styled.input`
  width: 17.5rem;      
  height: 2.75rem;     
  padding: 0.625rem 0.75rem;
  font-size: 1rem;
  border: 1.5px solid #d1d1d1;
  border-radius: 8px;
  outline: none;
  color: #000;
  background: transparent;

  &::placeholder {
    color: #aaa;
    font-size: 0.85rem;
  }

  &:focus {
    border-color: #2e7d4f;
  }
`