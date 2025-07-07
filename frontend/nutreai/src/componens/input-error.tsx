import styled from "styled-components";

interface InputErrorProps {
    errorMessage: string | undefined
}
export function InputError({ errorMessage }: InputErrorProps) {
    return <Error>{errorMessage}</Error>
}

export const Error = styled.span`
    color: red;
    font-size: 0.75rem;
`