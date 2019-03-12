// Code your solution in this file!
function logDriverNames(drivers)
{
  drivers.forEach(function(element)
  {
    console.log(element.name)
  })
}

function logDriversByHometown(drivers, location)
{
  drivers.forEach(function(element)
  {
    if (element.hometown === location)
    {
      console.log(element.name)
    }
  })
}

function driversByRevenue(drivers)
{
  return drivers.slice().sort(function(a, b)
  {
    return a.revenue - b.revenue
  })
}

function driversByName(drivers)
{
  return drivers.slice().sort(function(a, b)
  {
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(drivers)
{
  const revenue = function (agg, el, i, arr)
  {
    return agg + el.revenue
  }
  return drivers.reduce(revenue, 0)
}

function averageRevenue(drivers)
{
  let total = totalRevenue(drivers)
  return total/drivers.length
}
