import './css/styles.css';
// // An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
import './images/takeoff1.png'
import './images/arrival.png'
import './images/question.png'
import apiCalls from './apiCalls.js'
import Traveler from './Traveler.js'
import Trip from './Trip.js'
import Destination from './Destination.js'
import Agent from './Agent.js'
import dayjs from 'dayjs'






// -------------------------------------- QUERY SELECTORS
const upcomingCard = document.getElementById('upcomingCard')
const pastCard = document.getElementById('pastCard')
const pendingCard = document.getElementById('pendingCard')
const planCard = document.getElementById('planCard')
const cardSection = document.getElementById('cardSection')
const tripsSection = document.getElementById('tripsSection')
const headerBox = document.getElementById('headerBox')
const welcomeBox = document.getElementById('welcomeBox')
const submitButton = document.getElementById('submitButton')
const destinationOption = document.getElementById('destinationOption')


// -------------------------------------- EVENT LISTENERS

upcomingCard.addEventListener('click', upcomingTrips)
headerBox.addEventListener('click', resetPage)
window.addEventListener('load', getData)
pastCard.addEventListener('click', pastTrips)
pendingCard.addEventListener('click', pendingTrips)
submitButton.addEventListener('click', bookNewTrip)
// planCard = document.getElementById('click', planTrip)

// -------------------------------------- GLOBAL VARIABLES
let travelerData
let tripData
let destinationData
let tripRepo
let destinationRepo
let traveler
let destination




function getData() {
  Promise.all([apiCalls.getTravelerData(), apiCalls.getTripData(), apiCalls.getDestinationData()])
  .then((data) => {
    travelerData = data[0].travelers;
    tripData = data[1].trips;
    destinationData = data[2].destinations
    tripRepo = new Trip(tripData)
    destination = new Destination(destinationData)
    traveler = new Traveler(travelerData[1])

    welcomeUser()
  })
}

function getYearTrips() {
  let date = new Date()
  let today = [date.getFullYear(), date.getMonth()+1, date.getDate()].join('/')
  let start = `20${today[2]}${today[1]}/01/01`
  let end = `20${today[2]}${today[1]}/12/31`
  return traveler.getTripsBetweenDates(start, end)
}

function welcomeUser() {
  show(welcomeBox)
  traveler.getTrips(tripData)
  welcomeBox.innerHTML = `<b>Welcome ${traveler.getName()}<br>
  <br>This years trips cost <br>$${destination.getTripCost(getYearTrips())}`
}




function upcomingTrips() {
  hide(welcomeBox)
  hide(cardSection)
  show(tripsSection)
  let travelersTrips = traveler.getTrips(tripData)
  let approved = travelersTrips.filter(trip => trip.status === "approved")
  let eachTrip = approved.forEach(trip => {
    destinationData.forEach(place => {
      console.log(trip);
      if(trip.destinationID === place.id) {
        tripDataCard.innerHTML += `<div class="card">
        <h2>${place.destination}</h2>
        <img src="${place.image}" alt="${place.alt}" height=200px width=275px><br>
        Travelers - ${trip.travelers}<br>
        Days - ${trip.duration}<br>
        Date - ${trip.date}
        </div>`

      }
    })

  })

}

function pastTrips() {
  hide(welcomeBox)
  hide(cardSection)
  show(tripsSection)
  let travelersTrips = traveler.getTrips(tripData)
  let approved = travelersTrips.filter(trip => trip.status === "approved")
  let eachTrip = approved.forEach(trip => {
    destinationData.forEach(place => {
      console.log(trip);
      if(trip.destinationID === place.id) {
        tripDataCard.innerHTML += `<div class="card">
        <h2>${place.destination}</h2>
        <img src="${place.image}" alt="${place.alt}" height=200px width=275px><br>
        Travelers - ${trip.travelers}<br>
        Days - ${trip.duration}<br>
        Date - ${trip.date}
        </div>`

      }
    })

  })

}

function pendingTrips() {
  hide(welcomeBox)
  hide(cardSection)
  show(tripsSection)
  let travelersTrips = traveler.getTrips(tripData)
  let pending  = travelersTrips.filter(trip => trip.status === "pending")
  let eachTrip = pending.forEach(trip => {
    destinationData.forEach(place => {
      console.log(trip);
      if(trip.destinationID === place.id) {
        tripDataCard.innerHTML += `<div class="card">
        <h2>${place.destination}</h2>
        <img src="${place.image}" alt="${place.alt}" height=200px width=275px><br>
        Travelers - ${trip.travelers}<br>
        Days - ${trip.duration}<br>
        Date - ${trip.date}
        </div>`

      }
    })

  })
}

function getOptions() {
    inputDestination.innerHTML = `<option value="" disabled selected>Select a destination</option>`;
    destinationData.forEach((place) => {
      inputDestination.innerHTML += `<option value="${place.id}">${place.destination}</option>`;
    });
}

// function updateTotal() {
//
// }

function bookNewTrip() {
  hide(welcomeBox)
  hide(cardSection)
  show(tripsSection)
}

function resetPage() {
  hide(tripsSection)
  show(cardSection)
  tripDataCard.innerHTML = ''
}

function show(e) {
  e.classList.remove('hidden')
}

function hide(e) {
  e.classList.add('hidden')
}
