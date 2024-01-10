async function getEmpData(emp) {
	await fetch('https://store.berkeleycountysc.gov/getEmpData.php?empNum=' + emp)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
		});
}

export default getEmpData;
