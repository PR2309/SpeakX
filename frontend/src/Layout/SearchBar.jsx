import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { GoHistory } from "react-icons/go";
import "../Css/SearchBar.css";
const SearchBar = () => {
	return (
		<>
			<div className="SearchBar">
				<button className="search-icon">
					<BsSearch />
				</button>
				<input className="searchBox" type="text" placeholder="Search" />
				<button className="voice-search" style={{ fontSize: "1.20em" }}>
					<FaMicrophone />
				</button>
			</div>
		</>
	);
};

export default SearchBar;
