import {
	CardContainer,
	CardTitle,
	CardDesc,
	CardLogo,
	CardDescBr,
	CartTDContainer,
} from "../styles";
import { AccentRed, None600BR } from "../../../styles";
import articleImg from "../../../assets/Home/articleimg2.svg";
import { memo } from "react";

const Simulator = () => {
	return (
		<CardContainer width="1184px" mb="90px">
			<CardLogo>
				<img src={articleImg} alt="" style={{ width: "100%" }} />
			</CardLogo>
			<CartTDContainer>
				<CardTitle align="right">WA:IN 이란?</CardTitle>
				<CardDesc align="right">
					한국, 미국, 일본, 영국 등을 포함한 6개국의 투자 자산들을 다룹니다.
					<None600BR />
					투자할 <AccentRed>자산의 종류</AccentRed>와 시뮬레이션에서 사용할{" "}
					<AccentRed>자산배분 전략</AccentRed>을 선택해주세요!
					<br />
					자산배분 포트폴리오가 과거의 특정 시점부터 현재까지 <CardDescBr />
					투자를 진행하였을 경우 얻을 수 있는 효용가치를 계산해드립니다.
					<None600BR />
					생성된 포트폴리오를 통해 각 자산들에 투자해야 할 비중을 확인해보세요.
				</CardDesc>
			</CartTDContainer>
		</CardContainer>
	);
};

export default memo(Simulator);
