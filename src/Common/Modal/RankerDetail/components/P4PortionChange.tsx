import { FC, memo } from "react";
import { Asset } from "../../../../types";
import { BlueBtn, Container } from "../styles";
import StackedLineChart from "../../../../Common/Chart/Line/Stacked";

interface Props {
	pfWeights: Array<{ weights: number[]; date: string }>;
	rebalancingPeriod: number;
	assets: Asset[];
}

const P4PortionChange: FC<Props> = ({ pfWeights, rebalancingPeriod, assets }) => {
	return (
		<div>
			<BlueBtn>자산 비중 변화</BlueBtn>
			<Container>
				<StackedLineChart chartData={pfWeights} period={rebalancingPeriod} label={assets} />
			</Container>
		</div>
	);
};

export default memo(P4PortionChange);
