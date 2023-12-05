import "./hero.scss";

const Hero = () => {
	return (
		<div className="hero">
			<div className="wrapper">
				<div className="textContainer">
					<h2>DANIEL YOO</h2>
					<h1>Web developer and CRPG Enthusiast</h1>
					<div className="buttons">
						<button>See the latest works</button>
						<button>Contact Me</button>
					</div>
					<img src="/scroll.png" alt="" />
				</div>
			</div>
			<div className="imageContainer">
				<img src="/hero.png" alt="" />
			</div>
		</div>
	);
};

export default Hero;
