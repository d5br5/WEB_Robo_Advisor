import Pt1Summary from "./components/Pt1Summary";
import Pt2StrComparison from "./components/Pt2StrComparison";
import Pt3Porfolio from "./components/Pt3Porfolio";
import Pt4SimProcessResult from "./components/Pt4SimProcessResult";
import Pt5PortfolioChange from "./components/Pt5PortfolioChange";
import { BodyContainer } from "../../../styles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ResultContainer } from "../../../styles/result";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store";
import { SimulationState } from "../../../types/state";

const Result = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const { simDetail } = useSelector<RootState, SimulationState>((state) => state.simulation);

	useEffect(() => {
		if (Object.keys(simDetail).length === 0) {
			alert("올바르지 않은 접근입니다. 마이페이지를 경유바랍니다.");
			navigate("/mypage");
			return;
		}
		setLoading(false);
	}, []);

	return !loading ? (
		<BodyContainer>
			<ResultContainer>
				<Pt1Summary simDetail={simDetail} />
				<Pt2StrComparison simDetail={simDetail} />
				<Pt3Porfolio simDetail={simDetail} />
				<Pt4SimProcessResult strategies={simDetail.strategies} />
				<Pt5PortfolioChange simDetail={simDetail} />
			</ResultContainer>
		</BodyContainer>
	) : null;
};

export default Result;
