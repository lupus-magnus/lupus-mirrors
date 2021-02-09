import React, { Component } from 'react';
import NetflixPage from '../components/clones/netflixPage';
import { motion } from 'framer-motion';

class Netflix extends Component {
    state = {  }
    render() { 
        return ( 
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:3}}
        exit={{opacity: 0, transition: {duration: 1.3}}}
        >
            <NetflixPage />
        </motion.div>);
    }
}
 
export default Netflix;