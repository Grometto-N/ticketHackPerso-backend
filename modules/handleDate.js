function verifyDate(firstDate, secondDate){
    const date1 = new Date(firstDate);
    const date2 = new Date(secondDate);
    // vérification du jour
    if(date1.getDate() !== date2.getDate()){
        return false ;
    }
    // vérification du mois
    if(date1.getMonth() !== date2.getMonth()){
        return false ;
    }
    // vérification du jour
    if(date1.getFullYear() !== date2.getFullYear()){
        return false ;
    }
    return true;
}

function verifyDateToday(date){
    const the_date = new Date(date);
    const today = new Date(); 
    // vérification du jour
    if(the_date.getDate() !== today.getDate()){
        return false ;
    }
    // vérification du mois
    if(the_date.getMonth() !== today.getMonth()){
        return false ;
    }
    // vérification du jour
    if(the_date.getFullYear() !== today.getFullYear()){
        return false ;
    }
    return true;
}

// fonction  vérifiant si une date est antérieure
function verifyDateBefore(date){
    const the_date = new Date(date);
    const today = new Date(); 
    // comparaison année
    if(the_date.getFullYear()<today.getFullYear()){
        return true;
    }
    // comparaison mois
    if(the_date.getMonth()<today.getMonth()){
        return true;
    }
    if(the_date.getTime() < today.getTime()){
        return true;
    }
    return false;
}

// fonction qui recupère l'horaire dans la date de la BDD trips et l'écrit sous la forme hh:mm
// on rajoute une heure pour avoir le temps français
function get_time(date){
    const the_date  = new Date(date);
    // récupération des heures et minutes
    const hours =the_date.getHours();
    const min = the_date.getMinutes();

    // gestion de l'affichage
    const display_min = (min >10)? `${min}` : `0${min}`;
    const display_hours = (hours >10)? `${hours}` : `0${hours}`;

    return `${display_hours}:${display_min }`
}

// fonction qui calcule le temps avant le départ
function before_departure(date){
    const the_date  = new Date(date);
    const now = new Date();

    // delta en minutes (arrondi à l'entier supérieur)
    const delta = Math.floor((the_date.getTime() - now.getTime())/1000/60);

    let answer_time = "";
    if(delta >= 60){
        // calcul des heures te minutes correspondantes
        const minutes = delta % 60; 
        const hours = (delta - minutes)/60;
        // gestion de l'affichage
        const display_minutes = (minutes >10)? `${minutes}` : `0${minutes}`;
        const display_hours = (hours >10)? `${hours}` : `0${hours}`;
        const hour_writing = (hours > 1)? "hours" : "hour";
        const min_writing = (minutes > 1)? "minutes" : "minute";

        answer_time =`${display_hours} ${hour_writing} ${display_minutes} ${min_writing}`;
    }

    if(delta <60){
        const display_minutes = (delta >10)? `${delta}` : `0${delta}`;
        const min_writing = (delta > 1)? "minutes" : "minute";
        answer_time = `${display_minutes} ${min_writing}`;
    }

    return answer_time;
}

module.exports = { verifyDate , verifyDateToday, verifyDateBefore, get_time,before_departure};