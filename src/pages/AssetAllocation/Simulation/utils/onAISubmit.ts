import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import { createSimulation, fetchSimulations } from "../../../../api/simulation";
import { AIModel } from "../../../../config/data/AS";
import { setIsSimulating, setSimulations } from "../../../../store/slice/simulation";
import { BackTestForm } from "../../../../types";

export const onAISubmit = async (
	data: {
		startDate: Date;
		endDate: Date;
		rebalancing: number;
	},
	tool: {
		dispatch: Dispatch<any>;
		navigate: NavigateFunction;
		userId: string;
		jwt: string;
		num: number;
	}
) => {
	const testForm: BackTestForm = {
		userId: tool.userId,
		startDate: AIModel[tool.num].cal.start,
		endDate: AIModel[tool.num].cal.end,
		strategies: ["ppo-growth", "snp", "kospi"],
		rebalancingPeriod: data.rebalancing,
		assets: AIModel[tool.num].assets
			.map((a) => ({ index: a.index, ticker: a.ticker }))
			.sort((a, b) => {
				const tickerA = a.ticker.toUpperCase();
				const tickerB = b.ticker.toUpperCase();
				if (tickerA < tickerB) return -1;
				if (tickerA > tickerB) return 1;
				return 0;
			}),
	};

	try {
		const createResult = await createSimulation(testForm, tool.jwt);
		if (createResult.status !== 201) throw new Error();

		const fetchResult = await fetchSimulations(tool.userId, tool.jwt);
		tool.dispatch(setSimulations(fetchResult?.data?.data?.simulations));

		if (fetchResult.status === 200) {
			tool.dispatch(setIsSimulating(false));
		} else if (fetchResult.status === 202) {
			tool.dispatch(setIsSimulating(true));
		} else {
			throw new Error();
		}
		tool.navigate("/mypage");
	} catch (e) {
		alert("에러 발생");
		return;
	}
};
