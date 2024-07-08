import React from 'react'
import { Header } from '@/components'

const Index: React.FC = () => {
  const onSearch = (value: string) => {
    console.log(value)
  }
  return (
    <div>
      <Header onSearch={onSearch} isHide={false} />
    </div>
  )
}

export default Index
