import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteSimulationById } from "../../../api/simulation";
import { getSimulationById } from "../../../api/simulation";
import { setSimDetail } from "../../../store/slice/simulation";
import { shortenAssetName } from "../../../utils/AS";
import { setSelectedSimulation, deleteSimuById } from "../../../store/slice/simulation";
import { RootState } from "../../../store";
import { CircularProgress } from "@mui/material";
import * as S from "../../../styles/mypage";
import trash from "../../../assets/MyPage/delete.png";
import { memo, useCallback } from "react";

const History = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {
		simulation: { simulations },
		account: { userId, jwt },
	} = useSelector<RootState, RootState>((state) => state);

	const onDeleteSimulation = useCallback(
		(simulId: string) => async () => {
			try {
				const data = await deleteSimulationById(userId, simulId, jwt);
				if (data?.status === 200) {
					dispatch(deleteSimuById(simulId));
					alert("시뮬레이션이 삭제되었습니다.");
				} else {
					alert("문제가 발생했습니다. 새로고침 후 다시 시도해주세요.");
				}
			} catch (e) {
				alert("서버 문제로 해당 기능은 잠시 중단됩니다. ");
			}
		},
		[userId, jwt]
	);

	const selectSimulation = useCallback(
		(index: number) => async () => {
			dispatch(setSelectedSimulation(index));
			try {
				const data = await getSimulationById(userId, simulations[index].simulationId, jwt);
				if (data) {
					dispatch(setSimDetail(data?.data?.data));
					navigate("/asset/result");
				}
			} catch (e) {
				alert("서버 문제로 해당 기능은 잠시 중단됩니다.");
			}
		},
		[userId, simulations, jwt]
	);

	return (
		<S.HistoryItems>
			{simulations.map((item, i: number) => (
				<S.HistoryItem key={i}>
					<S.HNum>{i + 1}</S.HNum>
					<S.HDate>{item.createdDatetime}</S.HDate>
					<S.HAsset>{shortenAssetName(item.assets)}</S.HAsset>
					<S.HResult>
						{item.done ? (
							<S.LinkRed onClick={selectSimulation(i)}>자세히</S.LinkRed>
						) : (
							<div style={{ marginTop: "4px" }}>
								<CircularProgress size={"1.6rem"} />
							</div>
						)}
					</S.HResult>
					<S.Deletebtn onClick={onDeleteSimulation(item.simulationId)}>
						<img
							src={trash}
							alt=""
							style={{
								maxWidth: "100%",
								height: "auto",
								maxHeight: "100%",
							}}
						/>
					</S.Deletebtn>
				</S.HistoryItem>
			))}
		</S.HistoryItems>
	);
};

export default memo(History);
