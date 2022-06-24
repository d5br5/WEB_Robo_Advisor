// API 설정
import axios from "axios";
import { API_BASE_URL } from "../config";

export function headerWithJWT(jwt: string) {
	return {
		headers: {
			Authorization: `Bearer ${jwt}`,
		},
	};
}

const instance = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: false,
});

instance.interceptors.request.use(
	(config) => config,
	(error) => Promise.reject(error)
);

instance.interceptors.response.use(
	(config) => config,
	(error) => {
		// TODO : status 에 따른 후속 action 추가
		// console.log(error.response);
		// const { status } = error.response;
		// let msg = "";

		// if (status === 404) {
		// 	msg = "올바르지 않은 서버 주소입니다.";
		// }

		// if (status === 400) {
		// 	msg = error.response?.data.data?.errors[0].message;
		// 	msg += "\n다시 시도해주세요";
		// }

		// if (status === 500) {
		// 	msg = "서버 측에서 문제가 발생했습니다. 죄송합니다.";
		// }

		// if (status === 403) {
		// 	msg = "금지된 접근입니다.";
		// }

		// console.log(error.response?.data.data.errors);
		// alert(msg);
		return Promise.reject(error);
	}
);

export default instance;
