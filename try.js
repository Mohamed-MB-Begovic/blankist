"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const sections=document.querySelectorAll('.section')
const tabsContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");
const section2=document.querySelector('#section--2')
const header=document.querySelector('.header')
// header.style.backgroundColor='red'

const nav = document.querySelector('.nav');

// section1.classList.remove('section--hidden')
//    implimenting smooth scrolling

//  btn learnmore scrollling

btnScrollTo.addEventListener('click',function(){
    section1.scrollIntoView({behavior: 'smooth'})
})
 

 document.querySelector('.nav__links')
 .addEventListener('click',function(e){
    e.preventDefault();
 if(e.target.classList.contains('nav__link')){
  const id=e.target.getAttribute('href')
 document.querySelector(id).scrollIntoView({behavior:'smooth'})
 }
 })


 // navigation sticky

//  nav.style.backgroundColor='red'

// nav.classList.add('sticky')


// console.log(target)
// window.addEventListener('scroll',function(e){
//      const target=section1.getBoundingClientRect()
//     // console.log(window.scrollY)
//     // console.log(target)
//    if(target.top<0){
//   nav.classList.add('sticky')  
//    }else{
//     nav.classList.remove('sticky')
//    }
// })
 
 const navhigh=nav.getBoundingClientRect().height
// console.log(navhigh)

const stickynav=function(entries){
    const [entry]=entries
    // console.log(entry)
    if(!entry.isIntersecting){
        nav.classList.add('sticky') 
}else{
    nav.classList.remove('sticky') 
        
    }
}

const headerOpsever=new IntersectionObserver
(stickynav,{
    root:null,
    threshold:0,
    rootMargin:-navhigh+'px'
})

headerOpsever.observe(header)

//   reveal sections


const sectionCalback=function(entries,observer){
const [entry]=entries
if(!entry.isIntersecting) return
entry.target.classList.remove('section--hidden')
observer.unobserve(entry.target)
}
const sectionOpserver= new IntersectionObserver
(sectionCalback,{
    root:null,
    threshold:0.15,
    rootMargin:"200px"

})


sections.forEach(section=>
    sectionOpserver.observe(section)
    )



// links hover animation
const logo=document.querySelector('.nav__logo')
 nav.addEventListener('mouseover',function(e){
    if(e.target.classList.contains('nav__link')){
        const link=e.target
        const siblings= link.closest('.nav')
        .querySelectorAll('.nav__link')

        siblings.forEach(i=>{
            if(i!==link){
                i.style.opacity='0.5'
                logo.style.opacity='0.5'
            }
        })
    }
 })

 // mouseout

nav.addEventListener('mouseout',function(e){
    if(e.target.classList.contains('nav__link')){
        const siblings=e.target.closest('.nav')
        .querySelectorAll('.nav__link');
        siblings.forEach(sibling=>{
            if(sibling!==e.target){
                sibling.style.opacity='1'
                logo.style.opacity='1'
            }
        })
    }
})


// implimenting tabing

const tabContainer=document.querySelector('.operations__tab-container')
const tab=document.querySelectorAll('.operations__tab')
const operationContent=document.querySelectorAll('.operations__content')
tabContainer.addEventListener('click',function(e){
    const target= e.target.closest('.operations__tab')
    // console.log(target)
    if(!target)return
    tab.forEach(tabs=>tabs.classList.remove('operations__tab--active'))
    operationContent.forEach(content=>content.classList.remove('operations__content--active'))
    
  target.classList.add('operations__tab--active')
//   target.classList.add('operations__content--active')
document.querySelector('.operations__content--'+target.dataset.tab)
.classList.add('operations__content--active')

})


// lazy loading images

const images=document.querySelectorAll('img[data-src]')
// images.forEach(image=> image.style.backgroundColor='red')
const imageops=function(entries,observer){
const [entry]=entries
// console.log(entry)
if(!entry.isIntersecting)return
entry.target.src=entry.target.dataset.src;
entry.target.addEventListener('load',function(){
    entry.target.classList.remove('lazy-img')
}) 
observer.unobserve(entry.target)
}

const imageObsever=new IntersectionObserver(imageops,{
    root:null,
    threshold:0,
})

images.forEach(image=>{
    imageObsever.observe(image)
})

///  testemonials

const slider=document.querySelector('.slider')
const slides=document.querySelectorAll('.slide')


const rightBtn=document.querySelector('.slider__btn--right')
const leftBtn=document.querySelector('.slider__btn--left')

 const currentSlide=0;
 
const gotofunction=function(slide){
    slider.forEach((s,i)=>{
        s.style.transform='translateX('+100*(i-slide)+'%)'
    })}
 const maxSlide=slides.length
rightBtn.addEventListener('click',function(){
currentSlide++
gotofunction(currentSlide)
})