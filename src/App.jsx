import Test from "./Test";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";

const App = () => {
	return (
		<div>
			<section>
				<Navbar />
			</section>
			<section>Parallax</section>
			<section>Work Experience</section>
			<section>Parallax</section>
			<section>Portfolio 1</section>
			<section>Portfolio 2</section>
			<section>Portfolio 3</section>
			<section>Portfolio 4</section>
			<section>Contact</section>
		</div>
	);
};

export default App;
