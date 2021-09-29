const task3Element = document.getElementById('task-3');

function alertMe() {
  alert('You have been alerted!');
}

function alertName(name) {
  alert('Alert! ' + name);
}

alertMe();
alertName('Christiaan');

task3Element.addEventListener('click', alertMe);

function concatStrings(str1, str2, str3) {
  return str1 + str2 + str3;
}

alertName(concatStrings('I ', '♥ ', 'U'));
