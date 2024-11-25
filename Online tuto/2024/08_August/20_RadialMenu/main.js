let menuToggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
let list = document.querySelectorAll('li');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

list.forEach(item => item.addEventListener('click', function(){
    list.forEach(i => i.classList.remove('active'));
    this.classList.add('active')
}))
