import { TagTypes } from 'types/types'
import { TAG_CONFIG } from './constants'

import * as S from './styles'

export type TagProps = {
  tagType: TagTypes
}

const Tag = ({ tagType }: TagProps) => {
  const { text, background, color } = TAG_CONFIG[tagType]

  return (
    <S.Wrapper background={background} color={color}>
      <span>{text}</span>
    </S.Wrapper>
  )
}

export default Tag
