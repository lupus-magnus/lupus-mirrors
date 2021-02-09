import React, { Component } from 'react';
import style from './Home.module.css';
import illustration from '../imgs/mirror-purple.png';
import { motion } from 'framer-motion';
//import Remote from './remote'

class Home extends Component {
    
    render() { 
        return (
        <motion.div
        animate={{opacity:1}}
        initial={{opacity:0}}
        transition={{duration:3}}
        exit={{opacity: 0, transition: {duration: 1.3}}}
        className={style.main}>
            
            <div className={style.imgContainer}>
                {/* <Remote /> */}
                <motion.img className={style.illustration} alt='illustration' src={illustration}
                    animate={{x:0}}
                    initial={{x:'200vw'}}
                    transition={{ease: 'easeOut', duration: 1.3}}
                    exit={{opacity: 0, transition: {duration: 1.3}}}
                />

                <motion.h1 className={style.title}
                    animate={{opacity:1}}
                    initial={{opacity:0}}
                    transition={{ease: 'easeIn', duration:0.8, delay: 1.3}}
                
                    >Mirrors
                </motion.h1>
                <motion.p className={style.credits} animate={{opacity:1}}
                    initial={{opacity:0}}
                    transition={{ease: 'easeIn', duration:0.8, delay: 1.3}}>Made by @LupusMagnus.
                </motion.p>
                
            </div>
            
            
        </motion.div>
        );
    }
}
 
export default Home;