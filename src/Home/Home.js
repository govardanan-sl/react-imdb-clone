import React, { Component } from 'react'
import './styles.scss'
import 'font-awesome/css/font-awesome.min.css';
import MovieCard from '../MovieList/MovieCard';
class Home extends Component {
 
  render() {
    const data=[
      {
        date:"12-Aug-2016",
        likes:"113",
        comments:"3",
        author:"Jane Doe",
        title:"Stranger Things: The sound of the Upside Down",
        imgUrl: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        plot:"The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.",
      },
      {
        date:"12-Aug-2016",
        likes:"113",
        comments:"3",
        author:"Jane Doe",
        title:"Stranger Things: The sound of the Upside Down",
        plot:"The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.",
      },
      {
        date:"12-Aug-2016",
        likes:"1",
        comments:"3",
        author:"Jane Doe",
        title:"Stranger Things: The sound of the Upside Down",
        plot:"The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.",
      },{
        date:"12-Aug-2016",
        likes:"113",
        comments:"3",
        author:"Jane Doe",
        title:"Stranger Things: The sound of the Upside Down",
        plot:"The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.",
      },
      {
        date:"12-Aug-2016",
        likes:"113",
        comments:"3",
        author:"Jane Doe",
        title:"Stranger Things: The sound of the Upside Down",
        plot:"The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.",
      },
      {
        date:"12-Aug-2016",
        likes:"1",
        comments:"3",
        author:"Jane Doe",
        title:"Stranger Things: The sound of the Upside Down",
        plot:"The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.",
      }
    
    ];
    return (
      <div className="row">
        {data.map((movie)=><MovieCard data={movie}/>)}
      </div>
    );
  }
}
  
  export default Home
  