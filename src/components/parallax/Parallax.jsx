import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
	const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

	return (
		<div
			className="parallax"
			ref={ref}
			style={{
				background:
					type === "experience"
						? "linear-gradient(180deg, #040d12, #183d3d)"
						: "linear-gradient(180deg, #183d3d, #5C8374)",
			}}
		>
			<motion.h1 style={{ y: yText }}>
				{type === "experience" ? "My Experience" : "My Portfolio"}
			</motion.h1>
			<motion.div className="mountains"></motion.div>
			<motion.div style={{ y: yBg }} className="planets"></motion.div>
			<motion.div style={{ x: yBg }} className="stars"></motion.div>
		</div>
	);
};

export default Parallax;
