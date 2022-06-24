import styled from "styled-components";

export const BlueBtn = styled.div`
	background-color: #00448d;
	color: #ffffff;
	width: 300px;
	text-align: center;
	border-radius: 24px;
	height: 48px;
	font-size: 22px;
	line-height: 46px;
	font-weight: bold;
	margin: 0 auto;
	box-shadow: 1px 4px 4px 2px rgba(0, 0, 0, 0.2);
	@media only screen and (max-width: 700px) {
		height: 40px;
		font-size: 18px;
		line-height: 38px;
		width: 200px;
	}
`;

export const Part1Container = styled.div<{ isPie?: boolean }>`
	width: 100%;
	margin: 0px auto;
	display: flex;
	justify-content: center;
	box-sizing: border-box;
	gap: ${(props) => (props.isPie ? "32px" : "0")};
	align-items: center;
	@media only screen and (max-width: 1000px) {
		flex-direction: column-reverse;
	}
`;

export const Part1DescContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 39px;
	@media only screen and (max-width: 1000px) {
	}
`;

export const PieContainer = styled.div<{ isPie?: boolean; width?: string }>`
	min-width: ${(props) => (props.isPie ? props.width : "350px")};
	height: ${(props) => (props.isPie ? props.width : "350px")};
	box-sizing: border-box;
	box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.1);
	display: flex;
	gap: 10px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin-right: 1rem;
	padding: 20px;
	box-sizing: border-box;
	@media only screen and (max-width: 1000px) {
		margin: 0 auto;
	}
`;

export const ListItem = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	font-size: 16px;
	overflow: hidden;
`;

export const ListColorBox = styled.div<{ bgColor?: string }>`
	width: 20px;
	height: 20px;
	border: 2px black solid;
	background-color: ${(props) => props.bgColor};
	margin-right: 4px;
`;

export const DescItem = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	font-size: 20px;
	gap: 32px;
	@media only screen and (max-width: 1000px) {
		justify-content: center;
	}
	@media only screen and (max-width: 500px) {
		font-size: 16px;
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

export const ChartContainer = styled.div`
	width: 90%;

	margin: 0 auto;
	@media only screen and (max-width: 1000px) {
		width: 95%;
	}
`;

export const Container = styled.div`
	box-sizing: border-box;
	margin: 40px 0 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	text-align: center;
`;

export const CloseBtn = styled.button`
	position: fixed;
	right: 50px;
	border: 1px gray solid;
	height: 40px;
	border-radius: 20px;
	@media only screen and (max-width: 500px) {
		right: 20px;
	}
`;
