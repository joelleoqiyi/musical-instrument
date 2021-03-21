const numberOfDrumButtons = document.querySelectorAll(".drum").length;
// Use a for-loop to attach a click event listener on every button.
// When the user clicks on a button, respective sound and button animation will be played.










// Attach a keydown event to the document.
// When the user presses key 'w', 'a', 's', 'd', 'j', 'k', 'l', respective sound and button animation will be played.






const playSound = key => {
  // Use conditionals to play different sounds upon different key presses.
  // Example to play tom-1.mp3 in sounds/directory:
  // const tom1 = new Audio("sounds/tom-1.mp3");
  // tom1.play();
}

// 
const animateButton = currentKey => {
  const activeButton = document.querySelector("." + currentKey);
  // Add "pressed" class to the active button here

  setTimeout(() => {
    // Remove "pressed" class from the active button here

  }, 100);
}
