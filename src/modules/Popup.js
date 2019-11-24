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

export { Popup };