let toggleBtn = document.querySelector('.toggleBtn');
let menu = document.querySelector('.menu');
toggleBtn.onclick = function(){
    menu.classList.toggle('active');
}