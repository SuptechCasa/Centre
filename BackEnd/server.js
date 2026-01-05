const professeurs = require('./data').professeurs;
const express = require('express');
const cose = require('cors');
const app = express();
app.use(express.json());
app.use(cose());


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
app.get('/professeurs', (req, res) => {
  res.send(professeurs);
});
app.post('/professeurs', (req, res) => {
  professeurs.push(req.body);
  console.log(professeurs);
  res.send('Enregistrer un professeur');
});

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});
