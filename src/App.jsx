import "./app.scss";
import Experience from "./components/experience/Experience";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

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
			<section>Portfolio 1</section>
			<section>Portfolio 2</section>
			<section>Portfolio 3</section>
			<section>Portfolio 4</section>
			<section id="Contact">Contact</section>
		</div>
	);
};

export default App;
