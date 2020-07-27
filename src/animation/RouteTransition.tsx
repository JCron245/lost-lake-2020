/**
 * Taken from stolinski: https://gist.github.com/stolinski/f33bbd5e01f37dd9e9003f0f40f55a4f
 */

import React, { FC } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";
import { MountTransition } from "./MountTransition";

type Props = {
	exact?: boolean;
	path?: string;
	slide?: number;
	slideUp?: number;
};

export const RouteTransition: FC<Props> = ({
	children,
	exact = false,
	path,
	slide = 0,
	slideUp = 0,
	...rest
}) => (
	<Route exact={exact} path="/404" {...rest}>
		<MountTransition slide={slide} slideUp={slideUp}>
			{children}
		</MountTransition>
	</Route>
);

type RoutesProps = {
	exitBeforeEnter?: boolean;
	initial?: boolean;
};

export const AnimatedRoutes: FC<RoutesProps> = ({
	children,
	exitBeforeEnter = true,
	initial = false,
}) => {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
			<Switch location={location} key={location.pathname}>
				{children}
			</Switch>
		</AnimatePresence>
	);
};
