import TableChart from "../../../Chart/Table";
import { FC, memo } from "react";
import { Asset, StrategyResult } from "../../../../types";
import { BlueBtn, ChartContainer, Container } from "../styles";
import PieChartPercent from "../../../../Common/Chart/Pie/ResultPercent";

interface Props {
	str: StrategyResult;
	recommendedPf: number[];
	assets: Asset[];
}

const P2Result: FC<Props> = ({ str, recommendedPf, assets }) => {
	return (
		<div>
			<BlueBtn>성과 및 자산 비중</BlueBtn>
			<Container>
				<TableChart items={[str]} />
				<ChartContainer>
					<PieChartPercent chartData={recommendedPf} label={assets} />
				</ChartContainer>
			</Container>
		</div>
	);
};

export default memo(P2Result);
