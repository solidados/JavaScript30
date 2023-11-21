const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked;

function handleCheck (event) {
  let inBetween = false;
  if (event.shiftKey && this.checked) {
    checkboxes.forEach(box => {
      console.log(box);
      if (box === this || box === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        box.checked = true;
      }
    })
  }
  lastChecked = this;
}

checkboxes.forEach((box) => box.addEventListener('click', handleCheck))

