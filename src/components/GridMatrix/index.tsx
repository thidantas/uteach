import SquareIcon from 'assets/icons/Square'

import * as S from './styles'

const GridMatrix = () => {
  const totalSquares = 36

  return (
    <S.GridContainer>
      {Array.from({ length: totalSquares }, (_, i) => (
        <SquareIcon key={i} />
      ))}
    </S.GridContainer>
  )
}

export default GridMatrix
