import { Card } from './classCard.js';

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

export { CardList };