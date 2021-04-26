import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';



const Beer = () => {

    const [beer, setBeer] = useState([])

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then(response => {
                console.log(response.data)
                setBeer(response.data)
            })
        return () => console.log(`Comp unmount`)
    }, [])

    const newBeer = () => {
        return beer.map((beer) => {
            return (
                <div className="beerSection">
                    <div><img className="beerImg" src={beer.image_url} /></div>
                    <div className="beerDescription">
                        <Link to={`/beers/${beer._id}`}><h2>{beer.name}</h2></Link>
                        <h3>{beer.tagline}</h3>
                        <p><b>Creater by:</b> {beer.contributed_by}</p>
                    </div>
                </div >
            )
        })
    }



    return (
        <div>
            <Header />
            {newBeer()}

        </div>
    );
};

export default Beer;