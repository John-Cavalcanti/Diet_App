import styled from "styled-components"

interface FeatureCardProps {
  image: string
  title: string
  description: string
}

export function FeatureCard({ image, title, description }: FeatureCardProps) {
  return (
    <Wrapper>
      <ImageCard>
        <Image src={image} alt={title} />
      </ImageCard>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  )
}

// alinhar imagem titulo e descrição no centro
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12.75rem;
`

const ImageCard = styled.div`
  width: 12.75rem;
  height: 15.62rem;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`

const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0.75rem 0 0.25rem 0;
  text-align: center;
`

const Description = styled.p`
  font-size: 0.95rem;
  color: #333;
  text-align: center;
`