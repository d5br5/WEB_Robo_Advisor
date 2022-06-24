import { Control, Controller } from "react-hook-form";
import { InputAdornment } from "@mui/material";
import TextField from "@material-ui/core/TextField";
import { FC, memo } from "react";

interface FormInputProps {
	name: string;
	control: Control;
	label: string;
	min?: number;
	max?: number;
	defaultValue?: number;
	helperText?: string;
	endadorn?: string;
}

const FormInputText: FC<FormInputProps> = ({
	name,
	control,
	label,
	min,
	max,
	defaultValue,
	endadorn,
	helperText,
}: FormInputProps) => {
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
			rules={{ required: true }}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					helperText={error ? error.message : helperText}
					size="medium"
					error={!!error}
					onChange={onChange}
					value={value}
					fullWidth
					type="number"
					label={label}
					variant="outlined"
					InputProps={{
						endAdornment: <InputAdornment position="end">{endadorn}</InputAdornment>,
						inputProps: { min, max },
					}}
				/>
			)}
		/>
	);
};

export default memo(FormInputText);
