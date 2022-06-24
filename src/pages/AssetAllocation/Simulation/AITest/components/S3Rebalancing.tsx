import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { Control } from "react-hook-form";
import { onImgModal } from "../../../../../store/slice/modal";
import modalRebalancingImg from "../../../../../assets/BackTest/rebalancing_modal.svg";
import Dropdown from "../../../../../Common/FormInput/DropDown";
import {
	StepContainer,
	StepNum,
	StepTitle,
	ImgModalBtn,
	TitleModalWrapper,
	TitleContainer,
	StepBody,
} from "../../../../../styles/form";

interface Props {
	control: Control;
}

const S3Rebalancing: FC<Props> = ({ control }) => {
	const dispatch = useDispatch();
	const openImageModal = () => dispatch(onImgModal(modalRebalancingImg));

	return (
		<StepContainer>
			<TitleContainer>
				<StepNum>Step 3.</StepNum>
				<TitleModalWrapper>
					<StepTitle>리밸런싱 주기 선택</StepTitle>
					<ImgModalBtn onClick={openImageModal}>?</ImgModalBtn>
				</TitleModalWrapper>
			</TitleContainer>
			<StepBody>
				<Dropdown
					name="rebalancing"
					control={control}
					label="리밸런싱"
					options={[
						{ label: "40일", value: 40 },
						{ label: "60일", value: 60 },
						{ label: "80일", value: 80 },
					]}
				/>
			</StepBody>
		</StepContainer>
	);
};

export default memo(S3Rebalancing);
