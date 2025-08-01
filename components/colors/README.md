# Color Components

이 디렉토리는 프로젝트에서 사용할 색상 시스템을 관리합니다.

## 파일 구조

- `colorData.js` - 색상 데이터 정의
- `colorUtils.js` - 색상 관련 유틸리티 함수들
- `Excel.jsx` - Excel 스타일의 색상 표시 컴포넌트
- `ColorPalette.jsx` - 재사용 가능한 색상 팔레트 컴포넌트

## 사용법

### 1. 기본 색상 데이터 사용

```jsx
import { BLUES, GOLDS } from '@/components/colors/colorData'

// 특정 색상 사용
const blueColor = BLUES.ORIGINAL
const goldColor = GOLDS.LIGHT_80
```

### 2. 유틸리티 함수 사용

```jsx
import { getColor, getLightColors, getRandomColor } from '@/components/colors/colorUtils'

// 특정 색상 가져오기
const blueOriginal = getColor('BLUES', 'ORIGINAL')

// 밝은 색상들만 가져오기
const lightColors = getLightColors()

// 랜덤 색상 가져오기
const randomColor = getRandomColor()
```

### 3. Excel 컴포넌트 사용

```jsx
import Excel from '@/components/colors/Excel'

// Excel 스타일로 색상 표시 (copy to clipboard 기능 포함)
<Excel />
```

### 4. ColorPalette 컴포넌트 사용

```jsx
import ColorPalette from '@/components/colors/ColorPalette'

// 기본 색상 팔레트
<ColorPalette />

// 특정 색상만 표시
<ColorPalette colors={{ BLUES }} title="Blue Colors Only" />
```

## 색상 구조

각 색상은 다음 구조를 가집니다:

```javascript
{
  TEXT: 'COLOR_NAME',      // 색상 이름
  HEX: '#hexcode',         // HEX 값
  HSL: 'hsl(h, s%, l%)',  // HSL 값
  FONT: 'white|black'      // 텍스트 색상
}
```

## 사용 가능한 색상

### BLUES
- ORIGINAL: `#4472C4`
- LIGHT_80: `#D9E1F2`
- LIGHT_60: `#B4C6E7`
- LIGHT_40: `#8EA9DB`
- DARK_20: `#305496`
- DARK_40: `#203764`

### GOLDS
- ORIGINAL: `#ffc000`
- LIGHT_80: `#fff2cc`
- LIGHT_60: `#ffe699`
- LIGHT_40: `#ffd966`
- DARK_20: `#bf8f00`
- DARK_40: `#806000`

## 기능

### Copy to Clipboard
- 모든 색상 버튼에는 복사 기능이 포함되어 있습니다
- HEX 값과 HSL 값을 각각 복사할 수 있습니다
- 복사 시 시각적 피드백이 제공됩니다

### 반응형 디자인
- ColorPalette 컴포넌트는 그리드 레이아웃으로 반응형입니다
- 다양한 화면 크기에 맞게 자동으로 조정됩니다

### 접근성
- 색상 대비가 WCAG 가이드라인을 준수합니다
- 키보드 네비게이션이 지원됩니다