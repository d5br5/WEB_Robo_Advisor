import { FC, memo } from "react";
import LineChart from "../../../../Common/Chart/Line";
import { StrategyResult } from "../../../../types";
import { WhiteBox, BlueBtn, Advice } from "../../../../styles/result";

const Pt4SimProcessResult: FC<{ strategies: StrategyResult[] }> = ({ strategies }) => {
	return (
		<WhiteBox>
			<BlueBtn>시뮬레이션 진행 과정 및 결과</BlueBtn>
			<Advice>전략별로 산출된 총 수익률 그래프를 확인해보세요.</Advice>
			<LineChart strategies={strategies} />
		</WhiteBox>
	);
};

export default memo(Pt4SimProcessResult);
