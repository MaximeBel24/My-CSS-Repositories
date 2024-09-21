document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body')
    let circle = document.createElement('span')
    circle.style.left = -75 + e.offsetX + 'px';
    circle.style.top = -75 + e.offsetY + 'px';
    body.appendChild(circle);
})