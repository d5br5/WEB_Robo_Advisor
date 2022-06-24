import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSimDetail } from "../../../store/slice/simulation";
import { shortenAssetName } from "../../../utils/AS";
import { setSelectedSimulation } from "../../../store/slice/simulation";
import { CircularProgress } from "@mui/material";
import * as S from "../../../styles/mypage";
import trash from "../../../assets/MyPage/delete.png";
import { memo } from "react";
import { alertDemo } from "../../../utils";
import { simList } from "../../../data/simulation/list";
import { sim1 } from "../../../data/simulation/1";
import { sim2 } from "../../../data/simulation/2";
import { sim3 } from "../../../data/simulation/3";
import { sim4 } from "../../../data/simulation/4";
import { sim5 } from "../../../data/simulation/5";

const History = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const selectSimulation = (index: number) => () => {
		dispatch(setSelectedSimulation(index));
		if (index === 0) dispatch(setSimDetail(sim1));
		if (index === 1) dispatch(setSimDetail(sim2));
		if (index === 2) dispatch(setSimDetail(sim3));
		if (index === 3) dispatch(setSimDetail(sim4));
		if (index === 4) dispatch(setSimDetail(sim5));
		navigate("/asset/result");
	};

	return (
		<S.HistoryItems>
			{simList.map((item, i: number) => (
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
					<S.Deletebtn onClick={alertDemo}>
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
