import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import * as S from "../../../styles/mypage";
import { memo } from "react";
import { pflist } from "../../../data/portfolio/list";

const History = () => {
	const navigate = useNavigate();
	const selectPF = (index: number) => () => {
		navigate("/trading/result", { state: { idx: index } });
	};

	return (
		<S.HistoryItems>
			{pflist.map((item, i: number) => (
				<S.HistoryItem key={i}>
					<S.HNum>{i + 1}</S.HNum>
					<S.HDate>{item.createdDate}</S.HDate>
					<S.HResult>
						{item.isExecuted ? (
							<S.LinkRed onClick={selectPF(i)}>자세히</S.LinkRed>
						) : (
							<div style={{ marginTop: "4px" }}>
								<CircularProgress size={"1.6rem"} />
							</div>
						)}
					</S.HResult>
				</S.HistoryItem>
			))}
		</S.HistoryItems>
	);
};

export default memo(History);
