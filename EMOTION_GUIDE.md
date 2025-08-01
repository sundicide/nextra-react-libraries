# Emotion CSS-in-JS 가이드

이 프로젝트에서 Emotion을 사용하여 CSS-in-JS 스타일링을 구현할 수 있습니다.

## 설치된 패키지

```bash
npm install @emotion/react @emotion/styled @emotion/babel-plugin
```

## 기본 사용법

### 1. Styled Components

```jsx
import styled from '@emotion/styled'

const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`

// 사용
<Button>Click me</Button>
```

### 2. Props를 사용한 동적 스타일링

```jsx
const DynamicButton = styled.button`
  background: ${props => props.primary ? '#007bff' : '#6c757d'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`

// 사용
<DynamicButton primary>Primary</DynamicButton>
<DynamicButton>Secondary</DynamicButton>
```

### 3. CSS 함수 사용

```jsx
import { css } from '@emotion/react'

const buttonStyles = (isActive) => css`
  background: ${isActive ? '#28a745' : '#dc3545'};
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
`

// 사용
<button css={buttonStyles(true)}>Active</button>
```

### 4. 중첩된 스타일링

```jsx
const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;

  h3 {
    color: #333;
    margin-bottom: 10px;
  }

  p {
    color: #666;
    line-height: 1.6;
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`
```

### 5. 반응형 디자인

```jsx
const ResponsiveGrid = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
```

### 6. 애니메이션

```jsx
const AnimatedBox = styled.div`
  width: 100px;
  height: 100px;
  background: #ff6b6b;
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
```

## 설정

### Next.js 설정 (next.config.mjs)

```javascript
export default withNextra({
  compiler: {
    emotion: true
  }
})
```

## 장점

1. **성능**: 런타임 오버헤드가 적음
2. **유연성**: 모든 CSS 기능 지원
3. **개발자 경험**: 소스맵과 디버깅 도구 지원
4. **TypeScript**: 완벽한 타입 지원
5. **번들 크기**: 작은 번들 크기

## 기존 CSS와의 호환성

Emotion은 기존 CSS 모듈과 함께 사용할 수 있습니다:

```jsx
import styles from './Component.module.css'
import styled from '@emotion/styled'

const StyledComponent = styled.div`
  // emotion 스타일
`

function Component() {
  return (
    <div className={styles.existingClass}>
      <StyledComponent>
        {/* emotion 컴포넌트 */}
      </StyledComponent>
    </div>
  )
}
```

## 예제 컴포넌트

- `components/EmotionExample.jsx`: 기본 사용법 예제
- `components/EmotionAdvanced.jsx`: 고급 기능 예제

이 컴포넌트들을 참고하여 프로젝트에 emotion을 적용하세요!