import styled from "styled-components";

export function DietForm() {
    return (
        <Container>
            
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100vh;
    background: ${({theme}) => theme["background-color"]};
`