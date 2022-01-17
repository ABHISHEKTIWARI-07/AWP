const inputField=document.querySelectorAll('input');
const submit = document.querySelector('#submit');
const errorMsg = document.querySelector(".error");
const myForm = document.getElementById('myFrm');

inputField.forEach((el)=>{
  el.addEventListener('blur',(event)=>{
    event.preventDefault();

    if(el.value.trim()==''){
      error(el,'field can not be empty');
    }

    
    else {
      success(el);
    }

  });
});


const error = (element,msg)=>{
  element.style.border='3px red solid';
   errorMsg.innerHTML=msg;
}


const success = (element)=>{
  element.style.border='3px green solid';
  errorMsg.innerHTML="";
}