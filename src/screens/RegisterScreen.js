import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { register } from '../actions/userActions';


function RegisterScreen (props) {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [repassword, setrePassword] = useState('');

const userRegister = useSelector(state=>state.userRegister);
const {loading, userInfo, error} = userRegister;
const dispatch = useDispatch();

useEffect(()=>{
    if(userInfo){
        props.history.push("/");
    }
return () => {
    //
}
},[userInfo])

const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(register(name,email,password));
}

    return <div className="form">
        <form onSubmit={handlerSubmit}>
            <ul className="form-container">
                <li>
                    <h2>Create account</h2>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label for="name">
                        Name
                    </label>
                    <input type="name" id="name" name="name" onChange={(e) => setName(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label for="email">
                        Email
                    </label>
                    <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label for="password">
                        Password
                    </label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label for="repassword">
                        Password
                    </label>
                    <input type="password" id="repassword" name="repassword" onChange={(e) => setrePassword(e.target.value)}>

                    </input>
                </li>
                <li>
                    <button type="submit" className="button primary">Register</button>
                </li>
                <li>
                    Already have an account? <Link to="/signin"></Link>
                </li>
                <li>
                    <Link to="/register" className="button secondary text-center">Create your amazona account</Link>
                </li>
            </ul>
        </form>
    </div>
}

export default RegisterScreen;