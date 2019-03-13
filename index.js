// Code your solution in this file!
function logDriverNames(drivers) {

  return drivers.forEach(function(driver) {
    return console.log(driver.name);
  });
};

function logDriversByHometown(drivers, location) {

  return drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    };
  });
};

const revenueSorter = function (rev1, rev2) {
  return rev1.revenue - rev2.revenue;
};

function driversByRevenue(drivers) {
  return drivers.slice().sort(revenueSorter);
}

const comparator = function (a, b) {
  return a.name.localeCompare(b.name);
};

function driversByName(drivers) {

  return drivers.slice().sort(comparator);
}


function totalRevenue(drivers) {

  return drivers.reduce(function(total, driver) {
    return total + driver.revenue;
  }, 0);
};

function averageRevenue(drivers) {

  return totalRevenue(drivers)/drivers.length;
}
