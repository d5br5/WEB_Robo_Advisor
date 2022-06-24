import { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/slice/account";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_URL } from "../../config";
import { initSimuls, initAssetClass } from "../../utils/AS";
import { RootState } from "../../store";
import logo from "../../assets/Tmax_logo.svg";
import * as S from "./styles";

const Header = () => {
	const {
		account: { isAuthenticated, jwt, userId },
		assetClass: { timerId },
	} = useSelector<RootState, RootState>((state) => state);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onLogout = () => {
		dispatch(logout());
		navigate("/");
	};

	useEffect(() => {
		if (isAuthenticated) initSimuls(dispatch, userId, jwt, timerId);
	}, [isAuthenticated]);

	useEffect(() => {
		initAssetClass(dispatch, jwt);
	}, []);

	return (
		<S.Nav>
			<Link to="/">
				<S.LogoContainer>
					<S.Logo src={logo} alt="Tmax Logo" />
					<S.Slogan>WA:IN</S.Slogan>
				</S.LogoContainer>
			</Link>
			<S.MenuContainer>
				{isAuthenticated && (
					<>
						<Link to="/asset">
							<S.Menu>자산배분</S.Menu>
						</Link>
						<Link to="/trading">
							<S.Menu>트레이딩</S.Menu>
						</Link>
						<Link to="/mypage">
							<S.Menu>히스토리</S.Menu>
						</Link>
					</>
				)}
				{isAuthenticated ? (
					<S.LogInOutBtn onClick={onLogout}>Logout</S.LogInOutBtn>
				) : (
					<a href={LOGIN_URL}>
						<S.LogInOutBtn>Log In</S.LogInOutBtn>
					</a>
				)}
			</S.MenuContainer>
		</S.Nav>
	);
};

export default memo(Header);
