// Code your solution here
function findMatching(drivers,searchString){
    return drivers.filter(driver => driver.toLowerCase() === searchString.toLowerCase())
}
function fuzzyMatch(drivers,searchString){
    return drivers.filter(driver => driver.startsWith(searchString))
}
function matchName(drivers,searchString){
    return drivers.filter(driver => driver.name === searchString)
}
