const menuTrigger = document.querySelector('.menu__toggle');
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu__toggle__btn');
const cursor = document.querySelector('.cursor');


function btnClick(){
    menu.classList.toggle('js-active');
    menuBtn.classList.toggle('js-close');
    cursor.classList.toggle('js-menu');
    
}
menuTrigger.addEventListener('click', btnClick);


