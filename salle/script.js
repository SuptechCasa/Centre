document.getElementById('salleForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const salleNumber = document.getElementById('salleNumber').value;
  const subject = document.getElementById('subject').value;
  const teacher = document.getElementById('teacher').value;
  const date = document.getElementById('date').value;
  const hour = document.getElementById('hour').value;

  const salleItem = document.createElement('li');
  salleItem.textContent = `Salle ${salleNumber}: ${subject} taught by ${teacher} on ${date} at ${hour}`;

  document.getElementById('salleList').appendChild(salleItem);

  // Reset the form
  document.getElementById('salleForm').reset();
});
