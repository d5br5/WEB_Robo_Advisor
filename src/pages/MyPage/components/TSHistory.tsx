import { useNavigate } from "react-router-dom";
import { memo } from "react";
import { pflist } from "../../../data/portfolio/list";
import { alertDemo } from "../../../utils";
import * as S from "../../../styles/mypage";
import trash from "../../../assets/MyPage/delete.png";

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
					<S.HAsset>
						{item.info.universe} : {item.info.periods[0]} ~{" "}
						{item.info.periods[1]}
					</S.HAsset>
					<S.HResult>
						<S.LinkRed onClick={selectPF(i)}>자세히</S.LinkRed>
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
