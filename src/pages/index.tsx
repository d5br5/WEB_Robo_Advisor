import LoginProcess from "./LoginProcess";
import MyPage from "./MyPage";
import BackTest from "./AssetAllocation/Simulation/BackTest";
import AITest from "./AssetAllocation/Simulation/AITest";
import ASResult from "./AssetAllocation/Result";
import NoPage from "./404";
import RoutePicker from "./AssetAllocation/Simulation";
import Trading from "./Trading/Main";
// import InfoService from "./InfoService";
import TSResult from "./Trading/Result";
import Home from "./Home";

const Pages = {
	Home,
	AS: {
		BackTest,
		AITest,
		ASResult,
		RoutePicker,
	},
	TS: {
		Trading,
		TSResult,
	},
	// InfoService,
	LoginProcess,
	NoPage,
	MyPage,
};

export default Pages;
