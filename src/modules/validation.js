import { addForm, editNew, popupButton, editPopupButton } from './variables.js';


function validateForm(event) {

    const validator = event.target.name === 'link' ?
        validateLinkInput :
        validateTextInput;

    validator(event.target);

    if (!addForm.checkValidity()) {
        popupButton.setAttribute('disabled', 'disabled');
        popupButton.classList.remove('button_black', 'popup__button_black');

    }
    else {
        popupButton.removeAttribute('disabled');
        popupButton.classList.add('button_black', 'popup__button_black');

    }
    if (!editNew.checkValidity()) {

        editPopupButton.setAttribute('disabled', 'disabled');
        editPopupButton.classList.remove('button_black', 'edit-popup__button_black');
    }
    else {
        editPopupButton.removeAttribute('disabled');
        editPopupButton.classList.add('button_black', 'edit-popup__button_black');
    }

};

function validateTextInput(textInput) {
    let error = '';

    if (!textInput.checkValidity()) {

        if (textInput.validity.valueMissing) {
            error = 'Это обязательное поле'
        }
        if (textInput.validity.tooShort || textInput.validity.tooLong) {
            error = 'Должно быть от 2 до 30 символов'
        }
    }
    textInput.nextElementSibling.textContent = error;

}

function validateLinkInput(linkInput) {
    let error = '';

    if (!linkInput.checkValidity()) {

        if (linkInput.validity.valueMissing) {
            error = 'Это обязательное поле'
        }
        if (linkInput.validity.typeMismatch) {
            error = 'Здесь должна быть ссылка'
        }
    }
    linkInput.nextElementSibling.textContent = error;

};

export { validateForm, validateTextInput, validateLinkInput };