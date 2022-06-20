import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import modal from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';
import {openModal} from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {     
    
    const modalSelector = '.modal',
          modalTimerID = setTimeout(() => openModal(modalSelector, modalTimerID), 60000,);

    tabs('tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2022-06-22');
    modal('[data-modal]', modalSelector, modalTimerID);
    cards(); 
    slider({
        wrapper: '.offer__slider-wrapper',
        slide: '.offer__slider',
        prev: '.offer__slider-prev',
        next: '.offer__slider-next',
        current: '#current',
        total: '#total'
            });
    forms(modalSelector, modalTimerID);
    calc();

    async function getData() {
        const result = await fetch("https://api.pi.delivery/v1/pi?start=0&numberOfDigits=1000")
        .then();
        if(!result.ok) {
            throw new Error(`Could not a Fetch, status ${result.status}`);
        }
        return await result.json();
      }
    getData()
        .then(data => {
            for (let key in data) {
                console.log(addDot(data[key]));
                // console.log(data[key].length);
            }            
        });
    
    function addDot(string) {
        const a = string.slice(0, 1),
              b = string.slice(1, string.length + 1), 
              c = `${a},${b}`;
        return c;
    }

 });

