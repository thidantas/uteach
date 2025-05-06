import { ReactNode } from 'react'

import * as S from './styles'

export type TaskCardProps = {
  tag?: ReactNode
  title: string
  buttonText: string
  description: string
}

const TaskCard = ({ tag, title, description, buttonText }: TaskCardProps) => (
  <S.Wrapper>
    <S.Content>
      {tag}

      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Content>

    <S.CustomButton color="outlined">{buttonText}</S.CustomButton>
  </S.Wrapper>
)

export default TaskCard
