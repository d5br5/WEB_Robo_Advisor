import { FC, memo } from "react";
import TableChart from "../../../../Common/Chart/Table";
import { Simulation } from "../../../../types";
import { WhiteBox, BlueBtn, Advice } from "../../../../styles/result";
import Ranking from "../../../../Common/Chart/Table/Ranking";

const Pt2StrComparison: FC<{ simDetail: Simulation }> = ({ simDetail }) => {
	return (
		<WhiteBox>
			<BlueBtn>자산배분 전략 비교</BlueBtn>
			<Advice>
				여러 전략들의 시뮬레이션의 결과를 비교하여, <br />
				어떤 전략이 본인의 성향에 적합한지 확인해보세요.
			</Advice>
			<TableChart items={simDetail?.strategies} />
			<Advice>다른 유저들의 전략별 수익률도 확인해보세요.</Advice>
			<Ranking />
		</WhiteBox>
	);
};

export default memo(Pt2StrComparison);
