import React, { Component } from 'react';
import Tour from '../Tour/Tour';
import {TourData} from '../TourData';
import './Destination.scss';

export default class Destination extends Component {
    state = {
        tours: TourData
    };

    removeTour =(id)=>{
        const {tours} = this.state;
        const filteredTours = tours.filter (tour=> tour.id !==id);
        this.setState({
            tours:filteredTours
        })
    }

    render() {
        const {tours} = this.state;
        return (
            <section className="tourlist">
               {tours.map(tour => {
                   return (
                       <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
                   )
               })}
            </section>
        )
    }
}
