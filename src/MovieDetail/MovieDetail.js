import React, { Component } from 'react'
import {withRouter} from 'react-router';
import { FavouriteMovies } from '../Contexts/FavouriteMovies';
import './styles.scss';
class MovieDetail extends Component {
    static contextType = FavouriteMovies;
    constructor(props){
        super(props);
        this.state= {
            movieData : null,
            isError:null,
            isLoading:false
        }
    }
    fetchMovieDetail = (id) =>{
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "__cfduid=d45fd0a3d6baf68bb869113fba7a950f31619778673");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(`https://www.omdbapi.com/?apikey=a1a82bd6&i=${id}&plot=full`, requestOptions)
        .then(response => {
           return response.json();
        })
        .then(result => {
            //console.log(result)
            this.setState({
                movieData:result,
                isError:false,
                isLoading:false
            })
        })
        .catch(error => console.log('error', error));
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        this.fetchMovieDetail(id);
    }
    render() {
        return (
            <div>
                {this.state.movieData&&<div className="movie-card">
                    <div className="container">    
                        <a href="#"><img src={this.state.movieData.Poster} alt="cover" className="cover" /></a>        
                    <div className="hero">            
                        <div className="details">
                            <div class="director" style={{color: "#C7C1BA",fontSize: "23px",fontWeight: "300",marginBottom: "15px"}}>{this.state.movieData.Director}</div>
                            <div className="title1">{this.state.movieData.Title}<span>{this.state.movieData.Rated}</span></div>
                            <div className="title2">{this.state.movieData.Year}</div>
                            <div className="other-details">
                                <div className="meta-score-container" style={{display:'inline-block'}}>  
                                    <span className={`meta-score ${this.state.movieData.Metascore>60?"favourable":"score_mixed"}`}>{this.state.movieData.Metascore}</span>
                                    <span>MetaScore</span>
                                </div>
                                <span className="box-office"style={{marginTop: "15%",fontSize: "1.1rem"}}>{this.state.movieData.BoxOffice}</span>            
                                <i className="fa fa-star rating" style={{color:"#f5c518", fontSize: "1.1rem"}}><span style={{"color":"white", marginLeft: "5px"}}>{this.state.movieData.imdbRating}</span></i>
                                <span className="likes">109 likes</span>
                           </div>
                        </div>   
                    </div>    
                    <div className="description">      
                        <div className="column1">
                        {
                            this.state.movieData.Genre.split(",").map((genre)=><span className="tag" key={genre}>{genre}</span>)
                        }
                           {/* <span className="tag">{this.state.movieData.Genre}</span>
                            <span className="tag">fantasy</span>
                            <span className="tag">adventure</span> */}
                        </div>
                        <div className="column2">        
                            <p>{this.state.movieData.Plot}</p>
                        </div>
                    </div>
                    </div>
                </div>}
            </div>
        )
    }
}

export default withRouter(MovieDetail);
