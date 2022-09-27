const fetchData = (data) => {
  return fetch(data)
    .then(response => response.json())
    .catch(err => console.log(err))
}

const apiCalls = {
  getTravelerData: () => {
    return fetchData('http://localhost:3001/api/v1/travelers')
  },
  getTripData: () => {
    return fetchData('http://localhost:3001/api/v1/trips')
  },
  getDestinationData: () => {
    return fetchData('http://localhost:3001/api/v1/destinations')
  }
}

export default apiCalls
