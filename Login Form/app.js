function animatedForm() {
  const arrows = document.querySelectorAll('.fa-arrow-down');
  const message = document.querySelector('#message');
  const number = document.querySelector('#number');
  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      if (input.type === 'text' && validateUser(input)) {
        nextParent(parent, nextForm);
        message.textContent = '';
        number.textContent = '2 of 3';
      } else if (input.type === 'password' && validatePassword(input)) {
        nextParent(parent, nextForm);
        message.textContent = '';
      } else if (input.type === 'email' && validateEmail(input)) {
        nextParent(parent, nextForm);
        message.textContent = '';
        number.textContent = '3 of 3';
      } else {
        parent.style.animation = 'shake .5s ease';
      }

      parent.addEventListener('animationend', () => {
        parent.style.animation = '';
      });
    });
  });
}

function nextParent(parent, nextForm) {
  parent.classList.add('inactive');
  parent.classList.remove('active');
  nextForm.classList.add('active');
  nextForm.classList.remove('inactive');
}

function validateUser(user) {
  if (user.value.length < 6) {
    error('rgb(189, 87, 88');
    message.textContent = 'Username is too short';
  } else {
    error('rgb(87, 189, 130');
    return true;
  }
}

function validatePassword(password2) {
  if (password2.value.length < 6) {
    error('rgb(189, 87, 88');
    message.textContent = 'Password is too short';
  } else {
    error('rgb(87, 189, 130');
    return true;
  }
}

function validateEmail(email) {
  const validation = /\S+@\S+\.\S+/;
  if (validation.test(email.value)) {
    error('rgb(87, 189, 130');
    return true;
  } else {
    error('rgb(189, 87, 88');
    message.textContent = 'Email format is incorrect';
  }
}

function error(color) {
  document.body.style.backgroundColor = color;
}
animatedForm();
