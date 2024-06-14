import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { axiosAuth } from '../../../layouts/admin/AdminLayout';
import { toHeader } from '../../../components/utils/utils';
import Icon from '../../../components/common/Icon';

export default function SelectModule({setResource, actions, setSelectedAction, selectedAction }) {  

  const [filiereOptions, setFiliereOptions] = useState([]);
  const [groupeOptions, setGroupeOptions] = useState([]);
  const [moduleOptions, setModuleOptions] = useState([]);

  const [selectedFiliere, setSelectedFiliere] = useState(null);
  const [selectedGroupe, setSelectedGroupe] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);

  const [selectedModuleDetails, setSelectedModuleDetails] = useState(null);

  const [isLoadingFiliere, setIsLoadingFiliere] = useState(false);
  const [isLoadingGroupe, setIsLoadingGroupe] = useState(false);
  const [isLoadingModule, setIsLoadingModule] = useState(false);

  useEffect(() => {
    fetchFiliereOptions();
    setResource(null)
  }, []);
  
  useEffect(() => {
    if (selectedModule) return fetchModule(selectedModule.value);
  }, [selectedModule]);

  const fetchModule = (id) => {
    axiosAuth.get(`/modules/${id}`)
      .then(response => {
        const { details, ...rest } = response.data.data;
        const newContent = { ...rest, ...details };
        setSelectedModuleDetails(newContent);
        setResource(newContent)
      })
      .catch(error => {
        console.error('Error fetching module details:', error);
      });
  };

  const fetchFiliereOptions = () => {
    setIsLoadingFiliere(true);
    axiosAuth.get('/filiere-options')
      .then(response => {
        setFiliereOptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching filiere options:', error);
      })
      .finally(() => {
        setIsLoadingFiliere(false);
      });
  };

  const fetchGroupeOptions = (filiereId) => {
    setIsLoadingGroupe(true);
    axiosAuth.get(`/groupe-options?filiere=${filiereId}`)
      .then(response => {
        setGroupeOptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching groupe options:', error);
      })
      .finally(() => {
        setIsLoadingGroupe(false);
      });
  };

  const fetchModuleOptions = (groupeId) => {
    setIsLoadingModule(true);
    axiosAuth.get(`/module-options?groupe=${groupeId}`)
      .then(response => {
        setModuleOptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching module options:', error);
      })
      .finally(() => {
        setIsLoadingModule(false);
      });
  };

  const handleFiliereChange = (selectedOption) => {
    setSelectedFiliere(selectedOption);
    setSelectedGroupe(null); 
    setSelectedModule(null);
    setGroupeOptions([]);
    setModuleOptions([]);
    fetchGroupeOptions(selectedOption.value);
  };

  const handleGroupeChange = (selectedOption) => {
    setSelectedGroupe(selectedOption);
    setSelectedModule(null);
    setModuleOptions([]);
    fetchModuleOptions(selectedOption.value);
  };

  const handleModuleChange = (selectedOption) => {
    setSelectedModule(selectedOption);
  };

  return (
    <form className='select-container'>
      <h2>Select your Module...</h2>
      <div className='select-content'>
        <div className='select-box'>
          <label>Filiere</label>
          <Select
            options={filiereOptions}
            value={selectedFiliere}
            onChange={handleFiliereChange}
            isLoading={isLoadingFiliere}
          />
        </div>
        <div className='select-box'>
          <label>Groupe</label>
          <Select
            options={groupeOptions}
            value={selectedGroupe}
            onChange={handleGroupeChange}
            isDisabled={!selectedFiliere}
            isLoading={isLoadingGroupe}
          />
        </div>
        <div className='select-box'>
          <label>Module</label>
          <Select
            options={moduleOptions}
            value={selectedModule}
            onChange={handleModuleChange}
            isDisabled={!selectedGroupe}
            isLoading={isLoadingModule}
          />
        </div>
      </div>
      <div className='select-details'>
        {selectedModuleDetails && Object.entries(selectedModuleDetails).map(([key, value], i) => (
          <div className='detail-item' key={i}>
            <div className='detail-label'>{toHeader(key)}</div>
            <div className='detail-value'>
              {typeof value === 'boolean' ? <Icon label={value ? 'check' : 'close'} /> : value}
            </div>
          </div>
        ))}
      </div>
      <div className='action-buttons'>
        { actions && actions.map((a,i)=>{
          return (
            <button key={i} type='button' className={`${a.class} ${selectedAction === a.action ? 'active' : ''}`} onClick={()=>setSelectedAction(a.action)} >
              {a.label}
              <Icon label={a.icon} />
            </button>
          )
        })}
        </div>
    </form>
  );
}
