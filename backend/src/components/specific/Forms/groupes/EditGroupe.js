import React, { useEffect, useState } from 'react';
import '../resource-form.css';
import { handleValidation } from '../../../utils/utils';

export default function EditGroupe({ resource, setIsValidated, setFormData }) {
    const [intitule, setIntitule] = useState({ value: resource.intitule || '', isValidated: true });
    const [filiere, setFiliere] = useState({ value: resource.filiere || '', isValidated: true });
    const [secteur, setSecteur] = useState({ value: resource.secteur || '', isValidated: true });
    const [anneeFormation, setAnneeFormation] = useState({ value: resource.anneeFormation || new Date().getFullYear(), isValidated: true });
    const [annee, setAnnee] = useState({ value: resource.annee || 1, isValidated: true });
    const [effectif, setEffectif] = useState({ value: resource.effectif || 0, isValidated: true });

    const formStates = [intitule, filiere, secteur, anneeFormation, annee, effectif];

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        switch (name) {
            case 'intitule':
                setIntitule({ value, isValidated: !!value });
                break;
            case 'filiere':
                setFiliere({ value, isValidated: !!value });
                break;
            case 'secteur':
                setSecteur({ value, isValidated: !!value });
                break;
            case 'anneeFormation':
                setAnneeFormation({ value, isValidated: !!value });
                break;
            case 'annee':
                setAnnee({ value, isValidated: !!value });
                break;
            case 'effectif':
                setEffectif({ value, isValidated: !!value });
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        handleValidation(formStates, setIsValidated);
        setFormData({
            intitule: intitule.value,
            filiere: filiere.value,
            secteur: secteur.value,
            anneeFormation: anneeFormation.value,
            annee: annee.value,
            effectif: effectif.value,
            status: resource.status
        });
    }, [intitule, filiere, secteur, anneeFormation, annee, effectif]);

    return (
        <form className='form-container'>
            <h2>Modifier le Module</h2>
            <div className='form-content'>
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
                    <label htmlFor="filiere">Filière:</label>
                    <input
                        type="text"
                        id="filiere"
                        name="filiere"
                        value={filiere.value}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="secteur">Secteur:</label>
                    <input
                        type="text"
                        id="secteur"
                        name="secteur"
                        value={secteur.value}
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
                    <label htmlFor="annee">Année:</label>
                    <select
                        id="annee"
                        name="annee"
                        value={annee.value}
                        onChange={handleChange}
                    >
                        <option value={1}>Première Année</option>
                        <option value={2}>Deuxième Année</option>
                        <option value={3}>Troisième Année</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="effectif">Effectif:</label>
                    <input
                        type="number"
                        id="effectif"
                        name="effectif"
                        value={effectif.value}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </form>
    );
}
