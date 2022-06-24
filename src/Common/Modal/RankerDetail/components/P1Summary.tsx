import { FC, memo, useState } from "react";
import { colorAsset } from "../../../../assets/Result/color";
import { Asset } from "../../../../types";
import PieChartAbstract from "../../../Chart/Pie/ResultAbstract";
import {
	BlueBtn,
	Part1Container,
	Part1DescContainer,
	PieContainer,
	ListItem,
	ListColorBox,
	DescItem,
	DescTitle,
	DescInfo,
	Container,
} from "../styles";

interface Props {
	assets: Asset[];
	strategy: string;
	startDate: string;
	endDate: string;
	rebalancingPeriod: number;
}

const P1Summary: FC<Props> = ({ assets, strategy, startDate, endDate, rebalancingPeriod }) => {
	const [isPie, setIsPie] = useState(true);
	return (
		<div>
			<BlueBtn>요약</BlueBtn>
			<Container>
				<Part1Container isPie={isPie}>
					<PieContainer width="324px" onClick={() => setIsPie(!isPie)} isPie={isPie}>
						{isPie ? (
							<PieChartAbstract label={assets} />
						) : (
							assets.map((a, i) => (
								<ListItem key={i}>
									<ListColorBox bgColor={colorAsset[i]} />
									{a.name.length > 30 ? `${a.name.slice(0, 31)}...` : a.name}
								</ListItem>
							))
						)}
					</PieContainer>
					<Part1DescContainer>
						<DescItem>
							<DescTitle>전략</DescTitle>
							<DescInfo>{strategy.toUpperCase()}</DescInfo>
						</DescItem>
						<DescItem>
							<DescTitle>시뮬레이션 기간</DescTitle>
							<DescInfo>
								{startDate} ~ {endDate}
							</DescInfo>
						</DescItem>
						<DescItem>
							<DescTitle>리밸런싱 주기</DescTitle>
							<DescInfo>{rebalancingPeriod}일</DescInfo>
						</DescItem>
					</Part1DescContainer>
				</Part1Container>
			</Container>
		</div>
	);
};

export default memo(P1Summary);
