import React, { Component } from 'react'
import './Tour.scss';

export default class Tour extends Component {
    state = {
        showInfo: false
    };

    handleInfo=()=>{
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        const {id, city, country, info, img} = this.props.tour;
        const {removeTour}=this.props;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="tour-img" />
                    <span className="close-btn" onClick={()=>{removeTour(id)}}><i className="fas fa-window-close"></i> </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{country}</h4>
                    <h5>Info<span onClick={this.handleInfo}><i className="fas fa-caret-square-down"></i></span></h5>
                    {this.state.showInfo && <p> {info} </p>}
                    
                </div>
            </article>
        )
    }
}

