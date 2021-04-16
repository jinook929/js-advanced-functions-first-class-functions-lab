// Code your solution in this file!
const arr = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = function (arr) {
  // const result = []
  // for(let i = 0; i < 2; i++) {
  //   result.push(arr[i])
  // }
  // return result
  return arr.slice(0, 2)
}

const returnLastTwoDrivers = function (arr) {
  // const result = []
  // for(let i = 2; i > 0; i--) {
  //   result.push(arr[arr.length - i])
  // }
  // return result
  return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplingRate) {
  return function(fare) {
    return fare * multiplingRate
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, pickDrivers) {
  return pickDrivers(drivers)
}
