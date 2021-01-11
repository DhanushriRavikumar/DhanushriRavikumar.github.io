const all=document.querySelector('.all');
const foam=document.querySelector('.foam');
const dashIcon=document.querySelector('.dash-icon');
const body=document.querySelector('.body')


dashIcon.addEventListener('click',e=>{
    console.log("hello");
    if(dashIcon.getAttribute('class').includes('dash-icon')==true)
    {
     
     dashIcon.classList.remove('dash-icon');
     dashIcon.classList.add('cross-icon');
    all.classList.remove('all');
    body.classList.add('body-background');
     all.classList.add("all-hide");
     foam.classList.remove('foam');
     foam.classList.add("foam-display");
     
  
  
    }
    else{
        dashIcon.classList.add('dash-icon');
     dashIcon.classList.remove('cross-icon');
    all.classList.add('all')
     all.classList.remove("all-hide");
     foam.classList.add('foam');
     foam.classList.remove("foam-display");
    }
})

