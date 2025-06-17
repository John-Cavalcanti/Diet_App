import styled from "styled-components"
import logo from "../assets/logo.png"

export function Header(){
    return (
        <Container>
            <img src={logo} />
        </Container>
    )
}

const Container = styled.header`
    padding-left: 2rem;
    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
    background: white;

    padding-block: 1rem;
`