const input=document.querySelectorAll('input');
const myForm = document.getElementById('myForm');

input.forEach((el)=>{
  el.addEventListener('blur',(event)=>{
    event.preventDefault();

    let showErr = el.nextElementSibling;

    console.log(showErr);

    if(el.value.trim()==''){
      blurError(el,showErr);
    }

    else if(el.type == 'submit'){
      el.style.border='none';
    }
    
    else if(el.type == 'email'){
      if(checkEmail(el.value)){
        success(el,showErr);
      }
      else notValid(el,showErr);
    }

    else if(el.type=='number'){      
    if(checkNumber(el.value)){  
        success(el,showErr);      
      }                            
      else notValid(el,showErr);  
    }
    
    else if(el.type=='password'){
      if(checkPassword(el.value)){
        success(el,showErr);
      }
      else{
        showErr.innerHTML = '*enter minimum 8 character password';
      }
    }

    else {
      success(el,showErr);
    }

    verifyFormField(event.target);

  });
});



myForm.addEventListener('submit',(event)=>{
  event.preventDefault();
  // confirm("Have you filled the details");

  if (!verifyAllFields()) {
    alert("successfully Registered...");
    document.myForm.reset();
	} else {
		let invalidInputs = document.getElementById('invalid');
    invalidInputs.innerHTML = "Please fill all the inputs...";
    // invalidInputs.style.backgroundColor = "red";
    invalidInputs.style.color = "red";
	}

})

const verifyAllFields = ()=>{
    let flag = true;
  input.forEach((element) => {
  	if(!verifyFormField(element)){
      flag = false;
    } 
    // else flag = true;
	});
  return flag;

}

const verifyFormField = (el) => {
	console.log(el);
	let formFlag = true;
  let showErr = document.getElementsByTagName('span');


  if(el.value.trim()==''){
    blurError(el,showErr);
    flag = false;
  }

  else if(el.type=='submit'){
    el.style.border='none';
  }

   else if(el.type == 'email'){
      if(checkEmail(el.value)){
        success(el,showErr);
        formFlag = true;
      }
      else {
        notValid(el,showErr);
        formFlag=false
      }
    }

    else if(el.type=='number'){      
    if(checkNumber(el.value)){  
        success(el,showErr); 
        formFlag=false;     
      }                            
      else {
        notValid(el,showErr);
        formFlag=false;
      }  
    }
    
    else if(el.type=='password'){
      if(checkPassword(el.value)){
        success(el,showErr);
        formFlag=true;
      }
      else{
        showErr.innerHTML = '*enter minimum 8 character password';
        formFlag=false;
      }
    }

    else {
      success(el,showErr);
      formFlag=true;
    }

	return formFlag;
}



function notValid(element, showErr) {
  element.style.border = '3px red solid';
  showErr.innerHTML = '*you must enter valid ' + element.name;
}

const blurError = (element,showErr)=>{
  element.style.border='3px red solid';
  showErr.innerHTML='*please enter '+element.name;
}


const success = (element,showErr)=>{
  element.style.border='';
  element.style.borderRight='5px green solid';
  element.style.borderBottom='3px green solid';
  showErr.innerHTML="";
}


const checkEmail = (email) => {
	return email.match(
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
}

const checkNumber = (num) => {
	return num.match(/^[0-9]{10}$/);
}

const checkPassword = (password) => {
	return password.match(/^[A-Za-z\-0-9]{8,16}$/g);
}