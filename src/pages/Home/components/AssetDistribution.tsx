import { memo } from "react";
import { CardContainer, CardTitle, CardDesc, CardLogo, CardDescBr } from "../styles";
import { AccentRed, None600BR } from "../../../styles";
import articleImg from "../../../assets/Home/articleimg1.svg";

const AssetDistribution = () => {
	return (
		<CardContainer width="1184px" mb="80px">
			<div>
				<CardTitle align="left">자산 배분이란?</CardTitle>
				<CardDesc align="left">
					투자를 할 때 한 종목에만 집중해서 투자를 한다면 <CardDescBr /> 시장 변동성이 커졌을 때
					손실을 낼 확률도 높아집니다.
					<None600BR />
					변동성이나 수익률 측면에서 안정적으로 수익을 내기 위해서는 <CardDescBr />
					<AccentRed>투자금을 여러 자산에 배분하여 투자</AccentRed>하는 것이 중요합니다.
					<br />
					하지만 희망 수익률에 따라 자산을 어떻게 배분할지 고민하는 것은 막막합니다.
					<None600BR />
					Tmax가 개발한 자산 배분 시뮬레이터는 현재 시장 상황에서 <CardDescBr /> 가장 적절한
					자산배분 포트폴리오를 제공해 드립니다.
				</CardDesc>
			</div>
			<CardLogo>
				<img src={articleImg} alt="" style={{ width: "100%" }} />
			</CardLogo>
		</CardContainer>
	);
};

export default memo(AssetDistribution);
