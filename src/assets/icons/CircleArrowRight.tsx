import { SvgIconProps } from 'types/types'

const CircleArrowRightIcon = (props: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="54"
    height="55"
    fill="none"
    viewBox="0 0 54 55"
    {...props}
  >
    <g filter="url(#filter0_dd_1_11909)">
      <rect
        width="46"
        height="46"
        x="4"
        y="3.5"
        stroke="currentColor"
        strokeWidth="2"
        rx="23"
      ></rect>
      <path fill="currentColor" d="M21 26.5h12.5zm12.5 0-6-6zm0 0-6 6z"></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m33.5 26.5-6 6m-6.5-6h12.5zm12.5 0-6-6z"
      ></path>
    </g>
    <defs>
      <filter
        id="filter0_dd_1_11909"
        width="54"
        height="54"
        x="0"
        y="0.5"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset></feOffset>
        <feGaussianBlur stdDeviation="1"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_11909"
        ></feBlend>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="1"></feOffset>
        <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
        <feBlend
          in2="effect1_dropShadow_1_11909"
          result="effect2_dropShadow_1_11909"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_1_11909"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
)

export default CircleArrowRightIcon
