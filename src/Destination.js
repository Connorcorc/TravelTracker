class Destination {
  constructor(allDestinations) {
    this.destinations = allDestinations;
  }

  getDestination(id) {
    return this.destinations.find(destination => destination.id === id)
  }

  getDestinationViaName(destinationName) {
    return this.destinations.find(destination => destination.destination === destinationName)
  }

  getDestinationViaId(destinationId) {
    return this.destination.find(destination => destination.id === destinationId)
  }


  getTripCost(trips) {
    const total = trips.reduce((acc, trip) => {
      this.destinations.forEach(destination => {
        if(trip.destinationID === destination.id) {
          let flight = trip.travelers * destination.estimatedFlightCostPerPerson;
          let lodge = trip.duration * destination.estimatedLodgingCostPerDay;
          acc += (flight + lodge) * 1.1
        }
      })
      return acc;
    }, 0)
    return Math.trunc(total);
  }


}

export default Destination
