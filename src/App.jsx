import './App.css'
import CadastroPessoa from './components/pessoa/CadastroPessoa';
import CadastroProduto from "./components/produto/CadastroProduto";
import CadastroCurso from "./components/curso/CadastroCurso";
import CadastroNotas from "./components/notas/CadastroNotas";
import CadastrarAluno from "./components/alunos/CadastroAlunos";

function App() {
  return (
    <div className="App">
      <CadastroProduto/>
      <CadastroPessoa/>
      <CadastroCurso/>
      <CadastroNotas/>
      <CadastrarAluno/>
    </div>
  )
}

export default App
