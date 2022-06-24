import { BodyContainer } from "../../styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/slice/account";

const LoginProcess = () => {
	const params = useLocation();
	const token = params?.search.split("?token=")[1];
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (token !== "") {
			dispatch(login(token));
		} else {
			alert("로그인에 실패하였습니다. 다시 시도해주세요.");
		}
		navigate("/");
	}, []);

	return <BodyContainer>LoginProcess</BodyContainer>;
};

export default LoginProcess;
