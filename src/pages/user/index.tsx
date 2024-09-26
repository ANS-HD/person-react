import React from 'react'
import { Sign } from '../../components'

const Index: React.FC = () => {
  return <div>{localStorage.getItem('Token') ? <>12321</> : <Sign />}</div>
}

export default Index
