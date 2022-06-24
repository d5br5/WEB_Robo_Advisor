import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Header from "../Common/Header";

const MyPage = lazy(() => import("../pages/MyPage"));
const BackTest = lazy(() => import("../pages/AssetAllocation/Main"));
const ASResult = lazy(() => import("../pages/AssetAllocation/Result"));
const NoPage = lazy(() => import("../pages/404"));
const Trading = lazy(() => import("../pages/Trading/Main"));
const TSResult = lazy(() => import("../pages/Trading/Result"));

const Router = () => {
	return (
		<>
			<Header />
			<Suspense fallback={<div>Loading,,,</div>}>
				<Routes>
					<Route path="/" element={<BackTest />} />
					<Route path="/asset" element={<BackTest />} />
					<Route path="/asset/result" element={<ASResult />} />
					<Route path="/trading" element={<Trading />} />
					<Route path="/trading/result" element={<TSResult />} />
					<Route path="/mypage" element={<MyPage />} />
					<Route path="*" element={<NoPage />} />
				</Routes>
			</Suspense>
		</>
	);
};

export default Router;
