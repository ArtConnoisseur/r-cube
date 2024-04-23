import { useRef, useState } from 'react';
import './input.css';

function handleSeePassword(event, assignedType, setType) {
    event.target.classList.toggle('fa-eye')
    event.target.classList.toggle('fa-eye-slash')

    if (assignedType === 'password') {
        setType('text');
    } else {
        setType('password');
    }
}

export function Input({ fieldname, type, displayFN, placeholder, error, registerInput }) {
    const [assignedType, setType ] = useState(type);

    return (
        <fieldset id="input-container">
            {displayFN ? <legend><small>{fieldname}</small></legend> : ''}
            <input type={ assignedType } placeholder={ placeholder || fieldname } {...registerInput}></input>
            <span id="input-error-message">{error}</span>
            {type==='password' ? <i className="fa-solid fa-eye view-password" onClick={(event) => handleSeePassword(event, assignedType, setType)}></i> : null}
        </fieldset>
    )
}