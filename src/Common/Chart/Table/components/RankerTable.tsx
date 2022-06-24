import { FC, lazy, memo, Suspense } from "react";
import { Ranker } from "../../../../types";
import { RankingTBItem, RankingTB } from "../styles";
const RankerDetail = lazy(() => import("../../../Modal/RankerDetail"));

interface Props {
	user: Ranker;
	index: number;
}

const RankerTable: FC<Props> = ({ user, index }) => {
	return (
		<RankingTB>
			<RankingTBItem width={"12%"}>{user.ranking}</RankingTBItem>
			<RankingTBItem width={"22%"}>
				... {user.userId.slice(user.userId.length - 6)}
			</RankingTBItem>
			<RankingTBItem width={"22%"}>{user.strategyName}</RankingTBItem>
			<RankingTBItem width={"22%"}>{user.cagr.toFixed(1)}%</RankingTBItem>
			<RankingTBItem width={"22%"} style={{ cursor: "pointer" }}>
				<Suspense fallback={<div>loading..</div>}>
					<RankerDetail index={index} />
				</Suspense>
			</RankingTBItem>
		</RankingTB>
	);
};

export default memo(RankerTable);
