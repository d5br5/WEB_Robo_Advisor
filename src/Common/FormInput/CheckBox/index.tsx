import { memo, useEffect, useState } from "react";
import { Checkbox, FormControl, FormControlLabel } from "@material-ui/core";
import { Control, Controller, FieldValues, UseFormSetValue } from "react-hook-form";
import { Option } from "../../../config/data/TS";

interface FormInputProps {
	name: string;
	control: Control;
	options: Option[];
	setValue: UseFormSetValue<FieldValues>;
}

const options = [
	{
		label: "Checkbox Option 1",
		value: "1",
	},
	{
		label: "Checkbox Option 2",
		value: "2",
	},
];

const FormInputMultiCheckbox: React.FC<FormInputProps> = ({
	name,
	control,
	setValue,
}: FormInputProps) => {
	const [selectedItems, setSelectedItems] = useState<any>([]);

	const handleSelect = (value: any) => {
		const isPresent = selectedItems.indexOf(value);
		if (isPresent !== -1) {
			const remaining = selectedItems.filter((item: any) => item !== value);
			setSelectedItems(remaining);
		} else {
			setSelectedItems((prevItems: any) => [...prevItems, value]);
		}
	};

	useEffect(() => {
		setValue(name, selectedItems);
	}, [selectedItems]);

	return (
		<FormControl size={"small"} variant={"outlined"}>
			<div>
				{options.map((option: any) => {
					return (
						<FormControlLabel
							control={
								<Controller
									name={name}
									render={() => {
										return (
											<Checkbox
												checked={selectedItems.includes(option.value)}
												onChange={() => handleSelect(option.value)}
											/>
										);
									}}
									control={control}
								/>
							}
							label={option.label}
							key={option.value}
						/>
					);
				})}
			</div>
		</FormControl>
	);
};

export default memo(FormInputMultiCheckbox);
