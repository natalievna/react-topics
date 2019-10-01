import React, { Component } from 'react';
import './context.css';

export default class Component1 extends Component {

    state = {
        count: 0
    };

    dec = () => this.setState(({ count }) => ({
        count: count - 1
    }));

    inc = () => this.setState(({ count }) => ({
        count: count + 1
    }));


    render() {
        const { count, dec, inc } = this.state;

        return (
            <div className="component1">
                <Component2 count={count} dec={dec} inc={inc} />
            </div>
        )
    }
}

const Component2 = ({ count, dec, inc }) => {
    return (
        <div className="component2">
            <Component3 count={count} dec={dec} inc={inc} />
        </div>
    );
};

const Component3 = ({ count, dec, inc }) => {
    return (
        <div className="component3">
            <Component4 count={count} dec={dec} inc={inc} />
        </div>
    );
};

const Component4 = ({ count, dec, inc }) => {
    return (
        <div className="component4">
            <button className="component4_btn" onClick={dec}>-</button>
            <div className="component4_count">{count}</div>
            <button className="component4_btn" ocClick={inc}>+</button>
        </div>
    );
};

