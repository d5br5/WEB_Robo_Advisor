import { MiniTitle, ItemInput, DropdownSlider, SliderNextDropdown } from "../styles";
import { targetPrice, tradeCut } from "../../../../config/data/TS";
import { Control, FieldValues, UseFormSetValue } from "react-hook-form";
import { FC, memo } from "react";
import Dropdown from "../../../../Common/FormInput/DropDown";
import Slider from "../../../../Common/FormInput/Slider";
import {
	StepBody,
	StepContainer,
	StepNum,
	StepTitle,
	TitleContainer,
} from "../../../../styles/form";

interface Props {
	control: Control;
	setValue: UseFormSetValue<FieldValues>;
}

const Price: FC<Props> = ({ control, setValue }) => {
	return (
		<StepContainer>
			<TitleContainer>
				<StepNum>Step 2.</StepNum>
				<StepTitle>주문가격 기준입력</StepTitle>
			</TitleContainer>
			<StepBody>
				<MiniTitle mt="-2px">매수 주문 기준</MiniTitle>
				<ItemInput>
					<DropdownSlider>
						<Dropdown
							name={"BuyOrder"}
							label="기준"
							control={control}
							options={targetPrice.filter((a) => a.label !== "매수가")}
						/>
					</DropdownSlider>
					<SliderNextDropdown>
						<Slider
							name={"BuyOrderPercent"}
							control={control}
							setValue={setValue}
							min={-10}
							max={10}
							step={0.25}
							defaultValue={0}
							marks={tradeCut}
						/>
					</SliderNextDropdown>
				</ItemInput>

				<MiniTitle mt="8px">매도 주문 기준</MiniTitle>
				<ItemInput>
					<DropdownSlider>
						<Dropdown name={"SellOrder"} label="기준" control={control} options={targetPrice} />
					</DropdownSlider>
					<SliderNextDropdown>
						<Slider
							name={"SellOrderPercent"}
							control={control}
							setValue={setValue}
							min={-10}
							max={10}
							step={0.25}
							defaultValue={0}
							marks={tradeCut}
						/>
					</SliderNextDropdown>
				</ItemInput>

				<MiniTitle mt="8px">타임컷 주문 기준</MiniTitle>
				<ItemInput>
					<DropdownSlider>
						<Dropdown name={"TimeOrder"} label="기준" control={control} options={targetPrice} />
					</DropdownSlider>
					<SliderNextDropdown>
						<Slider
							name={"TimeOrderPercent"}
							control={control}
							setValue={setValue}
							min={-10}
							max={10}
							step={0.25}
							defaultValue={0}
							marks={tradeCut}
						/>
					</SliderNextDropdown>
				</ItemInput>
			</StepBody>
		</StepContainer>
	);
};

export default memo(Price);
