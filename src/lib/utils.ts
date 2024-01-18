import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cubicOut } from "svelte/easing";
import type { TransitionConfig } from "svelte/transition";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

type FlyAndScaleParams = {
	y?: number;
	x?: number;
	start?: number;
	duration?: number;
};

export const flyAndScale = (
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
	const style = getComputedStyle(node);
	const transform = style.transform === "none" ? "" : style.transform;

	const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	const styleToString = (style: Record<string, number | string | undefined>): string => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str;
			return str + `${key}:${style[key]};`;
		}, "");
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
};

export function arrayToObject<T>(arr: T[]): { [id: string]: T } {
	return arr.reduce(
		(acc, val, index) => {
			acc[String(index)] = val;
			return acc;
		},
		{} as { [id: string]: T }
	);
}

let idCounter = 0;

export function generateId(): string {
	const uniqueId = `${Date.now().toString(36)}_${idCounter.toString(36)}`;
	idCounter++;
	return uniqueId;
}

export function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export function averageGallons(data: { gallons: number }[]): number {
	const gallons = data.map((item) => item.gallons);

	const totalGallons = gallons.reduce((acc, gallons) => acc + gallons, 0);

	const averageDuration = totalGallons / gallons.length;

	return averageDuration;
}

export function getDate(inputStr: string) {
	const [datePart] = inputStr.split("T");

	const dtObject = new Date(datePart + "Z");

	const matchResult = inputStr.match(/([+-]\d{2}:\d{2})$/);
	const timezoneOffset = matchResult ? matchResult[0] : "";

	const adjustedTime = new Date(dtObject);
	adjustedTime.setMinutes(adjustedTime.getMinutes() + parseInt(timezoneOffset));

	const dateOptions = { month: "2-digit", day: "2-digit", year: "numeric" };
	// const timeOptions = { hour: '2-digit', minute: '2-digit' };

	const dateString = adjustedTime.toLocaleDateString(undefined, dateOptions);
	// const timeString = adjustedTime.toLocaleTimeString(undefined, timeOptions);

	return { date: dateString };
}

export function calculateAverageAge(tickets) {
	const currentDate = new Date();
	let totalAge = 0;

	tickets.forEach((ticket) => {
		// Parse the "date" string into a Date object
		const dateString = getDate(ticket.date);
		// console.log(dateString);
		const creationDate = new Date(dateString.date);
		// Calculate the age in milliseconds
		const ageInMilliseconds = currentDate - creationDate;

		// Convert the age to days and add to the total
		const ageInDays = (ageInMilliseconds * 0.02) / (1000 * 60 * 60 * 24);
		totalAge += ageInDays;
	});

	const averageAge = totalAge / tickets.length;
	return averageAge;
}

export function calculateClockedInStatus(data) {
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

export function getTotalGallonsByType(data, targetType) {
	let totalGallons = 0;

	data.forEach((entry) => {
		if (entry.type === targetType) {
			totalGallons += entry.gallons;
		}
	});

	return totalGallons;
}

export function capitalizeFirstLetter(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
export function convertMS(str) {
	const seconds = str / 60;
	const lessSeconds = seconds * 2.1;
	const min = lessSeconds / 60;
	// let hours = Math.floor(min / 60);
	const remainingMin = min % 60;

	return remainingMin.toFixed(0) + " min";
}

export function countStatus(data: any[], targetStatus: string): number {
	let statusCount = 0;

	data.forEach((entry) => {
		const status = entry.status;

		if (status === targetStatus) {
			statusCount++;
		}
	});

	return statusCount;
}

export function countYes(data: { transfer: string }[]): number {
	const numberOfYesTransfers = data.reduce((count, entry) => {
		return entry.transfer === "yes" ? count + 1 : count;
	}, 0);

	return numberOfYesTransfers;
}

export function createDateObjectFromMonthDay(monthDay: string) {
	// Split the month and day values
	const [monthString, day] = monthDay.split("-").map(Number);
	const month: number = monthString as number;

	// Get the current year
	const currentYear = new Date().getFullYear();

	// Create a new Date object with the current year, month (months are 0-based in JavaScript Date objects), and day
	const dateObject = new Date(currentYear, month - 1, day);

	return dateObject;
}

interface DepartmentInfo {
	totalHours: number;
	employeeCount: number;
}

export function calculateTotalHoursByDepartment(data: any) {
	const totalHoursByDepartment: { [key: string]: DepartmentInfo } = {};

	// Iterate through the data array
	data.forEach((employee: any) => {
		const { department, hoursSoFar } = employee;

		// Initialize department if not present
		if (!totalHoursByDepartment[department]) {
			totalHoursByDepartment[department] = {
				totalHours: 0,
				employeeCount: 0
			};
		}
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

export function averageDuration(data: any[]) {
	const durations = data.map((item) => item.duration);

	const totalDuration = durations.reduce((acc, duration) => acc + duration, 0);

	const averageDuration = totalDuration / durations.length;

	return averageDuration;
}

type Status = "pending" | "approved" | "ordered";
let item: Status;
export function getStatusSummary(data: any) {
	const obj = {
		pending: { count: 0, balanceSum: 0 },
		approved: { count: 0, balanceSum: 0 },
		ordered: { count: 0, balanceSum: 0 }
	};

	obj[item].count += 1; // No error
}

// export function getStatusSummary(data: any) {
// 	const summary = {
// 		pending: { count: 0, balanceSum: 0 },
// 		approved: { count: 0, balanceSum: 0 },
// 		ordered: { count: 0, balanceSum: 0 }
// 	};

// 	data.forEach((item: any) => { // Add type annotation for 'item'
// 		const status = item.status.toLowerCase();
// 		const balance = parseFloat(item.balance.replace("$", ""));

// 		if (summary[status]) {
// 			summary[status].count += item.itemsCount;
// 			summary[status].balanceSum += balance;
// 		}
// 	});

// 	return summary;
// }

export function extractDateFromDatestring(dateString: string) {
	dateString = dateString.replace(" ", "");
	const dateObject = new Date(dateString);

	// Extract justthe date part
	const year = dateObject.getFullYear();
	const month = dateObject.getMonth() + 1; // Month is zero-based ~ ummm i think....
	const day = dateObject.getDate();

	// Format as 'YYYY-MM-DD'
	const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${day < 10 ? "0" : ""}${day + 1}`;

	return formattedDate;
}

export function extractTimeFromDatestring(dateString: string) {
	dateString = dateString.replace(" ", "");
	const date = new Date(dateString);
	console.log(date);
	const hours = date.getHours();
	const minutes = date.getMinutes();

	// Convert hours to AM/PM format
	const amPm = hours >= 12 ? "PM" : "AM";
	const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

	// Add leading zero for minutes if necessary
	const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

	return `${formattedHours}:${formattedMinutes} ${amPm}`;
}

export function filterBirthdaysWithCurrentWeek(jsonArray) {
	const today = new Date();
	const startOfWeek = new Date(today);
	startOfWeek.setHours(0, 0, 0, 0 - today.getDay());
	// console.log('Start: ', startOfWeek);
	const endOfWeek = new Date(today);
	endOfWeek.setHours(23, 59, 59, 999 + (6 - today.getDay()));
	// console.log('End: ', endOfWeek);
	return jsonArray.filter((entry) => {
		const birthday = new Date(createDateObjectFromMonthDay(entry.date));
		// console.log(birthday);
		return birthday >= startOfWeek && birthday <= endOfWeek;
	});
}

export function filterEntriesWithinCurrentWeek(jsonArray) {
	const today = new Date();
	const startOfWeek = new Date(today);
	startOfWeek.setHours(0, 0, 0, 0 - today.getDay());
	console.log("Start: ", startOfWeek);
	const endOfWeek = new Date(today);
	endOfWeek.setHours(23, 59, 59, 999 + (6 - today.getDay()));
	console.log("End: ", endOfWeek);
	return jsonArray.filter((entry) => {
		const registeredDate = new Date(entry.registered);

		return registeredDate >= startOfWeek && registeredDate <= endOfWeek;
		// return registeredDate;
	});
}

export function filterEntriesWithinNextWeek(jsonArray) {
	const today = new Date();
	const startOfNextWeek = new Date(today);
	startOfNextWeek.setDate(today.getDate() + (7 - today.getDay()));
	startOfNextWeek.setHours(0, 0, 0, 0);

	const endOfNextWeek = new Date(startOfNextWeek);
	endOfNextWeek.setDate(startOfNextWeek.getDate() + 6);
	endOfNextWeek.setHours(23, 59, 59, 999);

	return jsonArray.filter((entry) => {
		// Parse the date string into a Date object
		const entryDate = new Date(createDateObjectFromMonthDay(entry.date));

		// Check if the date is valid
		if (isNaN(entryDate.getTime())) {
			console.error(`Invalid date format: ${entry.date}`);
			return false;
		}

		// Check if the date falls within the next week
		return entryDate >= startOfNextWeek && entryDate <= endOfNextWeek;
	});
}

export function findDateRange(data) {
	const dateObjects = data.map((item) => item.date);

	const dateStrings = dateObjects.map((entry) => new Date(entry.split("T")[0]));

	// Find the minimum and maximum dates
	const minDate = new Date(Math.min(...dateStrings));
	const maxDate = new Date(Math.max(...dateStrings));

	return fixDateString(minDate) + " to " + fixDateString(maxDate);
}

export function fixDateString(inputString) {
	const dateObject = new Date(inputString);

	const month = dateObject.toLocaleString("en-US", { month: "short" });
	const day = dateObject.getDate();
	const year = dateObject.getFullYear();

	return `${month} ${day} ${year}`;
}

export function formatPhoneNumber(input) {
	const cleanedNumber = input.replace(/\D/g, "");

	if (cleanedNumber.length >= 10) {
		const formattedNumber = `(${cleanedNumber.slice(-10, -7)}) ${cleanedNumber.slice(
			-7,
			-4
		)}-${cleanedNumber.slice(-4)}`;
		return formattedNumber;
	} else {
		// If the number is not long enough, return the original input
		return input;
	}
}
// This function is for the generator page to take in the value of items in camelCase and return them with a space before each capital letter and the first letter lowercase where needed.

export function insertSpaceBeforeCapital(str: string) {
	let result = "";

	for (let i = 0; i < str.length; i++) {
		if (i > 0 && str[i] === str[i].toUpperCase()) {
			result += " " + str[i].toLowerCase();
		} else {
			result += str[i];
		}
	}

	return result;
}

export function parseDateTime(inputStr: string) {
	// console.log(inputStr);

	// const [, timezoneOffset] = inputStr.match(/([+-]\d{2}:\d{2})$/);

	// Parse the input string without timezone information
	const dtObject = new Date(inputStr.slice(0, -6) + "Z");

	// Adjust the time based on the timezone offset
	const adjustedTime = new Date(dtObject);
	// adjustedTime.setMinutes(adjustedTime.getMinutes() + parseInt(timezoneOffset));
	adjustedTime.setMinutes(adjustedTime.getMinutes());

	const dateOptions = { year: "numeric", month: "2-digit", day: "2-digit" };
	const timeOptions = { hour: "2-digit", minute: "2-digit" };

	const dateString = adjustedTime.toLocaleDateString(undefined, dateOptions);
	const timeString = adjustedTime.toLocaleTimeString(undefined, timeOptions);

	return { date: dateString, time: timeString };
}

export function handleCheckboxChange(e: Event) {
	const checkbox = e.target as HTMLInputElement;

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
		targetCard.classList.add("hide");
		// targetCard.remove();
	} else {
		targetCard.classList.remove("hide");
	}
}
