// utiliser express
const express = require('express');
// au lieu de app on utilise routeur pour le post et get
const router = express.Router();
// controlleurs
const stuffCtrl = require('../controllers/stuff')
//midelware
const auth = require('../midellware/auth');
//multer pour les fichiers
const multer = require('../midellware/multer-config');
//   afficher tous les objets
router.get('/',auth,stuffCtrl.getThings)
//   ajouter un middleware pour gérer les requetes, ajouter et enregistrer
router.post('/',auth,multer,stuffCtrl.createdThing);
    //  afficher les caractéristiques d'un objet
router.get('/:id',auth,stuffCtrl.getOneThing)
    // modifier un objet
router.put('/:id',auth,multer,stuffCtrl.modifyThing)
// supprimer un objet
router.delete('/:id',auth,stuffCtrl.deleteThing)



module.exports = router; // exporter le routeur