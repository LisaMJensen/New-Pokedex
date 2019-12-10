import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                </Switch>
                <Footer />
            </div>
        );
    }
}


export default App;