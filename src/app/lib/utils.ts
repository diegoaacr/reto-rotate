import { Revenue } from './definitions';

export const formatCurrency = (amount: number) => {
	return (amount / 100).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});
};

export const formatDateToLocal = (dateStr: string, locale: string = 'en-US') => {
	const date = new Date(dateStr);
	const options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	};
	const formatter = new Intl.DateTimeFormat(locale, options);
	return formatter.format(date);
};

export const generateYAxis = (revenue: Revenue[]) => {
	// Calculate what labels we need to display on the y-axis
	// based on highest record and in 1000s
	const yAxisLabels = [];
	const highestRecord = Math.max(...revenue.map((month) => month.revenue));
	const topLabel = Math.ceil(highestRecord / 1000) * 1000;

	for (let i = topLabel; i >= 0; i -= 1000) {
		yAxisLabels.push(`$${i / 1000}K`);
	}

	return { yAxisLabels, topLabel };
};

export const generatePagination = (currentPage: number, totalPages: number) => {
	// If the total number of pages is 7 or less,
	// display all pages without any ellipsis.
	if (totalPages <= 7) {
		return Array.from({ length: totalPages }, (_, i) => i + 1);
	}

	// If the current page is among the first 3 pages,
	// show the first 3, an ellipsis, and the last 2 pages.
	if (currentPage <= 3) {
		return [1, 2, 3, '...', totalPages - 1, totalPages];
	}

	// If the current page is among the last 3 pages,
	// show the first 2, an ellipsis, and the last 3 pages.
	if (currentPage >= totalPages - 2) {
		return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
	}

	// If the current page is somewhere in the middle,
	// show the first page, an ellipsis, the current page and its neighbors,
	// another ellipsis, and the last page.
	return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
};

export function rotateArraySchedule(array: []) {
	const rows = array.length;
	const columns = array[0]?.length;
	const newArrayRotate = [];

	for (let i = 0; i < columns; i++) {
		newArrayRotate[i] = [];

		for (let j = 0; j < rows; j++) {
			newArrayRotate[i][j] = array[j][columns - 1 - i];
		}
	}

	return newArrayRotate;
}

export function flattenTwoDimensionalArray(arr: string) {
	const flattenedArray = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			flattenedArray.push(arr[i][j]);
		}
	}
	return flattenedArray;
}

export function formatArray(input: string) {
	// Split the input string by non-digit characters and filter out any empty strings
	const numbers = input.split(/\D+/).filter(Boolean);
	// Convert the array of strings to an array of numbers
	const numbersArray = numbers.map(Number);
	// Format the array for display
	const formattedArray = numbersArray.join(', ');
	return formattedArray;
}

export function validateInputNumber(array: []) {
	// Verificar si cada elemento del array es un número
	const esNumero = array.every((el) => typeof el === 'number' && !isNaN(el));
	return esNumero;
}

export function validateArrayBidimensional(arr: any[]) {
	// Verificar si es un arreglo
	if (!Array.isArray(arr)) {
		return false;
	}

	// Verificar si todas las filas son arreglos y tienen la misma longitud
	const firstLength = arr[0].length;
	for (let i = 0; i < arr.length; i++) {
		if (!Array.isArray(arr[i]) || arr[i].length !== firstLength) {
			return false;
		}
	}

	// Si pasa ambas validaciones, el arreglo es bidimensional válido
	return true;
}
