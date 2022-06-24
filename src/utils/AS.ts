import { AssetCore } from "../types";

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
