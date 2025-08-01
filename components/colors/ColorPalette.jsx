'use client'

import styled from '@emotion/styled'
import { useState } from 'react'
import { ALL_COLORS } from './colorData'

const PaletteContainer = styled.div`
  padding: 16px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 16px 0;
`

const PaletteTitle = styled.h3`
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
`

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
`

const ColorCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`

const ColorPreview = styled.div`
  height: 60px;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.fontColor};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  &.copied {
    background: #28a745;
  }
`

const ColorInfo = styled.div`
  padding: 12px;
  background: white;
`

const ColorName = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #333;
  margin-bottom: 4px;
`

const ColorValue = styled.div`
  font-size: 11px;
  color: #666;
  font-family: monospace;
  margin-bottom: 4px;
`

function ColorCardComponent({ color, name }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <ColorCard>
      <ColorPreview
        color={color.HEX}
        fontColor={color.FONT}
        onClick={() => copyToClipboard(color.HEX)}
        className={copied ? 'copied' : ''}
      >
        {copied ? '✓ Copied!' : color.HEX}
      </ColorPreview>
      <ColorInfo>
        <ColorName>{name}</ColorName>
        <ColorValue>HEX: {color.HEX}</ColorValue>
        <ColorValue>HSL: {color.HSL}</ColorValue>
      </ColorInfo>
    </ColorCard>
  )
}

export default function ColorPalette({ colors = ALL_COLORS, title = "Color Palette" }) {
  return (
    <PaletteContainer>
      <PaletteTitle>{title}</PaletteTitle>
      <ColorGrid>
        {Object.entries(colors).map(([colorType, colorVariants]) =>
          Object.entries(colorVariants).map(([variant, color]) => (
            <ColorCardComponent
              key={`${colorType}-${variant}`}
              color={color}
              name={color.TEXT}
            />
          ))
        )}
      </ColorGrid>
    </PaletteContainer>
  )
}