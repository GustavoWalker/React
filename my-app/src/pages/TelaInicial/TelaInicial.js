import {Link} from 'react-router-dom';
//import Iframe from 'react-iframe';
import { useState, useEffect } from 'react';
import logo_facebook from './logo_facebook.png';
import logo_instagram from './logo_instagram.png';

function TelaInicial(){

  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([]);

  useEffect(()=>{
    
    const tarefasStorange = localStorage.getItem('tarefas');

    if(tarefasStorange){
      setTarefas(JSON.parse(tarefasStorange))
    }
    
  }, []);

  useEffect(()=>{
     //alert("Adicionando Item")
    localStorage.setItem('tarefas',JSON.stringify(tarefas));
  },[tarefas]);

  function handleRegister(e){
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput('');

  }

  function handleDelete(e){
    e.preventDefault();

    setTarefas([]);
    localStorage.setItem('tarefas',JSON.stringify(tarefas));
    

  }

  return (
    <div>
      <div class='bemVindoTitulo'>
        SEJA BEM VINDO(A) !!!
      </div> 

      <br/>

      <div class='menuTelaInicial'>
        <Link to="/ResMesa">  _Reserva_ </Link>
        <Link to="/DadosClientes"> _Clientes_ </Link>
        <Link to="/RotaEntrega"> _Rota_ </Link>
      </div>

      <img src={logo_facebook} className="logoFacebook" alt="logo_facebook" />
			<img src={logo_instagram} className="logoInstagram" alt="logo_instagram" />   

      <br/><br/><br/><br/>
      
      <br/><br/><br/><br/>

      <form>
        <center>
          <label class='nomeTarefa'>📋 📅 Nome da tarefa: 📅 📋</label>
          <br/><br/>

          <input value={input} onChange={ (e) => setInput(e.target.value) }/>
          
          <br/>

          <button type="submit" onClick={handleRegister}>Adicionar</button>
          <button type="resert" onClick={handleDelete}>Limpar</button>
        </center>
      </form>

      <br/><br/>

      <ul>
        {tarefas.map( tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      
      <center>
          <div class = 'rodape'>
          ©2022 Antonio Oliveira - Gustavo Salmazo            
          </div>      
        </center>
    </div>    
  );
}

export default TelaInicial;