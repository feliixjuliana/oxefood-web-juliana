import { Segment } from 'semantic-ui-react';
import './App.css';
import FormEntregador from './views/entregador/FormEntregador.jsx'
import FormCliente from './views/cliente/FormCliente.jsx';
import FormProduto from './views/produto/FormProduto.jsx';
import Rotas from './Rotas';

function App() {
  return (
  <div className="App">
   
    <Rotas />

    
     <div style={{marginTop: '6%'}}>
       <Segment vertical color='grey' size='tiny' textAlign='center'>
         &copy; 2024 - Projeto WEB III juliana - IFPE Jaboatão dos Guararapes
       </Segment>
     </div>


  </div>
  );
}

export default App;
