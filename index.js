// Code your solution in this file!

const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name)
})}

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver['hometown'] === hometown){
    console.log(driver.name)
    }
  }
)}

const numberSorter = function (num1, num2) {
  return num1.revenue - num2.revenue;
};

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(numberSorter)
}

const nameSorter = function (name1, name2) {
  return name1.name.localeCompare(name2.name)
}

const driversByName = function (drivers) {
  return drivers.slice().sort(nameSorter)
}

const totalRevenue = function (drivers) {
  let total = 0
  drivers.forEach(function (driver){
    total += driver.revenue
  })
  return total
}

const averageRevenue = function (drivers) {
  sum = totalRevenue(drivers)
  count = drivers.length
  return sum / count
}
