import { useSelector, useDispatch } from "react-redux";
import { onDivModal } from "../../../../../store/slice/modal";
import { RootState } from "../../../../../store";
import {
	AddBtn,
	InputBtnContainer,
	AssetText,
	InputTitle,
	StepBody,
	StepContainer,
	StepNum,
	StepTitle,
	AssetContainer,
	TitleContainer,
} from "../../../../../styles/form";
import { memo } from "react";

const Step1Asset = () => {
	const {
		backSelection: { investList },
		assetClass: { assetClass },
	} = useSelector<RootState, RootState>((state) => state);
	const dispatch = useDispatch();
	const openSearchModal = () => dispatch(onDivModal());

	return (
		<StepContainer>
			<TitleContainer>
				<StepNum>Step 1.</StepNum>
				<StepTitle>자산 선택</StepTitle>
			</TitleContainer>
			<StepBody>
				<AssetContainer>
					{investList.length > 0 ? (
						investList.map((item, idx: number) => (
							<InputBtnContainer key={idx}>
								<InputTitle> 자산 {idx + 1}</InputTitle>
								<AssetText onClick={openSearchModal} disabled={assetClass.length === 0}>
									{item.nameticker}
								</AssetText>
							</InputBtnContainer>
						))
					) : (
						<InputBtnContainer>
							<InputTitle>자산</InputTitle>
							<AssetText onClick={openSearchModal} disabled={assetClass.length === 0}>
								{assetClass.length !== 0
									? "투자하고 싶은 자산을 검색해주세요."
									: "서버 문제로 자산 검색이 지원되지 않습니다."}
							</AssetText>
						</InputBtnContainer>
					)}
					{investList.length !== 0 && <AddBtn onClick={openSearchModal}>자산 수정하기</AddBtn>}
				</AssetContainer>
			</StepBody>
		</StepContainer>
	);
};

export default memo(Step1Asset);
