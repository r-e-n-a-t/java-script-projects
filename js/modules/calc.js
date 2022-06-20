function calc() {
    const resultCalc = document.querySelector('.calculating__result span');
    let sex, weight, height, age, ratio;

    initCalc('#gender');
    initCalc('.calculating__choose_big');
    getDinamicInfo('#height');
    getDinamicInfo('#weight');
    getDinamicInfo('#age');
    getStaticInfo('#gender', 'calculating__choose-item_active');
    getStaticInfo('.calculating__choose_big', 'calculating__choose-item_active');
    calcTotal();

    function initCalc(parentSelector) {
        const elements = document.querySelectorAll(`${parentSelector} div`);
        
        if (!localStorage.getItem('sex')) {
            localStorage.setItem('sex', 'female');
        }
        if (!localStorage.getItem('ratio')) {
            localStorage.setItem('ratio', 1.375);
        }
        sex = localStorage.getItem('sex');
        ratio = localStorage.getItem('ratio');

        elements.forEach(elem => {
            elem.classList.remove('calculating__choose-item_active');

            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add('calculating__choose-item_active');
            } 
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add('calculating__choose-item_active');
            }
        });

    }
    function getDinamicInfo(selector) {
        const input = document.querySelector(selector);
        input.addEventListener('input', () => {
            if (input.value.match(/\D/g)) {
                input.style.border = '2.5px solid red';
            } else {
                input.style.border = 'none';
            }

            switch(input.getAttribute('id')) {
                case 'weight':
                    weight = +input.value;
                    break;
                case 'height':
                    height = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;    
            }
            calcTotal();
        });
    }
    function getStaticInfo(parentSelector, activeClass) {
        const elements = document.querySelectorAll(`${parentSelector} div`);
        document.querySelector(parentSelector).addEventListener('click', (e) => {
            if (e.target.getAttribute('data-ratio')) {
                ratio = +e.target.getAttribute('data-ratio');
                localStorage.setItem('ratio', ratio);
            } else {
                sex = e.target.getAttribute('id');
                localStorage.setItem('sex', sex);
            }

            elements.forEach(elem => {
                elem.classList.remove(activeClass);
                if (elem === e.target) {
                    e.target.classList.add(activeClass);
                }
            });
            calcTotal();
        });
    }
    function calcTotal() {
        if (!sex || !weight || !height || !age || !ratio ) {
            resultCalc.textContent = '_____';
            return;
        }
        if (sex === 'female') {
            resultCalc.textContent = Math.round((447.6 +(9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            resultCalc.textContent = Math.round((88.36 +(13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }
}
export default calc;