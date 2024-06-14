import React, { useState } from 'react'
import Icon from '../common/Icon'

export default function ActionCard({ resourceName, action, handleRadioChange, isChecked }) {
    return (
      <label htmlFor={action.type} className={'action-card ' + (isChecked(action.type) ? 'active' : '')}>
        <input
          type='radio'
          name='action'
          id={action.type}
          checked={isChecked(action.type)}
          onChange={handleRadioChange}
        />
        <div className='action-content'>
            <h1> {action.type} </h1>
            <Icon label={'lock'} />
        </div>
      </label>
    );
  }
  
