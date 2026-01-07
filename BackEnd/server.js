const { professeurs, cours, salles, eleves } = require('./data');
const express = require('express');
const cose = require('cors');
const app = express();
app.use(express.json());
app.use(cose());




app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/eleves', (req, res) => {
  res.send(eleves);
});

app.get('/eleves/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const eleve = eleves.find(e => e.id === id);
  ;
  if (eleve) {
    res.send(eleve);
  } else {
    res.status(404).send('Élève non trouvé');
  }
});

app.post('/eleves', (req, res) => {
  const newEleve = {
    id: eleves.length > 0 ? Math.max(...eleves.map(e => e.id)) + 1 : 1,
    ...req.body
  };
  eleves.push(newEleve);
  res.status(201).send(newEleve);
});

app.delete('/eleves/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = eleves.findIndex(e => e.id === id);
  
  if (index !== -1) {
    eleves.splice(index, 1);
    res.send(`Élève avec l'id ${id} supprimé`);
  } else {
    res.status(404).send('Élève non trouvé');
  }
});

app.get('/professeurs', (req, res) => {
  res.send(professeurs);
});

app.get('/professeurs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const professeur = professeurs.find(p => p.id === id);
  if (professeur) {
    res.send(professeur);
  } else {
    res.status(404).send('Professeur non trouvé');
  }
});
app.post('/professeurs', (req, res) => {
  professeurs.push(req.body);
  console.log(professeurs);
  res.send('Enregistrer un professeur');
});

app.delete('/professeurs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = professeurs.findIndex(prof => prof.id === id);
if (index !== -1) {
    professeurs.splice(index, 1);
    res.send(`Professeur avec l'id ${id} supprimé`);
  } else {
    res.status(404).send('Professeur non trouvé');
  }
});
    //salles//
app.get('/salles', (req, res) => {
  res.send(salles);
});

app.get('/salles/:id', (req, res) => { 
  const id = parseInt(req.params.id);
  const salle = salles.find(s => s.id === id);
  
  if (salle) {
    res.json(salle);
  } else {
    res.status(404).send('Salle non trouvée');
  }
});

app.post('/salles', (req, res) => {
  const newSalle = {
    id: salles.length > 0 ? Math.max(...salles.map(s => s.id)) + 1 : 1,
    ...req.body
  };
  salles.push(newSalle);
  res.status(201).send(newSalle);
   

});

app.delete('/salles/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = salles.findIndex(s => s.id === id);
  
  if (index !== -1) {
    salles.splice(index, 1);
    res.send(`Salle avec l'id ${id} supprimée`);
  } else {
    res.status(404).send('Salle non trouvée');
  }
});


app.get('/cours', (req, res) => {
  res.send(cours);
});
app.get('/cours/:id', (req, res) => { 
  const id = parseInt(req.params.id);
  const cour = cours.find(c => c.id === id);
  
  if (cour) {
    res.send(cour);
  } else {
    res.status(404).send('Cours non trouvé');
  }
});

app.post('/cours', (req, res) => {
  const newCours = {
    id: cours.length > 0 ? Math.max(...cours.map(c => c.id)) + 1 : 1,
    ...req.body
  };
  cours.push(newCours);
  res.status(201).send(newCours);
});

app.delete('/cours/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = cours.findIndex(c => c.id === id);
  if (index !== -1) {
    cours.splice(index, 1);
    res.send(`Cours avec l'id ${id} supprimé`);
  } else {
    res.status(404).send('Cours non trouvé');
  }

});


app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});
