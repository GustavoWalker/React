import {Link} from 'react-router-dom';
import { useState } from "react";
import React from 'react';
import logo_facebook from './logo_facebook.png';
import logo_instagram from './logo_instagram.png';

var armazenaCep; {/*VARIÁVEL DE ARMAZENAMENTO DE CEP*/}

function DadosClientes(){

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [num, setNum] = useState('');  
  const [user, setUser] = useState({});

  function register(e){
    e.preventDefault();
    alert("Cliente localizado.");

    setUser({
      nome: nome,
      email: email,
      cep: cep,
      num: num
    })
  }

  return (
    <div>
      <div class='clientesTitulo'>
        CLIENTES !!!
      </div> 

      <br/>

      <div class='menuClientes'>
        <Link to="/TelaInicial"> _TelaInicial_ </Link>
        <Link to="/ResMesa"> _Reserva_ </Link>
        <Link to="/RotaEntrega"> _Rota_ </Link>
      </div>

      <img src={logo_facebook} className="logoFacebook" alt="logo_facebook" />
			<img src={logo_instagram} className="logoInstagram" alt="logo_instagram" />   
      
      <br/><br/><br/><br/>            

      <div>
        <h1>Buscar Cadastro de Clientes:</h1>
        <form onSubmit={register}>
          <center>
            <label class='nomeTarefa'> Nome: </label>
            <input placeholder="Digite o nome" value={nome} onChange={(e)=> setNome(e.target.value)}/>
            <br/>
            <Link to="/InfoCliente"> Clientes Cadastrados </Link>
            
            <br /><br />
            
            <label class='nomeTarefa'> E-mail: </label>
            <input placeholder="Digite o e-mail" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            
            <br /><br />

            <label class='nomeTarefa'> CEP: </label>
            <input placeholder="Digite o CEP" value={cep} onChange={(e)=> setCep(e.target.value)}/>
                                    
            <br /><br />
            
            <label class='nomeTarefa'> Número Residência: </label>
            <input placeholder="Digite o número" value={num} onChange={(e)=> setNum(e.target.value)}/>
            
            <br /><br />

            <button type="submit">Buscar</button>
          </center>   
        </form>

        <h1> Retorno de Dados:</h1>
        <center>
          <p class='nomeTarefa'>Nome: {user.nome}</p>          

          <p class='nomeTarefa'>E-mail: {user.email}</p>
          <Link to="/ValidaEmail">Valida Plataforma E-mail </Link>

          
          <p class='nomeTarefa'>CEP: {user.cep}</p>   
          <Link to="/InfoCep">Verifica Endereço </Link>
          

          <p class='nomeTarefa'>Número Residência: {user.num}</p>
        </center>      
      </div>
    </div>
  );
}

export default DadosClientes;

function guardaCep(cep){
  localStorage.setItem("armazena", cep);
}

//localStorage.getItem("armazena");