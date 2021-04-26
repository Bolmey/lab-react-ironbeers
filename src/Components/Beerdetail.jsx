import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';



const Beerdetail = (props) => {
    console.log(props)



    const [beer, setBeer] = useState([])



    useEffect(() => {
        if (props.match.path === "/beers/:beerId") {
            axios
                .get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.beerId}`)
                .then(response => {
                    console.log("hello", response.data)
                    setBeer(response.data)
                })
        } else if (props.match.path === "/random-beer") {
            axios
                .get(`https://ih-beers-api2.herokuapp.com/beers/`)
                .then(response => {
                    console.log("meow", response.data)
                    setBeer(response.data[Math.floor(Math.random() * response.data.length)])
                })
        }
    }, [])



    const printBeerDetail = () => {
        return (
            <div className="beerDetail">
                <img style={{ height: '10rem' }} src={beer.image_url} />
                <div>
                    <b>Name:</b>
                    {beer.name}
                </div>
                <div>{beer.tagline}</div>
                <div>
                    <b>First Brewed:</b>
                    {beer.first_brewed}
                </div>
                <div>
                    <b>Attenuation:</b>
                    {beer.attenuation_level}
                </div>
                <div style={{ paddingLeft: '10rem', paddingRight: '10rem' }}>
                    <b>Description</b>
                    {beer.description}
                </div>
                <div>
                    <b>contributed by:</b>
                    {beer.contributed_by}
                </div>
            </div>
        );
    };

    return (
        <div>
            <Header />
            {printBeerDetail()}
        </div>
    )
}

export default Beerdetail;