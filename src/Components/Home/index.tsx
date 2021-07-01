import React, { Component } from 'react';
import Filter from './Filter'
import Item from './Item'
import data from '../../data.json'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../../Store';


class Home extends Component {





    render() {
        return (
            <div className="home-wrapper">
               <h1>Filters</h1>
               <Filter/>
               <Item/>
            </div>
        );
    }
}

export default Home;