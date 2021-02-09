import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './components/Home'
import { Switch, Route, useLocation} from 'react-router-dom';
import Facebook from './components/Facebook';
import Instagram from './components/Instagram';
import Netflix from './components/Netflix';
import Nav from './components/Nav'
import Remote from './components/remote'

function App() {
        const [displayRemote, setDisplayRemote] = useState(false)
        const location = useLocation();
        
        const toggleRemote = () => {
            setDisplayRemote(!displayRemote)
        }
        return (
            <React.Fragment>
                {/* <Nav key='navbar' toggle={toggleRemote} display={displayRemote} /> */}
                <AnimatePresence>  
                    {displayRemote && <Remote hideControl = {() => {
                        setDisplayRemote(false)
                        
                        }} />}
                    <Route path='/' render={(props) => ( <Nav {...props} key='navbar' toggle={toggleRemote} display={displayRemote} />)} />
                    <Switch location={location} key={location.key}>
                        
                        
                        <Route exact path='/' component={Home} />
                        <Route path='/facebook' component={Facebook} />
                        <Route path='/instagram' component={Instagram} />
                        <Route path='/netflix' component={Netflix} />
                        
                    </Switch>    
                </AnimatePresence>
            </React.Fragment>
        )
        
}
export default App;