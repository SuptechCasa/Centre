function afficherAbsences() {
  const jour = document.getElementById('jour').value;
  const heure = document.getElementById('heure').value;
  const duree = document.getElementById('duree').value;

  // Send data to the backend
  fetch('http://localhost:3000/seance', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      jour: jour,
      heure: heure,
      duree: duree
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      document.getElementById('result').innerHTML = '<p>Séance enregistrée avec succès!</p>';
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('result').innerHTML = '<p>Erreur lors de l\'enregistrement de la séance.</p>';
    });
}