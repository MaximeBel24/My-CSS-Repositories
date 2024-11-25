window.addEventListener('scroll', function(){
    let scrollY = window.scrollY;
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    let percentScrolled = (scrollY / totalHeight) * 100;
    let translateX = (percentScrolled/5) * -4;
    document.querySelector('.container').style.transform = `translateX(${translateX}%)`;
});
