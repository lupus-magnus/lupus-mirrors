import React, { Component } from 'react';
import Remote from './remote';
import { motion } from 'framer-motion';

class Netflix extends Component {
    state = {  }
    render() { 
        return ( <motion.div
            exit={{opacity: 0, transition: {duration: 1.3}}}
        > <h1>Netflix!</h1>   <Remote /></motion.div>);
    }
}
 
export default Netflix;