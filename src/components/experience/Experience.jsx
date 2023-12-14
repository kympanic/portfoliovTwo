import "./experience.scss";
import { motion } from "framer-motion";

const educationDetails = [
	{
		yearRange: "2023 - 2023",
		title: "AWS Cloud Practitioner Certificate",
		place: "AWS",
		desc: "Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.",
	},
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
		yearRange: "2023 - 2023",
		title: "Frontend Developer Intern",
		place: "Gemship",
		desc: "In my front-end development role, I enhanced website efficiency and user experience. I focused on learning TypeScript to refactor code for reusability, implemented a pagination system for art displays to optimize backend resource usage, redesigned product cards to improve visual appeal and user engagement, and collaborated closely with the lead developer on various weekly tasks.",
	},
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

const variants = {
	initial: {
		x: -500,
		y: 100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
		},
	},
};

const Experience = () => {
	return (
		<motion.div className="experience">
			<motion.div className="titleContainer">
				<p>Life</p>
				<h1>SUMMARY</h1>
			</motion.div>
			<motion.div className="summary">
				<motion.div
					variants={variants}
					initial="initial"
					whileInView="animate"
					className="education"
				>
					<motion.h1>Education</motion.h1>
					{educationDetails.length > 0 &&
						educationDetails.map((value, index) => (
							<motion.div
								key={index}
								className="items"
								whileHover={{ scale: 1.1 }}
								variants={variants}
								initial="initial"
								whileInView="animate"
							>
								<p>{value.yearRange}</p>
								<h3>{value.title}</h3>
								<p className="place">{value.place}</p>
								<p>{value.desc}</p>
							</motion.div>
						))}
				</motion.div>
				<motion.div
					variants={variants}
					initial="initial"
					whileInView="animate"
				>
					<motion.h1>Experience</motion.h1>
					{experienceDetails.length > 0 &&
						experienceDetails.map((value, index) => (
							<motion.div
								key={index}
								className="otheritems"
								whileHover={{
									scale: 1.1,
								}}
								variants={variants}
								initial="initial"
								whileInView="animate"
							>
								<p className="expYear">{value.yearRange}</p>
								<h3>{value.title}</h3>
								<p className="workplace">{value.place}</p>
								<p>{value.desc}</p>
							</motion.div>
						))}
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Experience;
