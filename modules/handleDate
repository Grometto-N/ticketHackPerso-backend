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
function get_time(date){
    const the_date  = new Date(date);
    const hour =the_date.getHours()-1;
    const min = the_date.getMinutes();
    if(hour <10 && min>10){
        return `0${hour}:${min}`
    }
    if(hour <10 && min<10){
        return `0${hour}:0${min}`
    }
    if(hour >9 && min<10){
        return `${hour}:0${min}`
    }
    if(hour >9 && min>10){
        return `${hour}:${min}`
    }
    // sécurité renvoyer quelque chose
    return `${hour}:${min}`
}

module.exports = { verifyDate , verifyDateToday, verifyDateBefore, get_time};