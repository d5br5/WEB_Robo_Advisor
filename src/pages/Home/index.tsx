import { BodyContainer } from "../../styles";
import bannerImg from "../../assets/Home/homebanner.jpg";
import Banner from "../../Common/Banner";
import AssetDistribution from "./components/AssetDistribution";
import Simulator from "./components/Simulator";
import AssetType from "./components/AssetType";
import Strategy from "./components/Strategy";
import Models from "./components/Models";
import { memo } from "react";

const Home = () => {
	return (
		<>
			<Banner
				bgImg={bannerImg}
				title={[[0, "WA:IN"]]}
				desc={[
					"한 종목에 투자금을 집중했다가 큰 돈을 잃어보셨나요?",
					"쏠림투자에서는 시장 변동성이 커질수록 손실 위험이 증가합니다.",
					"전술적인 분산 투자는 손실 위험을 막고, 위기에서 반등의 기회를 제공합니다.",
					"AI를 탑재한 WA:IN의 금융자산 관리	시뮬레이터를 통해",
					"전술적으로 자산을 배분하여 효과적인 투자를 경험해보세요!",
				]}
			/>
			<BodyContainer>
				<AssetDistribution />
				<Simulator />
				<AssetType />
				<Strategy />
				<Models />
			</BodyContainer>
		</>
	);
};

export default memo(Home);
