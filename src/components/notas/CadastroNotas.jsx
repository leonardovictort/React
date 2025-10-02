import { useState } from "react";

const CadastroNotas = () =>{

    const [nomeAluno,setNomeAluno] = useState("");
    const [nota1,setNota1] = useState("");
    const [nota2,setNota2] = useState("");
    const [nota3,setNota3] = useState("");

    const cadastrar =  (event) => {


        event.preventDefault();

        console.log(nomeAluno, nota1, nota2, nota3);

    }

    return(
       <div typeof="container">
        <p>Cadastrar Notas</p>
        <form onSubmit={cadastrar}>

        <div className="input-field-nomeAluno">
        <input
        type="text"
        placeholder="Nome Aluno"
        required
        value={nomeAluno}
        onChange={(e) => setNomeAluno(e.target.value)} />
        </div>

        <div className="input-field-nota1">
        <input
        type="number"
        placeholder="Nota 1"
        required
        value={nota1}
        onChange={(e) => setNota1(e.target.value)} />
        </div>

        <div className="input-field-nota2">
        <input
        type="number"
        placeholder="Nota 2"
        required
        value={nota2}
        onChange={(e) => setNota2(e.target.value)} />
        </div>

        <div className="input-field-nota3">
        <input
        type="number"
        placeholder="Nota 3"
        required
        value={nota3}
        onChange={(e) => setNota3(e.target.value)} />
        </div>

        <div>
        <button type="submit">Cadastrar</button>
        </div>
        
        </form>
       </div>
    );
    
}

export default CadastroNotas;