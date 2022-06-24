import styled from "styled-components";
import "chartjs-plugin-labels";
import { colorAsset } from "../../../assets/Result/color";
import { Pie } from "react-chartjs-2";
import { FC } from "react";
import { AssetCore } from "../../../types";
import { getChartLabel, getNameWithTicker } from "./BacktestAsset";

const PieContainer = styled.div<{ width?: string }>`
	min-width: ${(props) => props.width};
	height: ${(props) => props.width};
	padding: 1.9rem;
	box-sizing: border-box;
	box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 1rem;
	@media only screen and (max-width: 700px) {
		margin: 0;
		margin-top: 3rem;
	}
	@media only screen and (max-width: 500px) {
		box-shadow: none;
	}
`;

const Warning = styled.div`
	text-align: center;
	line-height: 32px;
	width: 100%;
	font-size: 16px;
`;

const DetailPieChart: FC<{ width: string; label: AssetCore[] }> = ({
	label,
	width,
}) => {
	const data = {
		labels: label,
		datasets: [
			{
				backgroundColor: colorAsset,
				data: new Array(label.length).fill(1),
			},
		],
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		elements: {
			arc: {
				// pie 내부 경계선 spacing 제거
				borderWidth: 0,
			},
		},
		legend: {
			display: false,
		},
		tooltips: {
			callbacks: {
				label: function (
					context: { index: number },
					value: { labels: Array<{ name: string; ticker: string }> }
				) {
					return getNameWithTicker(value.labels[context.index]);
				},
			},
		},
		plugins: {
			labels: {
				render: function (args: { label: { name: string; ticker: string } }) {
					return getChartLabel(args.label);
				},
				fontSize: 12,
				fontStyle: "bold",
				fontColor: "#fff",
			},
		},
	};

	return (
		<PieContainer width={width}>
			{label.length > 0 ? (
				<Pie data={data} options={options} />
			) : (
				<Warning>
					자산군 선택시 <br />
					미리보기가 제공됩니다.
				</Warning>
			)}
		</PieContainer>
	);
};

export default DetailPieChart;
