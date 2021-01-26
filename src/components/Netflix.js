import React, { Component } from 'react';
import NetflixPage from '../components/clones/netflixPage';
import { motion } from 'framer-motion';

class Netflix extends Component {
    state = {  }
    render() { 
        return ( 
        <motion.div
            exit={{opacity: 0, transition: {duration: 1.3}}}
        >
            <NetflixPage />
        </motion.div>);
    }
}
 
export default Netflix;