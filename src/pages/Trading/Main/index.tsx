import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import { inputJsonParser } from "../../../utils/TS";
import { createTrading } from "../../../api/trading";
import { BodyContainer, StartBtn, StartContainer } from "../../../styles";
import { Form, FullContainer, HalfContainer } from "../../../styles/form";
import { StringOption } from "../../../config/data/TS";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { AccountState } from "../../../types/state";
import Basic from "./components/Basic";
import Price from "./components/Price";
import Strategy from "./components/Strategy";
import { useNavigate } from "react-router-dom";

const Trading = () => {
	const [buyStrs, setBuyStrs] = useState<Array<StringOption>>([]);
	const [sellStrs, setSellStrs] = useState<Array<StringOption>>([]);
	const { register, handleSubmit, control, setValue } = useForm();
	const { userId, jwt } = useSelector<RootState, AccountState>((state) => state.account);
	const navigate = useNavigate();

	const onSubmit = useCallback(
		async (data: any) => {
			if (userId === "") {
				alert("로그인 후 이용 가능합니다.");
				return;
			}
			const json = inputJsonParser(data, buyStrs, sellStrs, userId);
			try {
				await createTrading(userId, json, jwt);
				navigate("/mypage");
			} catch (e) {
				alert("새로고침 후 다시 시작해주세요.");
			}
		},
		[userId, buyStrs, sellStrs, jwt, navigate]
	);

	return (
		<BodyContainer>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FullContainer>
					<HalfContainer>
						<Basic control={control} setValue={setValue} />
					</HalfContainer>
					<HalfContainer>
						<Price control={control} setValue={setValue} />
					</HalfContainer>
				</FullContainer>
				<FullContainer>
					<Strategy
						control={control}
						setValue={setValue}
						register={register}
						buyStrs={buyStrs}
						setBuyStrs={setBuyStrs}
						sellStrs={sellStrs}
						setSellStrs={setSellStrs}
					/>
				</FullContainer>
				<StartContainer>
					<StartBtn type="submit" value={"포트폴리오 생성"} />
				</StartContainer>
			</Form>
		</BodyContainer>
	);
};

export default Trading;
