import { useRef, useState } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
	const ref = useRef();
	// const [faceAnimation, setFaceAnimation] = useState(false);

	const [face, setFace] = useState(null);

	const addFace = () => {
		const newFace = {
			id: Math.random(), // Unique identifier
			startX: `${Math.random() * 100 - 50}vw`, // Random start position
			endX: `${Math.random() * 100 - 50}vw`, // Random end position
		};
		setFace(newFace);
	};

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
	const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

	// const toggleFaceAnimation = () => {
	// 	console.log("toggleFaceAnimation triggered");
	// 	setFaceAnimation(!faceAnimation);
	// };
	return (
		<div
			className="parallax"
			onClick={addFace}
			cursor="pointer"
			ref={ref}
			style={{
				background:
					type === "experience"
						? "linear-gradient(180deg, black, #183d3d)"
						: "linear-gradient(180deg, #183d3d, #5C8374)",
				cursor: "pointer",
			}}
		>
			<motion.h1 style={{ y: yText }}>
				{type === "experience" ? "My Experience" : "My Portfolio"}
			</motion.h1>
			<motion.div
				className="mountains"
				style={{
					backgroundImage: `url(${"/mountains.png"})`,
				}}
			></motion.div>
			<motion.div
				className="planets"
				style={{
					y: yBg,
					backgroundImage: `url(${
						type === "experience" ? "/planets.png" : "/sun.png"
					})`,
				}}
			></motion.div>
			{face && (
				<motion.div
					key={face.id}
					className="face"
					style={{ backgroundImage: `url(${"/hi.png"})` }}
					initial={{ x: face.startX, opacity: 0 }}
					animate={{ x: face.endX, opacity: 1 }}
					transition={{ duration: 1, type: "tween" }}
				></motion.div>
			)}

			{/* <motion.div
				className="face"
				initial={{ x: "-100vw", opacity: 0 }} // Start off-screen to the left
				animate={{
					x: faceAnimation ? "100vw" : "-100vw", // Move to off-screen right
					opacity: faceAnimation ? 1 : 0,
				}}
				transition={{ duration: 3, type: "tween" }}
			></motion.div> */}
			<motion.div style={{ x: yBg }} className="stars"></motion.div>
		</div>
	);
};

export default Parallax;
