// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name)
  })
}
function logDriversByHometown(drivers, town) {
  drivers.forEach(function (driver) {
    if (driver.hometown === town) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  const nsorter = function (obj1, obj2) {
    return obj1.revenue - obj2.revenue
  }
  const clone = Object.assign([], drivers)
  return clone.sort(nsorter)
}

function driversByName(drivers) {
  const namesorter = function (a, b) {
    return a.name.localeCompare(b.name)
  }
  const clone = Object.assign([], drivers)
  return clone.sort(namesorter)
}

function totalRevenue(drivers) {
  const rrevenue = function (agg, el, i, arr) {
    return agg + el.revenue
  }
  return drivers.reduce(rrevenue, 0)
}

function averageRevenue(drivers) {
  // const arevenue = function (agg, el, i, arr) {
  //   let sum = agg + el.revenue
  //   if (i === drivers.length - 1) {
  //   return sum/drivers.length
  //   }
  // }
  let tot = totalRevenue(drivers)
  return tot/drivers.length
}
