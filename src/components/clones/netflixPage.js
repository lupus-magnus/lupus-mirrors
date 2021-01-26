import React, { Component } from 'react';
import styles from './netflixPage.module.css';
import netflixLogo from '../../imgs/netflixLogo.png';
import { motion } from 'framer-motion';
import backgroundImage from '../../imgs/netflixBackground.jpg'

const inputFieldHeight = '42px';

class NetflixPage extends Component {
    
    render() { 
        //document.body.style.backgroundImage = {backgroundImage};
        

        return ( 
            <motion.div className={styles.netflixPage} 
            style={{
                marginTop: '10vh',
                height: '115%',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                marginBottom: '0'    
            }}
            
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:3}}
            exit={{opacity: 0, transition: {duration: 1.3}}}
            >
                <div className={styles.blackDiv} />
                <div className={styles.main}>
                    <div className={styles.navbar}>
                        <img className={styles.logo} src={netflixLogo} width='134px' alt="netflixLogo" />
                        <a className={styles.login} href='www.netflix.com'>Entrar</a>
                    </div>
                    <div className={styles.convite}>
                        <h1>Filmes, séries e muito mais. Sem limites. </h1>
                        <h2>Assista onde quiser. Cancele quando quiser.</h2>
                        <p>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
                        <div className={styles.inputField}>
                            <input height={inputFieldHeight} className={styles.register} placeholder='Email' type="text" />
                            <a height={inputFieldHeight} href='/' className={styles.goBtn}>VAMOS LÁ {'>'} </a>
                        </div>
                    </div>
                </div>   
            </motion.div>
         );
    }
}
 
export default NetflixPage;