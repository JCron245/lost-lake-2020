import React, { useEffect, useState, Suspense } from 'react';
import './App.scss';
import { useLocation } from 'react-router-dom';
import Header from './components/navigation/header/Header';
import Footer from './components/navigation/footer/Footer';
import { AnimatedRoutes, RouteTransition } from './animation/RouteTransition';
import { routes } from './components/navigation/routes';
import NotFound from './components/not-found/NotFound';
import { Helmet } from 'react-helmet';

function App() {
	const location = useLocation();
	const [title, setTitle] = useState<string>();
	const [vw, setVw] = useState<number>(0);
	const [appRoutes, setAppRoutes] = useState<JSX.Element[]>();

	useEffect(() => {
		setVw(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));
		setAppRoutes(
			routes.map(({ path, Component }: any) => (
				<RouteTransition key={path} path={path} exact slide={vw >= 992 ? 30 : 0}>
					<Component />
				</RouteTransition>
			))
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		switch (location.pathname) {
			case '/':
				setTitle('Lost Lake Resort | Home');
				break;
			case '/services':
				setTitle('Lost Lake Resort | Services');
				break;
			case '/rates':
				setTitle('Lost Lake Resort | Rates');
				break;
			case '/map':
				setTitle('Lost Lake Resort | Map');
				break;
			case '/contact':
				setTitle('Lost Lake Resort | Contact');
				break;
			default:
				setTitle('Lost Lake Resort | 404');
				break;
		}
	}, [location]);

	return (
		<div className="app container-lg">
			<Helmet title={title} />
			<Header />
			<Suspense fallback={<div>Loading...</div>}>
				<AnimatedRoutes exitBeforeEnter initial={false}>
					{appRoutes}
					<RouteTransition>
						<NotFound />
					</RouteTransition>
				</AnimatedRoutes>
			</Suspense>
			<Footer />
		</div>
	);
}

export default App;
