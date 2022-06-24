import styled from "styled-components";

export const BodyContainer = styled.div<{ width?: string }>`
	max-width: ${(props) => (props.width ? props.width : "1280px")};
	margin: 5rem auto 40px;
	@media only screen and (max-width: 1300px) {
		width: 95%;
	}
	@media only screen and (max-width: 800px) {
		width: 100%;
	}
	@media only screen and (max-width: 700px) {
		margin-top: 40px;
	}
`;

export const ModalOpenBtn = styled.div`
	height: 112px;
	background-color: #ffffff;
	border: 5px solid var(--color-purple);
	box-sizing: border-box;
	box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
	cursor: pointer;
`;

export const StartContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const StartBtn = styled.input`
	height: 60px;
	background-color: #2ac0c8;
	border: 0.2rem solid #000000;
	box-sizing: border-box;
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	width: 200px;
	text-align: center;
	font-weight: bold;
	font-size: 1.2rem;
	line-height: 50px;
	text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;
	cursor: pointer;
	margin: auto;
	&:hover {
		background-color: #139fa7;
	}
	transition: all ease 0.2s;
`;

export const Accent = styled.span`
	font-weight: 700;
`;

export const AccentRed = styled(Accent)`
	color: var(--color-red);
`;

export const AccentBlue = styled(Accent)`
	color: var(--color-blue);
`;

export const None1100 = styled.span`
	@media only screen and (max-width: 1100px) {
		display: none;
	}
`;

export const None900 = styled.span`
	@media only screen and (max-width: 900px) {
		display: none;
	}
`;

export const None450 = styled.span`
	@media only screen and (max-width: 450px) {
		display: none;
	}
`;

export const None600BR = styled.br`
	@media only screen and (max-width: 600px) {
		display: none;
	}
`;

export const XMark = styled.div`
	width: 18px;
	height: 18px;

	&:before,
	&:after {
		position: absolute;
		left: 6px;
		top: 2px;
		content: " ";
		height: 10px;
		width: 2px;
		border-radius: 2px;
		background-color: #860020;
	}

	&:before {
		transform: rotate(45deg);
	}

	&:after {
		transform: rotate(-45deg);
	}
`;
