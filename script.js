let input = document.getElementById('input');
let value = true;
let toggle = document.getElementById('toggle');

toggle.addEventListener('click', () => {
  if (value) {
    input.setAttribute('type', 'text');
    toggle.style.color = '#005AFE';
    value = false;
  } else {
    input.setAttribute('type', 'password');
    toggle.style.color = '#adadad';
    value = true;
  }
});
