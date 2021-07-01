import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../../Store';
import { State } from '../../Store/Reducer';

interface ItemInt {
    name: String,
    shape: String,
    color: String
}

const Item: React.FC = () => {
    //const dispatch = useDispatch()
    //const {FetchItems} =bindActionCreators(actionCreator,dispatch)

    const item = useSelector((state: State) => state.item)

    const displayItems = (): any => {
        //FetchItems()
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