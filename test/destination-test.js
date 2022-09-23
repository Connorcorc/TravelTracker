import { expect } from 'chai';
import Destination from '../src/Destination.js';
import Traveler from '../src/Traveler.js'
import { destinationData, tripTestData, travelerTestData } from '../test/test-data.js';

describe.only('Destination', () => {
  let destination;
  beforeEach(() => {
    destination = new Destination(destinationData)
  })

  it('should be a function', () => {
    expect(Destination).to.be.a('function')
  })

  it('should be a new instance of destination', () => {
    expect(destination).to.be.an.instanceof(Destination)
  })

  it('should get destination via name', () => {
    expect(destination.getDestinationViaName('Lima, Peru')).to.equal(destinationData[0])
  })

  it('should get destination via id', () => {
    expect(destination.getDestination(1)).to.deep.equal({
      "id": 1,
      "destination": "Lima, Peru",
      "estimatedLodgingCostPerDay": 70,
      "estimatedFlightCostPerPerson": 400,
      "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
      "alt": "overview of city buildings with a clear sky"
    })
    expect(destination.getDestination(2)).to.deep.equal({
      "id": 2,
      "destination": "Stockholm, Sweden",
      "estimatedLodgingCostPerDay": 100,
      "estimatedFlightCostPerPerson": 780,
      "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "alt": "city with boats on the water during the day time"
    })
  })

  it('should get total cost of a trip', () => {
    const traveler = new Traveler(travelerTestData[1])

    traveler.getTrips(tripTestData)

    expect(destination.getTripCost(traveler.trips)).to.be.a('number')
    expect(destination.getTripCost(traveler.trips)).to.equal(3201)
  })


})
