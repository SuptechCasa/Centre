document.getElementById('salleForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const salleNumber = document.getElementById('salleNumber').value;
  const subject = document.getElementById('subject').value;
  const teacher = document.getElementById('teacher').value;
  const date = document.getElementById('date').value;
  const hour = document.getElementById('hour').value;

  // Send data to the backend
  fetch('http://localhost:3000/salle', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      salleNumber: salleNumber,
      subject: subject,
      teacher: teacher,
      date: date,
      hour: hour
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Optionally, update the UI or show a message
    })
    .catch(error => {
      console.error('Error:', error);
    });

  const salleItem = document.createElement('li');
  salleItem.textContent = `Salle ${salleNumber}: ${subject} taught by ${teacher} on ${date} at ${hour}`;

  document.getElementById('salleList').appendChild(salleItem);

  // Reset the form
  document.getElementById('salleForm').reset();
});
