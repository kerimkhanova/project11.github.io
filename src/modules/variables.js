//Переменные

const initialCards = [];


const placesList = document.querySelector('.places-list');

const root = document.querySelector('.root');

const button = document.querySelector('.user-info__button');
const popup = document.querySelector('.popup');

const editButton = document.querySelector('.user-info__edit');
const editPopup = document.querySelector('.edit-popup');

const buttonClose = document.querySelector('.popup__close');
const editButtonClose = document.querySelector('.edit-popup__close');

const addForm = document.forms.new;
const nameInput = addForm.elements.name;
const linkInput = addForm.elements.link;

const editNew = document.forms.edit;
const editname = editNew.elements.editname;
const editabout = editNew.elements.editabout;

const popupButton = document.querySelector('.button.popup__button');
const editPopupButton = document.querySelector('.button.edit-popup__button');

const userInfoName = document.querySelector('.user-info__name');
const userInfoJob = document.querySelector('.user-info__job');
const userInfoPhoto = document.querySelector('.user-info__photo');

const serverUrl = NODE_ENV === 'development' ? 'http://praktikum.tk/cohort4' : 'https://praktikum.tk/cohort4';

export { initialCards, placesList, root, button, popup, editButton, editPopup, buttonClose, editButtonClose, addForm, nameInput, linkInput, editNew, editname, editabout, popupButton, editPopupButton, userInfoName, userInfoJob, userInfoPhoto, serverUrl };