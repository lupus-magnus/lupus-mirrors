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
        console.log('nav props:',this.props)
        console.log('nav state:',this.state)
        if(this.props.location !== "/") {
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
                            scale: [1, 1.2, 1, 1.2, 1, 1.2, 1],
                            textShadow: '0 0 10px #e6ae60'
                        
                        }}
                        transition={{delay: 1.5}}
                        >Show mirrors?: {this.props.display ? 'Yes!' : 'Nah...'}</motion.p>
                        <img alt='switch' onClick={() => this.toggleDisplay()} className={styles.switch} src={this.props.display ? switchOn : switchOff }/>
                    </div>
                
                </motion.div>
            );
        }else{
            return(
                <div className={styles.navbar}>
                    <img style={{marginLeft: '20px'}} alt='logo' height={'75%'} src={logo} />
                    <div className={styles.switchContainer}>
                        <motion.p className={styles.status}
                        animate={{
                            scale: [1, 1.5, 1, 1.8, 1],
                            textShadow: '0 0 10px #e6ae60',
                            rotateZ: [0, 0, 0, 0, 360],
                            color: ['#fff', '#e6ae60', '#fff', '#e6ae60','#fff']
                            
                        }}
                        transition={{delay: 2, duration: 1.3}}
                        >Show mirrors?: {this.props.display ? 'Yes!' : 'Nah...'}</motion.p>
                        <img alt='switch' onClick={() => this.toggleDisplay()} className={styles.switch} src={this.props.display ? switchOn : switchOff }/>
                    </div>
                
                </div>
            )
        }
    }
}
 
export default Nav;