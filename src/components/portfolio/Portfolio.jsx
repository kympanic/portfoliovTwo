import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
	{
		id: 1,
		title: "Trivia Fighter",
		img: "/project-1.png",
		description:
			"A full stack application that purports to the theme of a trivia game site, with a focus on three main features: trivia packages, questions, and reviews. Several partial CRUD features include Search, the game itself, and game data history.",
		technologies:
			"HTML5, CSS3, Javascript, Python, React, Flask, PostgreSQL, SQLAlchemy, Node.js",
		url: "https://trivia-fighter-app.onrender.com/",
	},
	{
		id: 2,
		title: "HomeCookedvTwo",
		img: "/homecookedvtwo.png",
		description:
			"Group Project: Homecooked is a one stop shop for finding local vendors that will cook up your next delicious meal. A full stack application that purports to the theme of the Etsy website, with a focus on two main features: Products and Reviews, and several partial CRUD features including Search, Orders, and Cart. Originally a group project, this work-in-progress site has updated ui design, cart and payment system, profile and shop dashboards, and chat features. You can see the old version live here.",
		technologies:
			"JavaScript, Express,Node.js, React/Redux, Tailwindcss, MongoDB",
		url: "https://github.com/kympanic/homecooked_verTwo",
	},
	{
		id: 3,
		title: "MERN App Starter",
		img: "/mern-starter1.png",
		description:
			"This MERN stack application is ready for deployment to Render. This project focuses more on the backend with user authentication, validation middleware, error handling, and MongoDB connection. Frontend has a simple design with register, login, and logout functionality. DL on Github: https://github.com/kympanic/mernapp-starter",
		technologies: "JavaScript, Express, React/Redux, CSS3, HTML5, MongoDB",
		url: "https://mern-app-starter.onrender.com/",
	},
	{
		id: 4,
		title: "KWave",
		img: "project-2.png",
		description:
			"My first attempt at a full stack project with two FULL CRUD features. KWave is a SoundCloud clone with a Kpop music theme. Users are able to login/signup and upload/share their music with others",
		technologies:
			"HTML5, CSS3, JavaScript, React, Express, Sequelize, PostgreSQL, Node.js",
		url: "https://kwave-soundcloud-clone.onrender.com/",
	},
];

const Single = ({ item }) => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		// offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

	const handleClick = () => {
		window.open(item.url, "_blank");
	};

	return (
		<section>
			<div className="container">
				<div className="wrapper">
					<div className="imageContainer" ref={ref}>
						<img src={item.img} alt="" />
					</div>
					<motion.div className="textContainer" style={{ y }}>
						<h2>{item.title}</h2>
						<p>{item.description}</p>
						<motion.button
							onClick={handleClick}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							Demo
						</motion.button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

const Portfolio = () => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	});

	return (
		<div className="portfolio" ref={ref}>
			<div className="progress">
				<h1>Featured Projects</h1>
				<motion.div
					style={{ scaleX }}
					className="progressBar"
				></motion.div>
			</div>
			{items.map((item) => (
				<Single item={item} key={item.id} />
			))}
		</div>
	);
};

export default Portfolio;
