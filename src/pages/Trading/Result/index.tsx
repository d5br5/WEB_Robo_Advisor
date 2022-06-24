import { BodyContainer } from "../../../styles";
import { ResultContainer } from "../../../styles/result";
import Config from "./components/Config";
import Summary from "./components/Summary";

const Result = () => {
	return (
		<BodyContainer>
			<ResultContainer>
				<Config />
				<Summary />
			</ResultContainer>
		</BodyContainer>
	);
};

export default Result;
