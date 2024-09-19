import React, { useEffect, useRef } from 'react'
import { Component } from './styled'

type Props = {
  onOffsetHeightChange?: (height: number) => void
  style: React.CSSProperties
  isFixed?: boolean
  children: React.ReactNode
}

const defaultStyle = {
  padding: '0 16px',
  backgroundColor: 'transparent',
}

const Index: React.FC<Props> = (props) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    props.onOffsetHeightChange?.(ref.current?.offsetHeight ?? 0)
  }, [ref.current?.offsetHeight])

  return (
    <Component
      ref={ref}
      style={{
        ...defaultStyle,
        ...props.style,
        position: props.isFixed ? 'absolute' : 'fixed',
      }}
    >
      {props.children}
    </Component>
  )
}

export default Index
