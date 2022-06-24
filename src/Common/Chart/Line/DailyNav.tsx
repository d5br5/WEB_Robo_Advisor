import { FC, memo } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-zoom";
import styled from "styled-components";

const Container = styled.div`
	width: 95%;
`;

const DailyNav: FC<{ periods: string[]; navs: number[] }> = ({ periods, navs }) => {
	const data = {
		datasets: [
			{
				borderWidth: 2,
				borderColor: "#00448d",
				pointRadius: 1,
				data: navs.map((a) => a.toFixed(0)),
			},
		],
		labels: periods.map((a) => a.slice(0, 10)),
	};
	const options = {
		scales: {
			yAxes: [
				{
					ticks: {
						callback: function (value: number) {
							return `₩ ${value.toLocaleString()}`;
						},
					},
				},
			],
		},
		tooltips: {
			intersect: false,
			backgroundColor: "#fffefe",
			borderColor: "#2d345b",
			borderWidth: 3,
			titleFontColor: "#00448d",
			bodyFontColor: "#e00012",
			callbacks: {
				label: function (value: { yLabel: number }) {
					return `₩ ${value.yLabel.toLocaleString()}`;
				},
			},
		},
		elements: {
			point: {
				radius: 0, // 점 제거
			},
		},
		legend: {
			display: false,
		},
	};
	return (
		<Container>
			<Line options={options} data={data} />
		</Container>
	);
};

export default memo(DailyNav);
