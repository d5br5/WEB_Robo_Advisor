import { Dispatch } from "react";
import { fetchSimulations } from "../api/simulation";
import { fetchAssetClass } from "../api/assetClass";
import { fetchAssets } from "../store/slice/assetClass";
import { AssetCore, SimulationCore } from "../types";
import { setSimulations, setIsSimulating } from "../store/slice/simulation";

export async function initSimuls(
	dispatch: Dispatch<any>,
	userId: string,
	jwt: string,
	timerId: number
) {
	const result = await fetchSimulations(userId, jwt);
	const converted = result?.data?.data?.simulations
		.map((a: SimulationCore) => ({
			...a,
			createdDatetime: getKoreanTime(a.createdDatetime),
		}))
		.reverse();

	dispatch(setSimulations(converted));
	if (result.status === 200) {
		// all simulations are done
		dispatch(setIsSimulating(false));
		if (timerId !== -1) window.clearInterval(timerId);
	} else if (result.status === 202) {
		// one simul is simulating
		dispatch(setIsSimulating(true));
	} else {
		throw new Error();
	}
}

export async function initAssetClass(dispatch: Dispatch<any>, jwt: string) {
	try {
		const data = await fetchAssetClass(jwt);
		if (data !== null) dispatch(fetchAssets(data.data.data));
	} catch (e) {
		console.log("자산 조회는 로그인 후 지원됩니다.");
	}
}

export function getKoreanTime(time: string) {
	const date = new Date(time);
	date.setHours(date.getHours());
	let yyyy = date.getFullYear();
	let MM = date.getMonth() + 1;
	if (MM > 12) {
		yyyy++;
		MM -= 12;
	}
	const DD = date.getDate();
	const hh = date.getHours();
	const mm = date.getMinutes();

	return `${yyyy}-${wZero(MM)}-${wZero(DD)} ${wZero(hh)}:${wZero(mm)}`;
}

function wZero(time: number): string {
	return time < 10 ? "0" + time : time + "";
}

// 표시 자산명 생성.--외 -건
export function shortenAssetName(assets: AssetCore[]) {
	const length = assets[0].name.length;
	if (length < 30) return `${assets[0].name} 외 ${assets.length - 1}건`;
	return `${assets[0].name.substring(0, 28)}... 외 ${assets.length - 1}건`;
}
