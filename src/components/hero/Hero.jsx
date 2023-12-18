import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},

	scrollButton: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 2,
			repeat: Infinity,
		},
	},
};

const sliderVariants = {
	initial: {
		x: 0,
	},
	animate: {
		x: "-220%",
		transition: {
			repeat: Infinity,
			repeatType: "mirror",
			duration: 20,
		},
	},
};
const handleClick = () => {
	console.log("GitHub button clicked");
	window.open("https://github.com/kympanic", "_blank");
};

const Hero = () => {
	return (
		<div className="hero">
			<div className="wrapper">
				<motion.div
					className="textContainer"
					variants={textVariants}
					initial="initial"
					animate="animate"
				>
					<motion.h2 variants={textVariants}>DANIEL YOO</motion.h2>
					<motion.h1 variants={textVariants}>
						Web developer and CRPG Enthusiast
					</motion.h1>
					<motion.div variants={textVariants} className="buttons">
						<motion.button
							variants={textVariants}
							onClick={handleClick}
						>
							Github
						</motion.button>
						<motion.button
							variants={textVariants}
							onClick={() =>
								document
									.getElementById("contact")
									.scrollIntoView()
							}
						>
							Contact Me
						</motion.button>
					</motion.div>
					<motion.img
						variants={textVariants}
						animate="scrollButton"
						src="/scroll.png"
						alt=""
					/>
				</motion.div>
			</div>
			<motion.div
				className="slidingTextContainer"
				variants={sliderVariants}
				initial="initial"
				animate="animate"
			>
				Developer Creator Gamer
			</motion.div>
			<div className="imageContainer">
				<img src="/hero.png" alt="" />
			</div>
		</div>
	);
};

export default Hero;
