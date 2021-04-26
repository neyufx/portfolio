// Hamb button ********************************************************

const logo = document.querySelector('.logo');
const hambBtn = document.querySelector('.hamb-btn');
const mobileLinks = document.querySelectorAll('.mobile-links a');
const navLinks = document.querySelector('.nav-links_mobile');

hambBtn.addEventListener('click', () => {
    hambBtn.classList.toggle('active');
    if (hambBtn.classList.contains('active')){
        navLinks.classList.add('active');
        logo.classList.add('active');
    }
    else{
        if (!hambBtn.classList.contains('active')){
            navLinks.classList.remove('active');
            logo.classList.remove('active');
        }
    }
})

// Link click scroll ********************************************************

const accueil = document.querySelector('.accueil-link');
const services = document.querySelector('.services-link');
const contact = document.querySelector('.contact-link');
const header = document.querySelector('.header-container');
const servicesHeight = document.querySelector('.section--services');

gsap.registerPlugin(ScrollToPlugin);

/* Mobile Menu */
accueil.addEventListener('click', () => {
    gsap.to(window, {duration: 1, scrollTo: ".header-container"});
    hambBtn.classList.remove('active');
    navLinks.classList.remove('active');
    logo.classList.remove('active');
})

services.addEventListener('click', () => {
    gsap.to(window, {duration: 1, scrollTo: ".section--services"});
    hambBtn.classList.remove('active');
    navLinks.classList.remove('active');
    logo.classList.remove('active');
})

contact.addEventListener('click', () => {
    gsap.to(window, {duration: 1, scrollTo: ".section--contact"});
    hambBtn.classList.remove('active');
    navLinks.classList.remove('active');
    logo.classList.remove('active');
})

/* Normal Menu */

const accNorm = document.querySelector('.accueil-lnk');
const servNorm = document.querySelector('.services-lnk');
const contNorm = document.querySelector('.contact-lnk');

accNorm.addEventListener('click', () => {
    gsap.to(window, {duration: 1, scrollTo: ".header-container"});
})

servNorm.addEventListener('click', () => {
    gsap.to(window, {duration: 1, scrollTo: ".section--services"});
})

contNorm.addEventListener('click', () => {
    gsap.to(window, {duration: 1, scrollTo: ".section--contact"});
})


// Screen > mobile ferme le menu mobile *******************************

window.addEventListener('resize', () => {
    hambBtn.classList.remove('active');
    navLinks.classList.remove('active');
    logo.classList.remove('active');
})

if(window.innerWidth > 780){
    hambBtn.classList.remove('active');
    navLinks.classList.remove('active');
    logo.classList.remove('active');
}

// Scroll bar état en pourcentage *************************************
scrollState = document.querySelector('.scroll-state');

window.addEventListener('scroll', () => {
    scrollState.classList.add('active');
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scroll = (winScroll / height) * 100;
    var scrollName = document.querySelector('.scroll-state').style;
    scrollName.setProperty('--heightScroll', scroll + "%")
})


// cercle Portfolio header **********************************************************

const btnCirlce = document.querySelector('.circle');
const containerSlot = document.querySelector('.slot');
const emojis = ['😂','💻','🥳','😴','👽'];

btnCirlce.addEventListener('click', emoji);

function emoji(){
    if(isTweening()) return;

    for(let i = 0;i < 50; i++){
        const emoji = document.createElement('div');
        emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        containerSlot.appendChild(emoji);
    }
    animateEmojis();
}

function animateEmojis(){
    const TLEMOJI = gsap.timeline();

    TLEMOJI
    .to('.slot div', {
        y: "random(-200,200)",
        x: "random(-300,300)",
        z: "random(0,1000)",
        rotation: "random(-90,90)",
        duration: 1
    })
    .to('.slot div', {autoAlpha: 0, duration: 0.3},
    '-=0.2')
    .add(() => {
        containerSlot.innerHTML = "";
    })
}

function isTweening(){
    return gsap.isTweening('.slot div');
}


// Load / Scroll animation page *************************************************

/* Load */



window.addEventListener('load', () => {
    var pageLoader = document.querySelector('.page-loader');
    var container = document.querySelector('.container')

    pageLoader.parentElement.removeChild(pageLoader);
    container.classList.add('fade-in')
})

//document.querySelector('.page-loader').style.setProperty('--loadOpacity', 0);
//document.querySelector('.page-loader').classList.add('un-active');

/* Load */

// Scroll TimeLine gsap ******************************************************

// Header Load

const TL1 = gsap.timeline();
const TL2 = gsap.timeline();
const TL3 = gsap.timeline();
const TL4 = gsap.timeline();
window.addEventListener('load', () => {
    gsap.to(window, {duration: 1, scrollTo: 0});
    TL1
    .from(".logo", {
        opacity: 0,
        x: 200,
        duration: 1,
        delay: .2
    })
    .from(".nav-links a", {
        opacity:0,
        y:100,
        duration: 1,
        stagger: 0.1
    })

    TL2
    .from(".hdr-text p , .hdr-text h1", {
        opacity:0,
        x:-100,
        duration: 1,
        delay: .5,
        stagger: .5
    })

    TL3
    .from(".circle", {
        rotation: 90,
        scale: 0,
        opacity:0,
        duration: 1,
        delay: 1
    })

    TL4
    .from(".scroll-state", {
        x:100,
        opacity:0,
        duration:1,
        delay: .5
    })
    .from(".mouse-center", {
        y: 100,
        duration: 1,
        opacity:0
    })
})

// Section Scroll load **************

gsap.registerPlugin(ScrollTrigger);

const TL5 = gsap.timeline({ scrollTrigger:{
    trigger: ".header-container",
    start: "60%",
    end: "60%",
    toggleActions:"restart none none reset"
}});
    TL5
    .from(".card", {
        opacity: 0,
        duration: 1,
        stagger: .15
    })

const TL6 = gsap.timeline({ scrollTrigger: {
    trigger: ".section--services",
    start: "50%",
    end: "50%",
    toggleActions: "restart none none reset"
}})

    TL6
    .from(".contact-form h2", {
        scale:2,
        opacity:0,
        duration:1
    })
    .from(".contact-form input, .contact-form label, .contact-form textarea", {
        x:200,
        duration:1,
        opacity: 0,
        stagger: .15
    })
