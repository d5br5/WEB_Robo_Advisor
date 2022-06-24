import axios, { headerWithJWT } from "./axios";

// 포트폴리오 생성
export async function createTrading(userId: string, form: any, jwt: string) {
	return await axios.post(`users/${userId}/portfolios`, form, headerWithJWT(jwt));
}

// 포트폴리오 목록 조회
export async function getPFs(userId: string, jwt: string) {
	return await axios.get(`users/${userId}/portfolios`, headerWithJWT(jwt));
}

// 포트폴리오 단건 조회
export async function getPFResult(pfId: string, summaryIdx: number, jwt: string) {
	return await axios.get(`portfolios/${pfId}/results?summary=${summaryIdx}`, headerWithJWT(jwt));
}
