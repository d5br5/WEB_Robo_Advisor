import styled from "styled-components";

export const Table = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1000px;
	width: 95%;
	align-items: center;
	font-size: 16px;
	@media only screen and (max-width: 800px) {
		font-size: 14px;
		margin-left: 0.9%;
	}
`;

export const TH = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	margin: 0 auto;
	justify-content: center;
`;

const THItem = styled.div`
	border: 1px black solid;
	margin: -0.5px;
	padding: 10px 0;
	background-color: #f7f6f3;
	line-height: 24px;
	text-align: center;
	font-weight: 700;
`;

export const THMain = styled(THItem)`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 14%;
	@media only screen and (max-width: 800px) {
		width: 20%;
	}
`;
export const THNormalContainer = styled.div`
	display: flex;
	width: 100%;
	@media only screen and (max-width: 800px) {
		flex-wrap: wrap;
	}
`;

export const THNormal = styled(THItem)`
	width: 33.33%;
`;

export const TB = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const TBItem = styled.div`
	border: 1px black solid;
	margin: -0.5px;
	padding: 10px 0px;
	text-align: center;
`;

export const TBMain = styled(TBItem)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 14%;
	font-weight: 700;
	@media only screen and (max-width: 800px) {
		width: 20%;
	}
`;

export const TBNormalContainer = styled.div`
	display: flex;
	width: 100%;
	@media only screen and (max-width: 800px) {
		flex-wrap: wrap;
	}
`;

export const TBNormal = styled(TBItem)`
	width: 33.33%;
`;

export const EnglishName = styled.span`
	font-size: 14px;
	color: gray;
	@media only screen and (max-width: 950px) {
		display: none;
	}
`;

export const BR950 = styled.br`
	display: none;
	@media only screen and (max-width: 950px) {
		display: initial;
	}
`;

export const None950 = styled.span`
	@media only screen and (max-width: 950px) {
		display: none;
	}
`;

export const None400 = styled.span`
	@media only screen and (max-width: 400px) {
		display: none;
	}
`;

export const QMark = styled.div`
	background-color: #5552b9;
	display: inline-block;
	width: 16px;
	height: 16px;
	line-height: 16px;
	margin-left: 5px;
	color: white;
	font-size: 12px;
	border-radius: 10px;
	text-align: center;
	position: relative;
	top: -1px;
	cursor: help;
`;

export const RankingTB = styled.div`
	width: 100%;
	display: flex;
`;
export const RankingTH = styled(RankingTB)``;

export const RankingTBItem = styled.div<{ width: string }>`
	width: ${(props) => props.width};
	overflow: hidden;
	text-align: center;
	padding: 13px;
	border: 1px black solid;
	margin: -0.5px;
	@media only screen and (max-width: 600px) {
		padding: 13px 2px;
	}
`;

export const RankingTHItem = styled(RankingTBItem)`
	background-color: #f7f6f3;
	font-weight: 700;
`;
