
function openModal (modalSelector, modalTimerID) {
    const modalView = document.querySelector(modalSelector);
    modalView.classList.add('show');
    modalView.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerID);
}
function closeModal (modalSelector) {
    const modalView = document.querySelector(modalSelector);
    modalView.classList.add('hide');
    modalView.classList.remove('show');
    document.body.style.overflow = '';
}
function modal(triggerSelector, modalSelector, modalTimerID) {
    const modalButton = document.querySelectorAll(triggerSelector),
          modalView = document.querySelector(modalSelector);

    modalButton.forEach(item => {
        item.addEventListener('click', () => openModal(modalSelector, modalTimerID));
    });
    modalView.addEventListener('click', (e) => {
        if (e.target === modalView || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modalView.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    window.addEventListener('scroll', showModalByScroll);


    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelector, modalTimerID);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
}
export default modal;
export {openModal, closeModal};