import { memo } from "react";
import { useLocation } from "react-router-dom";
import { BlueBtn, WhiteBox } from "../../../../styles/result";
import { config as c1 } from "../../../../data/portfolio/1";
import { config as c2 } from "../../../../data/portfolio/2";
import { config as c3 } from "../../../../data/portfolio/3";
import { config as c4 } from "../../../../data/portfolio/4";
import { config as c5 } from "../../../../data/portfolio/5";

import {
	Container,
	Box,
	Item,
	Title,
	Desc,
	Strategies,
	SemiTitle,
} from "../styles";

type LocationState = {
	idx: number;
};

const Summary0 = () => {
	const location = useLocation();
	const { idx } = location.state as LocationState;
	const now = () => {
		if (idx === 0) return c1;
		if (idx === 1) return c2;
		if (idx === 2) return c3;
		if (idx === 3) return c4;
		return c5;
	};

	const response = now();

	return (
		<WhiteBox>
			<BlueBtn>Configuration</BlueBtn>
			<Container>
				<Box>
					<SemiTitle>기본 정보</SemiTitle>
					<Item>
						<Title>유니버스</Title>
						<Desc>{response.info.universe}</Desc>
					</Item>
					<Item>
						<Title>운용 기간</Title>
						<Desc>
							{response.info.periods[0]} - {response.info.periods[1]}
						</Desc>
					</Item>
					<Item>
						<Title>초기 운용 금액</Title>
						<Desc>{response.agent.initBalance.toLocaleString()} 원</Desc>
					</Item>
					<Item>
						<Title>최대 보유 종목 수</Title>
						<Desc>{response.agent.maxHoldNum} 개</Desc>
					</Item>
					<Item>
						<Title>종목당 매수 비중</Title>
						<Desc>{response.agent.oneStockWeight * 100} %</Desc>
					</Item>
					<Item>
						<Title>수수료</Title>
						<Desc>{response.agent.fee * 100} %</Desc>
					</Item>
					<Item>
						<Title>슬리피지</Title>
						<Desc>{response.agent.slippage * 100} %</Desc>
					</Item>
				</Box>
				<Box>
					<SemiTitle>주문가격 기준</SemiTitle>
					<Item>
						<Title>매수</Title>
						<Desc>
							{response.order.buyOrder.ptype} 기준{" "}
							{response.order.buyOrder.tune * 100} %
						</Desc>
					</Item>
					<Item>
						<Title>매도</Title>
						<Desc>
							{response.order.sellOrder.ptype} 기준{" "}
							{response.order.sellOrder.tune * 100} %
						</Desc>
					</Item>
					<Item>
						<Title>타임컷</Title>
						<Desc>
							{response.order.timeOrder.ptype} 기준{" "}
							{response.order.timeOrder.tune * 100} %
						</Desc>
					</Item>
				</Box>
				<Box>
					<SemiTitle>전략</SemiTitle>
					<Item>
						<Title>매수</Title>
						<Strategies>
							{response.trade.buy.conditions.map((a) => (
								<div key={a.name}>
									{a.name} : {a.factor} {a.lower * 100} % ~ {a.upper * 100} %
								</div>
							))}
							<div>로직 : {response.trade.buy.logic}</div>
						</Strategies>
					</Item>
					<Item>
						<Title>매수</Title>
						<Strategies>
							{response.trade.sell.conditions.map((a) => (
								<div key={a.name}>
									{a.name} : {a.factor} {a.lower * 100} % ~ {a.upper * 100} %
								</div>
							))}
							<div>로직 : {response.trade.sell.logic}</div>
						</Strategies>
					</Item>
					<Item>
						<Title>타임컷</Title>
						<Desc>
							최소 {response.trade.sell.timeCuts[0]}일 ~ 최대{" "}
							{response.trade.sell.timeCuts[1]}일
						</Desc>
					</Item>
					<Item>
						<Title>우선순위</Title>
						<Desc>
							{response.trade.priority.condition}
							{response.trade.priority.order}
						</Desc>
					</Item>
				</Box>
			</Container>
		</WhiteBox>
	);
};

export default memo(Summary0);
