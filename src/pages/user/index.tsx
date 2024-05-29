import React from 'react'
import { Sign } from '../../components'
import { Pages } from './styled'

const Index: React.FC = () => {
  return <Pages>

    {
      localStorage.getItem('Token')? <></>:
      <Sign />
    }
  </Pages>
}

export default Index
