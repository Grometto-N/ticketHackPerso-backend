var express = require('express');
var router = express.Router();

const Trip = require('../models/trips');

const { checkBody } = require('../modules/checkBody');
const { displayTrips, displayCarts } = require('../modules/tripsFunction');

// route qui renvoie les voyages selon les données saisies par l'utilisateur
router.post('/travels', (req, res) => {
    Trip.find({ departure : {$regex : new RegExp(req.body.departure,'i')}, arrival : {$regex : new RegExp(req.body.arrival,'i')} })
        .then(data => {

            if(data.length > 0){
                res.json({ result: true, travels : displayTrips(data, req.body.date)});
            }else{
                res.json({ result: false, error : 'No trip found' });
            }

         }); // fin du find sur Trip
});

// route qui renvoie les voyages selon les données saisies par l'utilisateur
router.post('/carts', (req, res) => {
    // on vérifie qu'on a bien des données envoyé par le frontend
    if(!checkBody(req.body,['trips'])){
        res.json({ result : false, error : 'no data'});
        return
    }

     // on recherche le voyage 
    Trip.find({_id : { $in: req.body.trips}})
    .then(dataTrip => {

        if(dataTrip){
            res.json({ result : true, travels : displayCarts(dataTrip)});
        }

        if(!dataTrip){
            res.json({ result : false, error : "trip not found" });
        }
    });
 });



module.exports = router;