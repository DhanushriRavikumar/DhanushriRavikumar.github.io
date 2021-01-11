const all=document.querySelector('.all');
const foam=document.querySelector('.foam');
const dashIcon=document.querySelector('.dash-icon');
const body=document.querySelector('.body')
const footer=document.querySelector('.footer')

dashIcon.addEventListener('click',e=>{
    console.log("hello");
    if(dashIcon.getAttribute('class').includes('dash-icon')==true)
    {
        footer.classList.remove('footer');
        footer.classList.add("footer-hide");
     dashIcon.classList.remove('dash-icon');
     dashIcon.classList.add('cross-icon');
    all.classList.remove('all');
    body.classList.remove('body');
    body.classList.add('body-background');
     all.classList.add("all-hide");
     foam.classList.remove('foam');
     foam.classList.add("foam-display");
     
  
  
    }
    else{
        footer.classList.add('footer');
        footer.classList.remove("footer-hide");
        dashIcon.classList.add('dash-icon');
     dashIcon.classList.remove('cross-icon');
    all.classList.add('all')
     all.classList.remove("all-hide");
     foam.classList.add('foam');
     foam.classList.remove("foam-display");
    }
})
