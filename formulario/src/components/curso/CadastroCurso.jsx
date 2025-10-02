import { useState } from "react";

const CadastradoCurso = () => {

    const [nomeEscola, setNomeEscola] = useState("");
    const [endereco, setEndereco] = useState("");
    const [telefone, setTelefone] = useState("");
    const [nomeCurso, setNomeCurso] = useState("");
    const [descricao, setDescricao] = useState("");

const cadastrar = (event) => {

    event.preventDefault();

    console.log("cadastrado: ", { nomeEscola, endereco, telefone, nomeCurso,descricao });

}

return (

    <div typeof="container">
        <form onSubmit={cadastrar}>
        <p>Cadastrar Curso</p>

        <div className="input-field-nomeEscola">
        <input
        type="text"
        placeholder="Nome Escola"
        required
        value={nomeEscola}
        onChange={(e) => setNomeEscola(e.target.value)} />
        </div>

        <div className="input-field-endereco">
        <input
        type="text"
        placeholder="Endereco"
        required
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)} />
        </div>

        <div className="input-field-Telefone">
        <input
        type="text"
        placeholder="Telefone"
        required
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)} />
        </div>

        <div className="input-field-nomeCurso">
        <input
        type="text"
        placeholder="Nome Curso"
        required
        value={nomeCurso}
        onChange={(e) => setNomeCurso(e.target.value)} />
        </div>

        <div className="input-field-descCurso">
        <input
        type="text"
        placeholder="Descrição Curso"
        required
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)} />
        </div>

        <div>
            <button type="submit">Cadastrar</button>
        </div>


    </form>
    </div>


);

}

export default CadastradoCurso;