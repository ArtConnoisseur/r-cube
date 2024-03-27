import './input.css';


export function Input({ fieldname, type, displayFN, placeholder, onBlur, error }) {
    return (
        <fieldset id="input-container">
            {displayFN ? <legend><small>{fieldname}</small></legend> : ''}
            <input type={ type } placeholder={ placeholder || fieldname } onBlur={onBlur} ></input>
            <span id="input-error-message">{error}</span>
        </fieldset>
    )
}