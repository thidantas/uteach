'use client'

import { ReactNode, isValidElement } from 'react'

import { Theme } from 'types/styled-components'

import * as S from './styles'

export type HeadingProps = {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  size?: 'huge' | 'xhuge'
  color: keyof Theme['colors']
  underlineWord?: string
  iconWord?: string
}

const Heading = ({
  children,
  as = 'h1',
  size = 'huge',
  color,
  underlineWord,
  iconWord
}: HeadingProps) => {
  const HeadingTag = S.Wrapper.withComponent(as)

  const normalize = (str: string) => str.toLowerCase()

  const renderWord = (word: string, index: number) => {
    const isUnderline =
      underlineWord && normalize(word) === normalize(underlineWord)
    const isIcon = iconWord && normalize(word) === normalize(iconWord)

    if (isUnderline && isIcon) {
      return (
        <S.IconAbove key={`ui-${index}`}>
          <S.Highlight>{word}</S.Highlight>
        </S.IconAbove>
      )
    }

    if (isUnderline) {
      return <S.Highlight key={`u-${index}`}>{word}</S.Highlight>
    }

    if (isIcon) {
      return <S.IconAbove key={`i-${index}`}>{word}</S.IconAbove>
    }

    return <span key={index}>{word}</span>
  }

  const renderContent = () => {
    if (typeof children === 'string') {
      return children.split(/(\s+)/).map(renderWord)
    }

    if (Array.isArray(children)) {
      return children.map((child, i) => {
        if (typeof child === 'string') {
          return child
            .split(/(\s+)/)
            .map((word, j) => renderWord(word, i * 1000 + j))
        }

        if (isValidElement(child)) {
          return child
        }

        return null
      })
    }

    if (isValidElement(children)) {
      return children
    }

    return null
  }

  return (
    <HeadingTag size={size} color={color}>
      {renderContent()}
    </HeadingTag>
  )
}

export default Heading
