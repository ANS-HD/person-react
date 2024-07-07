import React from 'react'
import { Header } from '@/components'

const Index: React.FC = () => {
  const onSearch = (value: string) => {
    console.log(value);
    
  }
  return <div className='"container w-full mt-2 mb-2'>
     <Header onSearch={onSearch} isHide={false} />
  </div>
}

export default Index
