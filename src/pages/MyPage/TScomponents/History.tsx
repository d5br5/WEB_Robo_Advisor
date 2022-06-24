import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { RootState } from "../../../store";
import { getPFResult } from "../../../api/trading";
import * as S from "../../../styles/mypage";
import { memo, useCallback } from "react";

const History = () => {
	const navigate = useNavigate();
	const {
		account: { jwt },
		trading: { PFs },
	} = useSelector<RootState, RootState>((state) => state);

	const selectPF = useCallback(
		(index: number) => async () => {
			try {
				await getPFResult(PFs[index].portfolioId, 0, jwt);
				navigate("/trading/result", { state: { pfId: PFs[index].portfolioId } });
			} catch (e) {
				alert("서버 에러 발생. 새로고침 후 다시 시도해주세요.");
			}
		},
		[jwt, PFs, navigate]
	);

	return (
		<S.HistoryItems>
			{PFs.map((item, i: number) => (
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
