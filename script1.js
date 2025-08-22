const correctPassword = "0921";
const input = document.getElementById('password');

function press(num) {
  if (input.value.length < 4) {
    input.value += num;
  }
}

function clearInput() {
  input.value = "";
}

function checkPassword() {
  if (input.value === correctPassword) {
    window.location.href = "https://yunseounghwan0921.github.io/math/";
  } else {
    shakeInput();
    input.value = "";
  }
}

function shakeInput() {
  input.classList.add('shake');
  setTimeout(() => {
    input.classList.remove('shake');
  }, 500);
}
