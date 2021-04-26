import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import Header from './Header'
import axios from 'axios'


function NewBeer(props) {
    const history = useHistory()
    const [info, setInfo] = useState({})
    function onChange(e) {
        info[e.target.name] = e.target.value
        setInfo(info)
        console.log(e.target.value, e.target.name)
    }

    async function submitForm(e) {
        e.preventDefault()
        console.log(info)
        const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', info)
        console.log(response.data)
        history.push(`/beers`)
    }


    return (
        <form onSubmit={submitForm}>
            <Header />
            <h1>Create a new beer</h1>
            <div >
                <input required type="text" name='name' placeholder="Name" onChange={onChange} />
                <label htmlFor="floatingInput">Name</label>
            </div>
            <div >
                <input required type="text" name='tagline' placeholder="Tagline" onChange={onChange} />
                <label htmlFor="floatingInput">Tagline</label>
            </div>
            <div >
                <textarea required placeholder="Description" name='description' onChange={onChange} style={{ height: "100px" }}></textarea>
                <label htmlFor="floatingTextarea2">Description</label>
            </div>
            <div >

                <label htmlFor="floatingInput">First Brewed</label>
            </div>
            <div >
                <input required type="text" name='brewer_tips' onChange={onChange} placeholder="Brewer Tips" />
                <label htmlFor="floatingInput">Brewers Tips</label>
            </div>
            <div >
                <input required type="number" name='attenuation_level' onChange={onChange} placeholder="Attenuation Level" />
                <label htmlFor="floatingInput">Attenuation Level</label>
            </div>
            <div >
                <input required type="text" name='contributed_by' onChange={onChange} placeholder="Contributor" />
                <label htmlFor="floatingInput">Contributed By</label>
            </div>
            <input type="submit" value="Submit" ></input>
        </form>
    );
}

export default NewBeer;