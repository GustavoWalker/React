import {Link} from 'react-router-dom';


function RotaEntrega(){
  return (
    <div>
      <div class='clientesTitulo'>
        ENTREGA !!!
      </div>      
      <br/>
      <div  class='menuClientes'>
        <Link to="/TelaInicial"> _TelaInicial_ </Link>
        <Link to="/ResMesa"> _Reserva_ </Link>
        <Link to="/DadosClientes"> _Clientes_ </Link>
      </div>              
    </div>    
  );
}

export default RotaEntrega;