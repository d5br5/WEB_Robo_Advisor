import { BodyContainer } from "../../styles";
import { ResultPageContainer } from "../../styles/mypage";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setTimerId } from "../../store/slice/assetClass";
import { initSimuls } from "../../utils/AS";
import { RootState } from "../../store";
import { setIsSimulating } from "../../store/slice/simulation";
import ASNoHistory from "./AScomponents/NoHistory";
import ASHistory from "./AScomponents/History";
import TSNoHistory from "./TScomponents/NoHistory";
import TSHistory from "./TScomponents/History";
import * as S from "../../styles/mypage";
import { initTrading } from "../../utils/TS";

const MyPage = () => {
	const [loading1, setLoading1] = useState(true);
	const [loading2, setLoading2] = useState(true);
	const [refreshDisabled, setRefreshDisabled] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const {
		assetClass: { timerId },
		account: { userId, jwt },
		simulation: { simulations, isSimulating },
		trading: { PFs },
	} = useSelector<RootState, RootState>((state) => state);

	useEffect(() => {
		try {
			initSimuls(dispatch, userId, jwt, timerId);
		} catch (e) {
			alert("에러가 발생했습니다.");
			navigate("/");
		}

		const ongoingSimul = simulations?.find((item) => !item.done);
		let newTimerId: ReturnType<typeof setTimeout> | ReturnType<typeof setInterval>;

		if (ongoingSimul) {
			dispatch(setIsSimulating(true));
			// simulation fetch polling
			newTimerId = setTimeout(() => {
				initSimuls(dispatch, userId, jwt, timerId);
				newTimerId = setInterval(() => initSimuls(dispatch, userId, jwt, timerId), 10000);
			}, 3000);
			dispatch(setTimerId(newTimerId));
		} else {
			dispatch(setIsSimulating(false));
			clearInterval(timerId);
		}
		setLoading1(false);
		return () => clearInterval(newTimerId);
	}, []);

	useEffect(() => {
		(async () => {
			try {
				initTrading(dispatch, "2", jwt);
				setLoading2(false);
			} catch (e) {
				alert("내역 조회 실패. 새로고침 후 다시 시도해주세요.");
			}
		})();
	}, []);

	const onRefresh = () => {
		setRefreshDisabled(true);
		initSimuls(dispatch, userId, jwt, timerId);
		setTimeout(() => setRefreshDisabled(false), 3000);
	};

	return (
		<BodyContainer>
			<ResultPageContainer>
				<S.ResultContainer>
					<S.ResultTitle>시뮬레이션 히스토리</S.ResultTitle>
					{isSimulating && (
						<S.RefreshBtn onClick={onRefresh} disabled={refreshDisabled}>
							{refreshDisabled ? "Refreshed" : "Refresh"}
						</S.RefreshBtn>
					)}
					<S.ResultBox>
						<S.TableHeader>
							<S.HHNum>No.</S.HHNum>
							<S.HHDate>일시</S.HHDate>
							<S.HHAsset>자산명</S.HHAsset>
							<S.HHResult>결과</S.HHResult>
							<S.HHDelete>삭제</S.HHDelete>
						</S.TableHeader>
						{loading1 || simulations.length === 0 ? <ASNoHistory /> : <ASHistory />}
					</S.ResultBox>
				</S.ResultContainer>
				<S.ResultContainer>
					<S.ResultTitle>트레이딩 히스토리</S.ResultTitle>
					<S.ResultBox>
						<S.TableHeader>
							<S.HHNum>No.</S.HHNum>
							<S.HHDate>일시</S.HHDate>
							<S.HHResult>결과</S.HHResult>
						</S.TableHeader>
						{loading2 || PFs.length === 0 ? <TSNoHistory /> : <TSHistory />}
					</S.ResultBox>
				</S.ResultContainer>
			</ResultPageContainer>
		</BodyContainer>
	);
};

export default MyPage;
