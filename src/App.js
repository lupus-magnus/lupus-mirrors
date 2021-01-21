import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './components/Home'
import { Switch, Route, useLocation} from 'react-router-dom';
import Facebook from './components/Facebook';
import Instagram from './components/Instagram';
import Netflix from './components/Netflix';


function App() {

        const location = useLocation();
        return (
                
            <AnimatePresence>  
                <Switch location={location} key={location.key}>

                    <Route exact path='/' component={Home} />
                    <Route path='/facebook' component={Facebook} />
                    <Route path='/instagram' component={Instagram} />
                    <Route path='/netflix' component={Netflix} />
                    
                </Switch>    
            </AnimatePresence>
        
        )
        
}
export default App;