let tooltips = document.querySelectorAll('.tooltip');
window.onmousemove = function(e){
    let x = (e.clientX + 20) + 'px';
    let y = (e.clientY + 20) + 'px';
    for (var i=0;i<tooltips.length;i++){
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
}