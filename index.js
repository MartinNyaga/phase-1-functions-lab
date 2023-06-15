// Code your solution in this file!
function distanceFromHqInBlocks(start) {
    let scubHq = 42;
    let distanceInBlocks = Math.abs(start - scubHq);
    return distanceInBlocks;
  }



function distanceFromHqInFeet(start){
    distanceFromHqInBlocks(start);
    let distanceFromHqInFeet = (distanceFromHqInBlocks(start) * 264);
    return distanceFromHqInFeet;
}



function distanceTravelledInFeet(start, destination){
    let distanceInFeet = (Math.abs(start - destination)) * 264;
     return distanceInFeet;
}



function calculatesFarePrice(start, destination){
    let distanceCoverd = distanceTravelledInFeet(start, destination);
    if(distanceCoverd >= 2500){
        return `cannot travel that far`;
    }else if(distanceCoverd > 2000 && distanceCoverd < 2500){
        return 25;
    }else if(distanceCoverd > 400 && distanceCoverd <=2000){
        return (distanceCoverd - 400) * 0.02;
    }else if(distanceCoverd <=400){
        return 0;
    }


}