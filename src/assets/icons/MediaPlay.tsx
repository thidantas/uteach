import { SvgIconProps } from 'types/types'

const MediaPlayIcon = (props: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="21"
    fill="none"
    viewBox="0 0 20 21"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 20.266c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m4.126-6.254-4.055 2.898c-.905.646-2.13.39-2.737-.576A2.2 2.2 0 0 1 7 13.164V7.368c0-1.16.883-2.102 1.972-2.102.391 0 .774.124 1.099.356l4.055 2.898c.905.647 1.146 1.952.54 2.917-.14.225-.324.42-.54.575M8.972 7.368v5.796l4.055-2.898z"
    ></path>
  </svg>
)

export default MediaPlayIcon
