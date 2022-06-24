import { Control, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { FC, memo } from "react";

interface FormInputProps {
	name: string;
	control: Control;
	label: string;
}

const FormInputText: FC<FormInputProps> = ({ name, control, label }: FormInputProps) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					helperText={error ? error.message : null}
					size="medium"
					error={!!error}
					onChange={onChange}
					value={value || ""}
					fullWidth
					label={label}
					variant="outlined"
				/>
			)}
		/>
	);
};

export default memo(FormInputText);
