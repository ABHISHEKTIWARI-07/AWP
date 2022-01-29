[33mcommit dfa5b0232c2d834f0665cce4eedc5aad354f5ed1[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m, [m[1;31morigin/master[m[33m)[m
Author: Abhishek Tiwari <abhishek.tiwari17338@marwadieducation.edu.in>
Date:   Sun Jan 23 22:02:41 2022 +0530

    modification in js file, css file, html file and add home file

[1mdiff --git a/Registration.css b/Registration.css[m
[1mindex 442fe7f..535f1b3 100644[m
[1m--- a/Registration.css[m
[1m+++ b/Registration.css[m
[36m@@ -22,11 +22,14 @@[m [mbody {[m
  }[m
 [m
  .error{[m
[31m-     color: red;[m
[31m-[m
[32m+[m[32m     color: rgba(218, 9, 9, 0.589);[m
[32m+[m[32m     margin: 0px;[m
[32m+[m[32m     padding: 0px;[m
[32m+[m[32m     font-size:medium;[m
[32m+[m[32m     font-family:cursive;[m
  }[m
 [m
  textarea{[m
    resize: none;[m
[31m-   margin: 5px;[m
[32m+[m[32m   margin: 0px;[m
  }[m
\ No newline at end of file[m
[1mdiff --git a/Registration.js b/Registration.js[m
[1mindex 4644d94..f4545ad 100644[m
[1m--- a/Registration.js[m
[1m+++ b/Registration.js[m
[36m@@ -1,32 +1,87 @@[m
[31m-const inputField=document.querySelectorAll('input');[m
[31m-const submit = document.querySelector('#submit');[m
[31m-const errorMsg = document.querySelector(".error");[m
[31m-const myForm = document.getElementById('myFrm');[m
[32m+[m[32mconst input=document.querySelectorAll('input');[m
[32m+[m[32mconst myForm = document.getElementById('myForm');[m
 [m
[31m-inputField.forEach((el)=>{[m
[32m+[m[32minput.forEach((el)=>{[m
   el.addEventListener('blur',(event)=>{[m
     event.preventDefault();[m
 [m
[32m+[m[32m    let showErr = el.nextElementSibling;[m
[32m+[m
[32m+[m[32m    console.log(showErr);[m
[32m+[m
     if(el.value.trim()==''){[m
[31m-      error(el,'field can not be empty');[m
[32m+[m[32m      blurError(el,showErr);[m
     }[m
 [m
[32m+[m[32m    else if(el.type == 'submit'){[m
[32m+[m[32m      el.style.border='none';[m
[32m+[m[32m    }[m
     [m
[32m+[m[32m    else if(el.type == 'email'){[m
[32m+[m[32m      if(checkEmail(el.value)){[m
[32m+[m[32m        success(el,showErr);[m
[32m+[m[32m      }[m
[32m+[m[32m      else notValid(el,showErr);[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    else if(el.type=='number'){[m[41m      [m
[32m+[m[32m    if(checkNumber(el.value)){[m[41m  [m
[32m+[m[32m        success(el,showErr);[m[41m      [m
[32m+[m[32m      }[m[41m                            [m
[32m+[m[32m      else notValid(el,showErr);[m[41m  [m
[32m+[m[32m    }[m[41m                             [m
[32m+[m
     else {[m
[31m-      success(el);[m
[32m+[m[32m      success(el,showErr);[m
     }[m
 [m
   });[m
 });[m
 [m
[32m+[m[32m// inputField.forEach((el)=>{[m
[32m+[m[32m//   el.addEventListener('submit',(event)=>{[m
[32m+[m[32m//     event.preventDefault();[m
[32m+[m
[32m+[m[32m//     alert('form not submite');[m
[32m+[m
[32m+[m[32m//     let submitErr = el.nextElementSibling;[m
[32m+[m
[32m+[m[32m//     if(el.value.trim()==''){[m
[32m+[m[32m//       blurError(el,submitErr);[m
[32m+[m[32m//     }[m
[32m+[m
[32m+[m[32m//   });[m
[32m+[m[32m// });[m
 [m
[31m-const error = (element,msg)=>{[m
[32m+[m[32mfunction notValid(element, showErr) {[m
[32m+[m[32m  element.style.border = '3px red solid';[m
[32m+[m[32m  showErr.innerHTML = '*you must enter valid ' + element.name;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mconst blurError = (element,showErr)=>{[m
   element.style.border='3px red solid';[m
[31m-   errorMsg.innerHTML=msg;[m
[32m+[m[32m  showErr.innerHTML='*please enter '+element.name;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m
[32m+[m[32mconst success = (element,showErr)=>{[m
[32m+[m[32m  element.style.border='';[m
[32m+[m[32m  element.style.borderRight='5px green solid';[m
[32m+[m[32m  element.style.borderBottom='3px green solid';[m
[32m+[m[32m  showErr.innerHTML="";[m
 }[m
 [m
 [m
[31m-const success = (element)=>{[m
[31m-  element.style.border='3px green solid';[m
[31m-  errorMsg.innerHTML="";[m
[31m-}[m
\ No newline at end of file[m
[32m+[m[32mconst checkEmail = (email) => {[m
[32m+[m	[32mreturn email.match([m
[32m+[m		[32m/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/[m
[32m+[m	[32m);[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mconst checkNumber = (num) => {[m
[32m+[m	[32mreturn num.match(/^[0-9]{10}$/);[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m// const checkPassword = (password) => {[m
[32m+[m[32m// 	return password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm);[m
[32m+[m[32m// }[m
\ No newline at end of file[m
[1mdiff --git a/RegistrationForm.html b/RegistrationForm.html[m
[1mindex 5f5b3f8..801e1b3 100644[m
[1m--- a/RegistrationForm.html[m
[1m+++ b/RegistrationForm.html[m
[36m@@ -49,24 +49,24 @@[m
               <input[m
                 type="text"[m
                 class="form-control"[m
[31m-                name="fname"[m
[32m+[m[32m                name="First Name"[m
                 id="fname"[m
                 placeholder="Fname"[m
               />[m
[31m-              <label for="fname">First Name*</label>[m
               <span class="error"></span>[m
[32m+[m[32m              <label for="fname">First Name</label>[m
             </div>[m
 [m
             <div class="col-md-6 form-floating">[m
               <input[m
                 type="text"[m
                 class="form-control"[m
[31m-                name="lname"[m
[32m+[m[32m                name="Last Name"[m
                 id="lname"[m
                 placeholder="Lname"[m
               />[m
[31m-              <label for="lname">Last Name*</label>[m
               <span class="error"></span>[m
[32m+[m[32m              <label for="lname">Last Name</label>[m
             </div>[m
 [m
             [m
[36m@@ -75,12 +75,12 @@[m
               <input[m
               type="password"[m
                 class="form-control"[m
[31m-                name="password"[m
[32m+[m[32m                name="Password"[m
                 id="passwd"[m
                 placeholder="Password"[m
                 />[m
[31m-                 <label for="passwd">Password </label>[m
                 <span class="error"></span>[m
[32m+[m[32m                 <label for="passwd">Password </label>[m
               </div>[m
               [m
               [m
[36m@@ -89,68 +89,72 @@[m
                 <input[m
                 type="password"[m
                 class="form-control"[m
[31m-                name="repassword"[m
[32m+[m[32m                name="Confirm Password"[m
                 id="repasswd"[m
                 placeholder="Password"[m
                 />[m
[31m-                <label for="repasswd">Confirm Password</label>[m
                 <span class="error"></span>[m
[32m+[m[32m                <label for="repasswd">Confirm Password</label>[m
               </div>[m
               [m
               <div class="col-md-12 form-floating">[m
                 <input[m
                   type="email"[m
                   class="form-control"[m
[31m-                  name="email"[m
[32m+[m[32m                  name="Email Address"[m
                   id="email"[m
                   placeholder="name@example.com"[m
                 />[m
[31m-                <label for="email">Email address*</label>[m
[31m-[m
                 <span class="error"></span>[m
[32m+[m[32m                <label for="email">Email address</label>[m
               </div>[m
 [m
               <div class="col-md-12 form-floating">[m
                 <input [m
[31m-                type="tel"[m
[32m+[m[32m                type="number"[m
                 class="form-control" [m
[31m-                name="mobile" [m
[32m+[m[32m                name="Contact Number"[m[41m [m
                 id="number"[m
                 placeholder="***"[m
                 />[m
[31m-                <label for="number">Mobile No*</label>[m
                 <span class="error"></span>[m
[32m+[m[32m                <label for="number">Mobile No</label>[m
               </div>[m
 [m
             <div class="col-12">[m
[31m-              <label for="inputAddress" class="form-label">Address</label>[m
[32m+[m[32m              <label for="inputAddress" class="form-label">Address 1</label>[m
               <input[m
                 type="text"[m
                 class="form-control"[m
[32m+[m[32m                name="Full Address"[m
                 id="inputAddress"[m
                 class="input"[m
                 placeholder="Saraswati Nagar Ward no-12, Gopalganj Bihar(required)"[m
               />[m
[31m-              <span class="addressError1"></span>[m
[32m+[m[32m              <span class="error"></span>[m
             </div>[m
[32m+[m
             <div class="col-12">[m
               <label for="inputAddress2" class="form-label">Address 2</label>[m
               <input[m
                 type="text"[m
                 class="form-control"[m
[32m+[m[32m                name="Detail Address"[m
                 id="inputAddress2"[m
                 placeholder="Apartment, studio, or floor(required)"[m
               />[m
[31m-              <span class="addressError2"></span>[m
[32m+[m[32m              <span class="error"></span>[m
             </div>[m
 [m
             <div class="col-md-6">[m
               <label for="inputCity" class="form-label">City</label>[m
               <input[m
                type="text"[m
[31m-               class="form-control" [m
[32m+[m[32m               class="form-control"[m
[32m+[m[32m               name="City Name"[m
                id="inputCity" [m
                placeholder="Gopalganj(required)" />[m
[32m+[m[32m               <span class="error"></span>[m
             </div>[m
 [m
             <div class="col-md-4">[m
[36m@@ -165,13 +169,19 @@[m
             <div class="col-md-2">[m
               <label for="inputZip" class="form-label">Zip</label>[m
               <input [m
[31m-              type="text" [m
[32m+[m[32m              type="number"[m
               class="form-control" [m
[32m+[m[32m              name="Zip code"[m
               id="inputZip" [m
               placeholder="841428(required)" />[m
[32m+[m[32m              <span class="error"></span>[m
             </div>[m
 [m
[31m-            <textarea placeholder="Discussion forum(required)" cols="10" rows="5"></textarea>[m
[32m+[m[32m            <div class="row-cols-1">[m
[32m+[m[32m              <legend>Comment: </legend>[m
[32m+[m[32m              <textarea placeholder="Discussion/Feedback forum(required)" cols="10" rows="5"></textarea>[m
[32m+[m[32m              <span class="giveUsFeedback"></span>[m
[32m+[m[32m            </div>[m
 [m
             <div class="col-12">[m
               <div class="form-check">[m
[36m@@ -180,6 +190,7 @@[m
                   type="checkbox"[m
                   id="gridCheck"[m
                 />[m
[32m+[m[32m                <span class="verifyDetails"></span>[m
                 <label class="form-check-label" for="gridCheck">[m
                   Check your details [m
                 </label>[m
[36m@@ -188,7 +199,7 @@[m
 [m
             <div class="col-12 text-center">[m
 [m
[31m-              <input type="submit" id="submit" class="btn btn-outline-success m-1 bg-gradient">[m
[32m+[m[32m              <input type="submit" value="register" id="submit" class="btn btn-outline-success m-1 bg-gradient">[m
 [m
                 <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-vector-pen" viewBox="0 0 16 16">[m
                 <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"/>[m
[1mdiff --git a/home.html b/home.html[m
[1mnew file mode 100644[m
[1mindex 0000000..31f0d12[m
[1m--- /dev/null[m
[1m+++ b/home.html[m
[36m@@ -0,0 +1,12 @@[m
[32m+[m[32m<!DOCTYPE html>[m
[32m+[m[32m<html lang="en">[m
[32m+[m[32m<head>[m
[32m+[m[32m    <meta charset="UTF-8">[m
[32m+[m[32m    <meta http-equiv="X-UA-Compatible" content="IE=edge">[m
[32m+[m[32m    <meta name="viewport" content="width=device-width, initial-scale=1.0">[m
[32m+[m[32m    <title>Document</title>[m
[32m+[m[32m</head>[m
[32m+[m[32m<body>[m
[32m+[m[32m    thanks for your registration[m
[32m+[m[32m</body>[m
[32m+[m[32m</html>[m
\ No newline at end of file[m
