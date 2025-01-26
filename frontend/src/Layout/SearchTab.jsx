import React, {useState} from "react";
import {Link} from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { GoHistory } from "react-icons/go";
import { ImCross } from "react-icons/im";
import "../Css/SearchTab.css";
const SearchTab = ({ setIsSearch, isSearch }) => {
    const closeSearchWin=()=>{
        setIsSearch(false);
    }
	return (
		<>
            <div className="tab" onClick={closeSearchWin}></div>
			<div className="search-tab">
				<div className="searchTab-heads" id="search-head">
					<button className="tab-btn search-btn-Tab">
						<BsSearch />
					</button>
					<input type="text" placeholder="Search your query..." />
					<button className="tab-btn voice-btn-Tab">
						<FaMicrophone />
					</button>
                    <button className="tab-btn cross-btn-Tab" onClick={closeSearchWin}>
                        <ImCross />
                    </button>
				</div>
				<div id="search-body">
					<aside className="filter">
						<h3 className="searchTab-head">Filter</h3>
						<div className="filter-section">
							<ul className="filter-list">
								<li>
									<i>
										<b>Difficulty</b>
									</i>
								</li>
								<li>
									<label>Easy</label>
								</li>
								<li>
									<label>Medium</label>
								</li>
								<li>
									<label>Hard</label>
								</li>
							</ul>
							<ul className="filter-list">
								<li>
									<i>
										<b>Type</b>
									</i>
								</li>
								<li>
									<label>ANAGRAM</label>
								</li>
								<li>
									<label>READ_ALONG</label>
								</li>
								<li>
									<label>MCQ</label>
								</li>
								<li>
									<label>SENTENCE</label>
								</li>
								<li>
									<label>WORD</label>
								</li>
							</ul>
							<ul className="filter-list">
								<li>
									<i>
										<b>Topics</b>
									</i>
								</li>
								<li>
									<label>Easy</label>
								</li>
								<li>
									<label>Medium</label>
								</li>
								<li>
									<label>Hard</label>
								</li>
							</ul>
							<ul className="filter-list">
								<li>
									<i>
										<b>Topics</b>
									</i>
								</li>
								<li>
									<label>Easy</label>
								</li>
								<li>
									<label>Medium</label>
								</li>
								<li>
									<label>Hard</label>
								</li>
							</ul>
						</div>
					</aside>
					<div className="line"></div>
					<main className="history">
						<h3 className="searchTab-head">History</h3>
						<div className="history-section">
							<div className="history-card">
                                <Link to="/questions">
                                <nobr>
                                <GoHistory />&nbsp;&nbsp;
                                <span>
                                    Abc..........................
                                </span>
                                </nobr>
                                </Link>
                            </div>
							<div className="history-card">
                                <Link to="/questions">
                                <nobr>
                                <GoHistory />&nbsp;&nbsp;
                                <span>
                                    Abc..........................
                                </span>
                                </nobr>
                                </Link>
                            </div>
							<div className="history-card">
                                <Link to="/questions">
                                <nobr>
                                <GoHistory />&nbsp;&nbsp;
                                <span>
                                    Abc..........................
                                </span>
                                </nobr>
                                </Link>
                            </div>
							<div className="history-card">
                                <Link to="/questions">
                                <nobr>
                                <GoHistory />&nbsp;&nbsp;
                                <span>
                                    Abc..........................
                                </span>
                                </nobr>
                                </Link>
                            </div>
                            
						</div>
					</main>
				</div>
			</div>
		</>
	);
};

export default SearchTab;
