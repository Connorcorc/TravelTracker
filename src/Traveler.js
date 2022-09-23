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
    this.newTrip.push(trips);
    console.log(trips)
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

  getTripsBetweenDates(dateOne, dateTwo) {
    const between = this.trips.filter(trip => {
      return trip.date > dateOne && trip.date < dateTwo
    })
    return between;
  }


  // getFlightCost(trips, destinations) {
  //   let everyTrip = this.getTrips(trips)
  //   let everyYear = this.getFullYear(trips)
  //   let tripsThisYear = everyTrip.filter(trip => trip.date.split("/").includes(everyYear))
  //   let everyDestination = this.getDestinations(trips, destinations)
  //   let flightCost = tripsThisYear.reduce((acc, trip) => {
  //     let destinationInfo = everyDestination.find(destination => destination.id === trip.destinationID)
  //     let sum = destinationInfo.estimatedFlightCostPerPerson * trip.travelers;
  //     acc += sum;
  //     return acc
  //   }, 0)
  //   return flightCost;
  // }
  //
  // getLodgingCost(trips, destinations) {
  //   let everyTrip = this.getTrips(trips)
  //   let everyYear = this.getFullYear(trips)
  //
  //   console.log(everyYear)
  //   let tripsThisYear = everyTrip.filter(trip => {
  //     let blah = everyYear.reduce((acc, yearTrip) => {
  //       if(yearTrip[0].includes(trip.date.substring(0, 4))) {
  //         acc.push(trip)
  //       }
  //       return acc;
  //     }, [])
  //   })
  //   console.log(tripsThisYear)
  //   let everyDestination = this.getDestinations(trips, destinations)
  //   let lodgingCost = tripsThisYear.reduce((acc, trip) => {
  //     let destinationInfo = everyDestination.find(destination => destination.id === trip.destinationID)
  //     console.log(trip)
  //     acc += destinationInfo.estimatedLodgingCostPerDay * trip.duration;
  //     return acc
  //   }, 0)
  //   return lodgingCost;
  // }
  //
  //
  // getTotal(trips, destinations) {
  //   let flight = this.getFlightCost(trips, destinations) * 1.1
  //   let lodge = this.getLodgingCost(trips, destinations) * 1.1
  //   console.log(flight, lodge)
  //   return flight + lodge
  // }




}

export default Traveler
