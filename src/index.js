import "./style.css";
import { initialCards, placesList, button, popup, editButton, editPopup, buttonClose, editButtonClose, addForm, nameInput, linkInput, editNew, editname, editabout, popupButton, editPopupButton, userInfoName, userInfoJob, serverUrl } from './modules/variables.js';
import { CardList } from './modules/classCardList.js';
import { Popup } from './modules/Popup.js';
import { validateForm } from './modules/validation.js';
import { Api } from './modules/classApi.js';

const cardsList = new CardList(placesList, initialCards);
let popupMethods = new Popup();

//Функции

function newCard(event) {
    event.preventDefault();
    if (nameInput.value.length === 0 || linkInput.value.length === 0) {

        popupButton.setAttribute('disabled', 'disabled');

    }
    else {
        popupButton.classList.remove('button_black', 'popup__button_black');
        cardsList.addCard({ name: nameInput.value, link: linkInput.value });
        popup.classList.toggle('popup_is-opened');
        addForm.reset();
    };

};

function editUser(event) {
    event.preventDefault();

    if (editname.value.length === 0 || editabout.value.length === 0) {

        editPopupButton.setAttribute('disabled', 'disabled');

    }
    else {

        api.editProfile();
        editPopupButton.classList.remove('button_black', 'edit-popup__button_black');
        editPopup.classList.toggle('edit-popup_is-opened');
        editNew.reset();
    };

};

//Обработчики

button.addEventListener("click", function () {
    popupMethods.open(); // применяем класс  Popup
});


buttonClose.addEventListener("click", function () {
    popupMethods.close(); // применяем класс  Popup
});

addForm.addEventListener('submit', newCard)
addForm.addEventListener('input', validateForm);
editNew.addEventListener('input', validateForm);
editNew.addEventListener('submit', editUser);

editButton.addEventListener("click", function () {
    popupMethods.open(); // применяем класс  Popup
    editname.value = userInfoName.textContent;
    editabout.value = userInfoJob.textContent;
}
);

editButtonClose.addEventListener("click", function () {
    popupMethods.close(); // применяем класс  Popup
    editNew.reset();

});

//API

const api = new Api({
    baseUrl: serverUrl,
    headers: {
        authorization: '37297571-a5d7-4d9d-bcbf-2749f27e26ff',
        'Content-Type': 'application/json'
    }
});

api.getProfile();
api.getInitialCards();
