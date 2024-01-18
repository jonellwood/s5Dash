function calculateClockedInStatus(data) {
	const departmentStatus = {};

	data.forEach((employee) => {
		const { department, isClockedIn } = employee;

		if (!departmentStatus[department]) {
			departmentStatus[department] = { clockedIn: 0, notClockedIn: 0 };
		}

		// Update counts based on clockedIn status
		if (isClockedIn) {
			departmentStatus[department].clockedIn += 1;
		} else {
			departmentStatus[department].notClockedIn += 1;
		}
	});

	return departmentStatus;
}
export default calculateClockedInStatus;
