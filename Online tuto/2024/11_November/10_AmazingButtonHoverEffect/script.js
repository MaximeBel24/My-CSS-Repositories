let btn = document.querySelector('a');
btn.onmousemove = function(e) {
    let x = e.pageX - btn.offsetLeft;
    let y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--x' ,x+'px');
    btn.style.setProperty('--y' ,y+'px');
}