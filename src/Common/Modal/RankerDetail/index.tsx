import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FC, useCallback, useState, useEffect } from "react";
import { getDashboardDetail } from "../../../api/simulation";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { AccountState } from "../../../types/state";
import { DashboardSimDetail } from "../../../types";
import { CloseBtn } from "./styles";
import { useMediaQuery } from "@mui/material";
import P1Summary from "./components/P1Summary";
import P2Score from "./components/P2Score";
import P3Graph from "./components/P3Graph";
import P4PortionChange from "./components/P4PortionChange";
interface Props {
	simId: string;
	strName: string;
}

const BasicModal: FC<Props> = ({ simId, strName }) => {
	const short = useMediaQuery("(max-width:1000px)");
	const style = {
		position: "absolute" as const,
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: short ? "100%" : 1000,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: short ? 0 : 6,
		pt: short ? 4 : 6,
		maxHeight: short ? "100vh" : "90vh",

		overflow: "auto",
	};

	const InitDetail: DashboardSimDetail = {
		assets: [],
		done: false,
		createdDate: "",
		endDate: "",
		rebalancingPeriod: 40,
		startDate: "",
		strategy: {
			name: "ew",
			done: true,
			dailyPfValues: [],
			dailyPfWeights: [],
			evaluationResults: { cagr: 0 },
			recommendedPf: [],
			rebalancingWeights: [],
		},
		simulationId: "",
	};

	const [open, setOpen] = useState(false);
	const [simDetail, setSimDetail] = useState<DashboardSimDetail>(InitDetail);
	const handleOpen = useCallback(() => setOpen(true), []);
	const handleClose = useCallback(() => setOpen(false), []);

	const { jwt } = useSelector<RootState, AccountState>((state) => state.account);

	const getData = useCallback(async () => {
		try {
			const data = await getDashboardDetail(simId, strName, jwt);
			setSimDetail(data?.data?.data);
		} catch (e) {
			alert("새로고침 후 다시 진행해주세요.");
		}
	}, [simId, strName, jwt]);

	useEffect(() => {
		getData();
	}, []);

	const { assets, strategy, startDate, endDate, rebalancingPeriod } =
		simDetail as DashboardSimDetail;

	return (
		<div>
			<Button sx={{ height: "20px" }} onClick={handleOpen}>
				자세히
			</Button>
			{simDetail !== null ? (
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<CloseBtn onClick={handleClose}>닫기</CloseBtn>
						<P1Summary
							assets={assets}
							strategy={strategy.name}
							startDate={startDate}
							endDate={endDate}
							rebalancingPeriod={rebalancingPeriod}
						/>
						<P2Score str={strategy} recommendedPf={strategy.recommendedPf} assets={assets} />
						<P3Graph str={strategy} />
						<P4PortionChange
							pfWeights={strategy.dailyPfWeights}
							assets={assets}
							rebalancingPeriod={rebalancingPeriod}
						/>
					</Box>
				</Modal>
			) : null}
		</div>
	);
};

export default BasicModal;
