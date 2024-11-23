const scrollcontainer=document.querySelector('.scroll-container');
function autoscroll(){
    scrollcontainer.scrollBy({
        left:3,
        behavior:"smooth"
    });
}
setInterval(autoscroll,30);