import React from 'react'

import OnHoldModule from './Forms/modules/OnHoldModule';
import ArchiveModule from './Forms/modules/ArchiveModule';
import OpenModule from './Forms/modules/OpenModule';
import EditModule from './Forms/modules/EditModule';
import DeleteModule from './Forms/modules/DeleteModule';

import DeleteFormateur from './Forms/formateurs/DeleteFormateur';
import EditFormateur from './Forms/formateurs/EditFormateur';

import DeleteGroupe from './Forms/groupes/DeleteGroupe';
import EditGroupe from './Forms/groupes/EditGroupe';

import DeleteUser from './Forms/users/DeleteUser';
import EditUser from './Forms/users/EditUser';

import ShowResource from './Forms/ShowResource';

export default function ResourceActionHandler({ resource, resourceName, selectedAction, setIsValidated, setFormData }) {
  switch (selectedAction) {
    case 'on hold':
      return <OnHoldModule resource={resource} setIsValidated={setIsValidated} setFormData={setFormData} />;
      
    case 'archive':
      return <ArchiveModule resource={resource} setIsValidated={setIsValidated} setFormData={setFormData} />;
      
    case 'open':
      return <OpenModule resource={resource} setIsValidated={setIsValidated} setFormData={setFormData} />;
      
    default:
      return renderResourceAction(resourceName, resource, setIsValidated, setFormData, selectedAction);
  }
}

function renderResourceAction(resourceName, resource, setIsValidated, setFormData, selectedAction) {

  if(selectedAction === null) return <ShowResource resource={resource} />
  switch (resourceName) {
    case 'Modules': 
      return <EditModule resource={resource} setIsValidated={setIsValidated} setFormData={setFormData}/>

    case 'Formateurs':
      return <EditFormateur resource={resource} setIsValidated={setIsValidated} setFormData={setFormData}/>;
      
    case 'Groupes':
      return  <EditGroupe resource={resource} setIsValidated={setIsValidated} setFormData={setFormData}/>;
      
    case 'Users':
      return <EditUser resource={resource} setIsValidated={setIsValidated} setFormData={setFormData}/>;
      
    default:
      return <div>Error: Invalid resource or action</div>;
  }
}