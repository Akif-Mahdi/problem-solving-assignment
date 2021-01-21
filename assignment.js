function kilometerToMeter(inputKilometer){
    if(inputKilometer<0){
        // console.log();
        return "Sorry! Invalid input. Please give an acceptable distance";
    }
    var outputMeter = inputKilometer*1000;
    return outputMeter;
}


function budgetCalculator(numberOfWatches,numberOfPhones,numberOfLaptops){
    // if(numberOfWatches<0 || numberOfPhones<0 || numberOfLaptops<0){
    //     return "Sorry! Invalid input. Please give an acceptable distance";
    // }
    if(numberOfWatches>0 || numberOfPhones>0 || numberOfLaptops>0){
        var watchCost=50*numberOfWatches;
        var phoneCost=100*numberOfPhones;
        var laptopCost=500*numberOfLaptops;
        var totalCost=watchCost+phoneCost+laptopCost;
        return totalCost;
    }
    return "Sorry! Invalid input. Please give an acceptable distance";
}

console.log(kilometerToMeter("-45"));
console.log(budgetCalculator(45,45,45));

function hotelCost(daysStayed){
    var firstTenDays=0,secondTenDays=0,lastRemainingDays=0;
    if(daysStayed>20){
        firstTenDays=10*100;
        secondTenDays=10*80;
        lastRemainingDays=(daysStayed-20)*50;
    }
    else if(daysStayed>10 && daysStayed<=20){
        firstTenDays=10*100;
        secondTenDays=(daysStayed-10)*80;
    }
    else if (daysStayed<=10){
        firstTenDays=daysStayed*100;
    }
    return firstTenDays+secondTenDays+lastRemainingDays;

    // if(daysStayed>10)
    //     var firstTenDays(100) = 10*100;
    // else if(daysStayed<10)
    //     var firstTenDays=daysStayed*100;
    // else if (daysStayed>20)
    //     var secondTenDays(80)=10*80;
    // else if(daysStayed<20)
    //     var secondTenDays=(daysStayed%10)*80;
    // else
    //     lastRemainingDays(50) = daysStayed
}
console.log(hotelCost(30));


function megaFriend(nameStrArray){
    var maxLength=-1,maxLengthPosition;
    for(var i=0;i<nameStrArray.length;i++){
        if(nameStrArray[i].length>maxLength){
            maxLength=nameStrArray[i].length;
            maxLengthPosition=i;
        }
    }
    return nameStrArray[maxLengthPosition];
}
console.log(megaFriend(["akif", "as", "as", "akif", "asaduzzaman"]));