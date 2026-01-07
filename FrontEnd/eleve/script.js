document.getElementById('eleveForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const className = document.getElementById('class').value;

  // Send data to the backend
  fetch('http://localhost:3000/eleves', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      age: age,
      class: className
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

  const eleveItem = document.createElement('li');
  eleveItem.textContent = `${name}, Age: ${age}, Class: ${className}`;

  document.getElementById('eleveList').appendChild(eleveItem);

  // Reset the form
  document.getElementById('eleveForm').reset();
});