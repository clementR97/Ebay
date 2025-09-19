// creation de express et demarrer le serveur nodeJS
const express = require('express');
const app = express();
const path = require('path');
// recuperer les routeurs de routes
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
// connexion a la base de donnees
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://clement:roland@cluster0.8vhrmze.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{ useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// connecter deux serveur pour eviter le cors localhost:3000 et localhost:4200 
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
//   enregistrer les routes pour les requetes
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
app.use('/images',express.static(path.join(__dirname, 'Images'))
)
module.exports = app;