import React, { Component } from 'react'
import './styles.scss'
import 'font-awesome/css/font-awesome.min.css';
import MovieCard from '../MovieList/MovieCard';
import Masonry from 'react-masonry-component';
const masonryOptions = {
    transitionDuration: 0
};
class Home extends Component {
  render() {
    const data=[
      {
        "Title": "Rogue One: A Star Wars Story",
        "Year": "2016",
        "Rated": "PG-13",
        "Released": "16 Dec 2016",
        "Runtime": "133 min",
        "Genre": "Action, Adventure, Sci-Fi",
        "Director": "Gareth Edwards",
        "Writer": "Chris Weitz (screenplay by), Tony Gilroy (screenplay by), John Knoll (story by), Gary Whitta (story by), George Lucas (based on characters created by)",
        "Actors": "Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen",
        "Plot": "The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the plans for the Death Star.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Nominated for 2 Oscars. Another 24 wins & 81 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.8/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "84%"
            },
            {
                "Source": "Metacritic",
                "Value": "65/100"
            }
        ],
        "Metascore": "65",
        "imdbRating": "7.8",
        "imdbVotes": "563,671",
        "imdbID": "tt3748528",
        "Type": "movie",
        "DVD": "24 Mar 2017",
        "BoxOffice": "$532,177,324",
        "Production": "Lucasfilm Ltd.",
        "Website": "N/A",
        "Response": "True"
    },
      {
        "Title": "Star Wars: Episode IV - A New Hope",
        "Year": "1977",
        "Rated": "PG",
        "Released": "25 May 1977",
        "Runtime": "121 min",
        "Genre": "Action, Adventure, Fantasy, Sci-Fi",
        "Director": "George Lucas",
        "Writer": "George Lucas",
        "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
        "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 6 Oscars. Another 57 wins & 29 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.6/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "92%"
            },
            {
                "Source": "Metacritic",
                "Value": "90/100"
            }
        ],
        "Metascore": "90",
        "imdbRating": "8.6",
        "imdbVotes": "1,245,210",
        "imdbID": "tt0076759",
        "Type": "movie",
        "DVD": "10 Oct 2016",
        "BoxOffice": "$460,998,507",
        "Production": "Lucasfilm Ltd.",
        "Website": "N/A",
        "Response": "True"
    },
    {
      "Title": "The Avengers",
      "Year": "2012",
      "Rated": "PG-13",
      "Released": "04 May 2012",
      "Runtime": "143 min",
      "Genre": "Action, Adventure, Sci-Fi",
      "Director": "Joss Whedon",
      "Writer": "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
      "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
      "Plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      "Language": "English, Russian, Hindi",
      "Country": "USA",
      "Awards": "Nominated for 1 Oscar. Another 38 wins & 79 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [
          {
              "Source": "Internet Movie Database",
              "Value": "8.0/10"
          },
          {
              "Source": "Rotten Tomatoes",
              "Value": "91%"
          },
          {
              "Source": "Metacritic",
              "Value": "69/100"
          }
      ],
      "Metascore": "69",
      "imdbRating": "8.0",
      "imdbVotes": "1,275,816",
      "imdbID": "tt0848228",
      "Type": "movie",
      "DVD": "22 Nov 2015",
      "BoxOffice": "$623,357,910",
      "Production": "Marvel Studios",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Zack Snyder's Justice League",
      "Year": "2021",
      "Rated": "R",
      "Released": "18 Mar 2021",
      "Runtime": "242 min",
      "Genre": "Action, Adventure, Fantasy, Sci-Fi",
      "Director": "Zack Snyder",
      "Writer": "Jerry Siegel (Superman created by), Joe Shuster (Superman created by), Zack Snyder (story by), Chris Terrio (story by), Will Beall (story by), Chris Terrio (screenplay by), Gardner Fox (Justice League of America created by), Bob Kane (Batman created by), Bill Finger (Batman created by), William Moulton Marston (Wonder Woman created by), Jack Kirby (Fourth World created by)",
      "Actors": "Ben Affleck, Henry Cavill, Amy Adams, Gal Gadot",
      "Plot": "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
      "Language": "English, Icelandic, French",
      "Country": "USA, UK",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
      "Ratings": [
          {
              "Source": "Internet Movie Database",
              "Value": "8.2/10"
          },
          {
              "Source": "Metacritic",
              "Value": "54/100"
          }
      ],
      "Metascore": "54",
      "imdbRating": "8.2",
      "imdbVotes": "236,517",
      "imdbID": "tt12361974",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Crime, Drama, Thriller",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 157 wins & 163 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "9.0/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "94%"
        },
        {
            "Source": "Metacritic",
            "Value": "84/100"
        }
    ],
    "Metascore": "84",
    "imdbRating": "9.0",
    "imdbVotes": "2,341,244",
    "imdbID": "tt0468569",
    "Type": "movie",
    "DVD": "14 Jun 2010",
    "BoxOffice": "$534,858,444",
    "Production": "Syncopy",
    "Website": "N/A",
    "Response": "True"
},
{
  "Title": "The Shawshank Redemption",
  "Year": "1994",
  "Rated": "R",
  "Released": "14 Oct 1994",
  "Runtime": "142 min",
  "Genre": "Drama",
  "Director": "Frank Darabont",
  "Writer": "Stephen King (short story \"Rita Hayworth and Shawshank Redemption\"), Frank Darabont (screenplay)",
  "Actors": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
  "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  "Language": "English",
  "Country": "USA",
  "Awards": "Nominated for 7 Oscars. Another 21 wins & 36 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "9.3/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "91%"
      },
      {
          "Source": "Metacritic",
          "Value": "80/100"
      }
  ],
  "Metascore": "80",
  "imdbRating": "9.3",
  "imdbVotes": "2,381,013",
  "imdbID": "tt0111161",
  "Type": "movie",
  "DVD": "15 Aug 2008",
  "BoxOffice": "$28,699,976",
  "Production": "Columbia Pictures, Castle Rock Entertainment",
  "Website": "N/A",
  "Response": "True"
},
{
  "Title": "The Godfather",
  "Year": "1972",
  "Rated": "R",
  "Released": "24 Mar 1972",
  "Runtime": "175 min",
  "Genre": "Crime, Drama",
  "Director": "Francis Ford Coppola",
  "Writer": "Mario Puzo (screenplay by), Francis Ford Coppola (screenplay by), Mario Puzo (based on the novel by)",
  "Actors": "Marlon Brando, Al Pacino, James Caan, Richard S. Castellano",
  "Plot": "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
  "Language": "English, Italian, Latin",
  "Country": "USA",
  "Awards": "Won 3 Oscars. Another 28 wins & 30 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "9.2/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "97%"
      },
      {
          "Source": "Metacritic",
          "Value": "100/100"
      }
  ],
  "Metascore": "100",
  "imdbRating": "9.2",
  "imdbVotes": "1,646,831",
  "imdbID": "tt0068646",
  "Type": "movie",
  "DVD": "01 Aug 2013",
  "BoxOffice": "$134,966,411",
  "Production": "Paramount Pictures",
  "Website": "N/A",
  "Response": "True"
},{
  "Title": "Inception",
  "Year": "2010",
  "Rated": "PG-13",
  "Released": "16 Jul 2010",
  "Runtime": "148 min",
  "Genre": "Action, Adventure, Sci-Fi, Thriller",
  "Director": "Christopher Nolan",
  "Writer": "Christopher Nolan",
  "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
  "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  "Language": "English, Japanese, French",
  "Country": "USA, UK",
  "Awards": "Won 4 Oscars. Another 153 wins & 220 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "8.8/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "87%"
      },
      {
          "Source": "Metacritic",
          "Value": "74/100"
      }
  ],
  "Metascore": "74",
  "imdbRating": "8.8",
  "imdbVotes": "2,099,831",
  "imdbID": "tt1375666",
  "Type": "movie",
  "DVD": "20 Jun 2013",
  "BoxOffice": "$292,576,195",
  "Production": "Syncopy, Warner Bros.",
  "Website": "N/A",
  "Response": "True"
},
{
  "Title": "Emily in Paris",
  "Year": "2020–",
  "Rated": "TV-MA",
  "Released": "02 Oct 2020",
  "Runtime": "30 min",
  "Genre": "Comedy, Drama, Romance",
  "Director": "N/A",
  "Writer": "Darren Star",
  "Actors": "Lily Collins, Philippine Leroy-Beaulieu, Ashley Park, Lucas Bravo",
  "Plot": "A young American woman from the Midwest is hired by a marketing firm in Paris to provide them with an American perspective on things.",
  "Language": "French, English",
  "Country": "USA",
  "Awards": "Nominated for 2 Golden Globes. Another 1 win & 7 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYTFjZjQzZDgtOWEyNy00YmY1LTgyYjQtMTBlODUxZTBiZWRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "7.0/10"
      }
  ],
  "Metascore": "N/A",
  "imdbRating": "7.0",
  "imdbVotes": "49,976",
  "imdbID": "tt8962124",
  "Type": "series",
  "totalSeasons": "1",
  "Response": "True"
}];
    return (
        <Masonry options={masonryOptions}>
            {data.map((movie)=><MovieCard data={movie} key={movie.imdbID}/>)}
        </Masonry>
    );
  }
}
  
  export default Home
  