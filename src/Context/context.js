import React, { Component, useContext } from 'react';
import './context.css';

const MyContext = React.createContext();

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

        const value = {
            count: this.state.count,
            dec: this.dec,
            inc: this.inc
        }

        return (
            <MyContext.Provider value={value}>
                <div className="component1">
                    <Component2 />
                </div>
            </MyContext.Provider>

        )
    }
}

const Component2 = () => (
    <div className="component2">
        <Component3 />
    </div>
)

const Component3 = () => (
    <div className="component3">
        <Component4 />
    </div>
);

const Component4 = () => {
    const { count, dec, inc } = useContext(MyContext);

    return (
        <div className="component4">
            <button className="component4_btn" onClick={dec}>-</button>
            <div className="component4_count">{count}</div>
            <button className="component4_btn" onClick={inc}>+</button>
        </div>
    )
}





