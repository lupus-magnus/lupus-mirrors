import React, { Component } from 'react';
import style from './facebookpage.module.css';

class FacebookPage extends Component {
    
    render() { 
        return ( 
            <div className={style.main}>
                

                <div className={style.left}>
                    <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" height='106px' alt="" />
                    <h2 className={style.welcome_text}>O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</h2>
                </div>
                
                <div className={style.right}>
                    <div className={style.form_box}>
                        <form className={style.form}>
                            <input className={style.inputbox} type="text" placeholder="Email ou telefone" />
                            <input className={style.inputbox} type='password' placeholder="Senha" />
                            <br />
                            <button className={style.submit_btn} type="submit">Entrar</button>
                            <a className={style.forgot_pwd} href='google.com'>Esqueceu a senha?</a>
                            <div className={style.line}></div>
                            <a className={style.new_acc} href='google.com'> Criar nova conta </a>
                        </form>
                    </div>
                <div className={style.page_text}> Criar uma página para uma celebridade, banda ou empresa.</div>
                </div> 
            </div>
        );
    }
}
 
export default FacebookPage;