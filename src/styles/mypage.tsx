import styled from "styled-components";

export const ResultTitle = styled.h2`
	color: #00448d;
	font-weight: 700;
	font-size: 40px;
	margin-bottom: 2rem;
	text-align: left;
	@media only screen and (max-width: 700px) {
		font-size: 32px;
		text-align: center;
	}
	@media only screen and (max-width: 500px) {
		font-size: 24px;
		margin-bottom: 24px;
	}
`;

export const ResultPageContainer = styled.div`
	padding: 6rem 0;
	display: flex;
	flex-direction: column;
	gap: 4rem;
	margin: 0 auto;
	@media only screen and (max-width: 800px) {
		width: 95%;
	}
	@media only screen and (max-width: 600px) {
		padding-bottom: 2rem;
		padding-top: 3rem;
	}
`;

export const ResultContainer = styled.div`
	position: relative;
	width: 100%;
	margin: 0 auto;
`;

export const RefreshBtn = styled.button`
	position: absolute;
	cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
	width: 100px;
	height: 40px;
	border: 3px solid ${(props) => (props.disabled ? "red" : "#00448d")};
	border-radius: 10px;
	right: 10px;
	top: 10px;
	text-align: center;
	background-color: white;
	color: ${(props) => (props.disabled ? "red" : "#00448d")};
	transition: 0.3s all ease;
	box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.1);
	font-weight: 700;
	&:hover {
		background-color: ${(props) => (props.disabled ? "white" : "#00448d")};
		color: ${(props) => (props.disabled ? "red" : "white")};
	}
	@media only screen and (max-width: 700px) {
		top: initial;
		right: initial;
		bottom: 10px;
		left: 10px;
	}
`;

export const ResultBox = styled.div`
	width: 100%;
	padding: 0 3rem;
	min-height: 20rem;
	border: 5px solid #07458b;
	border-radius: 16px;
	box-sizing: border-box;
	overflow: auto;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: rgba(138, 138, 138, 0.56);
		border-radius: 4px;
	}

	&::-webkit-scrollbar-track {
		background-color: none;
	}
	@media only screen and (max-width: 800px) {
		padding: 0 1.5rem;
	}
`;

export const DoneContainer = styled.div`
	left: 50%;
	height: 20rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const DoneBody = styled.div`
	font-size: 16px;
	font-weight: 400;
	line-height: 32px;
	text-align: center;
	height: 30%;
	@media only screen and (max-width: 800px) {
		font-size: 14px;
	}
`;

export const TableHeader = styled.div`
	width: 100%;
	display: flex;
	padding: 0 1rem;
	justify-content: space-between;
	border-bottom: 3px solid #07458b;
	box-sizing: border-box;
	margin: 0 auto;
	@media only screen and (max-width: 800px) {
		padding: 0;
	}
`;

const THItem = styled.div<{ width?: string }>`
	width: ${(props) => props.width};
	font-weight: bold;
	font-size: 20px;
	text-align: center;
	margin: 3rem 0 2rem;
	@media only screen and (max-width: 600px) {
		font-size: 16px;
	}
`;

// ONGOING

const ongoingWidths = [
	[13, 27, 16, 13, 16, 9],
	[0, 32, 21, 0, 21, 14],
];

export const OHDate = styled(THItem)`
	width: ${ongoingWidths[0][0]}%;
	@media only screen and (max-width: 600px) {
		display: none;
	}
`;

export const OHAsset = styled(THItem)`
	width: ${ongoingWidths[0][1]}%;
	@media only screen and (max-width: 600px) {
		width: ${ongoingWidths[1][1]}%;
	}
`;

export const OHPeriod = styled(THItem)`
	width: ${ongoingWidths[0][2]}%;
	@media only screen and (max-width: 600px) {
		width: ${ongoingWidths[1][2]}%;
	}
`;

export const OHRebalancing = styled(THItem)`
	width: ${ongoingWidths[0][3]}%;
	@media only screen and (max-width: 600px) {
		display: none;
	}
`;

export const OHStr = styled(THItem)`
	width: ${ongoingWidths[0][4]}%;
	@media only screen and (max-width: 600px) {
		width: ${ongoingWidths[1][4]}%;
	}
`;

export const OHStatus = styled(THItem)`
	width: ${ongoingWidths[0][5]}%;
	@media only screen and (max-width: 600px) {
		width: ${ongoingWidths[1][5]}%;
	}
`;

export const OngoinItemContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 2rem 1rem;
	margin: 0 auto;
	font-size: 1rem;
	text-align: center;
	@media only screen and (max-width: 800px) {
		padding: 2rem 0;
	}
`;

export const OngoingNormal = styled.div`
	position: relative;
	line-height: 1.5rem;
	top: -0.25rem;
`;

export const OngoingDate = styled(OngoingNormal)`
	width: ${ongoingWidths[0][0]}%;
	@media only screen and (max-width: 600px) {
		display: none;
	}
`;

export const OngoingAsset = styled(OngoingNormal)`
	width: ${ongoingWidths[0][1]}%;
	@media only screen and (max-width: 600px) {
		width: ${ongoingWidths[1][1]}%;
	}
`;

export const OngoingPeriod = styled(OngoingNormal)`
	width: ${ongoingWidths[0][2]}%;
	@media only screen and (max-width: 600px) {
		width: ${ongoingWidths[1][2]}%;
	}
`;

export const OngoingRebalancing = styled(OngoingNormal)`
	width: ${ongoingWidths[0][3]}%;
	@media only screen and (max-width: 600px) {
		display: none;
	}
`;

export const OngoingStr = styled.div`
	width: ${ongoingWidths[0][4]}%;
	display: flex;
	flex-direction: column;
	gap: 32px;
	@media only screen and (max-width: 600px) {
		width: ${ongoingWidths[1][4]}%;
	}
`;

export const StrItem = styled.div`
	width: 100%;
`;

export const OngoingStatus = styled.div`
	width: ${ongoingWidths[0][5]}%;
	display: flex;
	flex-direction: column;
	gap: 16px;
	position: relative;
	top: -7px;
	@media only screen and (max-width: 600px) {
		width: ${ongoingWidths[1][5]}%;
	}
`;

export const StatusItem = styled.div`
	width: 100%;
`;

export const DoneMark = styled.div`
	width: 33px;
	margin: 0 auto;
	@media only screen and (max-width: 800px) {
		margin-top: 2px;
		margin-bottom: 2px;
		width: 30px;
	}
	@media only screen and (max-width: 600px) {
		width: 25px;
	}
`;

// HISTORY

const historyWidths = [
	[8, 15, 35, 15, 15, 10],
	[0, 0, 45, 20, 23, 10],
];

export const HistoryItems = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 1rem;
	gap: 2rem;
	margin: 32px auto;
	@media only screen and (max-width: 800px) {
		padding: 0;
	}
`;

export const HistoryItem = styled.div`
	width: 100%;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
`;

const HContent = styled.div<{ width?: string }>`
	width: ${(props) => props.width};
	font-size: 16px;
	font-weight: 400;
	text-align: center;
	line-height: 2rem;
	@media only screen and (max-width: 600px) {
		font-size: 14px;
		line-height: 28px;
	}
`;
export const HHNum = styled(THItem)`
	width: ${historyWidths[0][0]}%;
	@media only screen and (max-width: 600px) {
		display: none;
	}
`;

export const HHDate = styled(THItem)`
	width: ${historyWidths[0][1]}%;
	@media only screen and (max-width: 600px) {
		display: none;
	}
`;

export const HHAsset = styled(THItem)`
	width: ${historyWidths[0][2]}%;
	@media only screen and (max-width: 600px) {
		width: ${historyWidths[1][2]}%;
	}
`;

export const HHDetail = styled(THItem)`
	width: ${historyWidths[0][3]}%;
	@media only screen and (max-width: 600px) {
		width: ${historyWidths[1][3]}%;
	}
`;

export const HHResult = styled(THItem)`
	width: ${historyWidths[0][4]}%;
	@media only screen and (max-width: 600px) {
		width: ${historyWidths[1][4]}%;
	}
`;

export const HHDelete = styled(THItem)`
	width: ${historyWidths[0][5]}%;
	@media only screen and (max-width: 600px) {
		width: ${historyWidths[1][5]}%;
	}
`;

export const HNum = styled(HContent)`
	width: ${historyWidths[0][0]}%;
	@media only screen and (max-width: 600px) {
		display: none;
	}
`;
export const HDate = styled(HContent)`
	width: ${historyWidths[0][1]}%;
	@media only screen and (max-width: 600px) {
		display: none;
	}
`;
export const HAsset = styled(HContent)`
	width: ${historyWidths[0][2]}%;
	@media only screen and (max-width: 600px) {
		width: ${historyWidths[1][2]}%;
	}
`;
export const HDetail = styled(HContent)`
	width: ${historyWidths[0][3]}%;
	@media only screen and (max-width: 600px) {
		width: ${historyWidths[1][3]}%;
	}
`;
export const HResult = styled(HContent)`
	width: ${historyWidths[0][4]}%;
	@media only screen and (max-width: 600px) {
		width: ${historyWidths[1][4]}%;
	}
`;

export const LinkBlue = styled.div`
	cursor: pointer;
	color: #384883;
	text-decoration: underline;
`;

export const LinkRed = styled.div`
	cursor: pointer;
	color: #a6062d;
	text-decoration: underline;
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

export const Deletebtn = styled.div`
	width: ${historyWidths[0][5]}%;
	height: 1.5rem;
	line-height: 3rem;
	text-align: center;
	@media only screen and (max-width: 600px) {
		width: ${historyWidths[1][5]}%;
	}
`;
