window.onscroll = () => {
    document.querySelector(".mountain").style.marginTop = scrollY + "px";

    document.querySelector(".trees").style.marginTop = scrollY / 1.5 + "px";

    document.querySelector(".stars").style.marginTop = scrollY * 2 + "px";

    document.querySelector(".stars").style.marginRight = scrollY / 2 + "px";

    document.querySelector(".moon").style.transform = "rotate(-" + (scrollY / 2.5) + "deg)";

    document.querySelector(".Home h1").style.marginTop = scrollY + "px";

    document.querySelector(".Home h1").style.opacity = (200 - scrollY) / 200;
};
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})