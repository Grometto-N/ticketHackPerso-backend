var express = require('express');
var router = express.Router();

const Trip = require('../models/trips');

const { displayTrips } = require('../modules/tripsFunction');

// reoute qui renvoie les voyages
router.post('/travels', (req, res) => {
     Trip.find({ departure : {$regex : new RegExp(req.body.departure,'i')}, arrival : {$regex : new RegExp(req.body.arrival,'i')} })
         .then(data => {
                        if(data.length>0){
                          //console.log(displayTrips(data, req.body.date));
                          res.json({ result: true, travels : displayTrips(data, req.body.date)});
                        }else {
                          res.json({ result: false, error : 'No trip found' });
                        }
                                  
          }); // fin du find sur Trip
 });

module.exports = router;
