const spcheck = () =>{
    function isMobile() {
        const ua = navigator.userAgent;
        return ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0
    }
    
    if (isMobile()) {
        document.body.classList.add('is-mobile');
    }else{
        document.body.classList.remove('is-mobile');
    }
}

window.addEventListener('resize', spcheck);

spcheck();



const contentBox = document.querySelector('.mainarea');
const wrapper = document.querySelector('.wrapper');
const loadwrap = document.querySelector('.loading');

const setFillHeight = () => {
    const vh = window.innerHeight;
    // for (let i = 0; i < contentBox.length; i++) {
    //     contentBox[i].style.height = vh + 'px';
    // }
    contentBox.style.height = vh + 'px';
    wrapper.style.height = vh + 'px';
    loadwrap.style.height = vh + 'px';
}

window.addEventListener('resize', setFillHeight);

setFillHeight();
