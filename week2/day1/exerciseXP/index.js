// exercise 1 //
let favoritefood = 'chocolate';
let favoritemealoftheday = "dinner";
console.log(favoritefood)
console.log(favoritemealoftheday)


console.log(`I eat ${favoritefood} at every ${favoritemealoftheday}`);


// exercise 2 //

 let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"]
let myWatchedSeriesLength = myWatchedSeries.length
console.log (myWatchedSeriesLength)

let myWatchedSeriesstring = myWatchedSeries.toString()
console.log(myWatchedSeriesstring)

console.log(`I watched 3 series : ${myWatchedSeriesstring}`);
// part 2 //


myWatchedSeries.splice(2, 1, "friends");

console.log(myWatchedSeries)
myWatchedSeries.push("avengers")
myWatchedSeries.unshift("superman")
console.log(myWatchedSeries)
myWatchedSeries.splice(1, 1)
console.log(myWatchedSeries)
console.log (myWatchedSeries[1].charAt(2))

// exercise 3 //

let celsius = 30
let faranheit= celsius/5*9+32
console.log(`temrature beraberdir celsi ile ${celsius} faranheit beraberdir ${faranheit}` )

// exercise 4 //
let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: It will output 55, because 34 and 21 are numbers
// Actual: 55

a = 2;
console.log(a+b) //second expression
// Prediction: It will output 23, because 2 and 21 are numbers
// Actual:23

// exercise 5 //
console.log(typeof(15));
// Prediction:number    
// Actual:number

console.log(typeof(5.5));
// Prediction:number
// Actual:number

console.log(typeof(NaN))
// Prediction:number
// Actual:number

console.log(typeof("hello"))
// Prediction:string
// Actual:string

console.log(typeof(true))
// Prediction:boolean
// Actual:boolean

console.log(typeof(1 != 2))
// Prediction:boolean
// Actual:boolean
console.log("hamburger" + "s")
// Prediction:hamburgers
// Actual:hamburgers

console.log("hamburgers" - "s")
// Prediction:NaN
// Actual:NaN

console.log("1" + "3")
// Prediction:13    
// Actual:13
console.log("1" - "3")
// Prediction:-2
// Actual:)-2

console.log("johnny" + 5)
// Prediction:johnny5
// Actual:johnny5
console.log("johnny" - 5)
// Prediction:NaN
// Actual:NaN
console.log(99 * "hello")
// Prediction:NaN
// Actual:NaN

console.log(1 != 1)
    // Prediction:false
    // Actual:false

    console.log(1 == "1")
    // Prediction:true
    // Actual:true

    console.log(1 === "1")
    // Prediction:false
    // Actual:false

    // exercise 6 //
    console.log(5 + "34")
    // Prediction:534
    // Actual:534
    console.log(5 - "4")
    // Prediction:1
    // Actual:1

    console.log(10 % 5)
        // Prediction:0
        // Actual:0

        console.log(5 % 10)
            // Prediction:5
            // Actual:5

            console.log("Java" + "Script")
            // Prediction:JavaScript
            // Actual:JavaScript

            console.log(" " + " ")
            // Prediction:" "
            // Actual:" "

            console.log(" " + 0)
            // Prediction:0
            // Actual:0

            console.log(true + true)
                // Prediction:2
                // Actual:2
                console.log(true + false)
                    // Prediction:1
                    // Actual:1
                    console.log(false + true)
                        // Prediction:1
                        // Actual:1
            console.log(false - true)
                // Prediction:-1    
                // Actual:-1
                console.log(!true)
                    // Prediction:false
                    // Actual:false
                    console.log(3 - 4)
                        // Prediction:-1
                        // Actual:-1
            console.log("Bob" - "bill")
            // Prediction:NaN
            // Actual:NaN
    

            //  END //
