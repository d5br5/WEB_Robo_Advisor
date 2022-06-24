import { MenuItem, TextField } from "@material-ui/core";
import { memo } from "react";
import { Controller, Control } from "react-hook-form";
import { NumberOption, StringOption } from "../../../config/data/TS";

interface FormInputProps {
	name: string;
	control: Control;
	label: string;
	options: (StringOption | NumberOption)[];
}

const FormInputDropdown: React.FC<FormInputProps> = ({
	label,
	name,
	control,
	options,
}: FormInputProps) => {
	const generateSingleOptions = () => {
		return options.map((option: StringOption | NumberOption) => {
			return (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			);
		});
	};

	return (
		<Controller
			defaultValue={options[0].value}
			control={control}
			name={name}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					select
					label={label}
					fullWidth
					size="medium"
					error={!!error}
					variant="outlined"
					onChange={onChange}
					value={value}
				>
					{generateSingleOptions()}
				</TextField>
			)}
		/>
	);
};

export default memo(FormInputDropdown);
