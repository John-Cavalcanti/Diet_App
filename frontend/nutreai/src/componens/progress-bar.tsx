import styled from "styled-components"

interface ProgressBarProps {
    percentage: number
}
export function ProgressBar({percentage}: ProgressBarProps){
    return (
        <Container>
            <ProgressIndicator percentage={percentage} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 25rem;
    height: 0.5rem;

    background: ${({theme}) => theme["green-100"]};

    border-radius: 8px;

    padding-inline: 0.25rem;

    margin: auto;
    margin-bottom: 0.825rem;
`

const ProgressIndicator = styled.div<ProgressBarProps>`
    width: ${(props) => props.percentage}%;
    height: 0.25rem;
    background: ${({theme}) => theme["green-700"]};

    border-radius: 8px;
`