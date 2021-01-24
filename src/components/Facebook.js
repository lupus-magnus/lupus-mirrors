import React, { Component } from 'react';
import Remote from './remote';
import { motion } from 'framer-motion';
//import style from '/Facebook.module.css';
import FacebookPage from './clones/facebook'


class Facebook extends Component {
    state = {  }
    render() { 
        return (
            <motion.div 
            style={{marginTop: '15%'}}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:3}}
            exit={{opacity: 0, transition: {duration: 1.3}}}>
                
                <Remote />
                <FacebookPage />
            </motion.div>  
            );
    }
}
 
export default Facebook;