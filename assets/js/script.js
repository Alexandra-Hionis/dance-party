
const buttonToggleDanceParty = document.querySelector('.button-toggle-dance-party');
const buttonGiphy = document.querySelector('.button-giphy');
buttonToggleDanceParty.onclick = function() {
 // when button is clicked, add class name dance-party to be toggled
 buttonToggleDanceParty.classList.toggle('dance-party');
  if (buttonToggleDanceParty.classList.contains('dance-party')) {
    buttonToggleDanceParty.innerHTML = "party's over :("
    // show giphy button
    buttonGiphy.style.display = "block";
    colorChange()
    setInterval(colorChange, 1000);
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