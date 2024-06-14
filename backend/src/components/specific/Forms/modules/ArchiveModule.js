import React, { useEffect, useState } from 'react'
import '../resource-form.css'
import { handleValidation } from '../../../utils/utils';

export default function ArchiveModule({resource, setIsValidated, setFormData}) {
  const [modulesDossiers, setModulesDossiers] = useState({ value: '', isValidated: false });
  const [nombreCopies, setNombreCopies] = useState({ value: '', isValidated: false });
  const [emplacementArchiv, setEmplacementArchiv] = useState({ value: '', isValidated: false });
  const [dateRetour, setDateRetour] = useState({ value: '', isValidated: resource.status !== "opened"});
 
  const formStates = [modulesDossiers, nombreCopies, emplacementArchiv, dateRetour];

  const handleChange = (event) => {
    const { name, value } = event.target;
    const currentDate = new Date().toISOString().split('T')[0];
    switch (name) {
      case 'modulesDossiers':
        setModulesDossiers({ value, isValidated: !!value });
        break;
      case 'nombreCopies':
        setNombreCopies({ value, isValidated: !!value });
        break;
      case 'emplacementArchiv':
        setEmplacementArchiv({ value, isValidated: !!value });
        break;
      case 'dateRetour':
        setDateRetour({ value, isValidated: value <= currentDate });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
      handleValidation(formStates, setIsValidated);
      setFormData({
          modulesDossiers: modulesDossiers.value,
          nombreCopies: nombreCopies.value,
          emplacementArchiv: emplacementArchiv.value,
          dateRetour: dateRetour.value
      });
  }, [modulesDossiers, nombreCopies, emplacementArchiv, dateRetour]);

  return (
      <form className='form-container'>
          <h2>Formulaire d'Archives</h2>
          <div className='form-content'>
              <div>
                  <label htmlFor="modules-dossiers">Modules Dossiers:</label>
                  <input
                      type="text"
                      id="modules-dossiers"
                      name="modulesDossiers"
                      value={modulesDossiers.value}
                      onChange={handleChange}
                  />
              </div>
              <div>
                  <label htmlFor="nombre-copies">Nombre Copies:</label>
                  <input
                      type="number"
                      id="nombre-copies"
                      name="nombreCopies"
                      value={nombreCopies.value}
                      onChange={handleChange}
                  />
              </div>
              <div>
                  <label htmlFor="emplacement-archiv">Emplacement Archiv:</label>
                  <input
                      type="text"
                      id="emplacement-archiv"
                      name="emplacementArchiv"
                      value={emplacementArchiv.value}
                      onChange={handleChange}
                  />
              </div>
              {resource.status === "opened" && (<div>
                  <label htmlFor="date-retour">Date Retour:</label>
                  <input
                      type="date"
                      id="date-retour"
                      name="dateRetour"
                      value={dateRetour.value}
                      onChange={handleChange}
                  />
              </div>)}
          </div>
      </form>
  );
}