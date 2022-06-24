import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactNode } from "react";
import { RootState } from "../store";
import { AccountState } from "../types/state";

interface Props {
	children: ReactNode;
}

const PrivateRoute = ({ children }: Props) => {
	const { userId, jwt, isAuthenticated } = useSelector<RootState, AccountState>(
		(state) => state.account
	);

	const checkLoggedIn = () => {
		if (userId === "" || jwt === "" || !isAuthenticated) {
			alert("로그인이 필요합니다.");
			return false;
		}
		return true;
	};

	return checkLoggedIn() ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
