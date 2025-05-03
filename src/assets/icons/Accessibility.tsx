import * as React from 'react'

import { SvgIconProps } from 'types/types'

const AccessibilityIcon = (props: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <rect
      width="22"
      height="22"
      x="1"
      y="1.5"
      stroke="#E2E8F0"
      strokeWidth="2"
      rx="11"
    ></rect>
    <path
      fill="#E2E8F0"
      d="m11.91 15.516-.324 3.087a1 1 0 0 1-1.99-.21l.724-6.883H7.01a1.002 1.002 0 1 1 0-2.003h10a1.002 1.002 0 1 1 0 2.003H13.7l.723 6.885a1.001 1.001 0 1 1-1.99.209l-.323-3.088zm.1-6.01c-1.105 0-2-.897-2-2.003s.895-2.003 2-2.003a2.001 2.001 0 0 1 1.415 3.419 2 2 0 0 1-1.415.587"
    ></path>
  </svg>
)

export default AccessibilityIcon
