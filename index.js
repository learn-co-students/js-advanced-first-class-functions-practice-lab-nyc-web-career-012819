// Code your solution in this file!

function logDriverNames(drivers) {
  return drivers.forEach( d => console.log(d.name) );
};

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    };
  });
};

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(d1, d2) {
    return d1.revenue - d2.revenue;
  });
};

function driversByName(drivers) {
  return drivers.slice().sort(function(d1, d2) {
    return d1.name.localeCompare(d2.name);
  });
};

function totalRevenue(drivers) {
  return drivers.reduce(function(total, driver) {
    return driver.revenue + total;
  }, 0);
};

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length;
};
