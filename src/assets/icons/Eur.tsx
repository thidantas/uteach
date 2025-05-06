import { SvgIconProps } from 'types/types'

const EurIcon = (props: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      stroke="#E5E7EB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M18.5 5.304a8 8 0 1 0 0 14.392M5 10.5h11M5 14.5h11"
    ></path>
  </svg>
)

export default EurIcon
