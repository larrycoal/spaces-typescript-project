import React from 'react';

const Filter = () => {
    return (
        <div className="filter-wrapper">
            <section>
                <h3>Shapes</h3>
                <div className="shapes-btn">
                  <span>Oval</span>
                  <span>Round</span>
                  <span>Triangle</span>
                  <span>Rectangle</span>
                  <span>Square</span>
                </div>
            </section>
            <section>
            <h3>Color</h3>
                <div className="color-btn">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
            </section>
        </div>
    );
};

export default Filter;