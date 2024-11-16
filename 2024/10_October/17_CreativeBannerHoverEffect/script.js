let banner = document.querySelector('.banner');
banner.onmousemove = function(e) {
    let x = e.pageX - banner.offsetLeft;
    let y = e.pageY - banner.offsetTop;
    banner.style.setProperty('--x', x + 'px');
    banner.style.setProperty('--y', y + 'px');
}