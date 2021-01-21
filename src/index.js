import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
//import FacebookPage from './components/clones/facebook';

ReactDOM.render(<React.StrictMode><Router><App /></Router></React.StrictMode>, document.getElementById('root'))

//<React.StrictMode><Router><App /></Router></React.StrictMode>
//Inserir trecho acima no lugar de facebook após os testes e descomentar tudo.
//<FacebookPage />