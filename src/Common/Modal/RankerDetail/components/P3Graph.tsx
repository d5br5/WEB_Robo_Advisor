import { BlueBtn, Container } from "../styles";
import LineChart from "../../../Chart/Line";
import { StrategyResult } from "../../../../types";
import { FC, memo } from "react";
interface Props {
	str: StrategyResult;
}

const P3Graph: FC<Props> = ({ str }) => {
	return (
		<div>
			<BlueBtn>수익률 그래프</BlueBtn>
			<Container>
				<LineChart strategies={[str]} />
			</Container>
		</div>
	);
};

export default memo(P3Graph);
