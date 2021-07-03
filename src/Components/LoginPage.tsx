import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../Store'
import { State } from '../Store/Reducer/index'

interface userprops extends RouteComponentProps { };

const LoginPage: React.FC<userprops|any> = (props) => {
    const [user, setUser] = useState({ username: "", password: "" })
    const dispatch = useDispatch()
    const { Login } = bindActionCreators(actionCreator, dispatch)

    const { isLoggedIn } = useSelector((state: State) => state.user)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    useEffect(() => {
        if (isLoggedIn === true) {
            props.history.push("/home")
        } else {
            props.history.push("/")
        }
    }, [isLoggedIn, props.history])
    const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        Login(user)

    }
    return (
        <div className="form-wrapper">
            <form>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter Username : user"
                    onChange={handleChange}
                    value={user.username}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password : password"
                    onChange={handleChange}
                    value={user.password}
                />
                <button onClick={handleLogin}>Login</button>
                {
                isLoggedIn.error?
                <div className="error">
                    invalid username or password
                </div>:null
            }
            </form>
        </div>
    );
};

export default LoginPage;