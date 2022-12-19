function distanceFromHqInBlocks(pickUpLocation) {
    const hq = 42;
    if(pickUpLocation >= hq){
        return pickUpLocation - hq;
    }
    return hq - pickUpLocation;
    
}

function distanceFromHqInFeet(blockDistance){
    return distanceFromHqInBlocks(blockDistance) * 264;
}

function distanceTravelledInFeet(start, destination){
    if(start >= destination){
        return (start - destination) * 264;
    }
    return (destination - start) * 264;
}

function calculatesFarePrice(startLocation, endLocation){
    const dist = distanceTravelledInFeet(startLocation, endLocation);
    switch(true){
        case dist <= 400:
            return 0;
        case dist > 400 && dist <= 2000:
            return (dist - 400) * 0.02;
        case dist > 2000 && dist <= 2500:
            return 25;
        case dist > 2500:
            return 'cannot travel that far';
    }
}


