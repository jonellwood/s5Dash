function handleCheckboxChange(e) {
	const checkbox = e.target;

	if (!checkbox) {
		console.error(`Checkbox not found.`);
		return;
	}

	const targetCard = document.getElementById(checkbox.value);
	// console.log('toggling');
	// console.log(targetCard);
	if (!targetCard) {
		console.error(`No card with id ${checkbox.value} found`);
		return;
	}
	if (!checkbox.checked) {
		targetCard.classList.add('hide');
		// targetCard.remove();
	} else {
		targetCard.classList.remove('hide');
	}
}

export default handleCheckboxChange;
