// https://github.com/Akif-Mahdi/problem-solving-assignment

//problem1
function kilometerToMeter(inputKilometer){
    if(inputKilometer<0){
        return "Sorry! Invalid input. Please give an acceptable length.";
    }
    var outputMeter = inputKilometer*1000;
    return outputMeter;
}

//problem2
function budgetCalculator(numberOfWatches,numberOfPhones,numberOfLaptops){
    if(numberOfWatches>=0 && numberOfPhones>=0 && numberOfLaptops>=0){
        var watchCost=50*numberOfWatches;
        var phoneCost=100*numberOfPhones;
        var laptopCost=500*numberOfLaptops;
        var totalBudget=watchCost+phoneCost+laptopCost;
        return totalBudget;
    }
    return "Sorry! Invalid input. Please give acceptable numbers.";
}

//problem3
function hotelCost(daysStayed){
    if(daysStayed<0)
        return "Sorry! Invalid input. Please give acceptable number of days.";
    var firstTenDays=0,secondTenDays=0,lastRemainingDays=0;
    if(daysStayed>20){  
        firstTenDays=10*100;
        secondTenDays=10*80;   
        lastRemainingDays=(daysStayed-20)*50;      //cost would be firstTenDays(full) + secondTenDays(full) + lastRemainingDays
    }
    else if(daysStayed>10 && daysStayed<=20){
        firstTenDays=10*100;     
        secondTenDays=(daysStayed-10)*80;          //cost would be firstTenDays(full) + secondTenDays(parital) 
    }
    else if (daysStayed<=10){
        firstTenDays=daysStayed*100; 
    }
    var totalHotelCost = firstTenDays+secondTenDays+lastRemainingDays;
    return totalHotelCost;
}

//problem4
function megaFriend(nameStrArray){
    var maxLength=-1,maxLengthPosition=-1;
    for(var i=0;i<nameStrArray.length;i++){
        if(nameStrArray[i].length>maxLength){
            maxLength=nameStrArray[i].length;
            maxLengthPosition=i;
        }
    }
    return nameStrArray[maxLengthPosition];
}

