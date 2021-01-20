import React, { Component } from 'react';
import Remote from './remote';
import { motion } from 'framer-motion';

class Facebook extends Component {
    state = {  }
    render() { 
        return ( <motion.div
            exit={{opacity: 0, transition: {duration: 1.3}}}
        ><h1>Facebook!</h1> <Remote /></motion.div>  );
    }
}
 
export default Facebook;