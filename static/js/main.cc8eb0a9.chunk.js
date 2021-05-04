(this["webpackJsonpimdb-clone"]=this["webpackJsonpimdb-clone"]||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},35:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),s=a(22),r=a.n(s),o=(a(30),a(31),a(8)),c=a(9),l=a(11),d=a(10),m=(a(32),a(33),a(13)),h=a(7),u=a(21),j=a(25),b=a(0),p=Object(i.createContext)(),M=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={likedMovies:[]},e.addMovie=function(t){e.setState({likedMovies:[].concat(Object(j.a)(e.state.likedMovies),[t])})},e.removeMovie=function(t){e.setState({likedMovies:e.state.likedMovies.filter((function(e){return e.imdbID!==t}))})},e}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(){localStorage.setItem("favouriteMovie",JSON.stringify(this.state.likedMovies))}},{key:"componentWillMount",value:function(){JSON.parse(localStorage.getItem("favouriteMovie"))&&this.setState({likedMovies:JSON.parse(localStorage.getItem("favouriteMovie"))})}},{key:"render",value:function(){return Object(b.jsx)(p.Provider,{value:Object(u.a)(Object(u.a)({},this.state),{},{addMovie:this.addMovie,removeMovie:this.removeMovie}),children:this.props.children})}}]),a}(i.Component);a(35);var O=function(e){var t=e.data,a=Object(i.useState)(!1),n=Object(m.a)(a,2),s=n[0],r=n[1],o=Object(i.useContext)(p),c=o.addMovie,l=o.removeMovie,d=o.likedMovies;return Object(i.useEffect)((function(){d&&d.find((function(e){return e.imdbID===t.imdbID}))&&r(!0)}),[]),Object(b.jsx)("div",{className:"card-2 card",children:Object(b.jsxs)("div",{className:"wrapper",style:{backgroundImage:'url("'.concat(t.Poster,'")')},children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("div",{className:"date",children:Object(b.jsx)("span",{className:"year",children:t.Year})}),Object(b.jsxs)("ul",{className:"menu-content",children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",className:"fa fa-bookmark-o"})}),Object(b.jsx)("li",{onClick:function(){r(!s),s?l(t.imdbID):c(t)},children:Object(b.jsx)("i",{className:"fa fa-heart".concat(s?"":"-o"),style:{color:s?"red":"white"},children:Object(b.jsx)("span",{})})}),Object(b.jsx)("li",{children:Object(b.jsxs)("a",{children:["Votes ",Object(b.jsx)("span",{children:t.imdbVotes})]})})]})]}),Object(b.jsx)(h.b,{to:"/movie/".concat(t.imdbID),children:Object(b.jsx)("div",{className:"data",children:Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("span",{className:"author",children:t.Director}),Object(b.jsx)("h1",{className:"title",children:Object(b.jsx)("a",{href:"#",children:t.Title})}),Object(b.jsx)("p",{className:"text",children:t.Plot}),Object(b.jsx)("a",{href:"#",className:"button",children:"Read more"})]})})})]})})},v=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"row home featured",children:[{Title:"Rogue One: A Star Wars Story",Year:"2016",Rated:"PG-13",Released:"16 Dec 2016",Runtime:"133 min",Genre:"Action, Adventure, Sci-Fi",Director:"Gareth Edwards",Writer:"Chris Weitz (screenplay by), Tony Gilroy (screenplay by), John Knoll (story by), Gary Whitta (story by), George Lucas (based on characters created by)",Actors:"Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen",Plot:"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the plans for the Death Star.",Language:"English",Country:"USA",Awards:"Nominated for 2 Oscars. Another 24 wins & 81 nominations.",Poster:"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"7.8/10"},{Source:"Rotten Tomatoes",Value:"84%"},{Source:"Metacritic",Value:"65/100"}],Metascore:"65",imdbRating:"7.8",imdbVotes:"563,671",imdbID:"tt3748528",Type:"movie",DVD:"24 Mar 2017",BoxOffice:"$532,177,324",Production:"Lucasfilm Ltd.",Website:"N/A",Response:"True"},{Title:"Star Wars: Episode IV - A New Hope",Year:"1977",Rated:"PG",Released:"25 May 1977",Runtime:"121 min",Genre:"Action, Adventure, Fantasy, Sci-Fi",Director:"George Lucas",Writer:"George Lucas",Actors:"Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",Plot:"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",Language:"English",Country:"USA, UK",Awards:"Won 6 Oscars. Another 57 wins & 29 nominations.",Poster:"https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"8.6/10"},{Source:"Rotten Tomatoes",Value:"92%"},{Source:"Metacritic",Value:"90/100"}],Metascore:"90",imdbRating:"8.6",imdbVotes:"1,245,210",imdbID:"tt0076759",Type:"movie",DVD:"10 Oct 2016",BoxOffice:"$460,998,507",Production:"Lucasfilm Ltd.",Website:"N/A",Response:"True"},{Title:"The Avengers",Year:"2012",Rated:"PG-13",Released:"04 May 2012",Runtime:"143 min",Genre:"Action, Adventure, Sci-Fi",Director:"Joss Whedon",Writer:"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",Actors:"Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",Plot:"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",Language:"English, Russian, Hindi",Country:"USA",Awards:"Nominated for 1 Oscar. Another 38 wins & 79 nominations.",Poster:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"8.0/10"},{Source:"Rotten Tomatoes",Value:"91%"},{Source:"Metacritic",Value:"69/100"}],Metascore:"69",imdbRating:"8.0",imdbVotes:"1,275,816",imdbID:"tt0848228",Type:"movie",DVD:"22 Nov 2015",BoxOffice:"$623,357,910",Production:"Marvel Studios",Website:"N/A",Response:"True"},{Title:"Zack Snyder's Justice League",Year:"2021",Rated:"R",Released:"18 Mar 2021",Runtime:"242 min",Genre:"Action, Adventure, Fantasy, Sci-Fi",Director:"Zack Snyder",Writer:"Jerry Siegel (Superman created by), Joe Shuster (Superman created by), Zack Snyder (story by), Chris Terrio (story by), Will Beall (story by), Chris Terrio (screenplay by), Gardner Fox (Justice League of America created by), Bob Kane (Batman created by), Bill Finger (Batman created by), William Moulton Marston (Wonder Woman created by), Jack Kirby (Fourth World created by)",Actors:"Ben Affleck, Henry Cavill, Amy Adams, Gal Gadot",Plot:"Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",Language:"English, Icelandic, French",Country:"USA, UK",Awards:"N/A",Poster:"https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"8.2/10"},{Source:"Metacritic",Value:"54/100"}],Metascore:"54",imdbRating:"8.2",imdbVotes:"236,517",imdbID:"tt12361974",Type:"movie",DVD:"N/A",BoxOffice:"N/A",Production:"N/A",Website:"N/A",Response:"True"},{Title:"The Dark Knight",Year:"2008",Rated:"PG-13",Released:"18 Jul 2008",Runtime:"152 min",Genre:"Action, Crime, Drama, Thriller",Director:"Christopher Nolan",Writer:"Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",Actors:"Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",Plot:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",Language:"English, Mandarin",Country:"USA, UK",Awards:"Won 2 Oscars. Another 157 wins & 163 nominations.",Poster:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"9.0/10"},{Source:"Rotten Tomatoes",Value:"94%"},{Source:"Metacritic",Value:"84/100"}],Metascore:"84",imdbRating:"9.0",imdbVotes:"2,341,244",imdbID:"tt0468569",Type:"movie",DVD:"14 Jun 2010",BoxOffice:"$534,858,444",Production:"Syncopy",Website:"N/A",Response:"True"},{Title:"The Shawshank Redemption",Year:"1994",Rated:"R",Released:"14 Oct 1994",Runtime:"142 min",Genre:"Drama",Director:"Frank Darabont",Writer:'Stephen King (short story "Rita Hayworth and Shawshank Redemption"), Frank Darabont (screenplay)',Actors:"Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",Plot:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",Language:"English",Country:"USA",Awards:"Nominated for 7 Oscars. Another 21 wins & 36 nominations.",Poster:"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"9.3/10"},{Source:"Rotten Tomatoes",Value:"91%"},{Source:"Metacritic",Value:"80/100"}],Metascore:"80",imdbRating:"9.3",imdbVotes:"2,381,013",imdbID:"tt0111161",Type:"movie",DVD:"15 Aug 2008",BoxOffice:"$28,699,976",Production:"Columbia Pictures, Castle Rock Entertainment",Website:"N/A",Response:"True"},{Title:"The Godfather",Year:"1972",Rated:"R",Released:"24 Mar 1972",Runtime:"175 min",Genre:"Crime, Drama",Director:"Francis Ford Coppola",Writer:"Mario Puzo (screenplay by), Francis Ford Coppola (screenplay by), Mario Puzo (based on the novel by)",Actors:"Marlon Brando, Al Pacino, James Caan, Richard S. Castellano",Plot:"An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",Language:"English, Italian, Latin",Country:"USA",Awards:"Won 3 Oscars. Another 28 wins & 30 nominations.",Poster:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"9.2/10"},{Source:"Rotten Tomatoes",Value:"97%"},{Source:"Metacritic",Value:"100/100"}],Metascore:"100",imdbRating:"9.2",imdbVotes:"1,646,831",imdbID:"tt0068646",Type:"movie",DVD:"01 Aug 2013",BoxOffice:"$134,966,411",Production:"Paramount Pictures",Website:"N/A",Response:"True"},{Title:"Inception",Year:"2010",Rated:"PG-13",Released:"16 Jul 2010",Runtime:"148 min",Genre:"Action, Adventure, Sci-Fi, Thriller",Director:"Christopher Nolan",Writer:"Christopher Nolan",Actors:"Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",Plot:"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",Language:"English, Japanese, French",Country:"USA, UK",Awards:"Won 4 Oscars. Another 153 wins & 220 nominations.",Poster:"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"8.8/10"},{Source:"Rotten Tomatoes",Value:"87%"},{Source:"Metacritic",Value:"74/100"}],Metascore:"74",imdbRating:"8.8",imdbVotes:"2,099,831",imdbID:"tt1375666",Type:"movie",DVD:"20 Jun 2013",BoxOffice:"$292,576,195",Production:"Syncopy, Warner Bros.",Website:"N/A",Response:"True"},{Title:"Emily in Paris",Year:"2020\u2013",Rated:"TV-MA",Released:"02 Oct 2020",Runtime:"30 min",Genre:"Comedy, Drama, Romance",Director:"N/A",Writer:"Darren Star",Actors:"Lily Collins, Philippine Leroy-Beaulieu, Ashley Park, Lucas Bravo",Plot:"A young American woman from the Midwest is hired by a marketing firm in Paris to provide them with an American perspective on things.",Language:"French, English",Country:"USA",Awards:"Nominated for 2 Golden Globes. Another 1 win & 7 nominations.",Poster:"https://m.media-amazon.com/images/M/MV5BYTFjZjQzZDgtOWEyNy00YmY1LTgyYjQtMTBlODUxZTBiZWRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"7.0/10"}],Metascore:"N/A",imdbRating:"7.0",imdbVotes:"49,976",imdbID:"tt8962124",Type:"series",totalSeasons:"1",Response:"True"}].map((function(e){return Object(b.jsx)(O,{data:e},e.imdbID)}))})}}]),a}(i.Component),g=a(24),y=a.n(g);var f=function(e){var t=e.data,a=e.onClick;return Object(b.jsx)("div",{children:Object(b.jsx)(h.b,{to:"/search/movie/".concat(t.imdbID),onClick:a,children:Object(b.jsx)("div",{className:"search-result",children:Object(b.jsx)("div",{className:"result-container",children:Object(b.jsxs)("div",{className:"movie_card",children:[Object(b.jsx)("div",{className:"left",children:Object(b.jsxs)("div",{className:"datails",children:[Object(b.jsx)("h1",{children:t.Title}),Object(b.jsxs)("div",{className:"head",children:[Object(b.jsx)("p",{className:"year",children:t.Year}),Object(b.jsx)("p",{className:"genre",children:t.Type})]})]})}),Object(b.jsx)("div",{className:"c_right",children:Object(b.jsx)("div",{className:"img_c",children:Object(b.jsx)("img",{src:t.Poster,alt:"Movie IMG"})})})]})})})})})};a(46);var N=function(){var e=Object(i.useState)(!1),t=Object(m.a)(e,2),a=t[0],n=t[1],s=Object(i.useState)(null),r=Object(m.a)(s,2),o=r[0],c=r[1],l=Object(i.useState)({Search:[{Title:"Star Wars: Episode IV - A New Hope",Year:"1977",imdbID:"tt0076759",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},{Title:"Star Wars: Episode V - The Empire Strikes Back",Year:"1980",imdbID:"tt0080684",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},{Title:"Star Wars: Episode VI - Return of the Jedi",Year:"1983",imdbID:"tt0086190",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{Title:"Star Wars: Episode VII - The Force Awakens",Year:"2015",imdbID:"tt2488496",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"},{Title:"Star Wars: Episode I - The Phantom Menace",Year:"1999",imdbID:"tt0120915",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{Title:"Star Wars: Episode III - Revenge of the Sith",Year:"2005",imdbID:"tt0121766",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"},{Title:"Star Wars: Episode II - Attack of the Clones",Year:"2002",imdbID:"tt0121765",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"},{Title:"Star Trek",Year:"2009",imdbID:"tt0796366",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg"},{Title:"Star Wars: Episode VIII - The Last Jedi",Year:"2017",imdbID:"tt2527336",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"},{Title:"Rogue One: A Star Wars Story",Year:"2016",imdbID:"tt3748528",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"}],totalResults:"3613",Response:"True"}),d=Object(m.a)(l,2),h=d[0],u=d[1],j=function(e,t){!function(e){var t=new Headers;t.append("Cookie","__cfduid=d45fd0a3d6baf68bb869113fba7a950f31619778673"),fetch("https://www.omdbapi.com/?apikey=a1a82bd6&s="+e,{method:"GET",headers:t,redirect:"follow"}).then((function(e){if(!e.ok)throw Error("Could not Fetch data");return e.json()})).then((function(e){u(e),n(!0),c(null)})).catch((function(e){c(!0),console.log(e.message)}))}(e)},p=function(){n(!1)};return Object(b.jsxs)("div",{className:"menu-search",style:{minWidth:"".concat(a?"1024px":"250px")},children:[a&&Object(b.jsx)("i",{className:"fa fa-times",style:{fontSize:"2.5rem"},onClick:p}),Object(b.jsx)(y.a,{classNames:"menu-search-box",placeholder:"Search Movies",onEnter:j,onSearchClick:j}),o&&Object(b.jsx)("h1",{children:"Error Occured"}),a&&h.Search&&h.Search.map((function(e){return Object(b.jsx)(f,{data:e,onClick:p},e.imdbID)}))]})},T=(a(47),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"page",children:Object(b.jsx)("nav",{className:"page__menu menu",children:Object(b.jsxs)("ul",{className:"menu__list r-list",children:[Object(b.jsx)("li",{className:"menu__group",children:Object(b.jsx)(h.b,{to:"/",className:"menu__link r-link text-underlined",children:"Home"})}),Object(b.jsx)("li",{className:"menu__group",children:Object(b.jsx)(h.b,{to:"/favourites",className:"menu__link r-link text-underlined",children:"Favourite Movies"})}),Object(b.jsx)("li",{className:"menu__group",children:Object(b.jsx)(h.b,{className:"menu__link r-link",children:Object(b.jsx)(N,{})})}),Object(b.jsx)("li",{className:"menu__group",children:Object(b.jsx)(h.b,{to:"#0",className:"menu__link r-link text-underlined",children:"Top Ranked Movies"})})]})})})})}}]),a}(i.Component)),x=a(2),D=(a(48),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).fetchMovieDetail=function(e){var t=new Headers;t.append("Cookie","__cfduid=d45fd0a3d6baf68bb869113fba7a950f31619778673");var a={method:"GET",headers:t,redirect:"follow"};fetch("https://www.omdbapi.com/?apikey=a1a82bd6&i=".concat(e,"&plot=full"),a).then((function(e){return e.json()})).then((function(e){i.setState({movieData:e,isError:!1,isLoading:!1}),i.checkLiked()})).catch((function(e){return console.log("error",e)}))},i.checkLiked=function(){var e=i.context.likedMovies;i.state.movieData&&e.find((function(e){return e.imdbID===i.state.movieData.imdbID}))&&i.setState({isLiked:!0})},i.state={movieData:null,isError:null,isLoading:!1,isLiked:!1},i}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.fetchMovieDetail(e)}},{key:"render",value:function(){var e=this,t=this.context,a=t.addMovie,i=t.removeMovie;return Object(b.jsx)("div",{children:this.state.movieData&&Object(b.jsx)("div",{className:"movie-card",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("a",{href:"#",children:Object(b.jsx)("img",{src:this.state.movieData.Poster,alt:"cover",className:"cover"})}),Object(b.jsx)("div",{className:"hero",children:Object(b.jsxs)("div",{className:"details",children:[Object(b.jsx)("div",{class:"director",style:{color:"#C7C1BA",fontSize:"23px",fontWeight:"300",marginBottom:"15px"},children:this.state.movieData.Director}),Object(b.jsxs)("div",{className:"title1",children:[this.state.movieData.Title,Object(b.jsx)("span",{children:this.state.movieData.Rated})]}),Object(b.jsx)("div",{className:"title2",children:this.state.movieData.Year}),Object(b.jsxs)("div",{className:"other-details",children:[Object(b.jsx)("div",{className:"runtime",children:Object(b.jsx)("span",{children:this.state.movieData.Runtime})}),Object(b.jsxs)("div",{className:"meta-score-container",style:{display:"inline-block"},children:[Object(b.jsx)("span",{className:"meta-score ".concat(this.state.movieData.Metascore>60?"favourable":"score_mixed"),children:this.state.movieData.Metascore}),Object(b.jsx)("span",{children:"MetaScore"})]}),Object(b.jsx)("span",{className:"box-office",style:{marginTop:"15%",fontSize:"1.1rem"},children:this.state.movieData.BoxOffice}),Object(b.jsx)("i",{className:"fa fa-star rating",style:{color:"#f5c518",fontSize:"1.1rem"},children:Object(b.jsx)("span",{style:{color:"white",marginLeft:"5px"},children:this.state.movieData.imdbRating})}),Object(b.jsx)("i",{onClick:function(){e.state.isLiked?i(e.state.movieData.imdbID):a(e.state.movieData),e.setState({isLiked:!e.state.isLiked})},className:"fa fa-heart".concat(this.state.isLiked?"":"-o"),style:{color:this.state.isLiked?"red":"white",marginLeft:"2rem"},children:Object(b.jsx)("span",{})})]})]})}),Object(b.jsxs)("div",{className:"description",children:[Object(b.jsx)("div",{className:"column1",children:this.state.movieData.Genre.split(",").map((function(e){return Object(b.jsx)("span",{className:"tag",children:e},e)}))}),Object(b.jsx)("div",{className:"column2",children:Object(b.jsx)("p",{children:this.state.movieData.Plot})})]})]})})})}}]),a}(i.Component));D.contextType=p;var k=Object(x.f)(D),S=(a(49),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={data:[]},i}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this.context.likedMovies;this.setState({data:e})}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"row home featured",children:this.state.data&&this.state.data.map((function(e){return Object(b.jsx)(O,{data:e},e.imdbID)}))})}}]),a}(i.Component));S.contextType=p;var V=S;var A=function(){return Object(b.jsx)(h.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(T,{}),Object(b.jsx)(x.c,{children:Object(b.jsxs)(M,{children:[Object(b.jsx)(x.a,{exact:!0,path:"/react-imdb-clone",children:Object(b.jsx)(v,{})}),Object(b.jsx)(x.a,{exact:!0,path:"/",children:Object(b.jsx)(v,{})}),Object(b.jsx)(x.a,{path:"/favourites",children:Object(b.jsx)(V,{})}),Object(b.jsx)(x.a,{path:"/search/movie/:id",children:Object(b.jsx)(k,{})}),Object(b.jsx)(x.a,{path:"/movie/:id",children:Object(b.jsx)(k,{})})]})})]})})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,51)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),i(e),n(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(A,{})}),document.getElementById("root")),R()}},[[50,1,2]]]);
//# sourceMappingURL=main.cc8eb0a9.chunk.js.map