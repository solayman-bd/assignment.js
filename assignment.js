//https://github.com/solayman-bd/assignment.js
function kilometerToMeter(distanceInKilometer){
    if(typeof(distanceInKilometer)!=="number"){
        return "Please input distance as Number";   
    }

    else if(distanceInKilometer<1){
        return "Distance can not be negative";
    }
    
    else { 
        return distanceInKilometer*1000;
    }
}



function budgetCalculator(watch,phone,laptop){
    if(typeof(watch)!=="number"){
        return "Pieces of items must be number";     
    }

    else if(typeof(phone)!=="number"){
        return "Pieces of items must be number";     
    }

    else if(typeof(laptop)!=="number"){
        return "Pieces of items must be number";     
    }

    else if(watch<1){
        return "Pieces of items can not be negative";
    }

    else if(phone<1){
        return "Pieces of items can not be negative";
    }

    else if(laptop<1){
        return "Pieces of items can not be negative";
    }

    else{
        return watch*50+phone*100+laptop*500;
    }
    
}


function hotelCost(days){
    if(typeof(days)!=="number"){
        return "Value of Days must be Number";  
    }

    else if(days<1){
        return "Days can not be negative";
    }
    else if(days<=10){
        return days*100;
    }
    else if(days>10 && days<=20){
        return 10*100+(days-10)*80;
    }
    else{
        return 10*100+10*80+(days-20)*50;
    }
   
}



function megaFriend(friendsName){ 
    var highestLength=0;
    var highestName;
    for(var i=0;i<friendsName.length;i++){
        if(typeof(friendsName[i])!=="string"){
            return "Name must be string";
            break;
        }
        else if(friendsName[i].length>highestLength){
           highestLength=friendsName[i].length;
            highestName=friendsName[i];
        }
    }
    return highestName;
}



