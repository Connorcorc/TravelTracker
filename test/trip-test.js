import { expect } from 'chai'
import Trip from '../src/Trip'
import { tripTestData } from '../test/test-data'

describe('Trip', () => {
  let tripRepo

  beforeEach(() => {
    tripRepo = new Trip(tripTestData)
  })

  it('should be a function', () => {
    expect(Trip).to.be.a('function')
  })

  it('should be a new instance of trip', () => {
    expect(tripRepo).to.be.an.instanceof(Trip)
  })

  it('should get all pending trips via id', () => {
    expect(tripRepo.getPendingTrips(2)).to.deep.equal([{
      "id": 89,
      "userID": 2,
      "travelerName": "Rachael Vaughten",
      "destinationID": 10,
      "dailyLodging": 90,
      "flightCost": 450,
      "travelers": 5,
      "date": "2019/09/27",
      "duration": 13,
      "status": "pending",
      "suggestedActivities": []
    }])
  })

  it('should get all vacations for given user via id', () => {
    expect(tripRepo.getNextTrip(44)).to.deep.equal({
      "id": 1,
      "userID": 44,
      "travelerName": "Marijo MacNeilley",
      "destinationID": 49,
      "dailyLodging": 650,
      "flightCost": 90,
      "travelers": 1,
      "date": "2019/09/16",
      "duration": 8,
      "status": "approved",
      "suggestedActivities": []
    })
  })

  it('should get next trip for user via date', () => {
    expect(tripRepo.getNextTrip(44, "2022/01/01")).to.deep.equal({
      "id": 3,
      "userID": 44,
      "travelerName": "Marijo MacNeilley",
      "destinationID": 75,
      "dailyLodging": 650,
      "flightCost": 90,
      "travelers": 1,
      "date": "2022/01/11",
      "duration": 8,
      "status": "approved",
      "suggestedActivities": []
    })
  })

  it('should get most recent trip for user via date', () => {
    expect(tripRepo.getLastTrip(44, "2020/02/22")).to.deep.equal({
      "id": 1,
      "userID": 44,
      "travelerName": "Marijo MacNeilley",
      "destinationID": 49,
      "dailyLodging": 650,
      "flightCost": 90,
      "travelers": 1,
      "date": "2019/09/16",
      "duration": 8,
      "status": "approved",
      "suggestedActivities": []
    })
  })

  it('should get all upcoming trips via date', () => {
    expect(tripRepo.getUpcomingTrips(2, "2019/06/06")).to.deep.equal([
      {
        "id": 89,
        "userID": 2,
        "travelerName": "Rachael Vaughten",
        "destinationID": 10,
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

  it('should get all past trips via  date', () => {
    expect(tripRepo.getPastTrips(2, "2025/09/28")).to.deep.equal([
      {
        "id": 89,
        "userID": 2,
        "travelerName": "Rachael Vaughten",
        "destinationID": 10,
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
      }
    ])
  })


})
