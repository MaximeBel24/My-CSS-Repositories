let menuToggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
}