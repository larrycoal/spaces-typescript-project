import React from 'react';
import {  useSelector } from 'react-redux';
import { State } from '../../Store/Reducer';
// import { bindActionCreators } from 'redux';
// import { actionCreator } from '../../Store';
//import { itemState } from '../../Store/Reducer/itemReducer';


const Item: React.FC = () => {


    const {item,colorFilter,shapeFilter} = useSelector((state:State) => state.items)

    const displayItems = (): any => {
        console.log(item,colorFilter,shapeFilter)
        return item.map((item: any) => (
            <div className="item">
                <div className={item.shape}>
                
                </div>
            </div>
        ))
    }
    return (
        <div className="item-wrapper">
            {displayItems()}
        </div>
    );
};

export default Item;