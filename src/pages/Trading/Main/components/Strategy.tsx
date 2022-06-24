import { Dispatch, FC, memo, SetStateAction } from "react";
import { Control, FieldValues, UseFormSetValue, UseFormRegister } from "react-hook-form";
import { Item, MiniTitle, ItemInput, DropdownGrider } from "../styles";
import { StringOption, priorityItem, prioritySort, priorityTime } from "../../../../config/data/TS";
import Accordion from "./StrAccordion";
import Dropdown from "../../../../Common/FormInput/DropDown";
import {
	StepBody,
	StepContainer,
	StepNum,
	StepTitle,
	TitleContainer,
} from "../../../../styles/form";

export interface AccordionProps {
	control: Control;
	setValue: UseFormSetValue<FieldValues>;
	register: UseFormRegister<FieldValues>;
	buyStrs: StringOption[];
	setBuyStrs: Dispatch<SetStateAction<StringOption[]>>;
	sellStrs: StringOption[];
	setSellStrs: Dispatch<SetStateAction<StringOption[]>>;
}

const Strategy: FC<AccordionProps> = ({
	control,
	setValue,
	register,
	buyStrs,
	setBuyStrs,
	sellStrs,
	setSellStrs,
}) => {
	return (
		<StepContainer>
			<TitleContainer>
				<StepNum>Step 3.</StepNum>
				<StepTitle>전략 입력</StepTitle>
			</TitleContainer>
			<StepBody>
				<Accordion
					control={control}
					setValue={setValue}
					register={register}
					buyStrs={buyStrs}
					setBuyStrs={setBuyStrs}
					sellStrs={sellStrs}
					setSellStrs={setSellStrs}
				/>
				<Item>
					<MiniTitle mt="8px" mb="30px">
						우선 순위
					</MiniTitle>
					<ItemInput gap="20px">
						<DropdownGrider>
							<Dropdown
								name={"Priority_item"}
								label="항목"
								control={control}
								options={priorityItem}
							/>
						</DropdownGrider>
						<DropdownGrider>
							<Dropdown
								name={"Priority_time"}
								label="주기"
								control={control}
								options={priorityTime}
							/>
						</DropdownGrider>
						<DropdownGrider>
							<Dropdown
								name={"Priority_sort"}
								label="정렬"
								control={control}
								options={prioritySort}
							/>
						</DropdownGrider>
					</ItemInput>
				</Item>
			</StepBody>
		</StepContainer>
	);
};

export default memo(Strategy);
