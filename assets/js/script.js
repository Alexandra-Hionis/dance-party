
const buttonStartDanceParty = document.querySelector('.button-start-dance-party');
const buttonGiphy = document.querySelector('.button-giphy');
buttonStartDanceParty.onclick = function() {
  buttonStartDanceParty.classList.add('dance-party');
  if (buttonStartDanceParty.classList.contains('dance-party')) {
    buttonStartDanceParty.style.display = "none";
    // show giphy button
    buttonGiphy.style.display = "block";
    console.log("start dance party! Let's dance button shown");
  }
};
