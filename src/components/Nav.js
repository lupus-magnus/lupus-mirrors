import styles from './Nav.module.css';
import React, { Component } from 'react';
import switchOn from '../imgs/switchOn2.png';
import switchOff from '../imgs/switchOff.png';

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
            <div className={styles.navbar}>
                <div className={styles.switchContainer}>
                    <p>Remote Control: {this.state.displayRemote ? 'ON' : 'OFF'}</p>
                    <img alt='switch' onClick={() => this.toggleDisplay()} className={styles.switch} src={this.state.displayRemote ? switchOn : switchOff }/>
                </div>
            
            </div>
         );
    }
}
 
export default Nav;