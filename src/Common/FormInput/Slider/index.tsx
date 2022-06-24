import React, { memo, useEffect } from "react";
import Slider from "@mui/material/Slider";
import { Control, Controller, FieldValues, UseFormSetValue } from "react-hook-form";
import { NumberOption } from "../../../config/data/TS";

interface FormInputProps {
	name: string;
	control: Control;
	min: number;
	max: number;
	step: number;
	setValue: UseFormSetValue<FieldValues>;
	defaultValue: number;
	marks?: NumberOption[];
}

const FormInputSlider = ({
	name,
	control,
	setValue,
	min,
	max,
	step,
	defaultValue,
	marks,
}: FormInputProps) => {
	const [sliderValue, setSliderValue] = React.useState<number>(defaultValue);

	useEffect(() => {
		if (sliderValue) setValue(name, sliderValue);
	}, [sliderValue]);

	const handleChange = (event: Event, newValue: number | number[]) => {
		setSliderValue(newValue as number);
	};

	const valueLabelFormat = (value: number): string => {
		return `${value} %`;
	};

	return (
		<Controller
			name={name}
			control={control}
			render={() => (
				// state : { field, fieldState, formState }
				<Slider
					size="small"
					value={sliderValue}
					onChange={handleChange}
					valueLabelDisplay="auto"
					valueLabelFormat={valueLabelFormat}
					min={min}
					max={max}
					step={step}
					marks={marks}
				/>
			)}
		/>
	);
};

export default memo(FormInputSlider);
