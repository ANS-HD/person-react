import React, { useEffect, useRef } from 'react'

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
    <div
      className=" left-0 bottom-0 w-full"
      ref={ref}
      style={{
        ...defaultStyle,
        ...props.style,
        position: props.isFixed ? 'absolute' : 'fixed'
      }}
    >
      {props.children}
    </div>
  )
}

export default Index
