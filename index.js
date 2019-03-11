// Code your solution in this file!

const logDriverNames = function(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

const logDriversByHometown = function(drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

const numberSorter = function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  }

const driversByRevenue = function(driverArray) {
  return driverArray.slice().sort(numberSorter);
}

const comparator = function (a, b) {
  return (a.name).localeCompare(b.name);
};

const driversByName = function(driverArray) {
  return driverArray.slice().sort(comparator);
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length
}
