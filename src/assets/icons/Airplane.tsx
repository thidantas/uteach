import { SvgIconProps } from 'types/types'

const AirplaneIcon = (props: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <g
      stroke="#FACC15"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="4"
      clipPath="url(#clip0_1_11897)"
    >
      <path d="m39.037 27.854 12.88-3.451a5.333 5.333 0 0 1 2.76 10.303L16.04 45.059 4.17 31.674l7.728-2.07 6.532 3.771 7.727-2.07-9.983-16.65 7.728-2.071zM8 56.5h48"></path>
    </g>
    <defs>
      <clipPath id="clip0_1_11897">
        <path fill="#fff" d="M0 .5h64v64H0z"></path>
      </clipPath>
    </defs>
  </svg>
)

export default AirplaneIcon
