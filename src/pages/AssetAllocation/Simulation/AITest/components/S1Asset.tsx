import {
	StepContainer,
	AssetContainer,
	StepBody,
	StepTitle,
	StepNum,
	InputBtnContainer,
	AssetText,
	InputTitle,
	SetOption,
	SetSelect,
	TitleContainer,
} from "../../../../../styles/form";
import { AIModel } from "../../../../../config/data/AS";
import { ChangeEvent, Dispatch, memo, SetStateAction } from "react";

const S1Asset = ({ num, setNum }: { num: number; setNum: Dispatch<SetStateAction<0 | 1>> }) => {
	const onChangeModel = (e: ChangeEvent<HTMLSelectElement>) => {
		setNum(Number(e.target.value) as 0 | 1);
	};

	return (
		<StepContainer>
			<TitleContainer>
				<StepNum>Step 1.</StepNum>
				<StepTitle>자산 선택</StepTitle>
			</TitleContainer>
			<StepBody>
				<div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
					<AssetContainer>
						<SetSelect name="" id="" onChange={onChangeModel}>
							<SetOption value="0">세트 1 (VTI, TLT.O, IEF.O, GLD, GSG)</SetOption>
							<SetOption value="1">세트 2 (SPY, IEF.O)</SetOption>
						</SetSelect>
					</AssetContainer>

					<AssetContainer>
						{AIModel[num].assets.map((item, idx) => (
							<InputBtnContainer key={idx}>
								<InputTitle>{`자산 ${idx + 1}`} </InputTitle>
								<AssetText>
									{item.ticker} {item.name}
								</AssetText>
							</InputBtnContainer>
						))}
					</AssetContainer>
				</div>
			</StepBody>
		</StepContainer>
	);
};

export default memo(S1Asset);
