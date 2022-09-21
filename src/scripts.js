import './css/styles.css';
// // An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
import apiCalls from './apiCalls.js'
import Traveler from './Traveler.js'
import Trip from './Trip.js'
import Destiantion from './Destiantion.js'
import TripRepo from './TripRepo.js'
import Agent from './Agent.js'


// -------------------------------------- GLOBAL VARIABLES
let tripRepo = new TripRepo();
let travelers;
let singleTraveler;
let newTrip;

Promise.all([apiCalls.getTravelerData(), apiCalls.getTripData(), apiCalls.getDestinationData()])
  .then((data) => {
    const allTravelerData = data.reduce((travelerList, travelerItem) => {
      return travelerList = {...travelerList, ...travelerItem}
    }, {})
    instantiateData(allTravelerData)
  })

const instantiateData = (data) => {
  travelers = data.travelers.map(user => new Traveler(user))
  tripRepo = new TripRepo(data.trips)
  singleTraveler = new Traveler(travelers[getRandomId()])
  newTrip = new Trip(tripRepo.everyTrip)
  console.log(newTrip)
}

const getRandomId = () => {
  return Math.floor(Math.random() * 49) +1
}
