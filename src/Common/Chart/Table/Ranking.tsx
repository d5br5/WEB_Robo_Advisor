import { useSelector } from "react-redux";
import { useState, useEffect, memo } from "react";
import { Ranker } from "../../../types";
import { RootState } from "../../../store";
import { AccountState } from "../../../types/state";
import { getDashboard } from "../../../api/simulation";
import { Table, RankingTH, RankingTHItem } from "./styles";
import RankerTable from "./components/RankerTable";

const Ranking = () => {
	const { jwt } = useSelector<RootState, AccountState>((state) => state.account);

	const [rankers, setRankers] = useState<Ranker[]>([]);
	const [loading, setLoading] = useState(true);

	const getData = async (jwt: string) => {
		try {
			const {
				data: { data },
			} = await getDashboard(jwt);
			setRankers(data);
			setLoading(false);
		} catch (e) {
			console.log("서버와의 연결이 원활하지 않습니다.");
		}
	};

	useEffect(() => {
		getData(jwt);
	}, []);

	return !loading && rankers.length > 0 ? (
		<Table>
			<RankingTH>
				<RankingTHItem width={"12%"}>순위</RankingTHItem>
				<RankingTHItem width={"22%"}>유저 ID</RankingTHItem>
				<RankingTHItem width={"22%"}>전략</RankingTHItem>
				<RankingTHItem width={"22%"}>CAGR</RankingTHItem>
				<RankingTHItem width={"22%"}>정보</RankingTHItem>
			</RankingTH>
			{rankers.map((a: Ranker, i: number) => (
				<RankerTable key={i} user={a} />
			))}
		</Table>
	) : null;
};

export default memo(Ranking);
