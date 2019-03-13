// Code your solution in this file!
logDriverNames = function(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name)
  })
}

logDriversByHometown = function(drivers, hometown){
  drivers.forEach(function(driver){
    if (driver.hometown === hometown)
    console.log(driver.name)
  })
}

driversByRevenue = function(drivers){
  return drivers.slice().sort(function(a,b){
    return a.revenue - b.revenue
  })
}

driversByName = function(drivers) {
  return drivers.slice().sort(function(a,b,) {
    return a.name.localeCompare(b.name);
  })
}

totalRevenue = function(drivers) {
  return drivers.reduce(function(total, currentDriver) {
    return total + currentDriver.revenue;
  }, 0);
};

averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
