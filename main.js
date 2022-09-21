/* menu show Y hidden*/
const navMenu=document.getElementById('nav-menu'),
navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close');
  
/*menu show*/
/*validation of constant*/
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}
/*menu hidden*/
/*validation*/
if(navClose){
    navClose.addEventListener('click',()=>{
         navMenu.classList.remove('show-menu');
    })
}
/*remove menu mobile*/
const navLink=document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu=document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n=>n.addEventListener('click',linkAction))
/*accordion skills*/
const skillsContent=document.getElementsByClassName('skills__content'),
skillsHeader=document.querySelectorAll('.skills__header');
function toggleSkills(){
    let itemClass= this.parentNode.className;
    for(let i=0;i<skillsContent.length;i++){
        skillsContent[i].className='skills__content skills__close'
    }
    if(itemClass==='skills__content skills__close'){
        this.parentNode.className='skills__content skills__open'
    }
}
skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills);
})

/* qualification tabs*/
const tabs=document.querySelectorAll('[data-target]'),
tabContents=document.querySelectorAll('[data-content]');
tabs.forEach(tab =>{
    tab.addEventListener('click',()=>{
        const target=document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active');
        })
        target.classList.add('qualification__active')
        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})


/*header section*/
function scrollHeader(){
    const nav=document.getElementById('header');
    if(this.scrollY>=80) nav.classList.add('scroll-header');
    else{
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll',scrollHeader);

/*scroller*/
function scrollUp(){
    const scrollUp=document.getElementById('scroll-up');
    if(this.scrollY>=560){
        scrollUp.classList.add('show-scroll');
    }
    else{
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll',scrollUp);
/*theme changer*/
const themebtn=document.getElementById('theme-button');
const dark='dark-theme';
const icon='uil-sun'
const selectedtheme=localStorage.getItem('selected-theme');
const selectedicon=localStorage.getItem('selected-icon')
const getcurrtheme=()=>document.body.classList.contains(dark) ? 'dark' : 'light';
const getcurricon=()=>document.classList.contains(icon) ? 'uil-moon' : 'uil-sun';
if(selectedtheme){
    document.body.classList[selectedtheme==='dark' ? 'add' : 'remove'](dark);
    themebtn.classList[selectedicon=='uil-moon' ? 'add' : 'remove'](icon);

}
themebtn.addEventListener('click',()=>{
    document.body.classList.toggle(dark);
    themebtn.classList.toggle(icon);
    localStorage.setItem('selected-theme',getcurrtheme);
    localStorage.setItem('selected-icon',getcurricon);
})