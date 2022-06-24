import { FC } from "react";
import { Pie } from "react-chartjs-2";
import { colorAsset } from "../../../assets/Result/color";
import { getChartLabel, getNameWithTicker } from "./BacktestAsset";
import { AssetCore } from "../../../types";
import "chartjs-plugin-labels";

const PieChartAbstract: FC<{ label: AssetCore[] }> = ({ label }) => {
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

	return <Pie data={data} options={options} />;
};

export default PieChartAbstract;
