// ReactJs
import React, { ReactNode } from 'react'

// NextJs
import Link from 'next/link'

// Tipagem
interface ButtonProps {
  to: string
  Icon: ReactNode
  text: string
}

// Component
const Button: React.FC<ButtonProps> = ({ to, Icon, text }) => {
  return (
    <Link href={to} className={'button'}>
      {Icon} {text}
    </Link>
  )
}

export default Button
