// npm install react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login/index';
import Error from './pages/Error';
import TelaInicial from './pages/TelaInicial/TelaInicial';
import DadosClientes from './pages/DadosClientes/DadosClientes';
import InfoCep from './pages/DadosClientes/InfoCep';
import InfoCliente from './pages/DadosClientes/InfoCliente';
import ValidaEmail from './pages/DadosClientes/ValidaEmail';
import ResMesa from './pages/ResMesa/ResMesa';
import RotaEntrega from './pages/RotaEntrega/RotaEntrega';


function RoutesApp(){
  return(
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="*" element={ <Error/> } />
        <Route path="/TelaInicial" element={ <TelaInicial/> } />
        <Route path="/DadosClientes" element={ <DadosClientes/> } />
        <Route path="/InfoCep" element={ <InfoCep/> } />
        <Route path="/InfoCliente" element={ <InfoCliente/> } />
        <Route path="/ValidaEmail" element={ <ValidaEmail/> } />
        <Route path="/ResMesa" element={ <ResMesa/> } />
        <Route path="/RotaEntrega" element={ <RotaEntrega/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;