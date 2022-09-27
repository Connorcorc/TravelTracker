class Traveler {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.travelerType = data.travelerType
    this.trips = [];
    this.newTrip = [];
  }

  getName() {
    return this.name.split(' ')[0];
  }

  getType() {
    return this.travelerType
  }

  getTrips(trips) {
    return this.trips = trips.filter(trip => trip.userID === this.id)
  }

  getNewTrip(trips, destination) {
    this.newTrip.push(trips)
    let value = destination.reduce((sum, dest) => {
      if(trips.destinationID === dest.id) {
        let lodge = dest.estimatedLodgingCostPerDay * trips.duration;
        let flight = dest.estimatedFlightCostPerPerson * trips.travelers;
        sum = lodge + flight;
      }
      return sum;
    }, 0)
    let total = value * 1.1
    return Math.trunc(total)
  }

  getLastTripId(trips) {
    const sorted = trips.sort((a, b) => a.id - b.id)
    return sorted[0].id
  }

  getTripsBetweenDates(dateStart, dateEnd) {
    let start = dateStart
    let end = dateEnd
    const between = this.trips.filter(trip => {
      let tripDate = trip.date
      return tripDate > dateStart && tripDate < dateEnd
    })
    return between;
  }

}

export default Traveler
