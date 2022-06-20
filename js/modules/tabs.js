function tabs(tabsSel, tabsContSel, tabsParentSel, activeClass) {
    const tabs = document.querySelectorAll(`.${tabsSel}`),
    tabsContent = document.querySelectorAll(tabsContSel),
    tabsParent = document.querySelector(tabsParentSel);

    hideTabContent();
    showTAbContent();

    tabsParent.addEventListener('click', (event) => {
        const targ = event.target;

        if (targ && targ.classList.contains(tabsSel)){
            tabs.forEach((item, i) => {
                if (targ == item){
                    hideTabContent();
                    showTAbContent(i);
                }
            });
        }
    });

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }
    function showTAbContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }
}
export default tabs;