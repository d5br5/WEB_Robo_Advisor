import styled from "styled-components";

export const BannerWithTitleDesc = styled.div<{ bgImg: string }>`
	margin-top: 5rem;
	width: 100%;
	text-align: center;
	padding: 7rem 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: linear-gradient(rgba(0, 68, 141, 0.5), rgba(26, 124, 230, 0.5)),
		url(${(props) => props.bgImg});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	min-height: 16rem;
	@media only screen and (max-width: 1000px) {
		min-height: 18rem;
	}
	@media only screen and (max-width: 900px) {
		padding: 5rem 0;
		min-height: 22rem;
	}
	@media only screen and (max-width: 700px) {
		margin-top: 60px;
	}
`;

export const BannerTitle = styled.h1`
	font-size: 3rem;
	font-weight: 900;
	color: #ffffff;
	line-height: 4rem;
	margin-bottom: 2rem;
`;

export const BannerDesc = styled.p`
	color: #ffffff;
	@media only screen and (max-width: 450px) {
		letter-spacing: -1.2px;
	}
`;

export const AccentTitle = styled.span`
	color: #c0d8f2;
`;

export const BannerTitleBr = styled.br`
	display: none;
	@media only screen and (max-width: 900px) {
		display: initial;
	}
`;

export const BannerDescBr = styled.br`
	display: none;
	@media only screen and (max-width: 750px) {
		display: initial;
	}
`;
