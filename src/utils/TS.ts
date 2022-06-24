import day, { Dayjs } from "dayjs";

export function minValidDay(date: Dayjs) {
	const now = new Date(date.toDate());
	while (now.getDay() === 0 || now.getDay() === 6) {
		now.setDate(now.getDate() + 1);
	}
	return now;
}

export function maxValidDay(date: Dayjs) {
	const now = new Date(date.toDate());
	while (now.getDay() === 0 || now.getDay() === 6) {
		now.setDate(now.getDate() - 1);
	}
	return now;
}

export const validLastDay = maxValidDay(day().subtract(6, "month"));
export const validToday = maxValidDay(day().subtract(1, "day"));
export const validYesterday = maxValidDay(day().subtract(2, "day"));
