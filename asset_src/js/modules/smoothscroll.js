const jsSmoothScroll = document.querySelectorAll('a[href^="#"]');

for (let i = 0; i < jsSmoothScroll.length; i++) {
    jsSmoothScroll[i].addEventListener('click', (e) => {
        e.preventDefault();
        let href = jsSmoothScroll[i].getAttribute('href');
        let target = document.getElementById(href.replace('#', ''));
        const rect = target.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const position = rect + offset;

        const countUp = () => {

            window.scrollTo({
                top: position,
                behavior: 'smooth',
            });
        };
        setTimeout(countUp, 800);

    });
}