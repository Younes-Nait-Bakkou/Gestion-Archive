import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { axiosAuth } from '../../../layouts/admin/AdminLayout';
import { toHeader } from '../../../components/utils/utils';
import Icon from '../../../components/common/Icon';

export default function SelectGroupe({ setResource, actions, setSelectedAction, selectedAction }) {
  const [secteurOptions, setSecteurOptions] = useState([]);
  const [filiereOptions, setFiliereOptions] = useState([]);
  const [groupeOptions, setGroupeOptions] = useState([]);

  const [selectedSecteur, setSelectedSecteur] = useState(null);
  const [selectedFiliere, setSelectedFiliere] = useState(null);
  const [selectedGroupe, setSelectedGroupe] = useState(null);

  const [selectedGroupeDetails, setSelectedGroupeDetails] = useState(null);

  const [isLoadingSecteur, setIsLoadingSecteur] = useState(false);
  const [isLoadingFiliere, setIsLoadingFiliere] = useState(false);
  const [isLoadingGroupe, setIsLoadingGroupe] = useState(false);

  useEffect(() => {
    fetchSecteurOptions();
    setResource(null);
  }, []);

  useEffect(() => {
    if (selectedGroupe) return fetchGroupe(selectedGroupe.value);
  }, [selectedGroupe]);

  const fetchGroupe = (id) => {
    axiosAuth.get(`/groupes/${id}`)
      .then(response => {
        const { details, ...rest } = response.data.data;
        const newContent = { ...rest, ...details };
        setSelectedGroupeDetails(newContent);
        setResource(newContent);
      })
      .catch(error => {
        console.error('Error fetching groupe details:', error);
      });
  };

  const fetchSecteurOptions = () => {
    setIsLoadingSecteur(true);
    axiosAuth.get('/secteur-options')
      .then(response => {
        setSecteurOptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching secteur options:', error);
      })
      .finally(() => {
        setIsLoadingSecteur(false);
      });
  };

  const fetchFiliereOptions = (secteurId) => {
    setIsLoadingFiliere(true);
    axiosAuth.get(`/filiere-options?secteur=${secteurId}`)
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

  const handleSecteurChange = (selectedOption) => {
    setSelectedSecteur(selectedOption);
    setSelectedFiliere(null);
    setSelectedGroupe(null);
    setFiliereOptions([]);
    setGroupeOptions([]);
    fetchFiliereOptions(selectedOption.value);
  };

  const handleFiliereChange = (selectedOption) => {
    setSelectedFiliere(selectedOption);
    setSelectedGroupe(null);
    setGroupeOptions([]);
    fetchGroupeOptions(selectedOption.value);
  };

  const handleGroupeChange = (selectedOption) => {
    setSelectedGroupe(selectedOption);
  };

  return (
    <form className='select-container'>
      <h2>Select your Groupe...</h2>
      <div className='select-content'>
        <div className='select-box'>
          <label>Secteur</label>
          <Select
            options={secteurOptions}
            value={selectedSecteur}
            onChange={handleSecteurChange}
            isLoading={isLoadingSecteur}
          />
        </div>
        <div className='select-box'>
          <label>Filière</label>
          <Select
            options={filiereOptions}
            value={selectedFiliere}
            onChange={handleFiliereChange}
            isDisabled={!selectedSecteur}
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
      </div>
      <div className='select-details'>
        {selectedGroupeDetails && Object.entries(selectedGroupeDetails).map(([key, value], i) => (
          <div className='detail-item' key={i}>
            <div className='detail-label'>{toHeader(key)}</div>
            <div className='detail-value'>
              {typeof value === 'boolean' ? <Icon label={value ? 'check' : 'close'} /> : value}
            </div>
          </div>
        ))}
      </div>
      <div className='action-buttons'>
        {actions && actions.map((a, i) => (
          <button key={i} type='button' className={`${a.class} ${selectedAction === a.action ? 'active' : ''}`} onClick={() => setSelectedAction(a.action)}>
            {a.label}
            <Icon label={a.icon} />
          </button>
        ))}
      </div>
    </form>
  );
}
