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

const Input = styled.input`
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #d1d1d1;
  border-radius: 8px;
  outline: none;
  color: #000;

  &::placeholder {
    color: #aaa;
    font-size: 0.75rem;
  }

  &:focus {
    border-color: #888;
  }
`