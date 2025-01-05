//for page 1 q1
document.addEventListener("DOMContentLoaded", ()=>{
  
  let radioButtons=document.querySelectorAll('input[name="q1"]')
let nextButton=document.getElementById("nextButton")

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
      nextButton.disabled = false;
    });
  });

})

//for page2 q2
document.addEventListener("DOMContentLoaded", ()=>{
  
  let radioButtons=document.querySelectorAll('input[name="q2"]')
let nextButton=document.getElementById("nextButton2")

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
      nextButton.disabled = false;
    });
  });

})

//for page3 q3
document.addEventListener("DOMContentLoaded", ()=>{
  
  let radioButtons=document.querySelectorAll('input[name="q3"]')
let nextButton=document.getElementById("nextButton3")

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
      nextButton.disabled = false;
    });
  });

})


//for page4 q4
document.addEventListener("DOMContentLoaded", ()=>{
  
  let radioButtons=document.querySelectorAll('input[name="q4"]')
let nextButton=document.getElementById("nextButton4")

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
      nextButton.disabled = false;
    });
  });

})
//for page5 q5
document.addEventListener("DOMContentLoaded", ()=>{
  
  let radioButtons=document.querySelectorAll('input[name="q5"]')
let nextButton=document.getElementById("nextButton5")

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
      nextButton.disabled = false;
    });
  });

})
//for page6 q6
document.addEventListener("DOMContentLoaded", ()=>{
  
  let radioButtons=document.querySelectorAll('input[name="q6"]')
let nextButton=document.getElementById("nextButton6")

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
      nextButton.disabled = false;
    });
  });

})
//for page7 q7
document.addEventListener("DOMContentLoaded", ()=>{
  
  let radioButtons=document.querySelectorAll('input[name="q7"]')
let nextButton=document.getElementById("nextButton7")

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
      nextButton.disabled = false;
    });
  });

})
//for page8 q8
let ageselect=document.getElementById("ageselect");
let nextButton=document.getElementById("nextButton8");
 ageselect.addEventListener("change", ()=>{
  if(ageselect.value !==""){
    nextButton.disabled = false;
  }else{
    nextButton.disabled = true;
  }
 })

 //for page9 q9
 document.addEventListener("DOMContentLoaded", () => {

 let nameEnter=document.getElementById("nameEnter")
 let nextButton9=document.getElementById("nextButton9")

   nameEnter.addEventListener("input", ()=>{
    if(nameEnter.value.trim() !==""){
      nextButton9.disabled =false;
    }else{
      nextButton9.disabled =true;
    }
   })
  });




