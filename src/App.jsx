import "./app.scss";
import Experience from "./components/experience/Experience";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
	return (
		<div>
			<section id="Homepage">
				<Navbar />
				<Hero />
			</section>
			<section id="Experience">
				<Parallax type="experience" />
			</section>
			<section>
				<Experience />
			</section>
			<section id="Portfolio">
				<Parallax type="portfolio" />
			</section>
			<Portfolio />
			<section id="Contact">Contact</section>
		</div>
	);
};

export default App;
