import React, { memo, useEffect } from "react";
import Slider from "@mui/material/Slider";
import { Control, Controller, FieldValues, UseFormSetValue } from "react-hook-form";
import { NumberOption } from "../../../config/data/TS";

interface FormInputProps {
	name: string;
	control: Control;
	setValue: UseFormSetValue<FieldValues>;
	step: number;
	marks: Array<NumberOption>;
}

const FormInputSlider = ({ name, control, setValue, step, marks }: FormInputProps) => {
	const [sliderValue, setSliderValue] = React.useState<number[]>([0, 100]);

	useEffect(() => {
		if (sliderValue) setValue(name, sliderValue);
	}, [sliderValue]);

	const handleChange = (event: Event, newValue: number | number[]) => {
		setSliderValue(newValue as number[]);
	};
	const valueLabelFormat = (value: number): string => {
		return `${value} %`;
	};

	return (
		<Controller
			name={name}
			control={control}
			render={() => (
				// render={({ field, fieldState, formState }) => (
				<Slider
					size="small"
					value={sliderValue}
					onChange={handleChange}
					valueLabelDisplay="auto"
					step={step}
					marks={marks}
					valueLabelFormat={valueLabelFormat}
				/>
			)}
		/>
	);
};

export default memo(FormInputSlider);
