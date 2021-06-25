import {BrowserRouter, Route} from 'react-router-dom';

import {Home} from './pages/Home';
import {NewRoom} from './pages/NewRoom';

import { AuthContextProvider } from './contexts/AuthContext';

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        {/* a propriedade 'exact' garante que o path de acesso tem que ser idêntico */}
        <Route path="/" exact component={Home}/>
        <Route path="/rooms/new" component={NewRoom}/>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;

// **Sobre rotas**
// Para as rotas, será instala a biblioteca react-router-dom através do comando:
// yarn add react-router-dom
// 
// esse pacote não foi feito em Typescrypt, por isso
// é preciso criar um pacote de terceiros da seguinte forma:
//yarn add @types/react-router-dom
//
//Depois de @types é que fica o nome da biblioteca