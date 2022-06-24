import styled from "styled-components";

export const PickerContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 80px;
	width: 100%;
	height: 100vh;
	align-items: center;
	@media only screen and (max-width: 1400px) {
		gap: 40px;
	}
	@media only screen and (max-width: 1000px) {
		flex-direction: column;
	}
	@media only screen and (max-width: 600px) {
		gap: 25px;
	}
`;

export const Container = styled.div`
	width: 380px;
	height: 500px;
	border-radius: 10px;
	text-align: center;
	box-shadow: 1px 1px 6px 6px;
	transition: all ease 0.5s;
	&:hover {
		box-shadow: 2px 2px 8px 8px;
		transform: translate(-3px, -3px);
		background-color: rgba(0, 0, 0, 0.05);
	}
	@media only screen and (max-width: 1400px) {
		width: 300px;
		height: 400px;
	}
	@media only screen and (max-width: 1000px) {
		display: flex;
		width: 450px;
		height: 180px;
		align-items: center;
	}
	@media only screen and (max-width: 600px) {
		width: 90%;
		height: 130px;
		margin: 0 auto;
	}
`;

export const ImgContainer = styled.div`
	height: 67%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: 1000px) {
		height: 100%;
		width: 60%;
	}
	@media only screen and (max-width: 600px) {
		width: 45%;
	}
`;

export const IMG = styled.img`
	width: 50%;
	@media only screen and (max-width: 1000px) {
		width: 70%;
	}
`;

export const Title = styled.div`
	font-size: 30px;
	font-weight: 700;
	margin-bottom: 30px;
	@media only screen and (max-width: 1400px) {
		font-size: 25px;
		margin-bottom: 20px;
	}
	@media only screen and (max-width: 600px) {
		margin-bottom: 15px;
		font-size: 22px;
	}
`;

export const Desc = styled.div`
	font-size: 18px;
	font-weight: 500;
	line-height: 30px;
	@media only screen and (max-width: 1400px) {
		font-size: 16px;
	}
	@media only screen and (max-width: 600px) {
		font-size: 14px;
	}
`;
