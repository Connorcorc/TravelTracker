class Trip {
  constructor(tripData) {
    this.trips = tripData
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = [];
  }

   // getUserTrips(id) {
   //   return this.trips.filter(trip => trip.userID === id)
   // }
   //
   // getUpcomingTrips(id, date) {
   //   const tripsToday = this.getUserTrips(id)
   //   tripsToday.push({"id":0,"userID":0,"destinationID":0,"travelers":0,"date":date,"duration":0})
   //   const sortTrips = tripsToday.sort((a, b) => a.date > b.date ? 1 : -1)
   //   const index = sortTrips.findIndex(trip => trip.date === date)
   //   return sortTrips.slice(index +1)
   //  }
   //
   //  getPastTrips(id, date) {
   //    const tripsToday = this.getUserTrips(id)
   //    tripsToday.push({"id":0,"userID":0,"destinationID":0,"travelers":0,"date":date,"duration":0})
   //    const sortTrips = tripsToday.sort((a, b) => a.date > b.date ? 1 : -1)
   //    const index = sortTrips.findIndex(trip => trip.date === date)
   //    return sortTrips.slice(0, index)
   //
   //  }
   //
   //  getNextTrip(id, date) {
   //    const tripsToday = this.getUserTrips(id)
   //    tripsToday.push({"id":0,"userID":0,"destinationID":0,"travelers":0,"date":date,"duration":0})
   //    const sortTrips = tripsToday.sort((a, b) => a.date > b.date ? 1 : -1)
   //    const index = sortTrips.findIndex(trip => trip.date === date)
   //    const sliceIndex = sortTrips[index+1]
   //    return sliceIndex;
   //  }
   //
   //  getLastTrip(id, date) {
   //    const tripsToday = this.getUserTrips(id)
   //    tripsToday.push({"id":0,"userID":0,"destinationID":0,"travelers":0,"date":date,"duration":0})
   //    const sortTrips = tripsToday.sort((a, b) => a.date > b.date ? 1 : -1)
   //    const index = sortTrips.findIndex(trip => trip.date === date)
   //    const sliceIndex = sortTrips[index-1]
   //    return sliceIndex;
   //  }
   //
   //  getPendingTrips(id) {
   //    return this.getUserTrips(id).filter(trip => trip.status === 'pending')
   //  }
}

export default Trip
