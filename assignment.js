// Code for Feet to Mile
function feetToMile (feet) {
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile (52800);
console.log(result);

// Code for Wood Calculator
function woodCalculator (chair, table, bed) {
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
var totalWood = woodCalculator(6, 3, 3);
console.log(totalWood);

// Code for Brick Calculator
function brickCalculator(floor){
    var floorAbsolute = Math.abs(floor);
    if(floorAbsolute != floor){
        return "please enter your valid floor number";
    }
    else if(floor<=10){
        var smallBuildingFeet = floor * 15;
        var totalBrickForSmall = smallBuildingFeet * 1000;
        return totalBrickForSmall;
    }
    else if(floor>=11 && floor<=20){
        var topFloor = floor - 10;
        var belowTenFloor = floor - topFloor;
        var mediumBuildingFeet = belowTenFloor * 15 + topFloor * 12;
        var totalBrickForMedium = mediumBuildingFeet * 1000;
        return totalBrickForMedium;
    }
    else{
        var buildingTop = floor - 20;
        var buildingMiddle = 10;
        var buildingBottom = 10;
        var highBuildingFeet = buildingBottom * 15 + buildingMiddle * 12 + buildingTop * 10; 
        var totalBrickForHigh = highBuildingFeet * 1000;
        return totalBrickForHigh;
    }
}
var resultForBrickCalculator = brickCalculator(30);
console.log(resultForBrickCalculator);

// Code for Tiny Friend
function tinyFriend(friendNames) {
    var smallName = friendNames[0].length;
    for (var i = 0; i< friendNames.length; i++) {
        var currentName = friendNames[i].length;
        if (currentName < smallName) {
            smallName = currentName;
        }
    }
    return smallName;
}
var smallestName = tinyFriend(['sezan', 'saba', 'saimon', 's', 'suja']);
console.log(smallestName);