import * as S from './styles'

export type ReviewHighlightProps = {
  image: string
  userName: string
  profession: string
  userDepoiment: string
}

const ReviewHighlight = ({
  image,
  userName,
  profession,
  userDepoiment
}: ReviewHighlightProps) => (
  <S.Wrapper>
    <S.UserReview>{userDepoiment}</S.UserReview>

    <S.User>
      <S.UserImage src={image} alt={userName} />

      <S.UserInfo>
        <S.UserName>{userName}</S.UserName>
        <S.UserProfession>{profession}</S.UserProfession>
      </S.UserInfo>
    </S.User>
  </S.Wrapper>
)

export default ReviewHighlight
