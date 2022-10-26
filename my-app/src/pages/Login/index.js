
import {Link} from 'react-router-dom';
import './index.css';
import logo from './logo.png';

function Login() {    

  return (
    <div>      
        <center>
          <img src={logo} className="App-logo" alt="logo" />
        </center>
        
        <br/><br/>

        <div class='titulo'>
        🍔🔪  Login Mata Fome  🔪🍔
        </div>  

        <br/><br/>

        <div class = 'descricaoLogin'>  
          <label>Usuário: <input type="text" name="name" /></label>     
          <br/><br/> 
          <label>Senha: <input type="password" name="name" /></label>
        </div>

        <br/><br/>

        <div class = 'link'>
          🍟 <Link to="/TelaInicial">Confirma</Link> 🍟
          <br/>
          🌭 <Link to="/Error">Esqueci a senha</Link> 🌭
        </div>
        

        
        <center>
          <div class = 'rodape'>
            ©2022 Antonio Oliveira - Gustavo Salmazo
          </div>      
        </center>
    </div>
    
  );
}

export default Login;