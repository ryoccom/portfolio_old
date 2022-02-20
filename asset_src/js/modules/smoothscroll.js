import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

const jsSmoothScroll = document.querySelectorAll('.menu__list__wrap a');
const linkArea = document.querySelector('.mainarea');

for (let i = 0; i < jsSmoothScroll.length; i++) {
    jsSmoothScroll[i].addEventListener('click', (e) => {
        e.preventDefault();
        let href = jsSmoothScroll[i].getAttribute('href');
        let target = document.getElementById(href.replace('#', ''));
        const height = target.getBoundingClientRect().height;
        const position = i * height;
        // const countUp = () => {
        //     linkArea.scrollTo({
        //         top: position,
        //         behavior: 'smooth',
        //     });
        // };
        // setTimeout(countUp, 800);
        linkArea.scrollTo({
            top: position,
            behavior: 'smooth',
        });

    });
}