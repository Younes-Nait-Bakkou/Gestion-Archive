import React from 'react'
import { toHeader } from '../../utils/utils'
import Icon from '../../common/Icon'

export default function ShowResource({resource}) {
  return (
    <div className='details'>
        {resource && Object.entries(resource).map(([key, value], i) => (
          <div className='detail-item' key={i}>
            <div className='detail-label'>{toHeader(key)}</div>
            <div className='detail-value'>
              {typeof value === 'boolean' ? <Icon label={value ? 'check' : 'close'} /> : value}
            </div>
          </div>
        ))}
    </div>
  )
}
