import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { axiosAuth } from '../../layouts/admin/AdminLayout';
import { toHeader } from '../utils/utils';
import Icon from './Icon';
import SelectModule from '../specific/SelectResource/SelectModule';


export default function SelectResource({ resourceName, setResource, actions, setSelectedAction, selectedAction }) {
  
  switch (resourceName) {
    case 'Modules':
      return <SelectModule setResource={setResource} setSelectedAction={setSelectedAction} actions={actions} selectedAction={selectedAction}/>
      break;
      
    default:
      break;
  }
}
