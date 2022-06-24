import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BodyContainer, StartBtn, StartContainer } from "../../../../styles";
import { Form, FullContainer, HalfContainer } from "../../../../styles/form";
import { RootState } from "../../../../store";
import { AccountState } from "../../../../types/state";
import { onAISubmit } from "../utils/onAISubmit";
import ImageModal from "../../../../Common/Modal/Image";
import S1Asset from "./components/S1Asset";
import S3Period from "./components/S2Period";
import S4Rebalancing from "./components/S3Rebalancing";

const AITestContainer = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [num, setNum] = useState<0 | 1>(0);
	const { handleSubmit, control } = useForm();
	const { userId, jwt } = useSelector<RootState, AccountState>((state) => state.account);

	const onSubmit = useCallback(
		async (data: any) => {
			const tool = { dispatch, navigate, userId, jwt, num };
			onAISubmit(data, tool);
		},
		[dispatch, navigate, userId, jwt, num]
	);

	return (
		<>
			<ImageModal />
			<BodyContainer>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<FullContainer>
						<HalfContainer>
							<S1Asset num={num} setNum={setNum} />
						</HalfContainer>
						<HalfContainer>
							<S3Period num={num} />
							<S4Rebalancing control={control} />
						</HalfContainer>
					</FullContainer>
					<StartContainer>
						<StartBtn type="submit" value="시뮬레이션 시작" />
					</StartContainer>
				</Form>
			</BodyContainer>
		</>
	);
};

export default AITestContainer;
