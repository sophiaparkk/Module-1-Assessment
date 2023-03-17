///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE


for (let i=0; i<fujiAcres[0]; i++) {
    sum = fujiAcres[0] + galaAcres[0] + pinkAcres[0]
}    
for (let i=0; i<fujiAcres[1]; i++) {
    sum1 = fujiAcres[1] + galaAcres[1] + pinkAcres[1]
}    
for (let i=0; i<fujiAcres[2]; i++) {
    sum2 = fujiAcres[2] + galaAcres[2] + pinkAcres[2]
}    
for (let i=0; i<fujiAcres[3]; i++) {
    sum3 = fujiAcres[3] + galaAcres[3] + pinkAcres[3]
}    
for (let i=0; i<fujiAcres[4]; i++) {
    sum4 = fujiAcres[4] + galaAcres[4] + pinkAcres[4]
}    
for (let i=0; i<fujiAcres[5]; i++) {
    sum5 = fujiAcres[5] + galaAcres[5] + pinkAcres[5]
}    
for (let i=0; i<fujiAcres[6]; i++) {
    sum6 = fujiAcres[6] + galaAcres[6] + pinkAcres[6]
}    
    
let totalAcres = sum+sum1+sum2+sum3+sum4+sum5+sum6

console.log(totalAcres)
//I created a for loop to sum each day and then added the days together to get a total number and stored it in a variable


//this is total per day in an array
// let totalAcres2 = []

// for (let i=0; i<fujiAcres.length; i++) {
//     sum = fujiAcres[i] + galaAcres[i] + pinkAcres[i]
//     totalAcres2.push(sum)
// }    

// console.log(totalAcres2)


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

let averageDailyAcres = totalAcres/7

console.log(averageDailyAcres)
//I just divided the variable that contains the total number picked by the number of days to get the average per day


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

while (acresLeft > 0){
    days++
    acresLeft = acresLeft - days
}

console.log(days)
//incremented each day with each loop while subtracting acresLeft by the number of days. Which then loops with the new value of days until acresleft is 0


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = []
let galaTons = []
let pinkTons = []

fujiAcrescopy = fujiAcres.slice(0,7)
for (let i=0; i<fujiAcrescopy.length; i++) {
    fujiAcrescopy[i] = fujiAcrescopy[i] * 6.5

}
fujiTons.push(fujiAcrescopy)
console.log(fujiTons)

galaAcrescopy = galaAcres.slice(0,7)
for (let i=0; i<galaAcrescopy.length; i++) {
    galaAcrescopy[i] = galaAcrescopy[i] * 6.5

}
galaTons.push(galaAcrescopy)
console.log(galaTons)

pinkAcrescopy = pinkAcres.slice(0,7)
for (let i=0; i<pinkAcrescopy.length; i++) {
    pinkAcrescopy[i] = pinkAcrescopy[i] * 6.5

}
pinkTons.push(pinkAcrescopy)
console.log(pinkTons)
//sliced each array to create a copy and then multiplied each value in each array by 6.5 using the for loop. Then pushed these values into the emply arrays


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

// let fujiPounds = 
// let galaPounds =
// let pinkPounds =

// fujiTonscopy = pinkTons.slice(0,7)
// for (let i=0; i<fujiTonscopy.length; i++) {
//     fujiTotalTons += fujiTonscopy[i]
// }    

// console.log(fujiTotalTons)




// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// let fujiProfit =
// let galaProfit =
// let pinkProfit =






// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
