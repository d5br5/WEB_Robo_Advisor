import { memo, useEffect, useState } from "react";
import { BlueBtn, WhiteBox } from "../../../../styles/result";
import { useLocation } from "react-router-dom";
import { getPFResult } from "../../../../api/trading";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { AccountState } from "../../../../types/state";
import TradingRatio from "../../../../Common/Chart/Doughnut/TradingRatio";
import DailyNav from "../../../../Common/Chart/Line/DailyNav";
import TSSummary, { SumCategory } from "../../../../Common/Chart/Table/TSSummary";

type LocationState = {
	pfId: string;
};

interface Sum1Response {
	dailyNav: {
		period: string[];
		nav: number[];
	};
	perValue: {
		[key: string]: number;
	};
	ratio: {
		[key: string]: number;
	};
	totalValue: number;
}

interface Sum2Response {
	mySimulation: {
		[key in SumCategory]: number;
	};
	benchmark: {
		[key in SumCategory]: number;
	};
}

const Summary = () => {
	const location = useLocation();
	const { jwt } = useSelector<RootState, AccountState>((state) => state.account);
	const { pfId } = location.state as LocationState;
	const [loading, setLoading] = useState(true);
	const [response1, setResponse1] = useState<Sum1Response | null>(null);
	const [response2, setResponse2] = useState<Sum2Response | null>(null);

	useEffect(() => {
		(async () => {
			try {
				const result1 = await getPFResult(pfId, 1, jwt);
				setResponse1(result1?.data?.data);
				const result2 = await getPFResult(pfId, 2, jwt);
				setResponse2(result2?.data?.data);
				console.log(result2?.data?.data);
				setLoading(false);
			} catch (e) {
				alert("조회 실패. 새로고침 혹은 재로그인 후 진행 부탁드립니다.");
			}
		})();
	}, []);
	return (
		<WhiteBox>
			<BlueBtn>Summary</BlueBtn>
			{!loading && response1 && response2 ? (
				<>
					<TradingRatio
						labels={Object.keys(response1.ratio)}
						ratios={Object.values(response1.ratio)}
						values={Object.values(response1.perValue)}
						total={response1.totalValue}
					/>
					<TSSummary my={response2?.mySimulation} benchmark={response2?.benchmark} />
					<DailyNav periods={response1.dailyNav.period} navs={response1.dailyNav.nav} />
				</>
			) : null}
		</WhiteBox>
	);
};

export default memo(Summary);
