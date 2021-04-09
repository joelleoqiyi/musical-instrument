const numberOfDrumButtons = document.querySelectorAll(".drum");
// Use a for-loop to attach a click event listener on every button.
// When the user clicks on a button, respective sound and button animation will be played.
numberOfDrumButtons.forEach((element) => {
	element.addEventListener("click", ({ target: button }) => {
		key = button.innerText;
		playSound(key);
		animateButton(key);
	});
});

// Attach a keydown event to the document.
// When the user presses key 'w', 'a', 's', 'd', 'j', 'k', 'l', respective sound and button animation will be played.
document.addEventListener("keydown", ({ key }) => {
	const acceptedKeys = ["w", "a", "s", "d", "j", "k", "l"];
	if (acceptedKeys.includes(key)) {
		playSound(key);
		animateButton(key);
	}
});

const playSound = (key) => {
	// Use conditionals to play different sounds upon different key presses.
	// Example to play tom-1.mp3 in sounds/directory:
	// const tom1 = new Audio("sounds/tom-1.mp3");
	// tom1.play();
	let audio;
	switch (key) {
		case "w":
			audio = new Audio("sounds/tom-1.mp3");
			break;
		case "a":
			audio = new Audio("sounds/tom-2.mp3");
			break;
		case "s":
			audio = new Audio("sounds/tom-3.mp3");
			break;
		case "d":
			audio = new Audio("sounds/tom-4.mp3");
			break;
		case "j":
			audio = new Audio("sounds/snare.mp3");
			break;
		case "k":
			audio = new Audio("sounds/crash.mp3");
			break;
		case "l":
			audio = new Audio("sounds/kick-bass.mp3");
			break;
	}
	audio.play();
};

//
const animateButton = (currentKey) => {
	const activeButton = document.querySelector("." + currentKey);
	// Add "pressed" class to the active button here
	activeButton.classList.add("pressed");
	setTimeout(() => {
		// Remove "pressed" class from the active button here
		activeButton.classList.remove("pressed");
	}, 100);
};
