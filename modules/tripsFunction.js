const { verifyDate , verifyDateToday , verifyDateBefore, get_time} = require('./handleDate');

// la fonction getTripsDate récupère tous les objets voyages du trajet selon la date donnée
function getTripsDate(trips,date){
    //const the_trips = trips.filter(tripItem => verifyDate(tripItem.date, date))
    const the_trips =[];
      for(let tripItem of trips){
           if(verifyDate(tripItem.date, date)){
                const the_trip = {
                    departure : tripItem.departure,
                    arrival : tripItem.arrival,
                    dep_time : get_time(tripItem.date),
                    price : tripItem.price, 
                    trip_id : tripItem.id,
                    date : tripItem.date,
                }
            the_trips.push(the_trip);
           }
      }
      return the_trips;
}

// fonction qui renvoit les trips du jour mais plus tard dans la journée
function getTripsToday(trips,date){
    const todayTrips= getTripsDate(trips,date);
    const today = new Date();
    const the_trips = [];
    for(let tripItem of todayTrips){
        if(tripItem.date.getTime()>today.getTime()){
            const the_trip = {
                departure : tripItem.departure,
                arrival : tripItem.arrival,
                dep_time : get_time(tripItem.date),
                price : tripItem.price, 
                trip_id : tripItem.id,
                date : tripItem.date,
            }
            the_trips.push(the_trip);
        }
    }
}

//

// La fonction displayTrips prends les données de la BDD avec tous les voyages et renvoie ceux dont la date correspond
function displayTrips(trips,date) {
      if(verifyDateBefore(date)){
         return [];
      }

      if(verifyDateToday(date)){
        console.log('today')
        // on est le jour même on renvoie les voyages qui arrivent
        return getTripsToday(trips,date);
      } 
      // si la date est postérieure on revoit tous les voyages du jour choisi
      return  getTripsDate(trips,date);
}

// La fonction displayTrips prends les données de la BDD avec tous les voyages et renvoie ceux dont la date correspond
function displayCarts(trips) {
    const the_trips = [];

    for(let tripItem of trips){
            const the_trip = {
                departure : tripItem.departure,
                arrival : tripItem.arrival,
                dep_time : get_time(tripItem.date),
                price : tripItem.price, 
                trip_id : tripItem.id,
            }
            the_trips.push(the_trip);
    }
    return the_trips;
}

module.exports = { displayTrips, displayCarts};