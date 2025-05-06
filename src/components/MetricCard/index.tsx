import * as S from './styles'

export type MetricCardProps = {
  icon: React.ReactNode
  value: number | string
  label: string
}

const MetricCard = ({ icon, value, label }: MetricCardProps) => (
  <S.Wrapper>
    {icon}
    <S.Value>{value}</S.Value>
    <S.Label>{label}</S.Label>
  </S.Wrapper>
)

export default MetricCard
