import React from 'react'
import './styles/feedbackLoader.css'

export default function FeedbackLoader({status}) {
  return (
    <div className='feedback-loader'>
        <div className={`f-loader ${status}`}>
            {status === 'success' && <span className="icon">✔</span>}
            {status === 'error' && <span className="icon">✖</span>}
        </div>
    </div>
  )
}
