import { FC, memo } from "react";
import {
	StepContainer,
	StepNum,
	StepTitle,
	AICalendarItem,
	TitleContainer,
	StepBody,
} from "../../../../../styles/form";
import { AIModel } from "../../../../../config/data/AS";

interface Props {
	num: 0 | 1;
}

const S2Period: FC<Props> = ({ num }) => {
	return (
		<StepContainer>
			<TitleContainer>
				<StepNum>Step 2.</StepNum>
				<StepTitle>시뮬레이션 기간 (고정)</StepTitle>
			</TitleContainer>
			<StepBody>
				<AICalendarItem>시작일 : {AIModel[num].cal.start}</AICalendarItem>
				<AICalendarItem>종료일 : {AIModel[num].cal.end}</AICalendarItem>
			</StepBody>
		</StepContainer>
	);
};

export default memo(S2Period);
