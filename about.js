//Movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.aboutContainer');
//Items
const title = document.querySelector('.title');
const profile = document.querySelector('.profile img');
const description = document.querySelector('.info h3');
const hover = document.querySelector('.info h4');
const skills = document.querySelector('.skills');

//Moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});
// Animate In
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    //Popout
    title.style.transform = 'translateZ(150px)';
    profile.style.transform = 'translateZ(200px)';
    description.style.transform = 'translateZ(125px)';
    skills.style.transform = 'translateZ(100px)';
    hover.style.transform = 'translateZ(75px)';

});

//Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = 'translateZ(0px)';
    profile.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    skills.style.transform = 'translateZ(0px)';
    hover.style.transform = 'translateZ(0px)';
});
