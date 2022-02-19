function isMobile() {
    const ua = navigator.userAgent;
    return ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0
}

if (isMobile()) {
    document.body.classList.add('is-mobile');
}
