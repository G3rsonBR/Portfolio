import './App.css';
import { Header } from './container/Header';
import { Home } from './container/Home.js';
import { About } from './container/About.js';

export default function App() { 

  return (
    <div className="main">
     <Header></Header>
      <main>
        <Home></Home>
        <About></About>
        <div className='tech'>Tecnologias</div>
        <div className='contacts'>Contatos</div>
      </main>
    </div>
  );
}
