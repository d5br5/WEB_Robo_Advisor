import { useForm } from "react-hook-form";
import { BodyContainer, StartBtn, StartContainer } from "../../../styles";
import { Form, FullContainer, HalfContainer } from "../../../styles/form";
import Basic from "./components/Basic";
import Price from "./components/Price";
import Strategy from "./components/Strategy";
import { alertDemo } from "../../../utils";

const Trading = () => {
	const { handleSubmit, control, setValue } = useForm();

	return (
		<BodyContainer>
			<Form onSubmit={handleSubmit(alertDemo)}>
				<FullContainer>
					<HalfContainer>
						<Basic control={control} setValue={setValue} />
					</HalfContainer>
					<HalfContainer>
						<Price control={control} setValue={setValue} />
						<Strategy control={control} />
					</HalfContainer>
				</FullContainer>
				<StartContainer>
					<StartBtn type="submit" value={"포트폴리오 생성"} />
				</StartContainer>
			</Form>
		</BodyContainer>
	);
};

export default Trading;
