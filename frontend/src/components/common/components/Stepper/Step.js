import React from 'react';

export default function Step({ step, isActive, isComplete }) {
  return (
    <div className={`step ${ isActive ? 'active' : ''} ${isComplete ? 'complete' : ''}` }>
      <div className="step-icon">{ isComplete ? '✔' : step }</div>
      <div className="step-label">Step {step}</div>
      
    </div>
  );
}


