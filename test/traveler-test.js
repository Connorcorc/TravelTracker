import { expect } from 'chai'
import Traveler from '../src/Traveler'
import { travelerTestData, tripTestData, destinationData } from '../test/test-data.js'

describe('Traveler', () => {
  let  traveler1, traveler2, traveler3

  beforeEach(() => {
    traveler1 = new Traveler(travelerTestData[0])
    traveler2 = new Traveler(travelerTestData[1])
    traveler3 = new Traveler(travelerTestData[2])
  })

  it('should be a function', () => {
    expect(Traveler).to.be.a('function')
  })

  it('should be a an instance of Traveler', () => {
    expect(traveler1).to.be.an.instanceof(Traveler)
    expect(traveler2).to.be.an.instanceof(Traveler)
  })

  it('should get a traveler id', () => {
    expect(traveler1.id).to.equal(1)
    expect(traveler2.id).to.equal(2)
  })

  it('should get a traveler name', () => {
    expect(traveler1.name).to.equal("Ham Leadbeater")
    expect(traveler2.name).to.equal("Rachael Vaughten")
  })

  it('should get traveler type', () => {
    expect(traveler1.travelerType).to.equal('relaxer')
    expect(traveler2.travelerType).to.equal('thrill-seeker')
  })

  it('should start with empty array for travelers trips', () => {
    expect(traveler1.trips).to.deep.equal([])
    expect(traveler2.trips).to.deep.equal([])
  })

  it('should start with empty array for travelers new trips', () => {
    expect(traveler1.newTrip).to.deep.equal([])
    expect(traveler2.newTrip).to.deep.equal([])
  })

  it('should get first name of traveler', () => {
    expect(traveler1.getName()).to.equal('Ham')
    expect(traveler2.getName()).to.equal('Rachael')
  })

  it('should get travelers trips', () => {
    expect(traveler2.getTrips(tripTestData)).to.be.an('array')
    expect(traveler2.getTrips(tripTestData)).to.deep.equal([{
      "id": 89,
      "userID": 2,
      "travelerName": "Rachael Vaughten",
      "destinationID": 1,
      "dailyLodging": 90,
      "flightCost": 450,
      "travelers": 5,
      "date": "2019/09/27",
      "duration": 13,
      "status": "pending",
      "suggestedActivities": []
    },
    {
      "id": 100,
      "userID": 2,
      "travelerName": "Rachael Vaughten",
      "destinationID": 6,
      "dailyLodging": 70,
      "flightCost": 890,
      "travelers": 6,
      "date": "2021/01/22",
      "duration": 10,
      "status": "approved",
      "suggestedActivities": []
    }])
  })

  it('should get a new trip', () => {
    traveler2.getTrips(tripTestData)
    expect(traveler2.getNewTrip(traveler2.trips[0], destinationData)).to.be.a('number')
    expect(traveler2.getNewTrip(traveler2.trips[0], destinationData)).to.equal(3201)
  })

  it('should get last trip', () => {
    traveler2.getTrips(tripTestData)
    expect(traveler2.getLastTripId(traveler2.trips)).to.be.a('number')
    expect(traveler2.getLastTripId(traveler2.trips)).to.equal(89)
  })

  it('should put new trips in the new trip array', () => {
    traveler2.getTrips(tripTestData)
    traveler2.getNewTrip(traveler2.trips[0], destinationData)
    expect(traveler2.newTrip).to.deep.equal([traveler2.trips[0]])
  })

  it('should get all trips between input dates', () => {
    traveler2.getTrips(tripTestData)
    expect(traveler2.getTripsBetweenDates("2018/01/01", "2022/01/01")).to.be.an('array')
    expect(traveler2.getTripsBetweenDates("2018/01/01", "2022/01/01")).to.deep.equal(traveler2.trips)
  })


})
