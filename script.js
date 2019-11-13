//Переменные

const initialCards = [
/*    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    {
        name: 'Нургуш',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
    },
    {
        name: 'Тулиновка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
    },
    {
        name: 'Остров Желтухина',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
    },
    {
        name: 'Владивосток',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
    }*/
];


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


//Классы

class Card {

    constructor(name, link) {
        this.name = name;
        this.link = link;

        this.cardElement = this.create();

        this.cardElement
            .querySelector('.place-card__like-icon')
            .addEventListener('click', this.like.bind(this));

        this.cardElement
            .querySelector('.place-card__delete-icon')
            .addEventListener('click', this.remove.bind(this));
        this.cardElement
            .querySelector('.place-card__image')
            .addEventListener('click', this.bigImage.bind(this));
    }
    like(event) {
        event.target.classList.toggle('place-card__like-icon_liked');
    }

    create() {
        const placeCard = document.createElement('div');
        placeCard.classList.add('place-card');

        const placeCardImage1 = document.createElement('div');
        placeCardImage1.classList.add('place-card__image');
        placeCard.append(placeCardImage1);
        placeCardImage1.style.backgroundImage = `url(${this.link})`;
        

        const placeCardDeleteIcon1 = document.createElement('button');
        placeCardDeleteIcon1.classList.add('place-card__delete-icon');
        placeCardImage1.append(placeCardDeleteIcon1);

        const placeCardDescription1 = document.createElement('div');
        placeCardDescription1.classList.add('place-card__description');
        placeCard.append(placeCardDescription1);

        const placeCardName1 = document.createElement('h3');
        placeCardName1.classList.add('place-card__name');
        placeCardDescription1.append(placeCardName1);
        placeCardName1.textContent = this.name;

        const placeCardLikeIcon1 = document.createElement('button');
        placeCardLikeIcon1.classList.add('place-card__like-icon');
        placeCardDescription1.append(placeCardLikeIcon1);

        return placeCard;
    }
    remove() {
        this.cardElement.remove();
    }

    bigImage(event){
        if (event.target.classList.contains('place-card__delete-icon')) {
            return;
        }
        else {
            const a = event.target.getAttribute('style');
            const b = a.slice(22, -1);
            images(b);
        }
    }
};


class CardList {
    constructor(container, initialCards) {
        this.container = container;
        this.initialCards = initialCards;
        this.link = initialCards.link;
        this.name = initialCards.name;
        this.render();
    }
    addCard(card) {

        const newcard = new Card(card.name, card.link);

        this.container.appendChild(newcard.cardElement);

    }
    render() {

        for (let i = 0; i < this.initialCards.length; i++) {
            this.addCard(this.initialCards[i]);
        }
    }
};

const cardsList = new CardList(placesList, initialCards);

class Popup {

    constructor() {

        this.wrap = document.querySelector('.popup');
        this.wrapEdit = document.querySelector('.edit-popup');

    }

    open() {
        if (event.target.classList.contains('user-info__button')) {
            this.wrap.classList.add('popup_is-opened');
        }
        else if (event.target.classList.contains('user-info__edit')) {
            this.wrapEdit.classList.add('edit-popup_is-opened');
        }
    }

    close() {

        if (event.target.classList.contains('popup__close')) {
            this.wrap.classList.remove('popup_is-opened');
        }
        else if (event.target.classList.contains('edit-popup__close')) {
            this.wrapEdit.classList.remove('edit-popup_is-opened');
        }
    }
};

let popupMethods = new Popup();

//Функции

function images(imageLink) {

    const imagePopup = document.createElement('div');
    imagePopup.classList.add('image-popup');
    root.append(imagePopup);

    const imagePopupImage = document.createElement('div');
    imagePopupImage.classList.add('image-popup__image');
    imagePopupImage.setAttribute('style', `background-image: url(${imageLink}`);
    imagePopup.append(imagePopupImage);

    const imagePopupClose = document.createElement('img');
    imagePopupClose.setAttribute('src', './images/close.svg');
    imagePopupClose.classList.add('image-popup__close');
    imagePopupImage.append(imagePopupClose);

    imagePopupClose.addEventListener("click", function (event) {
        if (event.which == 1) {
            imagePopup.classList.toggle('image-popup');
            root.removeChild(imagePopup);
        }

    });

};

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

function getProf(res){
    
    console.log(res);
    userInfoName.textContent = res.name; 
    userInfoJob.textContent = res.about;
    userInfoPhoto.style.backgroundImage = `url(${res.avatar})`;
};

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

class Api {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
    }
    getProfile() {
        fetch (`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: this.headers
        })
            .then(res => {if (res.ok) {
              return res.json();
              }
              return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((result) => {
                return getProf(result)
              })
            .catch((err) => {
                console.log(err); 
              });
    }
    editProfile() {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                
                name: editname.value,
                about: editabout.value
            })
        })
        .then(res => {if (res.ok) {
            return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
        .then((result) => {
            return getProf(result)
            })
        .catch((err) => {
            console.log(err); 
            });
    }
    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {

            headers: this.headers
        })
            .then(res => {if (res.ok) {
            return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
            .then((result) => {
                console.log(result);
                new CardList(placesList, result);
            })
            .catch((err) => {
                console.log(err); 
              });

    }

}

const api = new Api({
    baseUrl: 'http://95.216.175.5/cohort4',
    headers: {
      authorization: '37297571-a5d7-4d9d-bcbf-2749f27e26ff',
      'Content-Type': 'application/json'
    }
  });

api.getProfile();
api.getInitialCards();

/**
 * Здравствуйте
 * Вы проделали большую работу. Молодцы
 * 
 * В обязанность класса Api является только взаимосвязь с другими внешними ресурсами.
 * Записывать занные, обновлять данные, хранить какую либо информацию он недолжен уметь. 
 * 
 * В методах класса у вас отсутствует catch
 * пользователь и никто другой не узнает об ошибке, если такая возникнет. Вы можете вызвать этот класс из другого класса, передав 
 * ему метод который будет вызван после того как работа будет завершена. Так правильнее. 
 * 
 * Внутри класса Card   находится function images(imageLink)
 * Такой код путает, сбивает с толку, мешает анализировать. Лучше разделить images и убрать его в метод класса. 
 * 
 * 
 * Профиль я изменить не смог. 
 * При отключении сети ошибки не отображаются. 
 * 
 * В классе API вы храните всю статическую информацию: ip адреса, ключи и так далее. Этого делать ненадо. 
 * 
 * Не очень хорошая идея создавать виртуальный DOM при создании карточки, используйте лучше шаблон. 
 * Для примера можете посмотреть здесь https://wesbos.com/template-strings-html/
 * 
 * 
 * Можно лучше. То что находится в addEventListener необходимо вынести в отдельный метод класса
 * Вы в будущем можете переиспользовать эти методы по необходимости
 * 
 * 
 * Жду исправления, спасибо
 * 
 */

 /* Эмма: 
1)Преобразовала класс Api (учла случай, когда сервер выдаёт ошибку, также исключила хранение ip адреса, ключа и т.д.)
2)Профиль теперь меняется. При обновлении страницы, остаются сохраненные данные.
3) Можно ли оставить функцию images(imageLink) и создание виртуального DOM при создании карточки как есть? Силушек исправить совсем нет :(
 
 */

 /**
  * Нет сил, а надо :(
  * 
  * В классе API в конструкторе надо удалить 
  *         this.getProfile();
        this.getInitialCards();
        this.editProfile();

  * 
  * Вот этого не должно быть в классе API
  *                 console.log(result);
                const cardsList = new CardList(placesList, result);
                addForm.addEventListener('submit', function () {
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

  * и вот этого 

              userInfoName.textContent = result.name;
            userInfoJob.textContent = result.about;
  * 
  * и вот этого
  *              console.log(result);
                userInfoName.textContent = result.name; 
                userInfoJob.textContent = result.about;
                userInfoPhoto.style.backgroundImage = `url(${result.avatar})`;
  * На месте того кода которого не должно быть, должен быть возврат вызова в вызываемую функцию
  * Простым языком должен быть return в функцию
  * 
  * Осталось чуть чуть
  * 
  * 
  * Можно ли оставить функцию images(imageLink) и создание виртуального DOM при создании карточки как есть? 
  * Мне больно на это смотреть (((
  * 
  * не помню чтобы был такой кусок кода 
  * 
  *         placeCardImage1.addEventListener("click", function (event) {

            if (event.target.classList.contains('place-card__delete-icon')) {
                return;
            }
            else {
                const a = event.target.getAttribute('style');
                const b = a.slice(22, -1);
                images(b);
            }

        });
        
  * Надо вынести в отдельный метод класса
  * 
  * 
  * 
  * 
  */

  /* 
  Эмма: исправила
  */

  /**
   * Опять надо исправлять 
   * в методе   getInitialCards()  вы вызываете метод  initialCard(result)
   * У вас для этого есть класс CardList как раз задача которого рисовать карточки. 
   * Надо исправить.
   * 
   * Вынесите в отдельную функцию 
   * editNew.addEventListener('submit', function (event) {
   * логику отдельно, слушатель отдельно
   * 
   * Удалите закомментированый код
   * 
   */
  /* 
  Эмма: исправила
  */
