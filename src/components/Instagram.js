import React, { Component } from 'react';
import InstagramPage from './clones/instagramPage';
import { motion } from 'framer-motion';

class Instagram extends Component {
    state = {  }
    render() { 
        return ( <motion.div
            exit={{opacity: 0, transition: {duration: 1.3}}}
        >
            <InstagramPage />
        </motion.div>  );
    }
}
 
export default Instagram;