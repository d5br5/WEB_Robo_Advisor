import dayjs from "dayjs";
import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import { createSimulation, fetchSimulations } from "../../../../api/simulation";
import { strList } from "../../../../config/data/AS";
import { allReset } from "../../../../store/slice/backSelection";
import { setIsSimulating, setSimulations } from "../../../../store/slice/simulation";
import { AssetIndexTicker, BackTestForm, Str } from "../../../../types";
import { BackSelectionState } from "../../../../types/state";

export const onBackSubmit = async (
	data: {
		startDate: Date;
		endDate: Date;
		rebalancing: number;
	},
	tool: {
		selection: BackSelectionState;
		userId: string;
		jwt: string;
		dispatch: Dispatch<any>;
		navigate: NavigateFunction;
	}
) => {
	//step1 자산군 2개 이상 선택 필수
	if (
		tool.selection.investList.length === 0 ||
		tool.selection.investList[0].nameticker === "" ||
		tool.selection.investList[1].nameticker === ""
	) {
		alert("자산군을 2개 이상 선택해주세요.");
		window.scrollTo(0, 0);
		return;
	}

	//step2 자산배분 전략 선택 필수
	if (tool.selection.strChecked.filter((a) => a === true).length <= 0) {
		alert("자산배분 전략을 선택해주세요.");
		window.scrollTo(0, 450);
		return;
	}

	//testform 생성
	const assets: AssetIndexTicker[] = tool.selection.investList
		.map((item) => ({
			ticker: item.ticker,
			index: item.index,
		}))
		.sort((a, b) => {
			const tickerA = a.ticker.toUpperCase();
			const tickerB = b.ticker.toUpperCase();
			if (tickerA < tickerB) return -1;
			if (tickerA > tickerB) return 1;
			return 0;
		});

	const strategies: Str[] = strList
		.filter((a, i) => tool.selection.strChecked[i])
		.map((a) => a.value);

	const backTestForm: BackTestForm = {
		userId: tool.userId,
		assets,
		rebalancingPeriod: data.rebalancing,
		startDate: dayjs(data.startDate).format("YYYY-MM-DD"),
		endDate: dayjs(data.endDate).format("YYYY-MM-DD"),
		strategies: [...strategies, "snp", "kospi"],
	};

	try {
		const createResult = await createSimulation(backTestForm, tool.jwt);
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
		tool.dispatch(allReset());
	}
	tool.dispatch(allReset());
};
