
window.addEventListener('load', function(){
    let loaderPage = document.querySelector('#loader_section')
    let page = document.querySelector('#main-content')
    setTimeout(function(){
        loaderPage.style.display = 'none'
        page.style.display = 'contents'
    }, 2000)
})


const home = document.querySelector('#home')
const nav = document.querySelector('.navbar--main')
const navM = document.querySelector('.navbar--mobile')
const options = {
    root : null,
    threshold : 0.9,
    rootMargin : '0px'

}

const observer = new IntersectionObserver((entries , oberver)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            nav.classList.remove('active')
            navM.classList.remove('active')
        }else{
            nav.classList.add('active')
            navM.classList.add('active')
        }
    })

}, options)


observer.observe(home)


const body = document.querySelector('body')
const navbtn = document.querySelectorAll('.nav-link')
const namelogo = document.querySelectorAll('.navbar-brand')
const icon = document.querySelectorAll('.icons')
const navdark = document.querySelector('.navbar--main')
const cards = document.querySelectorAll('.card')
const navMobile = document.querySelector('.navbar--mobile')
const navMobileBar = document.querySelector('#dropDown')
const dropDownBar = document.querySelector('.dropDownBar')
const menuIcon = document.querySelector('.menuIcon')
function theme(){

    menuIcon.classList.toggle('dark')
    navdark.classList.toggle('darkNav')
    navMobile.classList.toggle('darkNav')
    navMobileBar.classList.toggle('active')

    icon.forEach(icon =>{
        icon.classList.toggle('active')
    })

    cards.forEach( card =>{
        card.classList.toggle('bg-dark')
    })

    navbtn.forEach( navbtns =>{
        navbtns.classList.toggle('text-light')
    })

    namelogo.forEach( namelogo => {
        namelogo.classList.toggle('text-light')
    })


    body.classList.toggle('active')
}




function openside(){


    menuIcon.classList.toggle('active')
    dropDownBar.classList.toggle('active')
}
