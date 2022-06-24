import { CardContainer, CardTitle, CardDesc, CardLogo, CardDescBr } from "../styles";
import { AccentRed, None600BR } from "../../../styles";
import articleImg from "../../../assets/Home/articleimg4.svg";
import { memo } from "react";

const Strategy = () => {
	return (
		<CardContainer width="1184px" mb="90px">
			<div>
				<CardTitle align="left">자산배분 전략</CardTitle>
				<CardDesc align="left">
					자산을 배분하는 방식은 한 가지가 아닙니다. <CardDescBr />
					수익률, 변동성 등 중요하게 여기는 가치에 따라 <None600BR />
					여러가지 자산배분 전략으로 다양하게 시뮬레이션을 해볼 수 있습니다. <br />본 시뮬레이터는
					크게 <AccentRed>통계 모델</AccentRed>과 <AccentRed>강화학습 모델</AccentRed> 기반의
					전략들을 제공합니다. <None600BR /> 뿐만 아니라 포트폴리오의 성능을 비교해볼 수 있는 수치인
					<CardDescBr />
					<AccentRed> 지수</AccentRed>(KOSPI, S&P 500)도 확인해볼 수 있습니다. <None600BR />
					본인만의 목적에 맞게 여러가지 자산배분 전략들을 선택하고 비교해보세요!
				</CardDesc>
			</div>
			<CardLogo>
				<img src={articleImg} alt="" style={{ width: "100%" }} />
			</CardLogo>
		</CardContainer>
	);
};

export default memo(Strategy);
