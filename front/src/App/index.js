import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from './theme';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Skills from '../pages/Skills';
import '../index.css';
class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={defaultTheme}>
                <Router>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/skills" component={Skills} />
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
