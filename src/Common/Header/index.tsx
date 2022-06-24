import { memo } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Tmax_logo.svg";
import * as S from "./styles";

const Header = () => {
	return (
		<S.Nav>
			<Link to="/">
				<S.LogoContainer>
					<S.Logo src={logo} alt="Tmax Logo" />
					<S.Slogan>WA:IN</S.Slogan>
				</S.LogoContainer>
			</Link>
			<S.MenuContainer>
				<Link to="/asset">
					<S.Menu>자산배분</S.Menu>
				</Link>
				<Link to="/trading">
					<S.Menu>트레이딩</S.Menu>
				</Link>
				<Link to="/mypage">
					<S.Menu>히스토리</S.Menu>
				</Link>
			</S.MenuContainer>
		</S.Nav>
	);
};

export default memo(Header);
