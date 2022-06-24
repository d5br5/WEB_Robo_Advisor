import styled from "styled-components";
import "chartjs-plugin-labels";
import { colorAsset } from "../../../assets/Result/color";
import { Pie } from "react-chartjs-2";
import { useMediaQuery } from "react-responsive";
import { FC } from "react";
import { AssetCore } from "../../../types";

const PieContainer = styled.div`
	height: 320px;
	@media only screen and (max-width: 1000px) {
		height: 500px;
	}
`;

const PieChartPercent: FC<{ chartData: number[]; label: AssetCore[] }> = ({
	label,
	chartData,
}) => {
	const isNarrow = useMediaQuery({
		query: "(max-width: 1000px)",
	});
	const data = {
		labels: label.map((a) => a.name + a.ticker),
		datasets: [
			{
				backgroundColor: colorAsset,
				data: chartData ? [...chartData] : new Array(label.length).fill(1),
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
			display: true,
			position: isNarrow ? "bottom" : "right",
		},

		tooltips: {
			callbacks: {
				label: function (
					context: { index: number },
					value: { labels: string[] }
				) {
					return value.labels[context.index];
				},
			},
		},
		plugins: {
			labels: {
				render: function (args: { percentage: number }) {
					if (args.percentage === 0) return "";
					return `${args.percentage} %`;
				},
				fontSize: 16,
				fontStyle: "bold",
				fontColor: "#fff",
			},
		},
	};

	return (
		<PieContainer>
			<Pie data={data} options={options} />
		</PieContainer>
	);
};

export default PieChartPercent;
