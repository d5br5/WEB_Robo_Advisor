import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Header from "../Common/Header";

const LoginProcess = lazy(() => import("../pages/LoginProcess"));
const MyPage = lazy(() => import("../pages/MyPage"));
const BackTest = lazy(() => import("../pages/AssetAllocation/Simulation/BackTest"));
const AITest = lazy(() => import("../pages/AssetAllocation/Simulation/AITest"));
const ASResult = lazy(() => import("../pages/AssetAllocation/Result"));
const NoPage = lazy(() => import("../pages/404"));
const RoutePicker = lazy(() => import("../pages/AssetAllocation/Simulation"));
const Trading = lazy(() => import("../pages/Trading/Main"));
const TSResult = lazy(() => import("../pages/Trading/Result"));

const PrivateRoute = lazy(() => import("./PR"));
// import InfoService from "./InfoService";

const Home = lazy(() => import("../pages/Home"));

const Router = () => {
	return (
		<>
			<Header />
			<Suspense fallback={<div>Loading,,,</div>}>
				<Routes>
					<Route path="/" element={<Home />} />

					<Route
						path="/asset"
						element={
							<PrivateRoute>
								<RoutePicker />
							</PrivateRoute>
						}
					/>
					<Route
						path="/asset/backtest"
						element={
							<PrivateRoute>
								<BackTest />
							</PrivateRoute>
						}
					/>
					<Route
						path="/asset/aitest"
						element={
							<PrivateRoute>
								<AITest />
							</PrivateRoute>
						}
					/>
					<Route
						path="/asset/result"
						element={
							<PrivateRoute>
								<ASResult />
							</PrivateRoute>
						}
					/>

					<Route
						path="/trading"
						element={
							<PrivateRoute>
								<Trading />
							</PrivateRoute>
						}
					/>
					<Route
						path="/trading/result"
						element={
							<PrivateRoute>
								<TSResult />
							</PrivateRoute>
						}
					/>

					{/* <Route path="/infoservice" element={<P.InfoService />} /> */}
					<Route path="/loginprocess" element={<LoginProcess />} />
					<Route path="/mypage" element={<MyPage />} />
					<Route path="*" element={<NoPage />} />
				</Routes>
			</Suspense>
		</>
	);
};

export default Router;
