import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function SearchResultCard({data,onClick}) {
    return (
        <div>
        {<Link to={`/movie/${data.imdbID}`} onClick={onClick}><div className="search-result">
            <div className="result-container">
                <div className="movie_card">
                    <div className="left">
                        <div className="datails">
                        <h1>{data.Title}</h1>
                        <div className="head">
                            <p className="year">{data.Year}</p>
                            <p className="genre">{data.Type}</p>
                        </div>
                    </div>
                </div>
                <div className="c_right">
                    <div className="img_c">
                        <img src={data.Poster} alt="Movie IMG"/>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </Link>}
        </div>
    )
}

export default SearchResultCard;
