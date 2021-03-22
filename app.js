//Page intro animation
const timeLine = gsap.timeline({ defaults: { ease: 'power1.out' } })

timeLine.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
timeLine.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 })
timeLine.to('.intro', { y: '-100%', duration: 1 }, '-=1');

