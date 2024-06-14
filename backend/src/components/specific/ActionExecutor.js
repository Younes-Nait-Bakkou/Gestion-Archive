import React, { useEffect, useState } from 'react'
import { axiosAuth } from '../../layouts/admin/AdminLayout'
import Loader from '../common/Loader'
import FeedbackLoader from '../common/FeedbackLoader';
import Icon from '../common/Icon';
import { Link } from 'react-router-dom';

export default function ActionExecutor({resourceName, resource, selectedAction, formData, isFeedbackActionsShown}) {
    
    const [action, setAction] = useState({url:'', method: null})
    const [status, setStatus] = useState('loading');

    function handleActionURL(){
        switch(selectedAction){
            case 'on hold':
                return setAction({url:`modules/${resource.id}/on-hold`, method:axiosAuth.patch, feedbackLabel:'Opening Module...'}) 
            
            case 'archive':
                return setAction({url:`modules/${resource.id}/archive`, method:axiosAuth.patch, feedbackLabel:'Opening Module...'})  
            
            case 'open':
                return setAction({url:`modules/${resource.id}/open`, method:axiosAuth.patch, feedbackLabel:'Opening Module...'}) 
            
            default:
                if(selectedAction === 'delete'){
                    return setAction({url:`${resourceName.toLowerCase()}/${resource.id}`, method:axiosAuth.delete, feedbackLabel:`Deleting ${resourceName} ...`})
                }else{
                    return setAction({url:`${resourceName.toLowerCase()}/${resource.id}`, method:axiosAuth.put, feedbackLabel:`Updating ${resourceName} ...`}) 
                } 
        }
    }  
    

    useEffect(()=>{
        handleActionURL()
    },[resourceName, resource, selectedAction])

    useEffect(()=>{
        if(action.method && action.url){
            setStatus('loading')
            if(action.method !== axiosAuth.delete){
                action.method(action.url,formData)
                    .then((r)=>{
                        setStatus('success')
                    })
                    .catch((err)=>{
                        console.error(err); 
                        setStatus('error')
                    })
                
            }else{
                action.method(action.url)
                    .then((r)=>{
                        
                        setStatus('success')
                    })
                    .catch((err)=>{
                        console.error(err)
                        setStatus('error')
                        
                    })
                    
            }
        }
    },[action])

    return (
    <div className='feedback'>
        <div className='feedback-container'>
            <FeedbackLoader status={status} />
            <div className='feedback-content'>
                    {action.feedbackLabel}
            </div>
            {!isFeedbackActionsShown ? ""
                 : (<div className='feedback-actions'>
                 <Link to='/admin/dashboard'>
                     Dashboard
                     <Icon label={"arrow_forward"}/>
                 </Link>
             </div>) }
            
        </div>
    </div>
    )
}
