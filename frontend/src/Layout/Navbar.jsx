import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "../Css/Navbar.css";
import SearchBar from "./SearchBar";

const backgroundStyle = {
	backgroundImage: "url('/images/homeBg.png')",
	backgroundSize: "cover",
	backgroundPosition: "center",
	position: "fixed",
	bottom: 0,
	left: 0,
	width: "100%",
	height: "100%",
	zIndex: -1,
};

const Navbar = () => {
	const [isSticky, setIsSticky] = useState(false);
	const [isHam, setIsHam] = useState(true);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY +25 > 30) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		});
	}, []);
	const funHam = () => {
		setIsHam(!isHam);
	};
	return (
		<>
			{/* <div style={backgroundStyle}></div> */}
			<nav className={(isSticky)?"sticky-navbar":""}>
			{/* <nav className={isSticky ? "" : ""}> */}
				{isHam ? (
					<div className="navbar">
						<Link to="/">
							<button id="logo-btn">
								<img src="./images/logo.png" alt="Logo" id="logo" />
							</button>
						</Link>
						{/* <div className="options"> */}
						<ul className="menu1">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/questions">Questions</Link>
							</li>
							<li>
								<Link to="/about">
									<nobr>About Us</nobr>
								</Link>
							</li>
							<li>
								<Link to="/contact">
									<nobr>Contact Us</nobr>
								</Link>
							</li>
							{/* <li>
                                <SearchBar/>
                            </li> */}
						</ul>
						<ul className="menu2">
							<li>
								<Link to="/register">Register</Link>
							</li>
							<li>Login</li>
							{/* <li>Logout</li> */}
						</ul>
						<ul className="menu0">
							<button className="ham" onClick={funHam}>
								<GiHamburgerMenu />
							</button>
						</ul>
						{/* </div> */}
					</div>
				) : (
					<div className={`sidebar ${(isHam)?"open":""}`}>
                        <button className="close-btn" onClick={funHam}>
								<GiHamburgerMenu />
						</button>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/questions">Questions</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/register">Sign Up</Link></li>
                            <li><Link to="/register">Sign In</Link></li>
                        </ul>
                    </div>
				)}
			</nav>
		</>
	);
};

export default Navbar;
