import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../../Store';
interface FilterParam {
    shape: String[],
    color: String[]
}
const Filter = () => {
    const dispatch = useDispatch()
    const {FilterItems} = bindActionCreators(actionCreator,dispatch)
    const [filter, setfilter] = useState({
        shape: [
            {
                name: "oval",
                active: true
            },
            {
                name: "round",
                active: true
            },
            {
                name: "triangle",
                active: true
            },
            {
                name: "rectangle",
                active: true
            },
            {
                name: "square",
                active: true
            }
        ],
        color: [
            {
                name: "red",
                active: true
            },
            {
                name: "green",
                active: true
            },
            {
                name: "blue",
                active: true
            },
            {
                name: "yellow",
                active: true
            },
            {
                name: "gray",
                active: true
            },
            {
                name: "black",
                active: true
            }
        ]
    })


    const buildFilterParam = () => {
        let filterParam: FilterParam = {
            shape: [],
            color: []
        }
        
        const { shape, color } = filter
        shape.map((shape) => {
            if (shape.active) {
                filterParam.shape.push(shape.name)
            }
            return 0
        })
        color.map((color) => {
            if (color.active) {
                filterParam.color.push(color.name)
            }
            return 0
        })
        if(filterParam.color.length===0 && filterParam.shape.length === 0){
            
           shape.map((shape)=>{
              shape.active=!shape.active
              return 0
           })
           color.map((color)=>{
            color.active=!color.active
            return 0
         })
         setfilter({
             shape:shape,
             color:color
         })
         buildFilterParam()
        }else{
            FilterItems(filterParam)
        }
       
    }
    const handleFilterChange = (i: number, name: String) => {
        const {shape,color} = filter
        if (name === "shape") {
            shape[i].active = !shape[i].active
            setfilter({
                ...filter
            })
        } else {
            color[i].active = !color[i].active
            setfilter({
                ...filter
            })
        }

        buildFilterParam()
    }
    const showShapeFilter = () => {
        const { shape } = filter
        return shape.map((shape, i) => (
            <span key={i} 
            className={shape.active ? "active" : ""} 
            onClick={() => handleFilterChange(i, "shape")}
            >{shape.name}</span>
        ))
    }
    const showColorFilter = () => {
        const { color } = filter
        return color.map((color, i) => (
            <span key={i}
            style={{"backgroundColor":color.name}}
                className={color.active ? "active" : ""}
                onClick={() => handleFilterChange(i, "color")}
            ></span>
        ))
    }
    return (
        <div className="filter-wrapper">
            <section>
                <h3>Shapes</h3>
                <div className="shapes-btn">
                    {showShapeFilter()}
                </div>
            </section>
            <section>
                <h3>Color</h3>
                <div className="color-btn">
                    {showColorFilter()}
                </div>
            </section>
        </div>
    );
};

export default Filter;