const card = document.querySelector('.card');

const t1 = new TimelineMax();

t1.fromTo(card,1, {opacity : "0", height: "0%"}, {opacity : "1", height: "100vh", ease: Power2.easeInOut});