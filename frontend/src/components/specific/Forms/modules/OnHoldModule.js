import React, { useEffect, useState } from 'react'
import '../resource-form.css'
import { handleValidation } from '../../../utils/utils';


export default function OnHoldModule({resource, setIsValidated, setFormData}) {
    const [dateEFM, setDateEFM] = useState({value:'', isValidated:false});
    const formStates = [dateEFM]

    const handleChange = (event) => {
        const value = event.target.value
        setDateEFM({value: value, isValidated: value >= resource.datePrevueEFM});
    };

    useEffect(() => {
        handleValidation(formStates, setIsValidated);
        setFormData({
            dateEFM:dateEFM.value
        })
    }, formStates);

    return (
        <form className='form-container' >
            <h2>Donner la date d'EFM</h2>
            <div className='form-content'>
                <div>
                    <label htmlFor="date-efm">Date EFM:</label>
                    <input
                    type="date"
                    id="date-efm"
                    name="dateEFM"
                    value={dateEFM.value}
                    onChange={handleChange}
                    />
                </div>
            </div>
        </form>
    );
}
