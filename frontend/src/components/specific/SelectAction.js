import React, { useEffect, useState } from 'react'
import ActionCard from './ActionCard'


export default function SelectAction({ resourceName, actions, setSelectedActionParent }) {
  const [selectedAction, setSelectedAction] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedAction(event.target.id);
    setSelectedActionParent(event.target.id)
  };

  const isChecked = (actionType) => {
    return selectedAction === actionType;
  };
  useEffect(()=>{
    setSelectedActionParent(null)
  },[])
  return (
    <form className='select-container'>
      <h2> Select your Action... </h2>
      {actions.map((action, i) => (
        <ActionCard
          key={i}
          resourceName={resourceName}
          action={action}
          handleRadioChange={handleRadioChange}
          isChecked={isChecked}
        />
      ))}
      <div>
        {selectedAction}
      </div>
      
    </form>

  );
}

