import React, { useState, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

const Home = () => {
    const [nama, setNama] = useState('');
    const token = localStorage.getItem('token');
    const [redirect, setRedirect] = useState(false);

    if (!token) {
        return <Redirect to="/"></Redirect>
    }

    axios.get('http://localhost:4000/api/home', {
        headers: {
            Authorization: token
        }
    }).then(result => {
        setNama(result.data.data.nama)
    })

    const logout = () => {
        localStorage.clear()
        setRedirect(true)
    }

    return (
        <Fragment>
            {
                redirect && (
                    <Redirect to="/login"></Redirect>
                )
            }
            <div className="container">
                <h3>Halo, {nama}</h3>
                <br />
                <button className="btn btn-default" onClick={logout}>Logout</button>
            </div>
        </Fragment>

    )
}

export default Home;