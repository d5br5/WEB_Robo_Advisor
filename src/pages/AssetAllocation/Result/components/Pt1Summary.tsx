import { useState, FC, memo } from "react";
import PieChartAbstract from "../../../../Common/Chart/Pie/ResultAbstract";
import {
	Part1Container,
	PieContainer,
	ListItem,
	Subtitle,
	Title,
	Part1DescContainer,
	DescItem,
	DescTitle,
	DescInfo,
	ListColorBox,
} from "../../../../styles/result";
import { colorAsset } from "../../../../assets/Result/color";
import { Simulation } from "../../../../types";

const Pt1Summary: FC<{ simDetail: Simulation }> = ({ simDetail }) => {
	const [isPie, setIsPie] = useState(true);
	return (
		<div>
			<Subtitle>WA:IN</Subtitle>
			<Title>자산배분 시뮬레이션 결과</Title>
			<Part1Container isPie={isPie}>
				<PieContainer width="324px" onClick={() => setIsPie(!isPie)} isPie={isPie}>
					{isPie ? (
						<PieChartAbstract label={simDetail.assets} />
					) : (
						simDetail.assets.map((a, i) => (
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
						<DescInfo>
							{simDetail.strategies
								.map((a) => a.name)
								.filter((a) => a !== "snp" && a !== "kospi")
								.join(", ")
								.toUpperCase()}
						</DescInfo>
					</DescItem>
					<DescItem>
						<DescTitle>시뮬레이션 기간</DescTitle>
						<DescInfo>
							{simDetail.startDate} - {simDetail.endDate}
						</DescInfo>
					</DescItem>
					<DescItem>
						<DescTitle>리밸런싱 주기</DescTitle>
						<DescInfo>{simDetail.rebalancingPeriod}일</DescInfo>
					</DescItem>
				</Part1DescContainer>
			</Part1Container>
		</div>
	);
};

export default memo(Pt1Summary);
