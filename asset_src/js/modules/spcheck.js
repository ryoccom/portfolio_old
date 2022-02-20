function isMobile() {
    const ua = navigator.userAgent;
    return ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0
}

if (isMobile()) {
    document.body.classList.add('is-mobile');
}

const contentBox = document.querySelector('.mainarea');
const wrapper = document.querySelector('.wrapper');

const setFillHeight = () => {
    const vh = window.innerHeight;
    // for (let i = 0; i < contentBox.length; i++) {
    //     contentBox[i].style.height = vh + 'px';
    // }
    contentBox.style.height = vh + 'px';
    wrapper.style.height = vh + 'px';
}

window.addEventListener('resize', setFillHeight);

setFillHeight();
