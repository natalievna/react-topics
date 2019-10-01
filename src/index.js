import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Component1 from './Context/context';

class App extends Component {
    render() {
        return (
            <div>
               <Component1/>
            </div>
        )
    }
}

export default App;


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);