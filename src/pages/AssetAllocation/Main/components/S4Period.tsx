import { FC, memo, useState } from "react";
import {
	StepContainer,
	StepNum,
	StepTitle,
	TitleContainer,
	StepBody,
} from "../../../../styles/form";
import { Control } from "react-hook-form";
import Date from "../../../../Common/FormInput/Date";
import { RootState } from "../../../../store";
import { useSelector } from "react-redux";

interface Props {
	control: Control;
}

const S4Period: FC<Props> = ({ control }) => {
	const [changed, setChanged] = useState(false);
	const {
		backSelection: { investList, period },
	} = useSelector<RootState, RootState>((state) => state);
	const mustChangeWarning = (changed: boolean) => {
		return changed ? "" : "시작일을 먼저 선택해주세요.";
	};
	return (
		<StepContainer>
			<TitleContainer>
				<StepNum>Step 4.</StepNum>
				<StepTitle>시뮬레이션 기간 선택</StepTitle>
			</TitleContainer>
			{/* store 정리하기, min, max */}
			<StepBody>
				<Date
					control={control}
					name="startDate"
					label="시작일"
					min={period.start}
					max={period.end}
					defaultValue={period.start}
					disabled={investList.length === 0}
					setChanged={setChanged}
				/>
				<Date
					control={control}
					name="endDate"
					label="종료일"
					min={period.start}
					max={period.end}
					defaultValue={undefined}
					disabled={
						investList.length === 0 ||
						control._formValues.startDate === undefined ||
						!changed
					}
					helperText={
						investList.length === 0
							? "자산을 먼저 선택해주세요."
							: mustChangeWarning(changed)
					}
				/>
			</StepBody>
		</StepContainer>
	);
};

export default memo(S4Period);
