import styled from "styled-components";

export const Nav = styled.nav`
	position: fixed;
	height: 80px;
	left: 0px;
	right: 0px;
	top: 0px;
	background: #fffefe;
	box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-between;
	width: 100%;
	z-index: 100;
	border-top: 0.2rem solid #00448d;
	@media only screen and (max-width: 700px) {
		height: 60px;
	}
`;

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 18px 0 16px 32px;
	@media only screen and (max-width: 750px) {
		padding-left: 24px;
	}
	@media only screen and (max-width: 700px) {
		padding-top: 15px;
	}
`;

export const Logo = styled.img`
	width: 2.5rem;
	height: 2.5rem;
	@media only screen and (max-width: 700px) {
		width: 30px;
		height: 30px;
	}
`;

export const Slogan = styled.span`
	font-weight: 900;
	padding-left: 1rem;
	font-size: 1.875rem;
	@media only screen and (max-width: 750px) {
		display: none;
	}
`;

export const MenuContainer = styled.div`
	display: flex;
	height: 80px;
	align-items: center;
	padding-right: 2rem;
	@media only screen and (max-width: 750px) {
		padding-right: 1.5rem;
	}
	@media only screen and (max-width: 700px) {
		height: 60px;
	}
`;

export const Menu = styled.div`
	font-size: 23px;
	color: #00448d;
	font-weight: bold;
	margin-right: 20px;
	cursor: pointer;
	@media only screen and (max-width: 700px) {
		font-size: 16px;
		margin-right: 10px;
	}
`;

export const LogInOutBtn = styled.button`
	width: 100px;
	height: 45px;
	background-color: #00448d;
	color: #ffffff;
	border-radius: 0.5rem;
	border: none;
	font-weight: 700;
	line-height: 0.1rem;
	font-size: 22px;
	cursor: pointer;
	@media only screen and (max-width: 700px) {
		height: 32px;
		font-size: 16px;
	}
`;
