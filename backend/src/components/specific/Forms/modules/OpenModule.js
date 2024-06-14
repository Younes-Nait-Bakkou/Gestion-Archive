import React, { useEffect, useState } from 'react';
import '../resource-form.css';
import { handleValidation } from '../../../utils/utils';

export default function ArchiveModule({ resource, setIsValidated, setFormData }) {
  const [motif, setMotif] = useState({ value: '', isValidated: false });
  const [demandeur, setDemandeur] = useState({ value: '', isValidated: false });
  const [dateOuverture, setDateOuverture] = useState({ value: '', isValidated: false });
  const [datePrevueRetour, setDatePrevueRetour] = useState({ value: '', isValidated: false });
  const [remarques, setRemarques] = useState({ value: '', isValidated: false });

  const formStates = [motif, demandeur, dateOuverture, datePrevueRetour, remarques];

  const handleChange = (event) => {
    const { name, value } = event.target;
    const currentDate = new Date().toISOString().split('T')[0];
    switch (name) {
      case 'motif':
        setMotif({ value, isValidated: !!value });
        break;
      case 'demandeur':
        setDemandeur({ value, isValidated: !!value });
        break;
      case 'dateOuverture':
        setDateOuverture({ value, isValidated: !!value });
        break;
      case 'datePrevueRetour':
        setDatePrevueRetour({ value, isValidated: value >= currentDate});
        break;
      case 'remarques':
        setRemarques({ value, isValidated: !!value });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleValidation(formStates, setIsValidated);
    setFormData({
      motif: motif.value,
      demandeur: demandeur.value,
      dateOuverture: dateOuverture.value,
      datePrevueRetour: datePrevueRetour.value,
      remarques: remarques.value
    });
  }, [motif, demandeur, dateOuverture, datePrevueRetour, remarques]);

  return (
    <form className='form-container'>
      <h2>Formulaire d'Archives</h2>
      <div className='form-content'>
        <div>
          <label htmlFor="motif">Motif:</label>
          <input
            type="text"
            id="motif"
            name="motif"
            value={motif.value}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="demandeur">Demandeur:</label>
          <input
            type="text"
            id="demandeur"
            name="demandeur"
            value={demandeur.value}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="date-ouverture">Date Ouverture:</label>
          <input
            type="date"
            id="date-ouverture"
            name="dateOuverture"
            value={dateOuverture.value}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="date-prevue-retour">Date Prevue Retour:</label>
          <input
            type="date"
            id="date-prevue-retour"
            name="datePrevueRetour"
            value={datePrevueRetour.value}
            onChange={handleChange}
          />
        </div>

        <div className='textarea'>
          <label htmlFor="remarques">Remarques:</label>
          <textarea
            id="remarques"
            name="remarques"
            value={remarques.value}
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  );
}
