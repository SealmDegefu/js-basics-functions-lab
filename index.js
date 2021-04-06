// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    let num = 42;
    return Math.abs(distance - num)
}

function distanceFromHqInFeet(distance){
    let num = 42
    return Math.abs((distance-num) * 264)
}
function distanceTravelledInFeet(distance, num){
    return Math.abs((distance - num) * 264)
}

function calculatesFarePrice(start, destination){
    let block = ((Math.abs(start - destination) * 264)) 
    if (block < 400){
        return 0
    }
    else if (block > 400 && block < 2000){
             return (block - 400) * 0.02
         }
    else if (block > 2000 && block <2500){
            return 25
    }
    else {
        return 'cannot travel that far'
    }
     }


