import { useDispatch, useSelector } from "react-redux";
import { toggleCheckStr } from "../../../../store/slice/backSelection";
import { BackSelectionState } from "../../../../types/state";
import { onImgModal } from "../../../../store/slice/modal";
import { strList } from "../../../../config/data/AS";
import strMenu from "../../../../assets/BackTest/strmodal.jpg";

import {
	StepContainer,
	StepNum,
	StepTitle,
	StrContainer,
	ImgModalBtn,
	StrItem,
	TitleModalWrapper,
	TitleContainer,
	StepBody,
} from "../../../../styles/form";
import { RootState } from "../../../../store";
import { memo } from "react";

const Step2Strategy = () => {
	const dispatch = useDispatch();
	const openImgModal = () => dispatch(onImgModal(strMenu));
	const toggleStr = (index: number) => () => dispatch(toggleCheckStr(index));
	const { strChecked } = useSelector<RootState, BackSelectionState>(
		(state) => state.backSelection
	);

	return (
		<StepContainer>
			<TitleContainer>
				<StepNum>Step 2.</StepNum>
				<TitleModalWrapper>
					<StepTitle>자산배분 전략 선택</StepTitle>
					<ImgModalBtn onClick={openImgModal}>?</ImgModalBtn>
				</TitleModalWrapper>
			</TitleContainer>
			<StepBody>
				<StrContainer>
					{strList.map((str, i) => (
						<StrItem key={i} onClick={toggleStr(i)} checked={strChecked[i]}>
							{str.title}
						</StrItem>
					))}
				</StrContainer>
			</StepBody>
		</StepContainer>
	);
};

export default memo(Step2Strategy);
