import { BodyContainer, StartBtn, StartContainer } from "../../../../styles";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { fetchAssets } from "../../../../store/slice/assetClass";
import { fetchAssetClass } from "../../../../api/assetClass";
import { Form, FullContainer, HalfContainer } from "../../../../styles/form";
import { useForm } from "react-hook-form";
import Step1Asset from "./components/S1Asset";
import Step2Strategy from "./components/S2Strategy";
import Step3Period from "./components/S4Period";
import Step4Rebalancing from "./components/S3Rebalancing";
import ImgModal from "../../../../Common/Modal/Image";
import SearchModal from "../../../../Common/Modal/Search";
import { allReset } from "../../../../store/slice/backSelection";
import { RootState } from "../../../../store";
import { onBackSubmit } from "../utils/onBackSubmit";

const BackTest = () => {
	const [loading, setLoading] = useState(true);
	const { handleSubmit, control } = useForm();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const {
		assetClass: { assetClass },
		simulation: { isSimulating },
		account: { jwt, userId },
		backSelection: selection,
	} = useSelector<RootState, RootState>((state) => state);

	const fetchAC = useCallback(async () => {
		const {
			data: { data },
		} = await fetchAssetClass(jwt);
		dispatch(fetchAssets(data));
	}, [jwt]);

	useEffect(() => {
		if (isSimulating) {
			navigate("/asset/mypage");
			alert("현재 진행중인 시뮬레이션이 존재합니다.");
			return;
		}
		if (assetClass.length === 0) {
			fetchAC();
		}
		dispatch(allReset());
		setLoading(false);
	}, []);

	const onSubmit = useCallback(
		async (data: any) => {
			const tool = { selection, userId, jwt, dispatch, navigate };
			onBackSubmit(data, tool);
		},
		[selection, userId, jwt, dispatch, navigate]
	);

	return !loading ? (
		<>
			<ImgModal />
			<SearchModal />
			<BodyContainer>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<FullContainer>
						<HalfContainer>
							<Step1Asset />
							<Step2Strategy />
						</HalfContainer>
						<HalfContainer>
							<Step4Rebalancing control={control} />
							<Step3Period control={control} />
						</HalfContainer>
					</FullContainer>
					<StartContainer>
						<StartBtn type="submit" value="시뮬레이션 시작" />
					</StartContainer>
				</Form>
			</BodyContainer>
		</>
	) : null;
};

export default BackTest;
