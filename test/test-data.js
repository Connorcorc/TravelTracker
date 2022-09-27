let tripTestData = [{
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
},
{
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
},
{
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
}];

const travelerTestData = [
  {
    "id": 1,
    "name": "Ham Leadbeater",
    "travelerType": "relaxer"
  },
  {
    "id": 2,
    "name": "Rachael Vaughten",
    "travelerType": "thrill-seeker"
  },
  {
    "id": 44,
    "name": "Marijo MacNeilley",
    "travelerType": "photographer"
  },
]

const destinationData = [
  {
    "id": 1,
    "destination": "Lima, Peru",
    "estimatedLodgingCostPerDay": 70,
    "estimatedFlightCostPerPerson": 400,
    "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
    "alt": "overview of city buildings with a clear sky"
  },
  {
    "id": 2,
    "destination": "Stockholm, Sweden",
    "estimatedLodgingCostPerDay": 100,
    "estimatedFlightCostPerPerson": 780,
    "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "city with boats on the water during the day time"
  },
  {
    "id": 3,
    "destination": "Sydney, Austrailia",
    "estimatedLodgingCostPerDay": 130,
    "estimatedFlightCostPerPerson": 950,
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "opera house and city buildings on the water with boats"
  },
]

module.exports =  { tripTestData, travelerTestData, destinationData }
