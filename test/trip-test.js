import { expect } from 'chai'
import Trip from '../src/Trip'
import testTripData from '../test/test-data.js'

describe('Trip', () => {
  let trip, newTrip, newTrip2

  beforeEach(() => {
    trip = testTripData[0];
    newTrip = new Trip(trip)
  })

  it('should be a function', () => {
    expect(Trip).to.be.a('function')
  })

  it('should be a new instance of trip', () => {
    expect(newTrip).to.be.an.instanceof(Trip)
  })

  it('should have a trip ID', () => {
    expect(newTrip.id).to.equal(1)
  })

  it('should have default value of trip ID', () => {
    newTrip2 = new Trip({})
    expect(newTrip2.id).to.equal(Date.now())
  })

  it('should have a user ID', () => {
    expect(newTrip.userID).to.equal(44)
  })

  it('should have a Destiantion ID', () => {
    expect(newTrip.destinationID).to.equal(49)
  })

  it('should have a daily lodging price value', () => {
    expect(newTrip.dailyLodging).to.equal(650)
  })

  it('should have a flight cost value', () => {
    expect(newTrip.flightCost).to.equal(90)
  })

  it('should have travelers', () => {
    expect(newTrip.travelers).to.equal(1)
  })

  it('should have a date', () => {
    expect(newTrip.date).to.equal("2019/09/16")
  })

  it('should have a trip duration', () => {
    expect(newTrip.duration).to.equal(8)
  })

  it('should have a trip status', () => {
    expect(newTrip.status).to.equal('approved')
  })

  it('should have default trip status of pending', () => {
    newTrip2 = new Trip({});
    expect(newTrip2.status).to.equal('pending')
  })

  it('should have a suggested activities array', () => {
    expect(newTrip.suggestedActivities).to.be.an('array')
    expect(newTrip.suggestedActivities).to.deep.equal([])
  })

})
