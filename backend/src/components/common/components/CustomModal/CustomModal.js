import React, { useEffect, useState } from 'react'
import Icon from '../../Icon'
import ModalContent from './ModalContent'
import './customModal.css'
import { axiosAuth } from '../../../../layouts/admin/AdminLayout';



export default function CustomModal({resourceName, id}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={()=>setIsOpen(true)}>
                <Icon label={'visibility'}/>
            </button>
            {isOpen && <ModalContent 
                open={isOpen} 
                onClose={()=>setIsOpen(false)} 
                resourceName={resourceName}
                id={id}
            />}
            
        </>
  )
}
