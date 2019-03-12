function logDriverNames(drivers) {
  drivers.forEach(function(element) {
    console.log(element.name);
  });
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(element) {
    if (element.hometown === location) {
      console.log(element.name);
    }
  });
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  return drivers.slice().sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  return drivers.reduce(function (sum, driver, i, drivers) {
    return sum += driver.revenue;
  }, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}