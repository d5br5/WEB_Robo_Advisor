import styled from "styled-components";

export const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	z-index: 9999;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalBorder = styled.div`
	background-color: #c0d8f2;
	padding: 2rem;
	@media only screen and (max-width: 550px) {
		width: 100%;
	}
`;

export const Modal = styled.div`
	background-color: white;
	border-radius: 1rem;
	width: 60rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding: 2.75rem;
	box-sizing: border-box;
	@media only screen and (max-width: 1100px) {
		flex-direction: column;
		gap: 3rem;
		width: 35rem;
	}
	@media only screen and (max-width: 550px) {
		width: 100%;
	}
`;

export const CloseBtn = styled.img`
	position: absolute;
	top: 18px;
	right: 18px;
	width: 20px;
	cursor: pointer;
`;

export const DescContainer = styled.div`
	width: 25rem;
	display: flex;
	flex-direction: column;
	gap: 39px;
	@media only screen and (max-width: 550px) {
		width: 30rem;
	}
`;

export const DescItem = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	font-size: 1.25rem;
	@media only screen and (max-width: 550px) {
		font-size: 1.5rem;
	}
`;
export const DescTitle = styled.div`
	width: 9rem;
	color: #00448d;
	text-align: right;
	font-weight: 700;
	@media only screen and (max-width: 550px) {
		width: 10rem;
	}
`;
export const DescInfo = styled.div`
	width: 14rem;
	font-weight: 400;
	@media only screen and (max-width: 550px) {
		width: 17rem;
	}
`;
