import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
	return (
		<div>
			<section id="Homepage">
				<Navbar />
				<Hero />
			</section>
			<section id="Experience">Parallax</section>
			<section>Work Experience</section>
			<section id="Portfolio">Parallax</section>
			<section>Portfolio 1</section>
			<section>Portfolio 2</section>
			<section>Portfolio 3</section>
			<section>Portfolio 4</section>
			<section id="Contact">Contact</section>
		</div>
	);
};

export default App;
