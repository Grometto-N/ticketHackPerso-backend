var express = require('express');
var router = express.Router();

const Trip = require('../models/trips');

const { displayTrips } = require('../modules/tripsFunction');

// route qui renvoie les voyages selon les données saisies par l'utilisateur
router.post('/travels', (req, res) => {
     Trip.find({ departure : {$regex : new RegExp(req.body.departure,'i')}, arrival : {$regex : new RegExp(req.body.arrival,'i')} })
         .then(data => {
                        if(data.length>0){
                          res.json({ result: true, travels : displayTrips(data, req.body.date)});
                        }else {
                          res.json({ result: false, error : 'No trip found' });
                        }
                                  
          }); // fin du find sur Trip
 });



module.exports = router;
