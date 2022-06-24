import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Control, Controller } from "react-hook-form";
import { minValidDay, maxValidDay } from "../../../utils/TS";
import dayjs from "dayjs";
import { Dispatch, memo, SetStateAction } from "react";

interface Props {
	control: Control;
	name: string;
	label: string;
	trading?: boolean;
	disabled?: boolean;
	defaultValue?: string | Date;
	helperText?: string;
	min?: string;
	max?: string;
	setChanged?: Dispatch<SetStateAction<boolean>>;
}

function disableWeekends(date: Date) {
	return date.getDay() === 0 || date.getDay() === 6;
}

function BasicDatePicker({
	control,
	name,
	label,
	disabled,
	trading,
	defaultValue,
	helperText,
	min,
	max,
	setChanged,
}: Props) {
	return (
		<Controller
			name={name}
			control={control}
			rules={{ required: true }}
			defaultValue={defaultValue === undefined ? null : dayjs(defaultValue).toDate()}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DatePicker
						label={label}
						value={value}
						onChange={(newValue) => {
							onChange(newValue);
							if (setChanged !== undefined) setChanged(true);
						}}
						disabled={disabled}
						inputFormat={"yyyy-MM-dd"}
						mask={"____-__-__"}
						shouldDisableDate={trading ? disableWeekends : () => false}
						minDate={minValidDay(dayjs(min))}
						maxDate={maxValidDay(dayjs(max))}
						renderInput={(params) => (
							<TextField {...params} error={!!error} fullWidth helperText={helperText} />
						)}
					/>
				</LocalizationProvider>
			)}
		></Controller>
	);
}

export default memo(BasicDatePicker);
