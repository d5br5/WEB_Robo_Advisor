import axios from "./axios";
import { BackTestForm } from "../types";
import { headerWithJWT } from "./axios";

// 목록 조회
export async function fetchSimulations(userId: string, jwt: string) {
	return await axios.get(`users/${userId}/simulations`, headerWithJWT(jwt));
}

// 단건 조회
export async function getSimulationById(userId: string, simulationId: string, jwt: string) {
	return await axios.get(`users/${userId}/simulations/${simulationId}`, headerWithJWT(jwt));
}

// 시뮬레이션 생성
export async function createSimulation(backTestForm: BackTestForm, jwt: string) {
	return await axios.post(
		`users/${backTestForm.userId}/simulations`,
		backTestForm,
		headerWithJWT(jwt)
	);
}

// 시뮬레이션 삭제
export async function deleteSimulationById(userId: string, simulationId: string, jwt: string) {
	return await axios.delete(`users/${userId}/simulations/${simulationId}`, headerWithJWT(jwt));
}

// 대시보드 리스트 조회
export async function getDashboard(jwt: string) {
	return await axios.get("dashboards", headerWithJWT(jwt));
}

// 대시보드 각 항목 디테일 조회
export async function getDashboardDetail(simId: string, strName: string, jwt: string) {
	return await axios.get(`dashboards/${simId}/strategies/${strName}`, headerWithJWT(jwt));
}
