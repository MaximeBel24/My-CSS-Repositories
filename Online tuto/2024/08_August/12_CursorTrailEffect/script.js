document.addEventListener("DOMContentLoaded", () =>
{
    let cursor = document.querySelector('.cursor');
    for(let i = 0; i < 30; i++){
        let span = document.createElement('span');
        span.style.setProperty('--i', i+1)
        span.style.left = i * 15+'px';
        cursor.appendChild(span)
    }
    document.addEventListener('mousemove', e => {
        gsap.to('span', {
            x: e.clientX,
            y: e.clientY,
            stagger: 0.05
        })
    })
})