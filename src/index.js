import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ClickCounter from './HOC/ClickCounter';
import HoverCount from './HOC/HoverCount';

class App extends Component {
    render() {
        return (
            <div>
                <ClickCounter/>
                <HoverCount/>
            </div>
        )
    }
}

export default App;


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);