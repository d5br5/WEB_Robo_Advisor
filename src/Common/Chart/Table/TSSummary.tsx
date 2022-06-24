import * as S from "./styles";
import Tooltip from "@mui/material/Tooltip";
import { FC, memo } from "react";

export type SumCategory = "CR" | "CAGR" | "MDD" | "sharpeRatio";

const categories: {
	[key in SumCategory]: string;
} = {
	CR: "?",
	CAGR: "전체 기간에 대한 수익률을 연 수익률로 환산한 값",
	MDD: "주가의 직전 고점 대비 하락의 폭이 가장 큰 값",
	sharpeRatio:
		"포트폴리오 가치의 변동성(위험) 대비 초과 수익\n* (연환산 수익률 - 무위험 수익률) / 연환산 변동성",
};

const TSSummary: FC<{
	my: { [key in SumCategory]: number };
	benchmark: { [key in SumCategory]: number };
}> = ({ my, benchmark }) => {
	return (
		<S.Table>
			<S.TH>
				<S.THMain>구분</S.THMain>
				<S.THNormalContainer>
					{Object.keys(categories).map((item, i) => (
						<S.THNormal key={i}>
							{item}
							<Tooltip title={categories[item as SumCategory]} enterTouchDelay={0}>
								<S.QMark>?</S.QMark>
							</Tooltip>
						</S.THNormal>
					))}
				</S.THNormalContainer>
			</S.TH>
			<S.TB>
				<S.TBMain>MY</S.TBMain>
				<S.TBNormalContainer>
					<S.TBNormal>{(my.CR * 100).toFixed(1)} %</S.TBNormal>
					<S.TBNormal>{(my.CAGR * 100).toFixed(1)} %</S.TBNormal>
					<S.TBNormal>{(my.MDD * 100).toFixed(1)} %</S.TBNormal>
					<S.TBNormal>{my.sharpeRatio.toFixed(1)}</S.TBNormal>
				</S.TBNormalContainer>
			</S.TB>
			<S.TB>
				<S.TBMain>벤치마크</S.TBMain>
				<S.TBNormalContainer>
					<S.TBNormal>{(benchmark.CR * 100).toFixed(1)} %</S.TBNormal>
					<S.TBNormal>{(benchmark.CAGR * 100).toFixed(1)} %</S.TBNormal>
					<S.TBNormal>{(benchmark.MDD * 100).toFixed(1)} %</S.TBNormal>
					<S.TBNormal>{benchmark.sharpeRatio.toFixed(1)}</S.TBNormal>
				</S.TBNormalContainer>
			</S.TB>
		</S.Table>
	);
};

export default memo(TSSummary);
