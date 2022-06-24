import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import ScrollTop from "./Common/ScrollTop";

function App() {
	return (
		<BrowserRouter>
			<ScrollTop />
			<Router />
		</BrowserRouter>
	);
}

export default App;
