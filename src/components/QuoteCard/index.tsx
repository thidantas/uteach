import GridMatrix from 'components/GridMatrix'

import ChatQuoteIcon from 'assets/icons/ChatQuote'

import * as S from './styles'

export type QuoteCardProps = {
  imageUrl: string
  authorName: string
  authoredIn: string
  authorQuote: string
}

const QuoteCard = ({
  imageUrl,
  authorName,
  authoredIn,
  authorQuote
}: QuoteCardProps) => {
  return (
    <S.Wrapper>
      <S.QuoteBlock>
        <S.AuthorQuote>{authorQuote}</S.AuthorQuote>

        <S.AuthorInfo>
          {`${authorName},`}
          <div>
            <span>{authoredIn}</span>
          </div>
        </S.AuthorInfo>
      </S.QuoteBlock>

      <S.ImageWrapper>
        <S.ChatQuoteIcon>
          <ChatQuoteIcon />
        </S.ChatQuoteIcon>

        <S.ImageContainer>
          <S.StyledImage src={imageUrl} alt={authorName} fill />
        </S.ImageContainer>

        <S.DarkRectangle />

        <S.GridMatrixWrapper>
          <GridMatrix />
        </S.GridMatrixWrapper>
      </S.ImageWrapper>
    </S.Wrapper>
  )
}

export default QuoteCard
