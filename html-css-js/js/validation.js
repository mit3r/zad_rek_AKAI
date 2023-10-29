/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const submitButton = document.querySelector('input[type="submit"]');

const nameRegEx = /[^!#$%&'*+/=?^_`{|}~-]+/;
const emailRegEx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

function setInputError(id, state) {
    switch (state) {
        case 'show':
            document.querySelector(`#${id}-error`).classList.remove('hidden');
            break;
        case 'hide':
            document.querySelector(`#${id}-error`).classList.add('hidden');
            break;   
        default:
            throw new Error('Invalid state');
    }
}

submitButton.addEventListener('click', (e) => {

    e.preventDefault();
    
    ['first-name', 'last-name', 'email', 'sections'].forEach((id) => setInputError(id, 'hide'));

    if (!nameRegEx.test(firstName.value)) { setInputError('first-name', 'show'); return; };
    if (!nameRegEx.test(lastName.value)) { setInputError('last-name', 'show'); return; };
    if (!emailRegEx.test(email.value)) { setInputError('email', 'show'); return; };

    console.log(checkboxes)
    const sections = [...checkboxes].filter(checkbox => checkbox.checked).map(checkbox => checkbox.value)
    if (sections.length === 0) { setInputError('sections', 'show'); return; };

    alert(JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        sections: [...checkboxes].filter(checkbox => checkbox.checked).map(checkbox => checkbox.value),
    }));
});