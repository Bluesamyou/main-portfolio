const card = document.querySelector('.card');
const avatar = document.querySelector('#avatar');

const t1 = new TimelineMax();

t1.fromTo(card,2, {opacity : "0", height: "0vh"}, {opacity : "1", height: "100vh", ease: Power2.easeInOut})
    .fromTo(avatar, 2, {borderRadius : "0px"}, {borderRadius : "25px" , ease: Power2.easeInOut}, "-=2")