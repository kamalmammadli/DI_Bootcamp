// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));


//     async function a() {
//     try {
//         const response = await fetch("https://www.swapi.tech/api/starships/9/")
//         const objectStarWars = await response.json()
//         console.log(objectStarWars.result.properties.name)

//     } catch (error) {
//         console.log(error)
//     }}
// a()

// exercise 2
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();