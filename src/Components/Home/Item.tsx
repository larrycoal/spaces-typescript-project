import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../Store/Reducer';



const Item: React.FC = () => {


    const { item, filterName } = useSelector((state: State) => state.items)

    const displayItems = (): any => {
        if(item.length === 0){
            return(
                <div className="not-found">
                    Nothing Found for this Filter
                </div>
            )
        }
        return item.map((item: any,i:number) => (
            <div key={i} className="item">
                <div
                    style={{ "background": item.color }}
                    className={item.shape}>

                </div>
            </div>
        ))
    }
    return (
        <div className="item-wrapper">
            <p>{filterName}</p>
            <div className="item-container">
                {displayItems()}
            </div>
        </div>
    );
};

export default Item;