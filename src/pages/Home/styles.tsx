import styled from "styled-components";

export const CardContainer = styled.div<{ width?: string; mb?: string }>`
	width: ${(props) => (props.width ? props.width : "100%")};
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	margin-bottom: ${(props) => props.mb};

	@media only screen and (max-width: 1200px) {
		width: 100%;
		margin-bottom: 64px;
	}
	@media only screen and (max-width: 1000px) {
	}
	@media only screen and (max-width: 800px) {
		flex-wrap: wrap;
	}
`;

export const CardTitle = styled.h2<{ align: string }>`
	color: var(--color-blue);
	font-weight: bold;
	text-align: ${(props) => props.align};
	margin-bottom: 48px;
	@media only screen and (max-width: 800px) {
		margin-left: 1.25rem;
		text-align: left;
		margin-bottom: 30px;
	}

	@media only screen and (max-width: 600px) {
		margin-bottom: 20px;
	}
`;

export const CardDesc = styled.p<{ align: string }>`
	color: #000000;
	text-align: ${(props) => props.align};
	@media only screen and (max-width: 800px) {
		margin: 0 1.25rem;
		text-align: left;
	}
`;

export const CartTDContainer = styled.div`
	@media only screen and (max-width: 1000px) {
		width: 100%;
	}
	@media only screen and (max-width: 800px) {
		margin-right: 1.25rem;
	}
`;

export const CardDescBr = styled.br`
	display: none;
	@media only screen and (max-width: 900px) {
		display: initial;
	}
	@media only screen and (max-width: 600px) {
		display: none;
	}
`;

export const CardLogo = styled.div`
	width: 17rem;
	@media only screen and (max-width: 1200px) {
		width: 14rem;
	}
	@media only screen and (max-width: 1000px) {
		display: none;
	}
`;

export const ExampleCard = styled.div<{ width?: string }>`
	width: ${(props) => (props.width ? props.width : "100%")};
	background-color: rgba(150, 170, 221, 0.19);
	@media only screen and (max-width: 1200px) {
		width: ${(props) => (props.width ? "50%" : "100%")};
		box-sizing: border-box;
	}
	@media only screen and (max-width: 800px) {
		width: 100%;
	}
`;

export const ExampleTitle = styled.h3`
	background-color: var(--color-blue);
	color: #ffffff;
	min-width: 20rem;
	width: fit-content;
	text-align: center;
	border-radius: 24px;
	height: 3rem;
	font-size: 24px;
	font-weight: bold;
	line-height: 48px;
	position: absolute;
	top: -1.5rem;
	left: 50%;
	transform: translate(-50%, 0);
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 1px 4px 4px 2px rgba(0, 0, 0, 0.2);
	@media only screen and (max-width: 600px) {
		font-size: 20px;
	}
`;

export const ExampleDesc = styled.div`
	background-color: #ffffff;
	border-radius: 1rem;
	min-height: 6rem;

	font-weight: 400;
	line-height: 2rem;
	text-align: center;
	position: relative;
	padding: 4rem 0 3rem;
	margin: 3.5rem 2rem 2rem;
	@media only screen and (max-width: 1000px) {
		margin: 3rem 1.5rem 1.5rem;
	}

	@media only screen and (max-width: 450px) {
		margin: 2rem 1rem 1rem;
	}
`;

export const StarEmoji = styled.div<{ bg: string }>`
	position: relative;
	margin: 0 0.5rem;
	background-image: url(${(props) => props.bg});
	width: 2rem;
	height: 2rem;
	background-size: cover;
`;

export const AssetBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 0px 60px;
	@media only screen and (max-width: 1200px) {
		padding: 0px;
	}
	@media only screen and (max-width: 1000px) {
		width: 500px;
		margin: 0 auto;
	}
	@media only screen and (max-width: 600px) {
		width: 420px;
	}
	@media only screen and (max-width: 500px) {
		width: 100%;
	}
	@media only screen and (max-width: 450px) {
		font-size: 12px;
	}
`;

export const AssetItem = styled.div`
	width: 48%;
	display: flex;
	gap: 32px;
	line-height: 3rem;
	@media only screen and (max-width: 1200px) {
		width: 50%;
		gap: 16px;
	}
	@media only screen and (max-width: 1000px) {
		width: 100%;
	}
`;

export const AssetTitle = styled.div`
	width: 100px;
	font-weight: 700;
	text-align: right;
	color: var(--color-blue);
	@media only screen and (max-width: 400px) {
		width: 80px;
	}
`;

export const AssetDesc = styled.div``;
