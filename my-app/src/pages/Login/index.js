
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
        ππͺ  Login Mata Fome  πͺπ
        </div>  

        <br/><br/>

        <div class = 'descricaoLogin'>  
          <label>UsuΓ‘rio: <input type="text" name="name" /></label>     
          <br/><br/> 
          <label>Senha: <input type="password" name="name" /></label>
        </div>

        <br/><br/>

        <div class = 'link'>
          π <Link to="/TelaInicial">Confirma</Link> π
          <br/>
          π­ <Link to="/Error">Esqueci a senha</Link> π­
        </div>
        

        
        <center>
          <div class = 'rodape'>
            Β©2022 Antonio Oliveira - Gustavo Salmazo
          </div>      
        </center>
    </div>
    
  );
}

export default Login;