
const buttonStartDanceParty = document.querySelector('.button-start-dance-party');
const buttonGiphy = document.querySelector('.button-giphy');
buttonStartDanceParty.onclick = function() {
 // when button is clicked, add class name dance-party to be toggled
 buttonStartDanceParty.classList.toggle('dance-party');
  if (buttonStartDanceParty.classList.contains('dance-party')) {
    buttonStartDanceParty.innerHTML = "party's over :("
    // show giphy button
    buttonGiphy.style.display = "block";
    colorChange()
    console.log("start dance party! Let's dance button shown");
  } else {
    window.location.reload();
  }
};

// Background color change - generate a random hex code
function colorChange() {
    const getrandomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log('#' + getrandomColor);
    // add pound to create hex
    document.body.style.backgroundColor = '#' + getrandomColor; 
  }