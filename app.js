const intro=document.querySelector(".intro");
const foam=document.querySelector(".foam");
const dashIcon=document.querySelector('.dash-icon');
const container=document.querySelector('.container');
const body=document.querySelector('.body');
const about=document.querySelector('.about');
const project=document.querySelector('project');
const home=document.querySelector('.home');

dashIcon.addEventListener('click',e=>{
  console.log("hello");
  if(dashIcon.getAttribute('class').includes('dash-icon')==true)
  {
  
  dashIcon.classList.remove('dash-icon');
  dashIcon.classList.add('cross-icon');
  intro.classList.remove('intro')
  intro.classList.add("intro-hide");
  foam.classList.add("foam-display");
  body.classList.add('body-background');
  container.classList.remove('container');
  container.classList.add('container-change');


  }
  else{
      console.log('hi');
      dashIcon.classList.remove('cross-icon');
      dashIcon.classList.add('dash-icon');
      intro.classList.remove("intro-hide");
      container.classList.remove('full-change');
      foam.classList.remove("foam-display");
      body.classList.remove('body-background');
      intro.classList.add('intro');
      container.classList.add('container');
  }
 

})

const TypeWriter=function(txtElemnet,words,wait="3000"){

  this.txtElement=txtElemnet;
  this.words=words;
  this.txt='';
  this.wordIndex=0;
  this.wait=parseInt(wait,10);
  this.type();
  this.isDeleting=false;
}
TypeWriter.prototype.type=function(){
  
  const current=this.wordIndex % this.words.length;

  const fullTxt=this.words[current];
  console.log(fullTxt);if(this.isDeleting){
    this.txt=fullTxt.substring(0,this.txt.length-1);
  }
  else{
     this.txt=fullTxt.substring(0,this.txt.length+1);
  }
  this.txtElement.innerHTML=`<span class="txt">${this.txt}<span>`;
  let typeSpeed=300;
  if(this.isDeleting){
    typeSpeed/=2;

  }
  if(!this.isDeleting && this.txt==fullTxt){
    typeSpeed=this.wait;
    this.isDeleting=true;
  }
  else if(this.isDeleting && this.txt===''){
    this.isDeleting=false;
    this.wordIndex++;
    typeSpeed=500;
  }

  
  setTimeout(()=>this.type(),typeSpeed)
}

document.addEventListener('DOMContentLoaded',init);
function init(){
  const txtElement=document.querySelector('.txt-type');
  const words=JSON.parse(txtElement.getAttribute('data-words'));
  const wait=txtElement.getAttribute('data-wait');
  new TypeWriter(txtElement,words,wait);
}