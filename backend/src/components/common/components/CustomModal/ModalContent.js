import React, { useEffect, useState } from 'react'
import {createPortal} from 'react-dom'
import Icon from '../../Icon'
import { axiosAuth } from '../../../../layouts/admin/AdminLayout';
import '../../../specific/Forms/resource-form.css'
import ResourceActionHandler from '../../../specific/ResourceActionHandler';
import Loader from '../../Loader';
import ActionExecutor from '../../../specific/ActionExecutor';
import { useNavigate } from 'react-router-dom';

export default function ModalContent({open, onClose,resourceName,id}) {
    const [actions,setActions] = useState([])
    const [selectedAction, setSelectedAction] = useState(null);
    const [formData, setFormData] = useState([])
    const [isValidated, setIsValidated]= useState(false)
    const [isLoading, setIsLoading]= useState(null)
    const [resource, setResource] = useState();
    const [isExecuted,setIsExecuted] = useState(false);
    const navigate= useNavigate()
    const editAction = {label:'Edit',action:'edit',icon:'edit', class:'edit-action'}
    const onHoldAction = {label:'Put On Hold',action:'on hold',icon:'pause', class:'on-hold-action'}
    const deleteAction = {label:'Delete',action:'delete',icon:'delete', class:'delete-action'}
    const archiveAction = {label:'Archive', action:'archive', icon:'archive', class:'archive-action'}
    const openAction = {label:'Open', action:'open', icon:'lock_open', class:'open-action'}

    const fetchResource = () => {
        setIsLoading(true)
        axiosAuth.get(`${resourceName.toLowerCase()}/${id}`)
            .then(r => {
                const {details, ...rest} = r.data.data
                const newResource = {...rest, ...details}
                setResource(newResource);
                console.log(r.data);
            })
            .catch(err => {
                console.error(err);
            })
            .finally(()=>setIsLoading(false))
    };

    useEffect(()=>{
        if(!resource) fetchResource()
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

    if(!open) return null
    return createPortal(
        <>
            <div className='modal-overlay' onClick={onClose}></div>
            <div className={`modal-content ${isLoading ? 'loading' : 'loaded'}`}>
            {!isLoading ? 
                resource && (
                <>
                    {!isExecuted ? <ResourceActionHandler 
                        resourceName={resourceName} 
                        resource={resource} 
                        selectedAction={selectedAction} 
                        setIsValidated={setIsValidated} 
                        setFormData={setFormData}
                    /> :
                    <ActionExecutor
                        resourceName={resourceName} 
                        resource={resource} 
                        selectedAction={selectedAction}
                        formData={formData}
                        isFeedbackActionsShown={false}
                    />}
                    <div className='modal-actions'>
                        {selectedAction &&  
                        (!isExecuted ? 
                            <>
                                <button onClick={()=>setSelectedAction(null)}>
                                    <Icon label={'arrow_back'}/>
                                    Return
                                </button >
                                <button onClick={()=>setIsExecuted(true)} disabled={!isValidated}>
                                    <Icon label={'save'} />
                                    Save
                                </button>
                            </>
                            :  
                            <button onClick={()=>{setSelectedAction(null); navigate('/admin/dashboard')}}>
                                <Icon label={'arrow_back'}/>
                                Dashboard
                            </button >
                        )
                            
                        }
                        {!selectedAction && actions.map((action,i)=>(
                            <button className={`${action.action}`} onClick={()=>setSelectedAction(action.action)}>
                                {action.label}
                                <Icon label={action.icon}/>
                            </button>
                        ))}
                        <button  onClick={onClose}>
                            Close
                            <Icon label={'close'}/> 
                        </button>
                    </div>
                </>
                )
            :
             <Loader />}
            
                
            </div>
        </>
        ,
        document.getElementById('portal')
    )
}
