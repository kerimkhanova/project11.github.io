import { root } from './variables.js';

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

    bigImage(event) {
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

export { Card, images };