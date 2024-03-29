let screen = document.getElementById('result');

function appendToScreen(value) {
  screen.value += value;
}

function clearScreen() {
  screen.value = '';
}

function calculate() {
  try {
    let result = eval(screen.value);
    screen.value = result;
  } catch (error) {
    screen.value = 'Error';
  }
}
