import * as Checkbox from "@radix-ui/react-checkbox";
import type { ReactNode } from "react";
import styled from "styled-components";

interface FoodCheckBoxProps {
    children: ReactNode
}
export function FoodCheckbox({ children }: FoodCheckBoxProps) {
    return (
        <Checkbox.Root asChild>
            <Button>{children}</Button>
        </Checkbox.Root>
    )
}

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    padding-block: 0.5rem;

    font-size: 0.625rem;

    border: 1px solid ${({ theme }) => theme["green-700"]};
    border-radius: 18px;
    
    gap: 1rem;

    &:hover {
        background-color: ${({theme}) => theme["green-100"]};
    }

  &[data-state='checked'] {
    background-color: ${({theme}) => theme["green-100"]};
    border: 2px solid ${({ theme }) => theme["green-700"]};
  }
`