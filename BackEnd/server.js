const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/eleves', (req, res) => {
  res.send('Liste des élèves');
});

app.post('/eleves', (req, res) => {
  res.send('Enregistrer un élève');
});

app.delete('/eleves', (req, res) => {
  res.send('Supprimer un élève');
});

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});