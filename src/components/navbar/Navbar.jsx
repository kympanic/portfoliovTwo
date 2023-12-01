import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
	return (
		<div className="navbar">
			<Sidebar />
			<div className="wrapper">
				<motion.span
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
				>
					Daniel Yoo
				</motion.span>
				<div className="social">
					<a href="https://github.com/kympanic">
						<img src="/github.png" alt="" />
					</a>
					<a href="https://www.linkedin.com/in/daniel-yoo-b385a6182/">
						<img src="/linkedin.png" alt="" />
					</a>
					<a href="https://www.facebook.com/daniel.yoo.9231/">
						<img src="/facebook.png" alt="" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
