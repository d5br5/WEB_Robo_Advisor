import { FC, memo } from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import "chartjs-plugin-doughnutlabel";

const PieContainer = styled.div`
	width: 600px;
	height: 300px;
`;

const TradingRatio: FC<{ values: number[]; labels: string[]; ratios: number[]; total: number }> = ({
	labels,
	values,
	ratios,
	total,
}) => {
	const data = {
		labels: labels.map(
			(a, i) =>
				`${a} : ${(ratios[i] * 100).toFixed(0)}% ( ₩ ${parseInt(
					values[i].toFixed(0)
				).toLocaleString()} )`
		),
		datasets: [
			{
				backgroundColor: Array.from(
					{ length: labels.length },
					() => `#${Math.round(Math.random() * 0xffffff).toString(16)}`
				),
				data: ratios,
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
			position: "right",
		},

		tooltips: {
			callbacks: {
				label: function (context: { index: number }, value: { labels: string[] }) {
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
			doughnutlabel: {
				labels: [
					{
						text: "Total",
						font: {
							size: 20,
							weight: "bold",
						},
					},
					{
						text: `₩ ${parseInt(total.toFixed(0)).toLocaleString()} `,
						font: {
							size: 16,
						},
					},
				],
			},
		},
	};

	return (
		<PieContainer>
			<Doughnut data={data} options={options} />
		</PieContainer>
	);
};

export default memo(TradingRatio);
