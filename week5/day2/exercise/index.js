const apiUrl = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";


const xhr = new XMLHttpRequest();

xhr.open("GET", apiUrl, true);
xhr.onload = function () {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
  } else {
    console.error("Error fetching data:", xhr.status, xhr.statusText);
  }
};
xhr.onerror = function () {
  console.error("Network error occurred");
};
xhr.send();




// const apiKey = 'YOUR_API_KEY'; 
// const searchTerm = 'sun';
// const offset = 2;
// const limit = 10;


// const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=${limit}&offset=${offset}`;

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data); 
//   })
//   .catch(error => {
//     console.error('Error fetching GIFs:', error);
//   });

//   // !!! REDO 
//   // !!! course note dan istifade et