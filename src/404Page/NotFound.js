import React, { Component } from 'react'
import './styles.css';
class NotFound extends Component {
    render() {
        return (
            <div>
                <h1 className="glow" style={{fontWeight:"400",fontSize:"10rem"}}>404</h1>
                <img src="https://i.pinimg.com/originals/a8/66/97/a866972eff1943ec3d8d96c52110d5bc.jpg" style={{width:"100%"}}>
                    
                </img>
            </div>
        )
    }
}

export default NotFound
