import styled from "styled-components";

export const ModalBackground = styled.div`
	position: fixed;
	background-color: rgba(0, 0, 0, 0.4);
	width: 100%;
	height: 100%;
	z-index: 1000;
	top: 0;
`;

export const ModalBlueBox = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1075;
	width: 800px;
	min-height: 720px;
	height: 100%;
	background-color: #c0d8f2;
	padding: 2rem;
	box-sizing: border-box;
	@media only screen and (max-width: 800px) {
		width: 100%;
		height: 100%;
	}
	@media only screen and (max-width: 500px) {
		padding: 1.7rem;
	}
`;

export const ModalWhiteBox = styled.div`
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	border-radius: 16px;
	width: 100%;
	height: 100%;
	padding-top: 45px;
	padding-bottom: 48px;
	@media only screen and (max-width: 800px) {
		padding-bottom: 24px;
	}
`;

export const CloseBtn = styled.img`
	position: absolute;
	top: 50px;
	right: 50px;
	width: 20px;
	cursor: pointer;
`;

export const ExampleTitle = styled.h3`
	background-color: var(--color-blue);
	color: #ffffff;
	min-width: 20rem;
	width: fit-content;
	text-align: center;
	border-radius: 24px;
	height: 3rem;
	font-size: 1.5rem;
	font-weight: bold;
	line-height: 3rem;
	margin: 0 auto 48px;
	box-shadow: 1px 4px 4px 2px rgba(0, 0, 0, 0.2);
	@media only screen and (max-width: 800px) {
		margin-bottom: 32px;
	}
	@media only screen and (max-width: 600px) {
		margin-bottom: 24px;
	}
`;

export const SemiContainer = styled.div`
	display: flex;
	width: 83%;
	margin: 0 auto;
	align-items: center;
	justify-content: space-between;

	@media only screen and (max-width: 600px) {
		width: 93%;
	}
`;

export const SemiTitle = styled.div`
	font-weight: 700;
	font-size: 1.25rem;
	width: 5rem;
	@media only screen and (max-width: 500px) {
		display: none;
	}
`;

export const ContainerWithButton = styled.div`
	width: 100%;
	display: flex;
	padding: 1rem;
	padding-right: 1.5rem;
	gap: 1rem;
	border-bottom: 1px solid #848484;
	align-items: center;
	@media only screen and (max-width: 600px) {
		padding: 0.5rem;
	}
`;

export const Select = styled.select`
	width: 100%;
	border-color: transparent;
	border-bottom-color: black;
	appearance: none;
	height: 32px;
	font-size: 1rem;
	font-weight: 400;
	border: none;
	padding-left: 10px;
	&:focus {
		outline: 1px solid #c4c4c4;
	}
	@media only screen and (max-width: 800px) {
		font-size: 1.3rem;
	}
`;

export const Options = styled.option`
	height: 1.9rem;
`;

export const SearchInput = styled.input`
	width: 100%;
	font-size: 1rem;
	font-weight: 400;
	line-height: 32px;
	box-sizing: border-box;
	border: none;
	padding-left: 10px;
	&:focus {
		outline: 1px solid #c4c4c4;
	}
	@media only screen and (max-width: 800px) {
		font-size: 1.3rem;
	}
`;

export const SearchWarning = styled.div`
	width: 100%;
	text-align: center;
	font-size: 15px;
	font-weight: 400;
	position: relative;
	top: 50%;
	transform: translate(0, -50%);
`;
export const SearchedListContainer = styled.div`
	width: 640px;
	height: 288px;
	flex: 1;
	border: 5px solid #5552b9;
	box-sizing: border-box;
	border-radius: 16px;
	overflow: auto;
	margin: 0 auto;

	@media only screen and (max-width: 800px) {
		width: 90%;
	}

	@media only screen and (max-width: 500px) {
		width: 95%;
	}

	&::-webkit-scrollbar {
		width: 0.5rem;
	}

	&::-webkit-scrollbar-thumb {
		background-color: rgba(138, 138, 138, 0.56);
		border-radius: 0.25rem;
	}

	&::-webkit-scrollbar-track {
		background-color: none;
	}
`;

export const SearchedList = styled.li`
	font-size: 1rem;
	font-weight: 400;
	margin: 2rem auto 2rem 2rem;
	cursor: pointer;
	&:hover {
		font-weight: 700;
	}
	@media only screen and (max-width: 800px) {
		width: 90%;
	}
	@media only screen and (max-width: 600px) {
		margin-left: 1rem;
		font-size: 1.3rem;
	}
`;

export const SearchButton = styled.div`
	width: 1.25rem;
	color: #00558d;
	text-align: center;
`;

export const DecideBtn = styled.div`
	margin: 32px auto 0;
	height: 48px;
	width: 224px;
	font-size: 20px;
	font-weight: 700;
	background-color: #dbdbdb;
	border-radius: 24px;
	text-align: center;
	line-height: 45px;
	cursor: pointer;
	@media only screen and (max-width: 800px) {
		font-size: 16px;
		height: 32px;
		line-height: 30px;
	}
`;

export const SAIContainer = styled.div`
	width: 640px;
	margin: 32px auto;
	display: flex;
	flex-wrap: wrap;
	min-height: 40px;
	gap: 18px;
	justify-content: flex-start;
	@media only screen and (max-width: 800px) {
		width: 90%;
		gap: 12px;
	}
	@media only screen and (max-width: 500px) {
		gap: 8px;
		min-height: 30px;
		margin: 16px auto;
	}
	@media only screen and (max-width: 400px) {
		gap: 4px;
	}
`;

export const SelectedAssetItem = styled.div`
	background-color: rgba(0, 68, 141, 0.08);
	border: 1px black solid;
	border-radius: 24px;
	height: 40px;
	padding: 5px;
	width: 200px;
	padding-left: 15px;
	justify-content: space-between;
	font-size: 15px;
	line-height: 27px;
	display: flex;
	align-items: center;
	transition: all ease 0.1s;
	cursor: pointer;
	&:hover {
		color: #860020;
		border-color: #860020;
	}
	@media only screen and (max-width: 800px) {
		width: 180px;
		font-size: 14px;
		height: 34px;
		padding-left: 13px;
	}
	@media only screen and (max-width: 500px) {
		width: 170px;
		font-size: 13px;
		height: 32px;
	}
	@media only screen and (max-width: 400px) {
		width: 150px;
		font-size: 11px;
	}
`;

export const AssetItemDeleteBtn = styled.div`
	position: relative;
	border: 2px #860020 solid;
	width: 18px;
	height: 18px;
	border-radius: 9px;
	margin-left: 7px;
	margin-right: 7px;
	cursor: pointer;
`;
