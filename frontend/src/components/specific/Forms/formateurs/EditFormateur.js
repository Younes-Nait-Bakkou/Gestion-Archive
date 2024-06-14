import React, { useEffect, useState } from 'react';
import '../resource-form.css';
import { handleValidation } from '../../../utils/utils';
import Icon from '../../../common/Icon';

export default function EditFormateur({ resource, setIsValidated, setFormData }) {
    const [prenom, setPrenom] = useState({ value: resource.prenom || '', isValidated: true });
    const [nom, setNom] = useState({ value: resource.nom || '', isValidated: true });
    const [email, setEmail] = useState({ value: resource.email || '', isValidated: true });
    const [telephone, setTelephone] = useState({ value: resource.telephone || '', isValidated: true });

    const formStates = [prenom, nom, email, telephone];

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'prenom':
                setPrenom({ value, isValidated: !!value });
                break;
            case 'nom':
                setNom({ value, isValidated: !!value });
                break;
            case 'email':
                setEmail({ value, isValidated: !!value });
                break;
            case 'telephone':
                setTelephone({ value, isValidated: !!value });
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        handleValidation(formStates, setIsValidated);
        setFormData({
            prenom: prenom.value,
            nom: nom.value,
            email: email.value,
            telephone: telephone.value
        });
    }, [prenom, nom, email, telephone]);

    return (
        <form className='form-container'>
            <h2>Modifier les informations du formateur</h2>
            <div className='form-content'>
                <div>
                    <label htmlFor="prenom">Prénom:</label>
                    <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={prenom.value}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="nom">Nom:</label>
                    <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={nom.value}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email.value}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="telephone">Téléphone:</label>
                    <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={telephone.value}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </form>
    );
}
