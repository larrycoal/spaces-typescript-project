import React, { Component } from 'react';
import Filter from './Filter'
import Item from './Item'



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