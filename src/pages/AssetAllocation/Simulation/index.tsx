import { PickerContainer } from "../../../Common/Picker/styles";
import Picker from "../../../Common/Picker";
import statistics from "../../../assets/Picker/statistics.png";
import aimodel from "../../../assets/Picker/aimodel.png";

const RoutePicker = () => {
	return (
		<PickerContainer>
			<Picker
				link="/asset/backtest"
				title="통계 모델"
				desc={["수익률과 변동성을 기반으로", "포트폴리오의 비중을 계산"]}
				img={statistics}
			/>
			<Picker
				link="/asset/aitest"
				title="AI 모델"
				desc={["다양한 시장에 대한 시뮬레이션을 통해", "최적의 포트폴리오를 구성"]}
				img={aimodel}
			/>
		</PickerContainer>
	);
};

export default RoutePicker;
