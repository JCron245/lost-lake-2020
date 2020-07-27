import React, { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/navigation/header/Header";
import Footer from "./components/navigation/footer/Footer";
import { AnimatedRoutes, RouteTransition } from "./animation/RouteTransition";
import { routes } from "./components/navigation/routes";
import NotFound from "./components/not-found/NotFound";

function App() {
	const [vw, setVw] = useState<number>(0);

	useEffect(() => {
		setVw(
			Math.max(
				document.documentElement.clientWidth || 0,
				window.innerWidth || 0
			)
		);
	}, []);

	return (
		<div className="app container-lg">
			<BrowserRouter>
				<Header />
				<AnimatedRoutes exitBeforeEnter initial={false}>
					{routes.map(({ path, Component }: any) => (
						<RouteTransition
							key={path}
							path={path}
							exact
							slide={vw >= 992 ? 30 : 0}
						>
							<Component />
						</RouteTransition>
					))}
					<RouteTransition>
						<NotFound />
					</RouteTransition>
				</AnimatedRoutes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
