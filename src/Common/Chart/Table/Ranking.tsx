import { memo } from "react";
import { Ranker } from "../../../types";

import { Table, RankingTH, RankingTHItem } from "./styles";
import RankerTable from "./components/RankerTable";
import { rankings } from "../../../data/ranking";

const Ranking = () => {
	return (
		<Table>
			<RankingTH>
				<RankingTHItem width={"12%"}>순위</RankingTHItem>
				<RankingTHItem width={"22%"}>유저 ID</RankingTHItem>
				<RankingTHItem width={"22%"}>전략</RankingTHItem>
				<RankingTHItem width={"22%"}>CAGR</RankingTHItem>
				<RankingTHItem width={"22%"}>정보</RankingTHItem>
			</RankingTH>
			{rankings.map((a: Ranker, i: number) => (
				<RankerTable key={i} user={a} index={i} />
			))}
		</Table>
	);
};

export default memo(Ranking);
