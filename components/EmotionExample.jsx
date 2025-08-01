'use client'

import styled from '@emotion/styled'

// Styled components using emotion
const Container = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
  text-align: center;
  margin: 1rem 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 2rem;
`

const Button = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`

export default function EmotionExample() {
  return (
    <Container>
      <Title>Emotion CSS-in-JS</Title>
      <Subtitle>
        Beautiful, performant CSS-in-JS with emotion
      </Subtitle>

      <Button>Get Started</Button>

      <CardGrid>
        <Card>
          <h3>Fast</h3>
          <p>Optimized for performance with minimal runtime overhead</p>
        </Card>
        <Card>
          <h3>Flexible</h3>
          <p>Works with any framework and supports all CSS features</p>
        </Card>
        <Card>
          <h3>Developer Experience</h3>
          <p>Great debugging experience with source maps and dev tools</p>
        </Card>
      </CardGrid>
    </Container>
  )
}