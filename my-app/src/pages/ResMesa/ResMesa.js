import {Link} from 'react-router-dom';


function ResMesa(){
  return (
    <div>
      <div class='clientesTitulo'>
      RESERVA !!!
      </div> 

      <br/>

      <div  class='menuClientes'>
        <Link to="/TelaInicial"> _TelaInicial_ </Link>
        <Link to="/DadosClientes"> _Clientes_ </Link>
        <Link to="/RotaEntrega"> _Rota_ </Link>
      </div>

    </div>


    
  );
}

export default ResMesa;
