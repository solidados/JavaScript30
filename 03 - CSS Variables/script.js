const inputs = document.querySelectorAll('.controls input');

function hadleUpdate () {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => {
  input.addEventListener('change', hadleUpdate)
})
inputs.forEach(input => input.addEventListener('mousemove', hadleUpdate))