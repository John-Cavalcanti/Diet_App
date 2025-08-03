import styled from "styled-components"
import { Header } from "../../componens/header"
import { GlobalStyle } from "../../styles/global"
import { Link } from "react-router-dom"

export function RouteNotFound() {
    return (
        <Container>
            <GlobalStyle />
            <Header />
            <Card>
                <Title>Erro 404</Title>
                <Description>Erro 404, página não encontrada</Description>
                <ButtonLink to="/">Voltar para a página inicial</ButtonLink>
            </Card>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    min-height: 100vh;
    height: 100%;
    background: ${({ theme }) => theme["background-color"]};

    gap: 3rem;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40rem;
    height: 30rem;
    background-color: #cfd6cf;
    border-radius: 8px;
    margin: auto;

    gap: 2rem;
`

const Title = styled.h2`
    font-size: 8rem;
    color: ${({theme}) => theme["green-700"]};
    font-weight: 600;
`

const Description = styled.p`
    color: ${({theme}) => theme["green-700"]};
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
`

const ButtonLink = styled(Link)`
    border-radius: 50px;
    border: 1px ${({theme}) => theme["text-color"]} solid;
    padding-inline: 3rem;
    padding-block: 0.5rem;
    text-decoration: none;
    color: ${({theme}) => theme["text-color"]};
`