const hero = document.querySelector('.container');
const tag = hero.querySelector("h1");
const walk = 500;


function shadow(event){
    const { offsetWidth: width, offsetHeight: height } = hero;
    let {offsetX : x, offsetY : y} = event;

    if(this !== event.target){
        x = x + event.target.offsetLeft;
        y = y + event.target.offsetTop;
    }

    const xwalk = Math.round((x / width * walk) - (walk / 2));
    const ywalk = Math.round((y / height * walk) - (walk / 2));


  tag.style.textShadow = `
    ${xwalk}px ${ywalk}px 0 red, 
    ${xwalk * -1}px ${ywalk}px 0 green, 
    ${ywalk}px ${xwalk * -1}px 0 blue, 
    ${ywalk * -1}px ${xwalk}px 0 black
  `
}
hero.addEventListener("mousemove", shadow);