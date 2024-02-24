const buttonToggleDanceParty = document.querySelector('.button-toggle-dance-party');
const buttonGiphy = document.querySelector('.button-giphy');

buttonToggleDanceParty.onclick = function() {
 // when button is clicked, add class name dance-party to be toggled
 buttonToggleDanceParty.classList.toggle('dance-party');
  if (buttonToggleDanceParty.classList.contains('dance-party')) {
    buttonToggleDanceParty.innerHTML = "party's over :("
    // show giphy button
    buttonGiphy.style.display = "block";
    colorChange();
    setInterval(colorChange, 1000);
    // console.log("start dance party! Giphy button shown");
  } else {
    window.location.reload();
  }


// Background color change - generate a random hex code
function colorChange() {
    const getrandomColor = Math.floor(Math.random()*16777215).toString(16);
    // console.log('#' + getrandomColor);
    // concatenate '#' to create hex
    document.body.style.backgroundColor = '#' + getrandomColor; 
  }

// Giphy

// Set search term to dance so it adds it to the query because I only want to include those gifs tagged as dance

const searchTerm = "dance";
let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${searchTerm}`;

// This code is making an HTTP request to the specified url using the Fetch API, expecting a JSON response.
fetch(url)
// This callback gets executed when the JSON parsing is successful. The parsed JSON data is available in the giphyContent variable.
.then(response => response.json())
.then(giphyContent => {
// data
console.log(giphyContent.data[0].images.downsized.url)

 // Dynamically create container for giphy and add content
 const container = document.createElement('div');
 container.id = 'container';
// gif uses img element
 const img = document.createElement('img');
 img.alt = giphyContent.data[0].title;
 img.src = giphyContent.data[0].images.downsized.url;
 container.appendChild(img);
//  place on top
 document.body.prepend(container);
})
};