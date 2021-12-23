
const formInput = document.querySelectorAll("input");

formInput.forEach((ele)=>{
  ele.addEventListener('blur',(e)=>{
    if(e.type!='radio'){
      let errBoard = e.nextElementSibling;
      if(e.value==""){
        errBoard.style.display="block";
        e.value.innerHTML="error";
      }
      else errBoard.style.display="none";
    }
  })
})