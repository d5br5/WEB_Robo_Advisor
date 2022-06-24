import axios, { headerWithJWT } from "./axios";

// 자산군 조회
export async function fetchAssetClass(jwt: string) {
	return await axios.get("assets", headerWithJWT(jwt));
}
