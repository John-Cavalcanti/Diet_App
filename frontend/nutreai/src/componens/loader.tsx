import styled, { keyframes } from 'styled-components'

export function Loader() {
    return (
        <LoaderOverlay>
      <Spinner />
    </LoaderOverlay>
  )
}

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme['background-color']};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`

const Spinner = styled.div`
  border: 10px solid ${(props) => props.theme['green-100']};
  border-top: 10px solid ${(props) => props.theme['green-700']};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spinAnimation} 1s linear infinite;
`