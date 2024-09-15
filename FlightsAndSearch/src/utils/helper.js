function compareTime(arrivalTime, departureTime){
    let arrival = new Date(arrivalTime);
    let departure = new Date(departureTime);

    return arrival.getTime() > departure.getTime();
}
module.exports = {
    compareTime
}