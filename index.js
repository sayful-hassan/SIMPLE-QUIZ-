const radioButtons=document.querySelectorAll('input[name="q1"]')
const nextButton=document.getElementById("nextButton")

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
      nextButton.disabled = false;
    });
  });
