// /// selecting elements from the dom
// 
// // selecting by using queryselector
// // const navitem= document.querySelector('.nav__item')// this method only returns the first element which has the class that we pass
// // console.log(navitem)
// // const allNavItems=document.querySelectorAll('.nav__item')// this method will select all elements which has this class
// // console.log(allNavItems)
// 
// // selecting by id 
// // const logo= document.getElementById('logo')
// // console.log(logo)
// 
// // selecting by classname
// // const section=document.getElementsByClassName('section')
// // console.log(section)
// 
// // another type of selecting elements
// // console.log(document.documentElement)
// // console.log(document.body)
// // console.log(document.head)
// 
// 
// 
//             //// creating elements
//     //         const header=document.querySelector('.header')
//     // const massage=document.createElement('div');
//     // massage.classList.add('cookie-message');
//     // massage.innerHTML='dear customer welcome to the bankist web <button class="btn btn--close--cookie">goit</button>'
// 
//     // header.prepend(massage)
//     // header.append(massage)
//     // header.append(massage.cloneNode(true))
// 
//     // header.before(massage)
//     // header.after(massage)
// 
// 
//     ///////// deleting elements
// // header.after(massage)
// // document.querySelector('.btn--close--cookie')
// // .addEventListener('click',function(){
// //     // massage.remove()
// //     massage.parentElement.removeChild(massage)  // old way of removing elements
// // 
// // })
// // 
// 
// 
// //            styles
//     // header.after(massage)
// //     massage.style.backgroundColor="#f9004d";
// //     massage.style.marginTop='90px'
// //     massage.style.position='absolute'
// // 
// // console.log(massage.style.backgroundColor)
// // console.log(getComputedStyle(massage).backgroundColor)
// // 
// // massage.style.height=parseFloat(getComputedStyle(massage).height)+10+'px' /// this parseFloat method allowss you to an strinig value to anumber 
// // console.log(getComputedStyle(massage).height)
// // 
// 
// // in the css 
// /*
// :root{
//    --color-primary: #5ec576;
//   --color-secondary: #ffcb03;
//   --color-tertiary: #ff585f;
//   --color-primary-darker: #4bbb7d;
//   --color-secondary-darker: #ffbb00;
//   --color-tertiary-darker: #fd424b;
//   --color-primary-opacity: #5ec5763a;
//   --color-secondary-opacity: #ffcd0331;
// }
// */// to style like this variable is like that because they store somthing use this way
// 
// // document.documentElement.style.setProperty('--color-primary','orangered')
// 
// 
// // attributes 
// 
// const logo= document.querySelector('.nav__logo')
// console.log(logo.alt)
// console.log(logo.src)// this will give you the relative version
// console.log(logo.getAttribute('src'))/// and this will give you the absolute version 
// console.log(logo.className)
// 
// // you  can set this properties to values like this
// logo.alt='a beutifull website'
// console.log(logo.alt)
// 
// /// nonestanders
// console.log(logo.designer)// this is undefined because this is not what was expected
// 
// // but there is another way of reading this value from the dom
// console.log(logo.getAttribute('designer')) // and this will work
// // also u can set value to the nonestanderd attributes
// logo.setAttribute('companay','jubba jalaato')
// console.log(logo.getAttribute('companay'))
// 
// const link=document.querySelector('.twitter-link')
// console.log(link.href)
// console.log(link.getAttribute('href'))
// 
// const navlink=document.querySelector('.nav__link')
// console.log(navlink.href)
// console.log(navlink.getAttribute('href'))
// 
// 
// // data attributes
// console.log(logo.dataset.versionNumber)
// 
// 
// 
// /// classes
// 
// logo.classList('c')// you can also pass multiple classes by passing  multiple values
// logo.classList.add('c')
// logo.classList.toggle('c')
// logo.classList.remove('c')
// logo.classList.contains('c')

/// some event handallers
// first method
// const h1= document.querySelector('.section__header')
//  h1.addEventListener('mouseenter',function(e){
//     alert('onmouseenter: Great! you have done great jop')
// })
//  second method
// h1.onmouseenter=function(){
//     alert('onmouseenter: Great! you have done great jop')
// }

// third method we did in the html page like this
// {/* <h1 onclick="alert('welcome')">hell world</h1> */}

// const randomInt=(min,max)=>
//    Math.floor(Math.random()*(max-min+1)+min)
// 
// const randomColor=()=>
// 'rgb('+randomInt(0,255)+','+randomInt(0,255)+','+
//     +randomInt(0,255)+')'
// 
// randomColor()
//  
// 
// // event propagation
// // example 1
// document.querySelector('.nav__links').addEventListener(
// 'click',function(e){
//     this.style.backgroundColor=randomColor() 
//     // e.stopPropagation()
//    
// })
// // example 2
// document.querySelector('.nav__link').addEventListener(
// 'click',function(e){
//     this.style.backgroundColor=randomColor() 
//     // e.stopPropagation()
//     console.log(e.target)
// })
// // example 3
// document.querySelector('.nav').addEventListener(
//     'click',function(e){
//         this.style.backgroundColor=randomColor()
//     console.log('nav',e.target)
// 
//     },true)
    

///           DOM traversing
// 
// const h1=document.querySelector('h1')
// 
// // going down: child
// // note queryselector is used also for the elements not the documents
// console.log(h1.querySelectorAll('.highlight'))//  this will return a nodelist of elements that has (highlight) class in the h1 element
// console.log(h1.childNodes)
// console.log(h1.children)
// 
// h1.firstElementChild.style.color='white'
// h1.lastElementChild.style.color='orangered'
// 
// 
// //  Going upwords =parent
// console.log(h1.parentNode)
// console.log(h1.parentElement)
// // 
// // // closest method
//  const tast=h1.closest('.header')// means hi java find the colosest element to h1 which has (header) and give this style
//  console.log( h1.closest('.header'));
// tast.style.background='red'
// 
// 
// 
// // *
// /**
// note that queryselectors find child elments no matter how far in the dom tree
// while closeset method finds parent element no matter how far in the dom tree
// 
//  */
// 
// ///  going sideways= siblings
// console.log(h1.previousElementSibling)
// console.log(h1.nextElementSibling)
// 
// console.log(h1.parentElement.children);// this will reture all elements in the h1 parent and all her child elements
// // this will console a htmlcollection that we can use
// 
// [...h1.parentElement.children].forEach(function(el){
//    if (el!==h1) el.style.transform='scale(0.5)'
// })
// 
// 
// const check=document.querySelector('.operations__tab-container')
// console.log(check.parentElement)
// console.log(check.children)


// document.addEventListener('DOMContentLoaded',function(e){
//     console.log('html parsed and dom tree is built' ,e)
//     //this will outomatically be displayed when the dom tree is built
// })
// 
// 
// 
// window.addEventListener('load',function(e){
//     console.log('page fully loaded' ,e)
//     // this will be displayed when the page is fully loaded such as images
// 
// })

// 
// window.addEventListener('beforeunload',function(e){// this will be excecuted when we wan to leave the page
//     e.preventDefault()
//     console.log(e)
//     e.returnValue=' '
// })


















// the bankist development 

// variables
const tab=document.querySelectorAll('.operations__tab')
const tabscontainer=document.querySelector('.operations__tab-container')
const operationContent=document.querySelectorAll('.operations__content')
const btnlearnmore=document.querySelector('.btn--scroll-to')
const target=document.getElementById('section--1')
// nav links
const nav=document.querySelector('.nav')
const nav_links=document.querySelector('.nav__links')
const Each_nav=document.querySelectorAll('.nav__link')
const logo=document.querySelector('.nav__logo')


// implementing the open model
 const modal=document.querySelector('.modal')
 const overlay=document.querySelector('.overlay')
 const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
 const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };
  
  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };
  
  btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
  
  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });

 
/// impelimating a smooth scorolling

 btnlearnmore.addEventListener('click',function(e){
    // const s=target.getBoundingClientRect();
//     console.log(s)
//     // to get the target element possition
    // console.log(e.target.getBoundingClientRect())
// 
//     console.log('current scroll',window.pageXOffset,window.pageYOffset)
//     console.log('current page hight and width',document.documentElement.clientHeight,document.documentElement.clientWidth)

    //scrolling   step 1
//     window.scrollTo(s.left+window.pageXOffset,
//         s.top+window.pageYOffset)
// 
// window.scrollTo({
//     left:s.left+window.pageXOffset,
//     top: s.top +window.pageYOffset,
//     behavior:'smooth'
// })

// scrolling step 2

target.scrollIntoView({behavior: 'smooth'})

})


// scrolling the navigations

// method one
// document.querySelectorAll('.nav__link')
// .forEach(function(el){
// el.addEventListener('click',function(e){
// e.preventDefault()
// const id =this .getAttribute('href')
// document.querySelector(id).scrollIntoView({behavior: 'smooth'}) 
// })
// })



// method 2 
// 1. add event listener to the comman parent element
// 2. determine what element originated the event
// 
document.querySelector('.nav__links').addEventListener('click',
function(e){
// console.log(e.target)
e.preventDefault()

// matching the stratigy
if(e.target.classList.contains('nav__link')){
    const id =e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
}
})


///      implimenting tabing


// operationContent.style.backgroundColor='red'
tabscontainer.addEventListener('click',function(e){
    const clicked=e.target.closest('.operations__tab')
    // console.log('clicked')

    // Guard caluse
    if(!clicked) return

    // active class
  tab.forEach(i =>i.classList.remove('operations__tab--active'))
  operationContent.forEach(e=> e.classList.remove('operations__content--active'))
  
  
  clicked.classList.add('operations__tab--active')

  // active content area
document.querySelector('.operations__content--'+clicked.dataset.tab)
.classList.add('operations__content--active')


})


// links hover annimation

nav.addEventListener('mouseover',function(e){
    if(e.target.classList.contains('nav__link')){
         const link=e.target
         const siblings=link.closest('.nav')
         .querySelectorAll('.nav__link')
         console.log(siblings)
        siblings.forEach(i=>{
            if(i!==link){
            i.style.opacity='0.5'
            logo.style.opacity='0.5'
            }
        })
    }
   
})

nav.addEventListener('mouseout',function(e){
    if(e.target.classList.contains('nav__link')){
    const link =e.target
    const siblings=link.closest('.nav')
    .querySelectorAll('.nav__link')
    siblings.forEach(i=>{
        i.style.opacity='100'
        logo.style.opacity='100'})
}})


//  navingation sticky
// old way method
// const intialcoords=target.getBoundingClientRect()
// console.log(intialcoords.top)

//  window.addEventListener('scroll',function(){
//    console.log(window.scrollY)
//     if(window.scrollY > intialcoords.top)
//     nav.classList.add('sticky')// note this class is in the css 
//     else{
//         nav.classList.remove('sticky')
//     }
//  })

// otherway is by using  intersection observer api
// 
// const opsCallback=function(entries,observer){ // functionkan waxaa loo wacayaa marka target oo ah 
// section-1 and ka galno  0.1 taas oo lamid ah intersection true waxaa kaloo loo wacaayaa marka targetka
//  (section-1) and ka fogaaano 0.1 taas oo lamid ah intersection is false   
//     entries.forEach(entry=>console.log(entry)) 
// }
// const options={
//     root:null,// root='shaashada'
//     threshold:0.1
// }
// 
// const observer=new IntersectionObserver(opsCallback,options)
// observer.observe(target)
// 
//  

const header=document.querySelector('.header')
 
const navHeight=nav.getBoundingClientRect().height
// console.log(navHeight)
const navSticy=(enties =>{
    const [entries]=enties;
    // console.log(entries)
    if(!entries.isIntersecting)nav.classList.add('sticky')
    else{
        nav.classList.remove('sticky')
    }
})
const headerOpsever=new IntersectionObserver
(navSticy,{
    root:null,
    threshold:0,// this is the intersection ratio
    rootMargin:-navHeight+'px'// we can programatically calculate the height of our nav
})
headerOpsever.observe(header)


// reveal sections

const allSections=document.querySelectorAll('.section')
// allSections.style.backgroundColor='red'
const revealSection=function(entries,observer){
const [entry]=entries;
// console.log(entry)
if(!entry.isIntersecting) return;

entry.target.classList.remove('section--hidden')
observer.unobserve(entry.target)

};
const sectionOpserver=new IntersectionObserver  /// functionkaan waxaa loogu tala galay in lugu sheego xiligi oo observe uu dhacaaoyo tusaale marka treshold loo pass gareeyo tiro gooni ah  
(revealSection,{
    root:null,
    threshold:0.15,
    // rootMargin:"200px"
});

 allSections.forEach(function(section){
    sectionOpserver.observe(section)
    // section.classList.add('section--hidden')
 })





// lazy loading images

// selecting the images
const imgtarget=document.querySelectorAll('img[data-src]')// this means selecting all the images which has data-src attribute
// console.log(imgtarget)

const loadimage=function(entries,observer){
    const [entry]=entries;
    // console.log(entry)
    if(!entry.isIntersecting) return

        entry.target.src=entry.target.dataset.src
        entry.target.addEventListener('load',function(){
        entry.target.classList.remove('lazy-img')
    })
    observer.unobserve(entry.target)
}

const imageOpserver=new IntersectionObserver
(loadimage,{
    root:null,
    threshold:0,
    rootMargin:'0px'
})

imgtarget.forEach(img=>{
    imageOpserver.observe(img)
})


//  slider

const slides=document.querySelectorAll('.slide')
const slider=document.querySelector('.slider')
const leftbtn=document.querySelector('.slider__btn--left')
const rightbtn=document.querySelector('.slider__btn--right')
const dotsContainer=document.querySelector('.dots')
let currentSlide=0;

const maxSlid=slides.length
// console.log(maxSlid)
// slider.style.transform='scale(0.3) translateX(-800px)'
// slider.style.overflow='visible'
// slides.forEach((s,i)=>{
//     s.style.transform='translateX('+100*(i)+'%)'
// })'

// functions
//  inplimenting dots
const createDots=function(){
    slides.forEach(function(_,i){
        // const html=  `<button class="dots__dot" data-slide="${index}"></button>`
        dotsContainer.insertAdjacentHTML("beforeend",`<button class="dots__dot" data-slide="${i}"></button>`);
    })
}
createDots()

const activateDots=function(slide){
    document.querySelectorAll('.dots__dot')
    .forEach(dot=>dot.classList.remove('dots__dot--active'));
 document.querySelector('.dots__dot[data-slide="'+slide+'"]')
 .classList.add('dots__dot--active');
}

const gotofunction=function(slide){
    slides.forEach((s,i)=>{
        s.style.transform='translateX('+100*(i-slide)+'%)'
    })}
gotofunction(0)
 activateDots(currentSlide)
    const next=function(){
        if(currentSlide==maxSlid-1){
        currentSlide=0
        }else{
            currentSlide++
        }
        gotofunction(currentSlide)
        // console.log('hi')
        activateDots(currentSlide)
    }
const previous=function(){
 if(currentSlide==0){
    currentSlide=maxSlid-1
 }else{
    currentSlide--
 }
 gotofunction(currentSlide)
 activateDots(currentSlide)
}
rightbtn.addEventListener('click',next
 )

leftbtn.addEventListener('click',previous)

 // right arrow and left arrow
 document.addEventListener('keydown',function(e){
    // console.log(e)
    if(e.key=='ArrowRight')next();
    e.key=='ArrowLeft' && previous();
 })

// we will use deligation

dotsContainer.addEventListener('click',function(e){
    if(e.target.classList.contains('dots__dot')){
    const slide=e.target.dataset.slide
    gotofunction(slide)
    activateDots(slide)
    }
})