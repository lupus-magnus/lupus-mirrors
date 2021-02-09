import React, { Component } from 'react';
import styles from './instagrampage.module.css';
import phones from '../../imgs/phones.png';
import instagramBrand from '../../imgs/name.png';
import appstore from '../../imgs/appstore.png';
import google from '../../imgs/google.png';

class InstagramPage extends Component {
    render() { 
        return ( 
            <div className={styles.main} height='650px'>
                <div className={styles.left}>
                    <img height='90%' className={styles.phones} src={phones} alt="phones" />
                </div>
                <div className={styles.right}>
                    <div className={styles.formBox}>
                        <img width="175px"src={instagramBrand} alt="" />
                        <input type="text" placeholder="Telefone, nome de usuário ou email" />
                        <input type="password" placeholder="Senha" name="pwd" className={styles.pwd} />
                        <div>
                            <div className={styles.login}>Entrar</div>
                        </div>
                        <div className={styles.divisor}>
                            <div className={styles.line}></div>
                            <div className={styles.ou}>OU</div>
                            <div className={styles.line}></div>
                        </div>
                        <a href="/">Entrar com o Facebook</a>
                        <p><a href="/">Esqueceu a senha?</a></p>
                    </div>
                    <div className={styles.signup}>
                        Não tem uma conta? <a style={{color: '#0095f6'}} href='/'>Cadastre-se!</a>
                    </div>
                    <div className={styles.app}>
                        <p>Obtenha o aplicativo.</p>
                        <div className={styles.appImages}>
                            <img src={appstore} height="40px" alt="appstore" />
                            <img src={google} alt="playstore" height="40px" />
                        </div>
                        
                    </div>

                </div>
            </div>
         );
    }
}
 
export default InstagramPage; 