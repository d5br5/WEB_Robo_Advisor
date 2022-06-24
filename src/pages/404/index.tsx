import { Navigate } from "react-router-dom";

const NoPage = () => {
	alert("존재하지 않는 페이지입니다. \n메인페이지로 이동합니다.");
	return <Navigate to="/" />;
};

export default NoPage;
