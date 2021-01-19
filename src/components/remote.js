import styles from './remote.module.css'
import React, { Component } from 'react';
import { motion } from 'framer-motion';
import mirrorImage from '../imgs/logo2.png';
import netflix from '../imgs/netflix.png';
import facebook from '../imgs/facebook.png';
import instagram from '../imgs/instagram.png';
import { Link } from 'react-router-dom';
 
class Remote extends Component {
    render() { 
        return ( 
            <motion.div className={styles.remoteControl} animate={{opacity: 1}} initial={{opacity: 0}} transition={{delay: 2, duration: 3}}>
                <div className={styles.remoteContainer}>
                    <img className={styles.mirrorpng} src={mirrorImage} alt='mirror.png' />
                    <div className={styles.options}>
                        <Link to='/facebook'>
                            <img className={styles.socialLinks} src={facebook} alt='social media link' />
                        </Link>
                        
                        <Link to='/instagram'><img className={styles.socialLinks} src={instagram} alt='social media link' /></Link>
                        <Link to='/netflix'><img className={styles.socialLinks} src={netflix} alt='social media link' /></Link>
                    </div>
                </div>    
            </motion.div>
            
         );
    }
}
 
export default Remote;