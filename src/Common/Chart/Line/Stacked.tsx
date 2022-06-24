import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { colorAsset } from "../../../assets/Result/color";
import { FC, memo } from "react";
import { AssetCore } from "../../../types";

const ChartContainer = styled.div`
	max-width: 950px;
	width: 95%;
	min-height: 479px;
	@media only screen and (max-width: 500px) {
		width: 100%;
		margin-right: 5px;
	}
`;

const StackedLineChart: FC<{
	period: number;
	chartData: Array<{ weights: number[]; date: string }>;
	label: AssetCore[];
}> = ({ chartData, period, label }) => {
	const data = {
		labels: chartData.map((a) => a.date),
		datasets: chartData[0].weights.map((item, idx: number) => ({
			label: label[idx].name,
			data: chartData.map((a) => a.weights[idx]),
			borderColor: colorAsset[idx],
			borderWidth: 2,
			backgroundColor: `${colorAsset[idx]}88`,
			pointRadius: 0,
		})),
	};
	const options = {
		scales: {
			yAxes: [
				{
					stacked: true,
					ticks: {
						// y축 0에서 시작, 간격 0.2, 범위 0 ~ 1
						beginAtZero: true,
						stepSize: 0.2,
						min: 0,
						max: 1,
						callback: function (value: number) {
							return `${value * 100}%`;
						},
					},
					gridLines: {
						// y축 좌표선
						display: true,
						color: "#848484",
					},
				},
			],
			xAxes: [
				{
					ticks: {
						autoSkip: false,
						maxRotation: 90,
						minRotation: 90,
						callback: (value: string, index: number, ticks: string[]) => {
							return index % (period * Math.floor(ticks.length / period / 10)) === 0
								? value.slice(0, 7)
								: null;
						},
					},
					gridLines: {
						// x축 좌표선
						display: true,
						lineWidth: 2,
						color: "#848484",
					},
				},
			],
		},
		legend: {
			// 상단 label display 여부
			display: true,
			position: "bottom",
		},
		responsive: true,
		maintainAspectRatio: false,
		tooltips: {
			// index 모드
			mode: "index",
			intersect: false,
		},
		hover: {
			// nearest 모드 (근접한 데이터 출력)
			mode: "nearest",
			intersect: true,
		},
	};
	return (
		<ChartContainer>
			<Line data={data} options={options} />
		</ChartContainer>
	);
};

export default memo(StackedLineChart);
