import React, { useState, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [redirect, setRedirect] = useState(false);

    const changeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const changePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const login = () => {
        const data = {
            username: username,
            password: password
        }

        axios.post('http://localhost:4000/api/auth', data)
            .then(result => {
                if (result.data) {
                    localStorage.setItem('token', result.data.token)
                    setRedirect(true)
                }
            })
            .catch(e => {
                setError(e.response.data.message)
                setTimeout(() => {
                    setError('')
                }, 2000)
            })
    }

    return (
        <Fragment>
            {
                redirect && (
                    <Redirect to="/home"></Redirect>
                )
            }
            <div style={{ marginTop: "200px" }}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-6'>
                            <div className='card p-4'>
                                <div className='card-body'>

                                    {
                                        error && (
                                            <div className='alert alert-primary'>
                                                <p>{error}</p>
                                            </div>
                                        )
                                    }

                                    <div className='form-div'>
                                        <form >
                                            <h2 className="text-center" style={{ marginBottom: "15px" }}>Halaman Login</h2>

                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Username" onChange={changeUsername} value={username} />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" placeholder="Password" onChange={changePassword} value={password} />
                                            </div>
                                            <div className="form-group">
                                                <button type="button" className="btn btn-primary btn-block" onClick={login}>Login</button>
                                            </div>
                                        </form>


                                        <Link to="/daftar" className="pull-right">
                                            <p className="text-center">Mendaftar</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;