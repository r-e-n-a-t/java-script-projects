import {getResource} from '../services/services';
function slider({wrapper, slide, prev, next, current, total,}) {
    const slideWrapper = document.querySelector(wrapper),
          slider = document.querySelector(slide),
          slidePrevButton = document.querySelector(prev),
          slideNextButton = document.querySelector(next),
          slideCurrent = document.querySelector(current),
          slideTotal = document.querySelector(total),
          dots = document.createElement('ol');
    let   currentInt = 0;

    slider.style.position = 'relative';
    dots.classList.add('carousel-indicators');
    slider.append(dots);

    getResource('http://localhost:3000/slider')
        .then((data) => {
            slideTotal.textContent = getZero(data.length);
            createSlide(data, currentInt);

            slidePrevButton.addEventListener('click', () => {
                currentInt--;
                if (currentInt < 0) {
                    currentInt = data.length - 1;
                }
                createSlide(data, currentInt);
                dotSelect(data, currentInt);
            }); 
            slideNextButton.addEventListener('click', () => {
                currentInt++;
                if (currentInt > data.length - 1) {
                    currentInt = 0;
                }
                createSlide(data, currentInt);
                dotSelect(data, currentInt);
            });
            for (let i = 0; i<data.length; i++) {
                const li = document.createElement('li');
                li.classList.add('dot');
                dots.append(li);
            }
            dots.addEventListener('click', (event) => {
                const dotTarget = event.target;
                if (dotTarget && dotTarget.classList.contains('dot')){
                    const dot = dots.querySelectorAll('li');
                    dot.forEach((item, i) => {
                        if (dotTarget == item){
                            dotSelect(data, i);
                        }
                    });
                }
            });

        });

    function dotSelect(data, select) {
        const dot = dots.querySelectorAll('li');
        dot.forEach((item, i)=> {
            if (i != select) {
                item.style.opacity = 0.5;
            }else {
                item.style.opacity = 1;
                createSlide(data, i);
                currentInt = i;
            }
        });
    }
    function createSlide(data, currentInt) {
        slideWrapper.innerHTML = `<div class="offer__slide">
                                    <img src="${data[currentInt].img}" alt="${data[currentInt].altimg}">
                                  </div>`;
        slideCurrent.textContent = getZero(currentInt + 1);
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        }
        else {
            return num;
        }
    }

}
export default slider;