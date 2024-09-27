let sky = document.querySelector('#sky');
let pyramid = document.querySelector('#pyramid');
let text = document.querySelector('#text');
let stone = document.querySelector('#stone');
let man = document.querySelector('#man');
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    pyramid.style.right = value * 0.25 + 'px';
    text.style.left = value * 2 + 'px';
    stone.style.right = value * 1 + 'px';
    man.style.left = value * 0.5 + 'px';
})
