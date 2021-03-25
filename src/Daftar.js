import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Daftar = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [nama, setNama] = useState('');
    const [alert, setAlert] = useState('');

    const changeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const changePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const changeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }

    const changeNama = (e) => {
        const value = e.target.value
        setNama(value)
    }

    const simpan = () => {
        const data = {
            username: username,
            password: password,
            email: email,
            nama: nama
        }

        axios.post('http://localhost:4000/api/daftar', data)
            .then(result => {
                if (result.data) {
                    setUsername('')
                    setPassword('')
                    setEmail('')
                    setNama('')
                    setAlert(result.data.message)
                    setTimeout(() => {
                        setAlert('')
                    }, 2000)
                }
            })
            .catch(e => {
                setAlert(e)
                setTimeout(() => {
                    setAlert('')
                }, 2000)
            })
    }

    return (
        <div style={{ marginTop: "200px" }}>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card p-4'>
                            <div className='card-body'>
                                {
                                    alert && (
                                        <div className='alert alert-primary'>
                                            <p>{alert}</p>
                                        </div>
                                    )
                                }

                            </div>
                            <div className='form-div'>
                                <form >
                                    <h2 className="text-center" style={{ marginBottom: "15px" }}>Halaman Daftar</h2>

                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Username" onChange={changeUsername} value={username} required />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password" onChange={changePassword} value={password} required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email" onChange={changeEmail} value={email} required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Nama" onChange={changeNama} value={nama} required />
                                    </div>
                                    <div className="form-group">
                                        <button type="button" className="btn btn-primary btn-block" onClick={simpan}>Daftar</button>
                                    </div>
                                </form>

                                <Link to="/" className="pull-right">
                                    <p className="text-center">Login</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Daftar;