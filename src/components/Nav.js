import styles from './Nav.module.css';
import React, { Component } from 'react';
import switchOn from '../imgs/switchOn2.png';
import switchOff from '../imgs/switchOff.png';
import { motion } from 'framer-motion';
import logo from '../imgs/mirror_logo.png';


class Nav extends Component {
    state = { displayRemote: this.props.display }
    
    toggleDisplay(){
        this.setState({displayRemote: !this.props.display})
        this.props.toggle();
    }
    
    render() { 
        //this.setState({displayRemote: this.props.display})
        console.log('props:',this.props)
        console.log('state:',this.state)
        return ( 
            <motion.div onHoverStart={() => {this.setState({displayRemote: this.props.display})}} className={styles.navbar}
                initial={{alpha: 1}}
                animate={{opacity: 0.3}}
                transition={{delay: 2.5, duration: 1}}
                whileHover={{opacity: 1}}
            >
                <img style={{marginLeft: '20px'}} alt='logo' height={'75%'} src={logo} />
                <div className={styles.switchContainer}>
                    <motion.p className={styles.status}
                    animate={{
                        scale: [1.1, 1, 1.1,1, 1.1, 1],
                        textShadow: '0 0 10px #e6ae60'
                    }}
                    transition={{delay: 1.5}}
                    >Remote Control: {this.props.display ? 'ON' : 'OFF'}</motion.p>
                    <img alt='switch' onClick={() => this.toggleDisplay()} className={styles.switch} src={this.props.display ? switchOn : switchOff }/>
                </div>
            
            </motion.div>
         );
    }
}
 
export default Nav;