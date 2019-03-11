function logDriverNames(arrayOfDrivers){
  arrayOfDrivers.forEach(function(driver){
    console.log(driver.name);
  });
}

function logDriversByHometown(arrayOfDrivers, location){
  arrayOfDrivers.filter(
    driver => driver.hometown === location).forEach(
      driver => console.log(driver.name));
}

const comparer = function(driverOne, driverTwo){
  return driverOne.revenue - driverTwo.revenue;
}

function driversByRevenue(arrayOfDrivers){
  return arrayOfDrivers.slice().sort(comparer);
}

function stringSorter(driverOne, driverTwo){
  return driverOne.name.localeCompare(driverTwo.name);
}

function driversByName(arrayOfDrivers){
  return arrayOfDrivers.slice().sort(stringSorter);
}

function totalRevenue(arrayOfDrivers){
  let sumArray = []
  arrayOfDrivers.forEach(function(driver){
    sumArray.push(driver.revenue);
  });
  return sumArray.reduce(function(a, b){ return a + b});
}

function averageRevenue(arrayOfDrivers){
  return totalRevenue(arrayOfDrivers) / arrayOfDrivers.length;
}
