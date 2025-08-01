'use client'

import styled from '@emotion/styled'
import { css } from '@emotion/react'

// Props를 받는 styled component
const DynamicButton = styled.button`
  background: ${props => props.primary ? '#007bff' : '#6c757d'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.primary ? '#0056b3' : '#545b62'};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`

// CSS 함수를 사용한 동적 스타일링
const dynamicStyles = (isActive) => css`
  background: ${isActive ? '#28a745' : '#dc3545'};
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.1);
  }
`

// 중첩된 스타일링
const ComplexCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: #007bff;
  }

  h3 {
    color: #333;
    margin-bottom: 10px;
    font-size: 1.5rem;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .highlight {
    background: linear-gradient(120deg, #a8edea 0%, #fed6e3 100%);
    padding: 2px 6px;
    border-radius: 3px;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      padding: 8px 0;
      border-bottom: 1px solid #eee;

      &:last-child {
        border-bottom: none;
      }

      &:before {
        content: "✓";
        color: #28a745;
        font-weight: bold;
        margin-right: 8px;
      }
    }
  }
`

// 반응형 디자인
const ResponsiveGrid = styled.div`
  display: grid;
  gap: 20px;
  margin: 20px 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

// 애니메이션
const AnimatedBox = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
`

export default function EmotionAdvanced() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Emotion 고급 기능들</h2>

      <div style={{ marginBottom: '20px' }}>
        <h3>Props를 사용한 동적 스타일링</h3>
        <DynamicButton primary>Primary Button</DynamicButton>
        <DynamicButton style={{ marginLeft: '10px' }}>Secondary Button</DynamicButton>
        <DynamicButton disabled style={{ marginLeft: '10px' }}>Disabled Button</DynamicButton>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>CSS 함수를 사용한 동적 스타일링</h3>
        <button css={dynamicStyles(true)}>Active Status</button>
        <button css={dynamicStyles(false)} style={{ marginLeft: '10px' }}>Inactive Status</button>
      </div>

      <ResponsiveGrid>
        <ComplexCard>
          <h3>중첩된 스타일링</h3>
          <p>Emotion은 <span className="highlight">중첩된 CSS</span>를 완벽하게 지원합니다.</p>
          <ul>
            <li>Pseudo-selectors</li>
            <li>Media queries</li>
            <li>Keyframe animations</li>
          </ul>
        </ComplexCard>

        <ComplexCard>
          <h3>반응형 디자인</h3>
          <p>CSS Grid와 Media Queries를 조합하여 <span className="highlight">반응형 레이아웃</span>을 만들 수 있습니다.</p>
          <ul>
            <li>Mobile-first approach</li>
            <li>Flexible grid system</li>
            <li>Breakpoint management</li>
          </ul>
        </ComplexCard>

        <ComplexCard>
          <h3>애니메이션</h3>
          <p>CSS 애니메이션과 키프레임을 <span className="highlight">직관적으로</span> 사용할 수 있습니다.</p>
          <ul>
            <li>Keyframe animations</li>
            <li>Transition effects</li>
            <li>Performance optimized</li>
          </ul>
        </ComplexCard>
      </ResponsiveGrid>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <AnimatedBox>BOUNCE</AnimatedBox>
      </div>
    </div>
  )
}