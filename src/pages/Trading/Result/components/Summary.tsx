import { memo } from "react";
import { BlueBtn, WhiteBox } from "../../../../styles/result";
import { useLocation } from "react-router-dom";

import TradingRatio from "../../../../Common/Chart/Doughnut/TradingRatio";
import DailyNav from "../../../../Common/Chart/Line/DailyNav";

import { sum1 as a1 } from "../../../../data/portfolio/1";
import { sum1 as a2 } from "../../../../data/portfolio/2";
import { sum1 as a3 } from "../../../../data/portfolio/3";
import { sum1 as a4 } from "../../../../data/portfolio/4";
import { sum1 as a5 } from "../../../../data/portfolio/5";

import { sum2 as b1 } from "../../../../data/portfolio/1";
import { sum2 as b2 } from "../../../../data/portfolio/2";
import { sum2 as b3 } from "../../../../data/portfolio/3";
import { sum2 as b4 } from "../../../../data/portfolio/4";
import { sum2 as b5 } from "../../../../data/portfolio/5";

import TSSummary from "../../../../Common/Chart/Table/TSSummary";

type LocationState = {
	idx: number;
};

const Summary = () => {
	const location = useLocation();

	const { idx } = location.state as LocationState;

	const now1 = () => {
		if (idx === 0) return a1;
		if (idx === 1) return a2;
		if (idx === 2) return a3;
		if (idx === 3) return a4;
		return a5;
	};

	const now2 = () => {
		if (idx === 0) return b1;
		if (idx === 1) return b2;
		if (idx === 2) return b3;
		if (idx === 3) return b4;
		return b5;
	};

	const response1 = now1();
	const response2 = now2();

	return (
		<WhiteBox>
			<BlueBtn>Summary</BlueBtn>

			<TradingRatio
				labels={Object.keys(response1?.ratio)}
				ratios={Object.values(response1?.ratio)}
				values={Object.values(response1?.perValue)}
				total={response1.totalValue}
			/>
			<TSSummary
				my={response2?.mySimulation}
				benchmark={response2?.benchmark}
			/>
			<DailyNav
				periods={response1.dailyNav.period}
				navs={response1.dailyNav.nav}
			/>
		</WhiteBox>
	);
};

export default memo(Summary);
