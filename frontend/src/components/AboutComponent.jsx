import React from "react";
import { Link } from "react-router-dom";
import '../Css/AboutComponent.css';

const AboutComponenet = () => {
	return (
		<>
				<div className="about-card">
					<h1>About Us</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						fringilla, nisl eget placerat fermentum, metus metus rhoncus libero,
						nec ultricies odio purus sit amet nunc. Sed nec scelerisque nunc.
						Nullam at mi nec neque luctus fermentum. Donec sit amet libero at
						libero tempus vestibulum. Sed ut libero suscipit, tincidunt nunc in,
						tincidunt nunc. Sed nec scelerisque nunc. Nullam at mi nec neque
						luctus fermentum. Donec sit amet libero at libero tempus vestibulum.
						Sed ut libero suscipit, tincidunt nunc in, tincidunt nunc. Sed
						fringilla, nisl eget placerat fermentum, metus metus rhoncus libero,
						nec ultricies odio purus sit amet nunc. Sed nec scelerisque nunc.
						Nullam at mi nec neque luctus fermentum. Donec sit amet libero at
						libero tempus vestibulum. Sed ut libero suscipit, tincidunt nunc in,
						tincidunt nunc. Sed nec scelerisque
					</p>
					<div style={{height:"50vh"}}></div>
					<div className="about_cards_container">
						<div className="about_cards">
                            <Link to='/questions'>
							<h3><nobr><b>Explore</b></nobr></h3>
							<p><i>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Quasi, a dolore? Asperiores, aliquam.
								Necessitatibus accusantium quos quibusdam nihil, darchitecto enim laboriosam aut praesentium.
							</i></p>
							</Link>
                        </div>
						<div className="about_cards">
                            <Link to='/contact'>
							<h3><nobr><b>Connect</b></nobr></h3>
							<p><i>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Quasi, a dolore? Asperiores, aliquam.
								Necessitatibus accusantium quos quibusdam nihil, darchitecto enim laboriosam aut praesentium.
							</i></p>
							</Link>
                        </div>
						<div className="about_cards">
                            <Link to='/register'>
							<h3><nobr><b>Join</b></nobr></h3>
							<p><i>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Quasi, a dolore? Asperiores, aliquam.
								Necessitatibus accusantium quos quibusdam nihil, darchitecto enim laboriosam aut praesentium.
							</i></p>
							</Link>
                        </div>
					</div>
				</div>
		</>
	);
};

export default AboutComponenet;
