import { Segment } from 'semantic-ui-react';
import './App.css';
import FormEntregador from './views/entregador/FormEntregador.jsx'

function App() {
  return (
  <div className="App">
   
    <FormEntregador />

    
     <div style={{marginTop: '6%'}}>
       <Segment vertical color='grey' size='tiny' textAlign='center'>
         &copy; 2024 - Projeto WEB III juliana - IFPE Jaboatão dos Guararapes
       </Segment>
     </div>


  </div>
  );
}

export default App;
