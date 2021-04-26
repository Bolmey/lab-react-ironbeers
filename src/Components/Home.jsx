import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
// import Beers from "./Beers";
// import Randombeer from './Randombeer';
// import Newbeer from "./Newbeer";

const Home = () => {


    return (

        <div>
            <div>
                <img src={"../assets/beers.png"} />
                <div>
                    <Link className="headerStyle" to="/beers">Beers</Link>
                    <br />
                    <p>lorem ipsum dolor sit amet,
                    consectetur lorem ipsum Lorem ipsum
                         dolor sit amet consectetur adipisicingdam fac.</p>
                </div>
            </div>
            <div>
                <img src={"../assets/random-beer.png"} />
                <div>
                    <Link className="headerStyle" to="/random-beer">Random beer</Link>
                    <br />
                    <p>lorem ipsum dolor sit amet,
                    consectetur lorem ipsum Lorem ipsum
                         dolor sit amet consectetur adipisicingdam fac.</p>
                </div>
            </div>
            <div>
                <img src={"../assets/new-beer.png"} />
                <div>
                    <Link className="headerStyle" to="/new-beer">New beer</Link>
                    <br />
                    <p>lorem ipsum dolor sit amet,
                    consectetur lorem ipsum Lorem ipsum
                         dolor sit amet consectetur adipisicingdam fac.</p>
                </div>
            </div>
        </div >
    );
};

export default Home;