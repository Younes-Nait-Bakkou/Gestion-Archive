import React, { useEffect, useState } from 'react'
import '../resource-form.css'
import { handleValidation } from '../../../utils/utils';


export default function OnHoldModule({resource, setIsValidated}) {
    const [dateEFM, setDateEFM] = useState({value:'', isValidated:false});
    const formStates = [dateEFM]

    const handleChange = (event) => {
        if(event.target.value >= resource.datePrevueEFM){
            setDateEFM({value:event.target.value, isValidated: true});
        }else{
            setDateEFM({value:event.target.value, isValidated: false});
        }
    };

    useEffect(() => {
        handleValidation(formStates, setIsValidated);
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
