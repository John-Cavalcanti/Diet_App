import { CheckboxIndicator } from "@radix-ui/react-checkbox";
import type { ReactNode } from "react";
import styled from "styled-components";

interface FoodCheckBoxProps {
    children: ReactNode
}
export function FoodCheckbox ({ children }: FoodCheckBoxProps){
    return (
        <CheckboxIndicator asChild>
            <Button>{children}</Button>
        </CheckboxIndicator>
    )
}

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;

    padding-block: 0.5rem;

    font-size: 0.625rem;

    border: 1px solid ${({theme}) => theme["green-700"]};
    border-radius: 18px;
    
    gap: 1rem;
`