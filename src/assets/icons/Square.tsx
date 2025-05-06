import { SvgIconProps } from 'types/types'

const SquareIcon = (props: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.321"
      d="M11.977 2.261H2.114a.35.35 0 0 0-.353.353v9.863c0 .195.158.353.353.353h9.863a.35.35 0 0 0 .352-.353V2.614a.35.35 0 0 0-.352-.353"
    ></path>
  </svg>
)

export default SquareIcon
