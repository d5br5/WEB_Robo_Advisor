import styled from "styled-components";

// common
export const StepContainer = styled.div<{ pt?: string; width?: string }>`
	width: ${(props) => (props.width ? props.width : "100%")};
	padding-top: ${(props) => props.pt};
	font-size: 16px;
	min-height: 220px;
	margin-bottom: 70px;
	align-items: flex-start;
	@media only screen and (max-width: 900px) {
		width: 100%;
		min-height: 0;
	}
	@media only screen and (max-width: 600px) {
		margin-bottom: 30px;
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	align-items: flex-end;
	margin-bottom: 45px;
	@media only screen and (max-width: 1000px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 15px;
	}
`;

export const StepNum = styled.h3`
	font-size: 21px;
	font-weight: 700;
	margin-right: 15px;
	@media only screen and (max-width: 600px) {
		font-size: 18px;
	}
`;

export const StepTitle = styled.h2`
	font-size: 35px;
	font-weight: 700;
	color: #00448d;
	@media only screen and (max-width: 600px) {
		font-size: 30px;
	}
	@media only screen and (max-width: 500px) {
		font-size: 25px;
	}
`;

export const TitleModalWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const ImgModalBtn = styled.div`
	border: 2px solid #a6062d;
	color: #a6062d;
	background-color: rgba(0, 0, 0, 0.04);
	border-radius: 18px;
	width: 35px;
	height: 35px;
	line-height: 27px;
	text-align: center;
	font-size: 17px;
	font-weight: 700;
	cursor: pointer;
	margin-left: 20px;
	margin-top: 2px;

	@media only screen and (max-width: 700px) {
		height: 30px;
		width: 30px;
		line-height: 24px;
	}

	@media only screen and (max-width: 500px) {
		font-size: 15px;
		line-height: 20px;
		height: 25px;
		width: 25px;
		margin-left: 15px;
	}
`;

export const StepBody = styled.div`
	width: 100%;
	display: flex;
	gap: 30px;
	flex-direction: column;
	justify-content: space-between;
`;

export const Form = styled.form`
	margin: 150px auto 0;
	@media only screen and (max-width: 900px) {
		width: 80%;
	}
	@media only screen and (max-width: 700px) {
		margin-top: 100px;
	}
	@media only screen and (max-width: 500px) {
		width: 90%;
		margin-top: 80px;
	}
`;

export const FullContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 50px;
	@media only screen and (max-width: 900px) {
		flex-direction: column;
		width: 100%;
		gap: 0;
	}
`;

export const HalfContainer = styled.div`
	width: 45%;
	display: flex;
	flex-direction: column;
	@media only screen and (max-width: 900px) {
		width: 100%;
	}
`;

export const AICalendarItem = styled.div`
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 3px;
	padding: 15px 15px;
`;

// step1

export const AssetContainer = styled.div`
	width: 100%;
	max-width: 700px;
`;

export const InputBtnContainer = styled.div<{ mb?: string }>`
	display: flex;
	border-bottom: 1px solid rgba(0, 0, 0, 0.3);
	align-items: center;
	justify-content: space-between;
	position: relative;
	width: 100%;
	max-width: 704px;

	@media only screen and (max-width: 1100px) {
		max-width: 1100px;
	}
	@media only screen and (max-width: 1000px) {
		margin-bottom: ${(props) => (props.mb ? props.mb : 0)};
	}
`;

export const SetSelect = styled.select`
	width: 100%;
	height: 50px;
	font-size: 15px;
	padding-left: 10px;
	border-radius: 4px;
	margin-bottom: 20px;
`;

export const SetOption = styled.option`
	font-size: 16px;
`;

export const AssetText = styled.div<{ disabled?: boolean }>`
	height: 30px;
	margin: 14px 16px;
	border: none;
	font-size: 16px;
	width: 100%;
	line-height: 28px;
	cursor: pointer;
	overflow: hidden;
	background-color: ${(props) => (props.disabled ? "rgba(0,0,0,0.1)" : "white")};
	@media only screen and (max-width: 600px) {
		font-size: 14px;
	}
`;

export const InputTitle = styled.div`
	color: #00558d;
	font-weight: 700;
	font-size: 16px;
	width: 64px;
	text-align: left;
	margin-left: 20px;
	@media only screen and (max-width: 600px) {
		font-size: 14px;
	}
`;

export const AddBtn = styled.div`
	cursor: pointer;
	color: #00448d;
	font-weight: 400;
	font-size: 16px;
	margin-top: 16px;
	margin-left: 20px;
`;

// step 2

export const StrContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	gap: 10px;
	justify-content: space-between;
`;

export const StrItem = styled.div<{ checked?: boolean }>`
	width: 31%;
	height: 56px;
	line-height: 50px;
	color: ${(props) => (props.checked ? "#00448d" : "black")};
	border: 1px ${(props) => (props.checked ? "#00448d" : "rgba(0,0,0,0.3)")} solid;
	background-color: ${(props) => (props.checked ? "rgba(0, 66, 164, 0.21)" : "white")};
	border-radius: 5px;
	transition: 0.2s all ease;
	text-align: center;
	margin-bottom: 20px;
	font-size: 15px;
	cursor: pointer;
	@media only screen and (max-width: 600px) {
		width: 48%;
	}
	@media only screen and (max-width: 500px) {
		font-size: 14px;
	}
`;
