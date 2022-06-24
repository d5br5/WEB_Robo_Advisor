import { FC, memo, useState } from "react";
import PieChartPercent from "../../../../Common/Chart/Pie/ResultPercent";
import { Simulation } from "../../../../types";
import {
	WhiteBox,
	BlueBtn,
	Advice,
	ToggleBtnContainer,
	ToggleBtn,
	ChartContainer,
} from "../../../../styles/result";

const Pt3Porfolio: FC<{ simDetail: Simulation }> = ({ simDetail }) => {
	const [pieIdx, setPieIdx] = useState(0);
	const filteredStrs = simDetail.strategies.filter(
		(a) => a.name !== "kospi" && a.name !== "snp"
	);

	return (
		<WhiteBox>
			<BlueBtn>전략별 자산배분 비중</BlueBtn>
			<Advice>
				여러 전략마다 제시하는 자산배분의 비중이 다릅니다.
				<br />
				오늘 주식을 구매한다면 어떻게 배분해야 좋을까요?
			</Advice>
			<ToggleBtnContainer>
				{filteredStrs.map((item, i) => (
					<ToggleBtn
						key={i}
						disabled={pieIdx === i}
						onClick={() => setPieIdx(i)}
					>
						{item.name.toUpperCase()}
					</ToggleBtn>
				))}
			</ToggleBtnContainer>
			<ChartContainer>
				<PieChartPercent
					chartData={filteredStrs[pieIdx].recommendedPf}
					label={simDetail.assets}
				/>
			</ChartContainer>
		</WhiteBox>
	);
};

export default memo(Pt3Porfolio);
