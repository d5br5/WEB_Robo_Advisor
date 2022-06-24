import Number from "../../../../Common/FormInput/Number";
import modalRebalancingImg from "../../../../assets/BackTest/rebalancing_modal.svg";
import { useDispatch } from "react-redux";
import { onImgModal } from "../../../../store/slice/modal";
import { FC, memo } from "react";
import { Control } from "react-hook-form";
import {
	StepContainer,
	StepNum,
	StepTitle,
	ImgModalBtn,
	TitleModalWrapper,
	TitleContainer,
	StepBody,
} from "../../../../styles/form";

interface Props {
	control: Control;
}

const Step3Rebalancing: FC<Props> = ({ control }) => {
	const dispatch = useDispatch();
	const openImgModal = () => dispatch(onImgModal(modalRebalancingImg));

	return (
		<StepContainer>
			<TitleContainer>
				<StepNum>Step 3.</StepNum>
				<TitleModalWrapper>
					<StepTitle>리밸런싱 주기 선택</StepTitle>
					<ImgModalBtn onClick={openImgModal}>?</ImgModalBtn>
				</TitleModalWrapper>
			</TitleContainer>
			<StepBody>
				<Number
					name={"rebalancing"}
					control={control}
					label={"리밸런싱 주기"}
					min={1}
					defaultValue={40}
					endadorn="일"
					helperText="기본값은 40일입니다."
				/>
			</StepBody>
		</StepContainer>
	);
};

export default memo(Step3Rebalancing);
