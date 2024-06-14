import React, { useEffect, useState } from 'react';
import '../resource-form.css';
import { handleValidation } from '../../../utils/utils';
import Icon from '../../../common/Icon';

export default function EditModule({ resource, setIsValidated, setFormData }) {
    const [dateEFM, setDateEFM] = useState({ value: resource.dateEFM || '', isValidated: true });
    const [datePrevueEFM, setDatePrevueEFM] = useState({ value: resource.datePrevueEFM || '', isValidated: true });
    const [code, setCode] = useState({ value: resource.code || '', isValidated: true });
    const [intitule, setIntitule] = useState({ value: resource.intitule || '', isValidated: true });
    const [regional, setRegional] = useState({ value: resource.regional || false, isValidated: true });
    const [masseHoraireP, setMasseHoraireP] = useState({ value: resource.masseHoraireP || 0, isValidated: true });
    const [masseHoraireFAD, setMasseHoraireFAD] = useState({ value: resource.masseHoraireFAD || 0, isValidated: true });
    const [anneeFormation, setAnneeFormation] = useState({ value: resource.anneeFormation || new Date().getFullYear(), isValidated: true });
    const [semestre, setSemestre] = useState({ value: resource.semestre || 1, isValidated: true });

    const formStates = [resource.dateEFM ? dateEFM : datePrevueEFM, code, intitule, regional, masseHoraireP, masseHoraireFAD, anneeFormation, semestre];

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        switch (name) {
            case 'dateEFM':
                setDateEFM(value >= resource.datePrevueEFM ? { value, isValidated: true } : { value, isValidated: false })
                break;
            case 'datePrevueEFM':
                setDatePrevueEFM({ value, isValidated: !!value });
                break;
            case 'code':
                setCode({ value, isValidated: !!value });
                break;
            case 'intitule':
                setIntitule({ value, isValidated: !!value });
                break;
            case 'regional':
                setRegional({ value: type === 'checkbox' ? checked : value, isValidated: true });
                break;
            case 'masseHoraireP':
                setMasseHoraireP({ value, isValidated: !!value });
                break;
            case 'masseHoraireFAD':
                setMasseHoraireFAD({ value, isValidated: !!value });
                break;
            case 'anneeFormation':
                setAnneeFormation({ value, isValidated: !!value });
                break;
            case 'semestre':
                setSemestre({ value, isValidated: !!value });
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        handleValidation(formStates, setIsValidated);
        setFormData({
            datePrevueEFM: datePrevueEFM.value,
            dateEFM: dateEFM.value,
            code: code.value,
            intitule: intitule.value,
            regional: regional.value,
            masseHoraireP: masseHoraireP.value,
            masseHoraireFAD: masseHoraireFAD.value,
            anneeFormation: anneeFormation.value,
            semestre: semestre.value,
            status: resource.status
        });
    }, [datePrevueEFM, dateEFM, code, intitule, regional, masseHoraireP, masseHoraireFAD, anneeFormation, semestre]);

    return (
        <form className='form-container'>
            <h2>Editing Module Form</h2>
            <div className='form-content'>
                {resource.status !== "in progress" ? (<div>
                    <label htmlFor="date-efm">Date EFM:</label>
                    <input
                        type="date"
                        id="date-efm"
                        name="dateEFM"
                        value={dateEFM.value}
                        onChange={handleChange}
                    />
                </div>) : 
                (<div>
                    <label htmlFor="date-prevue-efm">Date Prevue EFM:</label>
                    <input
                        type="date"
                        id="date-prevue-efm"
                        name="datePrevueEFM"
                        value={datePrevueEFM.value}
                        onChange={handleChange}
                    />
                </div>) }
                <div>
                    <label htmlFor="code">Code:</label>
                    <input
                        type="text"
                        id="code"
                        name="code"
                        value={code.value}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="intitule">Intitulé:</label>
                    <input
                        type="text"
                        id="intitule"
                        name="intitule"
                        value={intitule.value}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="regional">Régional:</label>
                    <label htmlFor="regional" className='checkbox'><Icon label={regional.value ? 'check' : 'close'}/></label>
                    <input
                        type="checkbox"
                        id="regional"
                        name="regional"
                        checked={regional.value}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="masseHoraireP">Masse Horaire P:</label>
                    <input
                        type="number"
                        id="masseHoraireP"
                        name="masseHoraireP"
                        value={masseHoraireP.value}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="masseHoraireFAD">Masse Horaire FAD:</label>
                    <input
                        type="number"
                        id="masseHoraireFAD"
                        name="masseHoraireFAD"
                        value={masseHoraireFAD.value}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="anneeFormation">Année de Formation:</label>
                    <input
                        type="number"
                        id="anneeFormation"
                        name="anneeFormation"
                        value={anneeFormation.value}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="semestre">Semestre:</label>
                    <select
                        id="semestre"
                        name="semestre"
                        value={semestre.value}
                        onChange={handleChange}
                    >
                        <option value={1}>Premiere Semestre</option>
                        <option value={2}>Deuxieme Semestre</option>
                    </select>
                </div>
            </div>
        </form>
    );
}
