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

    else {
      success(el,showErr);
    }

  });
});

// inputField.forEach((el)=>{
//   el.addEventListener('submit',(event)=>{
//     event.preventDefault();

//     alert('form not submite');

//     let submitErr = el.nextElementSibling;

//     if(el.value.trim()==''){
//       blurError(el,submitErr);
//     }

//   });
// });

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

// const checkPassword = (password) => {
// 	return password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm);
// }