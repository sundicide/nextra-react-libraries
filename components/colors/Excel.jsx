'use client'

import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useState } from 'react'
import { BLUES, GOLDS } from './colorData'

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`

const Section = styled.div`
  margin-bottom: 40px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const SectionHeader = styled.div`
  padding: 16px 20px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: white;
  background: ${props => props.color};
`

const Row = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px 20px;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  background: white;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #f8f9fa;
  }
`

const ColorName = styled.div`
  width: 180px;
  font-weight: 500;
  color: #333;
  flex-shrink: 0;
`

const ColorButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  gap: 12px;
`

const ColorButton = styled.button`
  background: ${props => props.bgColor};
  padding: 12px 16px;
  border-radius: 8px;
  width: 180px;
  color: ${props => props.font};
  text-transform: uppercase;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  &.copied {
    background: #28a745;
  }
`

function ColorRow({ item, type }) {
  const [copiedHex, setCopiedHex] = useState(false)
  const [copiedHsl, setCopiedHsl] = useState(false)

  const copyToClipboard = async (text, setter) => {
    try {
      await navigator.clipboard.writeText(text)
      setter(true)
      setTimeout(() => setter(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <Row>
      <ColorName>{item.TEXT}</ColorName>
      <ColorButtonsContainer>
        <ColorButton
          bgColor={item.HEX}
          font={item.FONT}
          onClick={() => copyToClipboard(item.HEX, setCopiedHex)}
          className={copiedHex ? 'copied' : ''}
        >
          {copiedHex ? '✓ Copied!' : item.HEX}
        </ColorButton>
        <ColorButton
          bgColor={item.HEX}
          font={item.FONT}
          onClick={() => copyToClipboard(item.HSL, setCopiedHsl)}
          className={copiedHsl ? 'copied' : ''}
        >
          {copiedHsl ? '✓ Copied!' : item.HSL}
        </ColorButton>
      </ColorButtonsContainer>
    </Row>
  )
}

export default function Excel() {
  return (
    <Container>
      <Section>
        <SectionHeader color="#4472C4">Blue Colors</SectionHeader>
        <ColorRow item={BLUES.ORIGINAL} type="blue" />
        <ColorRow item={BLUES.LIGHT_80} type="blue" />
        <ColorRow item={BLUES.LIGHT_60} type="blue" />
        <ColorRow item={BLUES.LIGHT_40} type="blue" />
        <ColorRow item={BLUES.DARK_20} type="blue" />
        <ColorRow item={BLUES.DARK_40} type="blue" />
      </Section>

      <Section>
        <SectionHeader color="#ffc000">Gold Colors</SectionHeader>
        <ColorRow item={GOLDS.ORIGINAL} type="gold" />
        <ColorRow item={GOLDS.LIGHT_80} type="gold" />
        <ColorRow item={GOLDS.LIGHT_60} type="gold" />
        <ColorRow item={GOLDS.LIGHT_40} type="gold" />
        <ColorRow item={GOLDS.DARK_20} type="gold" />
        <ColorRow item={GOLDS.DARK_40} type="gold" />
      </Section>
    </Container>
  )
}