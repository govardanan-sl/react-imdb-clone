import React, { useEffect, useState } from 'react'
import SearchField from 'react-search-field';
import SearchResultCard from './SearchResultCard/SearchResultCard';
import './styles.css';
function Search() {
    const [isSearchOpen,setIsSearchOpen]=useState(false);
    const [isError,setIsError]=useState(null);
    const [searchResults,setSearchResults]=useState({
        "Search": [
            {
                "Title": "Star Wars: Episode IV - A New Hope",
                "Year": "1977",
                "imdbID": "tt0076759",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
            },
            {
                "Title": "Star Wars: Episode V - The Empire Strikes Back",
                "Year": "1980",
                "imdbID": "tt0080684",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
            },
            {
                "Title": "Star Wars: Episode VI - Return of the Jedi",
                "Year": "1983",
                "imdbID": "tt0086190",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
            },
            {
                "Title": "Star Wars: Episode VII - The Force Awakens",
                "Year": "2015",
                "imdbID": "tt2488496",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
            },
            {
                "Title": "Star Wars: Episode I - The Phantom Menace",
                "Year": "1999",
                "imdbID": "tt0120915",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
            },
            {
                "Title": "Star Wars: Episode III - Revenge of the Sith",
                "Year": "2005",
                "imdbID": "tt0121766",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
            },
            {
                "Title": "Star Wars: Episode II - Attack of the Clones",
                "Year": "2002",
                "imdbID": "tt0121765",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
            },
            {
                "Title": "Star Trek",
                "Year": "2009",
                "imdbID": "tt0796366",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg"
            },
            {
                "Title": "Star Wars: Episode VIII - The Last Jedi",
                "Year": "2017",
                "imdbID": "tt2527336",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"
            },
            {
                "Title": "Rogue One: A Star Wars Story",
                "Year": "2016",
                "imdbID": "tt3748528",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
            }
        ],
        "totalResults": "3613",
        "Response": "True"
    });

    const handleSearch = (searchText)=>{
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "__cfduid=d45fd0a3d6baf68bb869113fba7a950f31619778673");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        let url = "https://www.omdbapi.com/?apikey=a1a82bd6&s="+searchText
        fetch(url, requestOptions)
        .then(response => {
            if(!response.ok){
                throw Error("Could not Fetch data");
            }
            return response.json();
        })
        .then(result => {
            setSearchResults(result);
            setIsSearchOpen(true);
            setIsError(null);
        })
        .catch((err) => {
            setIsError(true);
            console.log(err.message);
        });
    }
    const onSearchType= (value,e) =>{
        handleSearch(value);
    }
    const removeData = () =>{
        setIsSearchOpen(false);
    }

    return (
        <div className="menu-search" style={{minWidth:`${isSearchOpen?"1024px":"250px"}`}}>
            {isSearchOpen&&<i className="fa fa-times" style={{ fontSize : "2.5rem" }} onClick={removeData}></i>}
            <SearchField classNames="menu-search-box" placeholder="Search Movies" onEnter={onSearchType} onSearchClick={onSearchType}/>
            {isError&&<h1>Error Occured</h1>}
            {isSearchOpen&&searchResults.Search&&searchResults.Search.map((movie)=><SearchResultCard data={movie} onClick={removeData} key={movie.imdbID}/>)}
        </div>
    )
}

export default Search;
