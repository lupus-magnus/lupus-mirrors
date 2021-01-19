import React, { Component } from 'react';
// import { motion } from 'framer-motion';
// import Remote from './components/remote'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Facebook from './components/Facebook';
import Instagram from './components/Instagram';
import Netflix from './components/Netflix';

class App extends Component {
    
    render() { 
        return (
            <Router>
                {/* <Remote /> */}
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/facebook' component={Facebook} />
                    <Route path='/instagram' component={Instagram} />
                    <Route path='/netflix' component={Netflix} />
                    
                </Switch>    
                
            </Router>
            
        )
        
    }
}
 
export default App;