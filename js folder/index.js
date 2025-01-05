document.addEventListener("DOMContentLoaded", ()=>{
  
  let radioButtons=document.querySelectorAll('input[name="q1"]')
let nextButton=document.getElementById("nextButton")

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
      nextButton.disabled = false;
    });
  });

})




