import {getResource} from '../services/services';
function cards() {
    let menuContainer = document.querySelector('[data-menuContainer]');
    menuContainer.innerHTML = '';
          
    class MenuCreator {
        constructor(obj) {
            this.img = obj.img;
            this.altimg = obj.altimg;
            this.title = obj.title;
            this.descr = obj.descr;
            this.price = obj.price;
        }
        createMenu() {
            menuContainer.innerHTML += `<div class="menu__item">
                                <img src="${this.img}" alt="${this.altimg}">
                                <h3 class="menu__item-subtitle">${this.title}</h3>
                                <div class="menu__item-descr">${this.descr}</div>
                                <div class="menu__item-divider"></div>
                                <div class="menu__item-price">
                                    <div class="menu__item-cost">Цена:</div>
                                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                                </div>
                              </div>`;
        }
    }
    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach((obj) => {
                new MenuCreator(obj).createMenu(); 
            });
        });

}
export default cards;