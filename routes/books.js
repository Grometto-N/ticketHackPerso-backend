var express = require('express');
var router = express.Router();

const Booking = require('../models/bookings');
const { checkBody } = require('../modules/checkBody');

// /purchase est la route qui va se déclencher quand l'utilisateur click sur purchase
// sauvegarde dans la collection bookings le voyage récupérer dans le front
router.post('/purchase', (req, res) => {
    // on vérifie qu'on a bien des données envoyé par le frontend
    if(checkBody(req.body,['departure','arrival','dep_time','price'])){
                                    const newBook = new Booking({
                                        departure : req.body.departure,
                                        arrival : req.body.arrival,
                                        dep_time : req.body.dep_time,
                                        price : Number(req.body.price),
                                    });
                                    // sauvegarde dans la BDD
                                    newBook.save().then(newDoc => {res.json({ result : true, travel : newBook });})
            }else {
                res.json({ result : false, error : 'données incomplètes' })
            }
});

// route qui renvoie toutes les données de la collection booking
router.get('/', (req, res) => {
    Booking.find().then(data => {
        res.json({ result : true, travels : data});
    });
});

// route qui supprime toutes les donées dans la collection booking
router.delete('/', (req, res) => {
    Booking.deleteMany().then(() => {
        res.json({ result : true});
     });
});

module.exports = router;