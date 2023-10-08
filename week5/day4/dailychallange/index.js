

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });

// Promise.all([promise1,promise2,promise3]).then((values) =>
// { console.log(values)})

// exercise 2

// buttun elave elle click, clicke collback func elave et idleri documentqueryselecctorla gotur 
// collbackin icerisinde valuleri gotur  fetch function yarat 

function getSunrise() {
    const parisLat = document.getElementById('parisLat').value;
    const parisLon = document.getElementById('parisLon').value;
    const nyLat = document.getElementById('nyLat').value;
    const nyLon = document.getElementById('nyLon').value;

    const parisPromise = fetch(`https://api.sunrise-sunset.org/json?lat=${parisLat}&lng=${parisLon}`)
        .then(response => response.json())
        .then(data => data.results.sunrise);

    const nyPromise = fetch(`https://api.sunrise-sunset.org/json?lat=${nyLat}&lng=${nyLon}`)
        .then(response => response.json())
        .then(data => data.results.sunrise);

    Promise.all([parisPromise, nyPromise])
        .then(results => {
            const [parisSunrise, nySunrise] = results;
            const sunriseResults = `
                <p>Paris Sunrise Time: ${parisSunrise}</p>
                <p>New York Sunrise Time: ${nySunrise}</p>
            `;
            document.getElementById('sunriseResults').innerHTML = sunriseResults;
        })
        .catch(error => {
            console.error(error);
            document.getElementById('sunriseResults').innerHTML = "Error fetching sunrise times.";
        });
}