import styles from './Nav.module.css';
import React, { Component } from 'react';
import switchOn from '../imgs/switchOn2.png';
import switchOff from '../imgs/switchOff.png';
import { motion } from 'framer-motion';



class Nav extends Component {
    state = { displayRemote: this.props.display }
    
    toggleDisplay(){
        this.setState({displayRemote: !this.state.displayRemote})
        this.props.toggle();
    }
    
    render() { 
        console.log('props:',this.props)
        console.log('state:',this.state)
        return ( 
            <motion.div className={styles.navbar}
                initial={{alpha: 1}}
                animate={{opacity: 0.3}}
                transition={{delay: 2.5, duration: 1}}
                whileHover={{opacity: 1}}
            >
                <div className={styles.switchContainer}>
                    <motion.p className={styles.status}
                    animate={{
                        scale: [1.1, 1, 1.1,1, 1.1, 1],
                        textShadow: '0 0 10px #e6ae60'
                    }}
                    transition={{delay: 1.5}}
                    >Remote Control: {this.state.displayRemote ? 'ON' : 'OFF'}</motion.p>
                    <img alt='switch' onClick={() => this.toggleDisplay()} className={styles.switch} src={this.state.displayRemote ? switchOn : switchOff }/>
                </div>
            
            </motion.div>
         );
    }
}
 
export default Nav;