
const buttonStartDanceParty = document.querySelector('.button-start-dance-party');

buttonStartDanceParty.onclick = function() {
  buttonStartDanceParty.classList.add('dance-party');
  if (buttonStartDanceParty.classList.contains('dance-party')) {
    buttonStartDanceParty.style.display = "none";
    console.log("start dance party! Shoot confetti");
  }
};
