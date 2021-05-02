import React from 'react'
import SearchField from 'react-search-field';
import './styles.css';
function Search() {

    return (
        <div className="menu-search">
            <SearchField classNames="menu-search-box" placeholder="Search Movies"/>
            <div className="search-result" style={{
                display:"none"
             }}>
                <div className="result-container">
                    <div className="movie_card">
                        <div className="left">
                            <div className="datails">
                            <h1>Mission: Impossible – Fallout</h1>
                            <div className="head">
                                <p className="year">2021</p>
                                <p className="genre">Action | Adventure </p>
                            </div>
                        </div>
                    </div>
                    <div className="c_right">
                        <div className="img_c">
                            <img src="https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg" alt="Movie IMG"/>
                        </div>
                    </div>
                    </div>
                    <div className="movie_card">
                        <div className="left">
                            <div className="datails">
                            <h1>Mission: Impossible – Fallout</h1>
                            <div className="head">
                                <p className="year">2021</p>
                                <p className="genre">Action | Adventure </p>
                            </div>
                        </div>
                    </div>
                    <div className="c_right">
                        <div className="img_c">
                            <img src="https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg" alt="Movie IMG"/>
                        </div>
                    </div>
                    </div>
                    <div className="movie_card">
                        <div className="left">
                            <div className="datails">
                            <h1>Mission: Impossible – Fallout</h1>
                            <div className="head">
                                <p className="year">2021</p>
                                <p className="genre">Action | Adventure </p>
                            </div>
                        </div>
                    </div>
                    <div className="c_right">
                        <div className="img_c">
                            <img src="https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg" alt="Movie IMG"/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;
