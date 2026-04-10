// Contact form — prevent page reload, show success message
const form = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.style.display = 'none';
  successMsg.style.display = 'block';
});