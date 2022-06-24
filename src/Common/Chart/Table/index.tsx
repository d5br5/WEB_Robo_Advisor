import * as S from "./styles";
import Tooltip from "@mui/material/Tooltip";
import { FC, memo } from "react";
import { StrategyResult } from "../../../types";
import { resultTableHeader, resultTableTooltip } from "../../../config/data/AS";

const TableChart: FC<{ items: StrategyResult[] }> = ({ items }) => {
	const strConverter = (str: string) => {
		if (str === "snp") return "S&P 500";
		if (str === "ppo-growth") return "AI성장형";
		return str.toUpperCase();
	};
	return (
		<S.Table>
			<S.TH>
				<S.THMain>
					<div>
						<S.None950>자산 </S.None950>
						<S.None400>배분 </S.None400>전략
						<br />
						<S.EnglishName>Strategy</S.EnglishName>
					</div>
				</S.THMain>
				<S.THNormalContainer>
					{resultTableHeader.map((item, i) => (
						<S.THNormal key={i}>
							{item.label}
							<S.BR950 />
							<Tooltip title={resultTableTooltip[i + 1]} enterTouchDelay={0}>
								<S.QMark>?</S.QMark>
							</Tooltip>
							<br />
							<S.EnglishName>{item.desc}</S.EnglishName>
						</S.THNormal>
					))}
				</S.THNormalContainer>
			</S.TH>
			{items.map((item, i) => (
				<S.TB key={i}>
					<S.TBMain>
						<div>{strConverter(item.name)}</div>
					</S.TBMain>
					<S.TBNormalContainer>
						<S.TBNormal>{item.evaluationResults.totalReturn.toFixed(2)} %</S.TBNormal>
						<S.TBNormal>{item.evaluationResults.cagr.toFixed(2)} %</S.TBNormal>
						<S.TBNormal>{item.evaluationResults.volatility.toFixed(2)} %</S.TBNormal>
						<S.TBNormal>{item.evaluationResults.mdd.toFixed(2)} %</S.TBNormal>
						<S.TBNormal>{item.evaluationResults.sharpeRatio.toFixed(2)}</S.TBNormal>
						<S.TBNormal>{item.evaluationResults.sortinoRatio.toFixed(2)}</S.TBNormal>
					</S.TBNormalContainer>
				</S.TB>
			))}
		</S.Table>
	);
};

export default memo(TableChart);
