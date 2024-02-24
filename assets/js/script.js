const buttonToggleDanceParty = document.querySelector('.button-toggle-dance-party');
const buttonGiphy = document.querySelector('.button-giphy');
const buttonContainer = document.querySelector('.button-container');

buttonToggleDanceParty.onclick = function() {
 // when button is clicked, add class name dance-party to be toggled
 buttonToggleDanceParty.classList.toggle('dance-party');
  if (buttonToggleDanceParty.classList.contains('dance-party')) {
    buttonContainer.classList.remove('center-button');
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

// set data to variable to use 
let giphyContentData = giphyContent.data;
// console.log(giphyContentData)

// generate random gif at first
function getRandomGif(giphyContentData) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * giphyContentData.length);
    // get random item
    const item = giphyContentData[randomIndex];
    return item;
}

const gifRandomResult = getRandomGif(giphyContentData);
// test to make sure it spits out random title
// console.log(gifRandomResult.title);

 // Dynamically create container for giphy and add content
 const container = document.createElement('div');
 container.id = 'container';
// gif uses img element
 const img = document.createElement('img');
 img.alt = gifRandomResult.title;
 img.src = gifRandomResult.images.downsized.url;
 container.appendChild(img);
//  Add the container at the beginning of the body element
 document.body.prepend(container);


//  New random gif result when the giphy button is clicked
// Function to set a new random GIF
function setNewRandomGif() {
    const newRandomResult = getRandomGif(giphyContentData);
    img.alt = newRandomResult.title;
    img.src = newRandomResult.images.downsized.url;
}

buttonGiphy.onclick = function() {
    setNewRandomGif();
};
 
})
};

