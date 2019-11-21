import { placesList, editname, editabout, userInfoName, userInfoJob, userInfoPhoto } from './variables.js';
import { CardList } from './classCardList.js';

class Api {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
    }
    getProfile() {
        fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: this.headers
        })
            .then(res => {
                if (res.ok) {
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
            .then(res => {
                if (res.ok) {
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
            .then(res => {
                if (res.ok) {
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

};

function getProf(res) {

    console.log(res);
    userInfoName.textContent = res.name;
    userInfoJob.textContent = res.about;
    userInfoPhoto.style.backgroundImage = `url(${res.avatar})`;
};

export { Api, getProf };