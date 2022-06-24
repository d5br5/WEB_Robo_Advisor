import { FC, memo } from "react";
import { Control } from "react-hook-form";
import { Item, MiniTitle, ItemInput, DropdownGrider } from "../styles";
import {
	priorityItem,
	prioritySort,
	priorityTime,
} from "../../../../config/data/TS";
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
}

const Strategy: FC<AccordionProps> = ({ control }) => {
	return (
		<StepContainer>
			<TitleContainer>
				<StepNum>Step 3.</StepNum>
				<StepTitle>전략 입력</StepTitle>
			</TitleContainer>
			<StepBody>
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
