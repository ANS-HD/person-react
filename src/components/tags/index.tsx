import { tags } from '@/service'
import { useRequest } from 'ahooks'
import { message } from 'antd'
import React from 'react'

type Props = {
  onChange?: (value: string) => void
}

const Index: React.FC<Props> = (props) => {
  const tagsList = useRequest(() => tags(), {
    onSuccess: (res) => {
      console.log('ress', res.data.list)
    },
    onError: (err) => message.error(err.message),
  })

  return (
    <div>
      {!tagsList.loading && (
        <div style={{ display: 'flex' }}>
          {tagsList.data.data.list?.map((item) => {
            return (
              <p
                onClick={() => props.onChange(item.tagName)}
                style={{
                  margin: '8px',
                  padding: '8px 16px',
                  borderRadius: '5px',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ef4444'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
                key={item.id}
              >
                {item.tagName}
              </p>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Index
