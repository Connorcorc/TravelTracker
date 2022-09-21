class Trip {
  constructor(tripData) {
    this.id = tripData.id || Date.now();
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travelers = tripData.travelers || 1;
    this.date = tripData.date;
    this.dailyLodging = tripData.dailyLodging;
    this.flightCost = tripData.flightCost;
    this.duration = tripData.duration;
    this.status = tripData.status || 'pending';
    this.suggestedActivities = tripData.suggestedActivities;
  }

    userID() {
      console.log(this.tripData)
    }
}

export default Trip
