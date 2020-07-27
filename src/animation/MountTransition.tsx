/**
 * Taken from stolinski: https://gist.github.com/stolinski/f33bbd5e01f37dd9e9003f0f40f55a4f
 */

import React, { FC } from "react";
import { motion } from "framer-motion";

type Props = {
	slide?: number;
	slideUp?: number;
};

export const MountTransition: FC<Props> = ({
	children,
	slide = 0,
	slideUp = 0,
}) => (
	<motion.div
		exit={{ opacity: 0, x: slide, y: slideUp }}
		initial={{ opacity: 0, x: slide, y: slideUp }}
		animate={{ opacity: 1, x: 0, y: 0 }}
	>
		{children}
	</motion.div>
);
