function onButtonClick() {
  alert('Button clicked!');
}

const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);

function makeButton(name) {
	const newButton = document.createElement('button');
	newButton.textContent = name;
  	document.body.appendChild(newButton);
}

makeButton("Click for happy!")

newButton.addEventListener('click', () => {
  alert('New button clicked!');
});
