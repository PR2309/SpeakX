import React, { useState } from "react";
import SearchBar from "../Layout/SearchBar";
import SearchTab from "../Layout/SearchTab";
import "../Css/HomeComponent.css";
const Home = () => {
	const [isSearch, setIsSearch] = useState(false);
	const searchWin = () => {
		setIsSearch(!isSearch);
	};
	return (
		<>
			<div className="home">
				{!isSearch ? (
					<>
						<div className="home-heading">
							<h1>
								<nobr>
									Welcome to&nbsp;
									<b>
										<span style={{ color: "black" }}>Speak</span>
										<span id="X">
											<i>X&nbsp;</i>
										</span>
									</b>
								</nobr>
							</h1>
							<p>
								Suscipit corporis cupiditate fugiat accusantium, debitis in
								assumenda? Rem, magnam in?
							</p>
						</div>
						<div onClick={searchWin}>
							<SearchBar />
						</div>
					</>
				) : (
					<div>
						<SearchTab isSearch={isSearch} setIsSearch={setIsSearch} />
					</div>
				)}
			</div>
		</>
	);
};

export default Home;
