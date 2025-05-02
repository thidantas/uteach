import * as React from 'react'

import { SvgIconProps } from 'types/types'

const ArrowRightIcon = (props: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      fill="currentColor"
      d="m10.586 5.673-3.95-3.95A1 1 0 0 1 8.05.31l5.657 5.657a1 1 0 0 1 0 1.414L8.05 13.037a1.002 1.002 0 0 1-1.72-.703 1 1 0 0 1 .306-.71l3.95-3.95H1a1 1 0 1 1 0-2z"
    />
  </svg>
)

export default ArrowRightIcon
