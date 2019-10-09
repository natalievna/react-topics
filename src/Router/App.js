import React from 'react';
import Nav from './Nav';
import Shop from './Shop';
import About from './About';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetails from './ItemDetails';


const App = () => {
    
    return (
        <Router>
            <div className="app">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/shop' exact component={Shop} />
                    <Route path='/shop/:id' component={ItemDetails}/>
                </Switch>
            </div>
        </Router>
    );
}

const Home = () => {
    return (
        <h1>Home Page</h1>
    );
}

export default App;