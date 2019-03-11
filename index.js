// Code your solution in this file!
function logDriverNames(drivers) {
  // drivers.forEach(function(driver) {
  //   console.log(driver.name);
  // });
  drivers.forEach(driver => console.log(driver.name));
}
// 'function <NAME>' and 'const <NAME> = function()' are the same.
const logDriversByHometown = function(drivers, location) {
  drivers.forEach(driver => {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  const newDrivers = [...drivers];

  newDrivers.sort(function(driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
  return newDrivers;
}

const driversByName = function(drivers) {
  const newDrivers = drivers.slice();

  newDrivers.sort((driverA, driverB) => {
    // console.log("here", driverA, driverB);
    return driverA.name.localeCompare(driverB.name);
  });
  return newDrivers;
}

const totalRevenue = function(drivers) {
  return drivers.reduce(function(accumul, currVal) {
    // console.log("here", accumul, currVal.revenue);
    return accumul + currVal.revenue;
  }, 0);
}
function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
