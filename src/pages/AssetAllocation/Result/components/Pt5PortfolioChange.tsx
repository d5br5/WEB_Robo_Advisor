import StackedLineChart from "../../../../Common/Chart/Line/Stacked";
import { FC, memo, useState } from "react";
import { Simulation } from "../../../../types";
import {
	WhiteBox,
	BlueBtn,
	Advice,
	ToggleBtnContainer,
	ToggleBtn,
	BR600,
} from "../../../../styles/result";

const Pt5PortfolioChange: FC<{ simDetail: Simulation }> = ({ simDetail }) => {
	const [chartIdx, setChartIdx] = useState(0);
	const filteredStrs = simDetail.strategies.filter((a) => a.name !== "kospi" && a.name !== "snp");
	return (
		<WhiteBox>
			<BlueBtn>전략별 포트폴리오의 비중 변화</BlueBtn>
			<Advice>
				여러 전략마다 포트폴리오의 비중이 <BR600 /> 어떻게 변화해 왔는지 확인해보세요.
			</Advice>
			<ToggleBtnContainer>
				{filteredStrs.map((item, i) => (
					<ToggleBtn key={i} disabled={chartIdx === i} onClick={() => setChartIdx(i)}>
						{item.name.toUpperCase()}
					</ToggleBtn>
				))}
			</ToggleBtnContainer>
			<StackedLineChart
				chartData={filteredStrs[chartIdx].dailyPfWeights}
				period={simDetail.rebalancingPeriod}
				label={simDetail.assets}
			/>
		</WhiteBox>
	);
};

export default memo(Pt5PortfolioChange);
