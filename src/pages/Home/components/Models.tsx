import { Accent, AccentBlue } from "../../../styles";
import starImg from "../../../assets/Home/star.svg";
import { CardContainer, ExampleCard, ExampleTitle, ExampleDesc, StarEmoji } from "../styles";
import { memo } from "react";

const Models = () => {
	return (
		<CardContainer mb="112px">
			<ExampleCard width="624px">
				<ExampleDesc>
					<ExampleTitle>통계 모델</ExampleTitle>
					전통적으로 연구, 사용되는 자산배분 알고리즘으로
					<br />
					수익률과 변동성을 기반으로 계산되는 모델
					<br />
					<Accent>ex) </Accent>
					<AccentBlue>변동성 중심 전략, 수익률-변동성 중심 전략</AccentBlue>
				</ExampleDesc>
			</ExampleCard>
			<ExampleCard width="624px">
				<ExampleDesc>
					<ExampleTitle>
						<StarEmoji bg={starImg} />
						강화학습 모델
						<StarEmoji bg={starImg} />
					</ExampleTitle>
					과거의 여러 기록에 대해 시뮬레이션 해보며
					<br />
					정책, 평가에 대한 최적 결과값을 찾아가는 AI 모델
					<br />
					<Accent>ex) </Accent>
					<AccentBlue>PPO 성장형, PPO 중립형, PPO 안정형</AccentBlue>
				</ExampleDesc>
			</ExampleCard>
		</CardContainer>
	);
};

export default memo(Models);
