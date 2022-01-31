const cursor = document.querySelector('.cursor');
cursorWidth = 20;

document.addEventListener('mousemove', e => {
    const mouseX = e.pageX - (cursorWidth / 2);
    const mouseY = e.pageY - (cursorWidth / 2);
    cursor.style.opacity = 1;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});