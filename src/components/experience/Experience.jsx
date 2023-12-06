import "./experience.scss";
import { motion } from "framer-motion";

const educationDetails = [
	{
		yearRange: "2022 - 2023",
		title: "Software Engineering",
		place: "App Academy",
		desc: "1000-hour immersive full-stack web development intensive bootcamp with <3% acceptance rate",
	},
	{
		yearRange: "2011-2013",
		title: "Associates Degree",
		place: "Montgomery Community College",
		desc: "Provides strong foundation in economics, accounting, management, and project planning",
	},
];

const experienceDetails = [
	{
		yearRange: "2022 - 2023",
		title: "Assistant Manager",
		place: "Snap-E Ed's Country Liquor",
		desc: "Managed monthly budget and sales reports, while optimizing cash flow and identifying cost-saving opportunities, resulting in financial gains for the business",
	},
	{
		yearRange: "2018 - 2022",
		title: "Dental Lab Technician",
		place: "Modern Dental USA",
		desc: "Comprehensive understanding of a wide range of dental lab procedures, with exceptional proficiency in model room operations, die trimming, crown glazing and contouring, enabling the ability to transition between multiple functions to delivery high-quality results",
	},
	{
		yearRange: "2016 - 2018",
		title: "Manager/Owner",
		place: "Plus Dental Studio",
		desc: "Started own dental lab business in College Park, MD. Managed all aspects of inventory for the dental lab, built and maintained strong vendor relationships to secure cost-saving opportunities, and ensuring that the team had all the necessary supplies to delivery high-quality products to clients, driving business growth and success",
	},
];

const Experience = () => {
	return (
		<div className="experience">
			<div className="titleContainer">
				<p>Life</p>
				<h1>SUMMARY</h1>
			</div>
			<div className="summary">
				<div>
					<h1>Education</h1>
					{educationDetails.length > 0 &&
						educationDetails.map((value, index) => (
							<div key={index} className="items">
								<p>{value.yearRange}</p>
								<h3>{value.title}</h3>
								<p>{value.place}</p>
								<p>{value.desc}</p>
							</div>
						))}
				</div>
				<div>
					<h1>Experience</h1>
					{experienceDetails.length > 0 &&
						experienceDetails.map((value, index) => (
							<div key={index}>
								<p className="badge bg-primary text-2 fw-400">
									{value.yearRange}
								</p>
								<h3>{value.title}</h3>
								<p>{value.place}</p>
								<p>{value.desc}</p>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Experience;
