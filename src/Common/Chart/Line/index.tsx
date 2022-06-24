import { FC, memo, useRef, useState } from "react";
import "chartjs-plugin-zoom";
import ChartComponent, { Line, LinearComponentProps } from "react-chartjs-2";
import { colorStrategy } from "../../../assets/Result/color";
import { ToggleBtnContainer, ToggleBtn } from "../../../styles/result";
import styled from "styled-components";
import { StrategyResult } from "../../../types";

const ChartContainer = styled.div`
	width: 95%;
	height: 536px;
	@media only screen and (max-width: 1300px) {
		height: 400px;
	}
	@media only screen and (max-width: 600px) {
		width: 100%;
		margin-right: 5px;
		height: 300px;
	}
`;

const ResetBtn = styled.div`
	border: 2px #5552b9 solid;
	width: 150px;
	margin: 0 auto;
	text-align: center;
	color: #5552b9;
	font-weight: 700;
	padding: 5px 5px 7px 5px;
	border-radius: 5px;
	cursor: pointer;
	transition: all ease 0.1s;
	&:hover {
		background: rgba(0, 0, 0, 0.1);
	}
`;

const LineChart: FC<{ strategies: StrategyResult[] }> = ({ strategies }) => {
	const [isLogMode, setIsLogMode] = useState(false);
	let set: Set<string> = new Set([]);
	strategies.forEach((strategy) => {
		set = new Set([...set, ...strategy.dailyPfValues.map((value) => value.date)]);
	});

	const dateLabel = Array.from(set).sort();
	const newDataset: Array<{
		label: string;
		data: (number | null)[];
		borderWidth: number;
		borderColor: string;
		pointRadius: number;
		fill: boolean;
	}> = [];

	strategies.forEach((str, i) => {
		let dataIdx = 0;
		newDataset.push({
			label: str.name === "snp" ? "S&P 500" : str.name.toUpperCase(),
			data: dateLabel.map((date) => {
				// 데이터(weight) 지정
				if (dataIdx === str.dailyPfValues.length) {
					return null;
				}
				if (str.dailyPfValues[dataIdx].date !== date) {
					for (let i = dataIdx - 1; i >= 0; i--) {
						if (str?.dailyPfValues[i].weight) {
							return str.dailyPfValues[i].weight;
						}
					}
				}
				return str.dailyPfValues[dataIdx++].weight;
			}),

			borderWidth: 2,
			borderColor: colorStrategy[i],
			pointRadius: 0,
			fill: false,
		});
	});

	const range_min = new Date(dateLabel[0]);
	range_min.setDate(range_min.getDate() - 10);
	const range_max = new Date(dateLabel[dateLabel.length - 1]);
	range_max.setDate(range_max.getDate() + 10);

	const getMaxMin = () => {
		const result = strategies.map((a) => a.dailyPfValues.map((b) => b.weight));
		let fullArr: number[] = [];
		for (let i = 0; i < result.length; i++) {
			fullArr = [...fullArr, ...result[i]];
		}
		return [Math.ceil(Math.max(...fullArr)), Math.floor(Math.min(...fullArr))];
	};

	const [ymax, ymin] = getMaxMin();

	const dateToString = (date: Date) => {
		const Year = date.getFullYear();
		const Month = date.getMonth() + 1;
		return Month < 10 ? `${Year}-0${Month}` : `${Year}-${Month}`;
	};

	const options = {
		scales: {
			yAxes: [
				{
					type: isLogMode ? "logarithmic" : "linear",
					ticks: {
						autoSkip: true,
						max: ymax,
						min: ymin > 0 ? 0 : ymin,
						callback: function (value: number) {
							return `${Math.floor(value * 100)}%`;
						},
					},
					gridLines: {
						// y축 좌표선
						display: true,
						lineWidth: 1,
						color: "#DBDBDB",
					},
				},
			],
			xAxes: [
				{
					ticks: {
						maxRotation: 90,
						minRotation: 90,
						callback: function (v: [], i: number, t: Array<{ value: string }>) {
							const date = new Date(t[i].value);
							return i % Math.ceil(t.length / 12) === 0 ? dateToString(date) : null;
						},
					},
					type: "time",
					time: {
						stepSize: 6,
					},
					gridLines: {
						// x축 좌표선
						display: true,
						lineWidth: 2,
						color: "#D8D8D8",
					},
				},
			],
		},
		legend: {
			// 상단 label display 여부
			display: true,
		},

		maintainAspectRatio: false,
		tooltips: {
			mode: "index",
			intersect: false,
		},
		hover: {
			mode: "nearest",
			intersect: true,
		},
		zoom: {
			enabled: true,
			mode: "xy",
			rangeMin: {
				x: range_min,
				y: ymin,
			},
			rangeMax: {
				x: range_max,
				y: ymax,
			},
		},

		pan: {
			enabled: true,
			mode: "xy",
			rangeMin: {
				x: range_min,
				y: ymin,
			},
			rangeMax: {
				x: range_max,
				y: ymax,
			},
		},
		// elements: { line: { tension: 0 } },
	};

	const dataset = { datasets: newDataset, labels: dateLabel };
	const chartRef = useRef<ChartComponent<LinearComponentProps>>(null);

	return (
		<>
			<ToggleBtnContainer>
				<ToggleBtn disabled={!isLogMode} onClick={() => setIsLogMode(false)}>
					LINEAR
				</ToggleBtn>
				<ToggleBtn disabled={isLogMode} onClick={() => setIsLogMode(true)}>
					LOGARITHMIC
				</ToggleBtn>
			</ToggleBtnContainer>
			<ResetBtn onClick={() => chartRef.current?.chartInstance.resetZoom()}>reset zoom</ResetBtn>
			<ChartContainer>
				<Line options={options} data={dataset} ref={chartRef} />
			</ChartContainer>
		</>
	);
};

export default memo(LineChart);
