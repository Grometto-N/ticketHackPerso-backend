var express = require('express');
var router = express.Router();

const Booking = require('../models/bookings');
const Trip = require('../models/trips');
const { checkBody } = require('../modules/checkBody');
const { get_time, before_departure} = require('../modules/handleDate');

// /purchase est la route qui va se déclencher quand l'utilisateur click sur purchase
router.post('/purchase', (req, res) => {
    // on vérifie qu'on a bien des données envoyé par le frontend
    if(!checkBody(req.body,['trips'])){
        res.json({ result : false, error : 'no data'});
        return
    }

    // on cherche les voyages à enregistrer
    Trip.find({_id : { $in: req.body.trips}})
    .then(dataTrip => {
        if(dataTrip){
            const the_books =[];
            for(let itemTrip of dataTrip){
                const newBook = new Booking({
                    departure : itemTrip.departure,
                    arrival : itemTrip.arrival,
                    date: itemTrip.date,
                    price : itemTrip.price,
                });
                the_books.push(newBook);
            }

           // enregistrement en DB
            Booking.insertMany( the_books )
            .then(dataBook => { 
                if(dataBook.length === the_books.length){
                    res.json({ result : true })
                }

                if(dataBook.length !== the_books.length){
                    res.json({ result : false, error : 'books not save' })
                }

            }); 
        }


        // si les voyages ne sont pas trouvés
        if(!dataTrip){
            res.json({ result : false, error : 'trip not found' })
        }
    })
});

// route qui renvoie toutes les données de la collection booking
router.get('/', (req, res) => {
    Booking.find().then(data => {
            // on écrit les données sous la forme attendue dans le frontend
            const data_book = [];
            for(let itemBook of data){
                // on écrit seulement les voyages à venir
                const dateTrip = itemBook.date;
                const now = new Date();
                 if(dateTrip.getTime()-now.getTime() >0){
                        const newBook = {
                            departure : itemBook.departure,
                            arrival : itemBook.arrival,
                            dep_time:  get_time(itemBook.date),
                            price : itemBook.price,
                            before_departure : before_departure(itemBook.date),
                        };

                        data_book.push(newBook);
                }   
            }
            res.json({ result : true, travels : data_book});
    });
});

// route qui supprime toutes les donées dans la collection booking
router.delete('/', (req, res) => {
    Booking.deleteMany().then(() => {
        res.json({ result : true});
     });
});

module.exports = router;