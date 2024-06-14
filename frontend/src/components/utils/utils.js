export function toHeader(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/(^\w|\s\w)/g, m => m.toUpperCase());
}

export function toSlug(word) {
    return word.replace(/\s+/g, '-').toLowerCase();
}

export function handleValidation (formStates, setIsValidated)  { 
    const isValid = formStates.every(state => state.isValidated)
    setIsValidated(isValid);
}