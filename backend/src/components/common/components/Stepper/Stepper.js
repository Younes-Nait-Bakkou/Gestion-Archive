import React, { useEffect, useState } from 'react';
import Step from './Step';
import './stepper.css'
import SelectAction from '../../../specific/SelectAction';
import SelectResource from '../../SelectResource';
import FormResource from '../../../specific/ResourceActionHandler';
import Icon from '../../Icon';
import ResourceActionHandler from '../../../specific/ResourceActionHandler';
import ActionExecutor from '../../../specific/ActionExecutor';

export default function Stepper({resourceName}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAction, setSelectedAction] = useState(null);
  const [resource,setResource]= useState(null)
  const [isValidated, setIsValidated]= useState(false);
  const [actions,setActions] = useState([]);
  const [formData,setFormData] = useState([]);
  

  /* ----------- Predfined Actions ----------- */
  const editAction = {label:'Edit',action:'edit',icon:'edit', class:'edit-action'}
  const onHoldAction = {label:'Put On Hold',action:'on hold',icon:'pause', class:'on-hold-action'}
  const deleteAction = {label:'Delete',action:'delete',icon:'delete', class:'delete-action'}
  const archiveAction = {label:'Archive', action:'archive', icon:'archive', class:'archive-action'}
  const openAction = {label:'Open', action:'open', icon:'lock_open', class:'open-action'}

  const steps = 3; 
    
  const handleNext = (action) => {
    if (currentStep < steps) {
      setCurrentStep(currentStep + 1);
      setActions(null)
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setActions(null)
    }
  };

  const isNextDisabled = ()=>{
    switch (currentStep) {
      case 1:
        return resource === null || selectedAction === null
      case 2:
        return  !isValidated
      case 3:
        return 
      case 4:
        return 
      default:
        return null;
    }
  }
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return  <SelectResource 
                  resourceName={resourceName} 
                  setResource={setResource} 
                  actions={actions} 
                  setSelectedAction={setSelectedAction} 
                  selectedAction={selectedAction} 
                />
      case 2:
        return <ResourceActionHandler 
                  resourceName={resourceName} 
                  resource={resource} 
                  selectedAction={selectedAction} 
                  setIsValidated={setIsValidated} 
                  setFormData={setFormData}
                /> ;
      case 3:
        return <ActionExecutor
                  resourceName={resourceName} 
                  resource={resource} 
                  selectedAction={selectedAction}
                  formData={formData}
                />
      default:
        return null;
    }
  };

  useEffect(()=>{
    console.log(resource)
    if(resource) {
      setSelectedAction(null)
      switch (resource.status) {
        
        case 'in progress':
          setActions([
            deleteAction,
            onHoldAction,
            editAction
          ])
          break;
        case 'on hold':
          setActions([
            deleteAction,
            archiveAction,
            editAction
          ])
          break;
        case 'archived':
          setActions([
            deleteAction,
            openAction,
            editAction
          ])
          break;
        case 'opened':
          setActions([
            deleteAction,
            archiveAction,
            editAction
          ])
          break;
        default:
          setActions([
            deleteAction,
            editAction
          ])
          break;
      }
  }
    
  },[resource])

  return (
    <div className="stepper">
      {/* <div className="steps">
        {Array.from({ length: steps }).map((_, index) => (
          <Step
            key={index}
            step={index + 1}
            isActive={currentStep === index + 1}
            isComplete={currentStep > index + 1}
          />
        ))}
      </div> */}
      <div className="step-content">
        {renderStepContent()}
      </div>
      <div className="stepper-buttons">
        <button onClick={handlePrevious} disabled={currentStep === 1}>
          Previous
        </button>
        
        <button onClick={handleNext} disabled={isNextDisabled()}>
          Next
        </button>
        
      </div>
    </div>
  );
}


