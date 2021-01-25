import React, { Component } from 'react';
//import Remote from './remote';
import { motion } from 'framer-motion';

class Instagram extends Component {
    state = {  }
    render() { 
        return ( <motion.div
            exit={{opacity: 0, transition: {duration: 1.3}}}
        > <h1>Instagram!</h1> </motion.div>  );
    }
}
 
export default Instagram;