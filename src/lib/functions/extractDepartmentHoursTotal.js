function calculateTotalHoursByDepartment(data) {
	const totalHoursByDepartment = {};

	// Iterate through the data array
	data.forEach((employee) => {
		const { department, hoursSoFar } = employee;

		// Initialize department if not present
		if (!totalHoursByDepartment[department]) {
			totalHoursByDepartment[department] = {
				totalHours: 0,
				employeeCount: 0
			};
		}

		// Update total hours for the department
		totalHoursByDepartment[department].totalHours += hoursSoFar;
		totalHoursByDepartment[department].employeeCount += 1;
	});

	return totalHoursByDepartment;
}
export default calculateTotalHoursByDepartment;
