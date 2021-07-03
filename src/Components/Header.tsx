import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../Store';
import { useHistory } from 'react-router';

const Header = () => {
    const dispatch = useDispatch()
    const {Logout} = bindActionCreators(actionCreator,dispatch)
    const history = useHistory()

    const handleLogout  = ()=>{
         Logout()
        history.push("/")
    }
    return (
        <nav className="header">
            <span>Spaces</span>
            <button onClick={handleLogout}>LogOut <i className="fas fa-sign-out-alt"></i></button>
        </nav>
    );
};

export default Header;