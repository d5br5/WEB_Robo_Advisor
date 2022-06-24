import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getPFResult } from "../../../../api/trading";
import { RootState } from "../../../../store";
import { BlueBtn, WhiteBox } from "../../../../styles/result";
import { AccountState } from "../../../../types/state";
import { Container, Box, Item, Title, Desc, Strategies, SemiTitle } from "../styles";

type LocationState = {
	pfId: string;
};

interface SumResponse {
	agent: {
		userId: number;
		fee: number;
		slippage: number;
		initBalance: number;
		oneStockWeight: number;
		maxHoldNum: number;
		portfolioId: string;
	};
	info: {
		periods: [string, string];
		universe: string;
	};
	order: {
		buyOrder: {
			lookback: number;
			ptype: string;
			tune: number;
		};
		sellOrder: {
			lookback: number;
			ptype: string;
			tune: number;
		};
		timeOrder: {
			lookback: number;
			ptype: string;
			tune: number;
		};
	};
	trade: {
		buy: {
			conditions: Array<{ name: string; factor: string; upper: number; lower: number }>;
			logic: string;
		};
		sell: {
			conditions: Array<{ name: string; factor: string; upper: number; lower: number }>;
			logic: string;
			timeCuts: [number, number];
		};
		priority: {
			confition: string;
			order: string;
		};
	};
}

const Summary0 = () => {
	const location = useLocation();
	const { jwt } = useSelector<RootState, AccountState>((state) => state.account);
	const { pfId } = location.state as LocationState;
	const [loading, setLoading] = useState(true);
	const [response, setResponse] = useState<SumResponse | null>(null);

	useEffect(() => {
		(async () => {
			try {
				const result = await getPFResult(pfId, 0, jwt);
				setResponse(result?.data?.data);
				setLoading(false);
			} catch (e) {
				alert("조회 실패. 새로고침 혹은 재로그인 후 진행 부탁드립니다.");
			}
		})();
	}, []);

	return (
		<WhiteBox>
			<BlueBtn>Configuration</BlueBtn>
			{!loading && response ? (
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
								{response.order.buyOrder.ptype} 기준 {response.order.buyOrder.tune * 100} %
							</Desc>
						</Item>
						<Item>
							<Title>매도</Title>
							<Desc>
								{response.order.sellOrder.ptype} 기준 {response.order.sellOrder.tune * 100} %
							</Desc>
						</Item>
						<Item>
							<Title>타임컷</Title>
							<Desc>
								{response.order.timeOrder.ptype} 기준 {response.order.timeOrder.tune * 100} %
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
								최소 {response.trade.sell.timeCuts[0]}일 ~ 최대 {response.trade.sell.timeCuts[1]}일
							</Desc>
						</Item>
						<Item>
							<Title>우선순위</Title>
							<Desc>
								{response.trade.priority.confition} {response.trade.priority.order}
							</Desc>
						</Item>
					</Box>
				</Container>
			) : null}
		</WhiteBox>
	);
};

export default memo(Summary0);
