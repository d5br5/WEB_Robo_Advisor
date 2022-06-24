import styled from "styled-components";

export const ResultContainer = styled.div`
	margin: 12rem auto 6rem;
	width: 1280px;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	@media only screen and (max-width: 1300px) {
		width: 100%;
	}
	@media only screen and (max-width: 800px) {
		text-align: center;
		margin-top: 10rem;
		margin-bottom: 0rem;
	}
`;

export const Subtitle = styled.div`
	font-size: 24px;
	font-weight: 700;
	margin-bottom: 2rem;
	text-decoration: underline 10px #c0d8f2;
	@media only screen and (max-width: 700px) {
		font-size: 20px;
	}
`;

export const Title = styled.h2`
	font-size: 40px;
	font-weight: 700;
	color: #00448d;
	margin-bottom: 3rem;
	@media only screen and (max-width: 800px) {
		margin-bottom: 2rem;
	}
	@media only screen and (max-width: 700px) {
		font-size: 30px;
	}
`;

//part 1
export const Part1Container = styled.div<{ isPie?: boolean }>`
	max-width: 920px;
	width: 100%;
	margin: 50px auto;
	position: relative;
	top: 20px;
	display: flex;
	justify-content: center;

	gap: ${(props) => (props.isPie ? "32px" : "0")};
	height: 384px;
	align-items: center;
	@media only screen and (max-width: 900px) {
		gap: 20px;
		flex-direction: column;
		height: initial;
		margin: 0 auto;
		top: initial;
	}
`;

export const Part1DescContainer = styled.div`
	width: 100%;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	gap: 39px;
`;

export const DescItem = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	font-size: 20px;
	gap: 32px;
	@media only screen and (max-width: 600px) {
		font-size: 17px;
	}
`;
export const DescTitle = styled.div`
	width: 170px;
	color: #00448d;
	text-align: right;
	font-weight: 700;
`;
export const DescInfo = styled.div`
	width: 280px;
	font-weight: 400;
	text-align: left;
`;

export const PieContainer = styled.div<{ isPie?: boolean; width?: string }>`
	min-width: ${(props) => (props.isPie ? props.width : "410px")};
	height: ${(props) => (props.isPie ? props.width : "350px")};
	padding: 1.9rem;
	box-sizing: border-box;
	box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.1);
	display: flex;
	gap: 10px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin-right: 1rem;
	@media only screen and (max-width: 900px) {
		box-shadow: none;
		margin: 0;
	}
	@media only screen and (max-width: 450px) {
		min-width: ${(props) => (props.isPie ? props.width : "300px")};
	}
`;

export const ListItem = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	font-size: 16px;
	@media only screen and (max-width: 500px) {
		font-size: 14px;
	}
`;

export const ListColorBox = styled.div<{ bgColor?: string }>`
	width: 20px;
	height: 20px;
	border: 2px black solid;
	background-color: ${(props) => props.bgColor};
	margin-right: 4px;
`;

// part2

export const WhiteBox = styled.div`
	background-color: #ffffff;
	width: 100%;
	border: 3px solid rgba(150, 170, 221, 0.49);
	border-radius: 20px;
	padding-top: 48px;
	padding-bottom: 57px;
	display: flex;
	flex-direction: column;
	gap: 32px;
	align-items: center;
`;
export const BlueBtn = styled.div`
	background-color: #00448d;
	color: #ffffff;
	width: 80%;
	max-width: 480px;
	text-align: center;
	border-radius: 24px;
	height: 48px;
	font-size: 24px;
	line-height: 46px;
	font-weight: bold;
	margin: 0 auto;
	box-shadow: 1px 4px 4px 2px rgba(0, 0, 0, 0.2);
	@media only screen and (max-width: 700px) {
		font-size: 20px;
		height: 40px;
		line-height: 38px;
	}
	@media only screen and (max-width: 500px) {
		font-size: 17px;
		height: 36px;
		line-height: 35px;
	}
`;

export const Advice = styled.div`
	font-size: 20px;
	font-weight: 400;
	text-align: center;
	line-height: 32px;
	@media only screen and (max-width: 700px) {
		font-size: 18px;
	}
	@media only screen and (max-width: 500px) {
		font-size: 15px;
	}
`;

export const ChartBox = styled.div`
	width: 1088px;
	border: 5px solid #ebf3fb;
	padding-top: 32px;
	@media only screen and (max-width: 1300px) {
		width: 95%;
	}
`;

export const ToggleBtnContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 64px;
	@media only screen and (max-width: 1200px) {
		gap: 42px;
	}
	@media only screen and (max-width: 1000px) {
		gap: 0px;
	}
	@media only screen and (max-width: 700px) {
		gap: 10px;
		flex-wrap: wrap;
	}
`;

export const ToggleBtn = styled.button`
	width: 120px;
	text-align: center;
	border: none;
	font-size: 20px;
	font-weight: 700;
	cursor: pointer;
	background-color: white;
	color: ${(props) => (props.disabled ? "#00448D" : "#C4c4c4")};
	@media only screen and (max-width: 700px) {
		width: initial;
		font-size: 17px;
	}
`;

export const ChartContainer = styled.div`
	width: 80%;
	margin: 88px auto 62px;
	@media only screen and (max-width: 1000px) {
		margin-top: 40px;
		margin-bottom: 20px;
	}
	@media only screen and (max-width: 700px) {
		margin-top: 20px;
		margin-bottom: 0px;
	}
`;

export const BR600 = styled.br`
	display: none;
	@media only screen and (max-width: 600px) {
		display: initial;
	}
`;
