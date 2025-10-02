import { useState } from "react";
import "./CadastroPessoa.css";

const CadastroPessoa = ()  => {

    const [nome, setName] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");

    const cadastrar = (event) => {

    event.preventDefault();
    console.log("Cadastrado: ", { nome, dataNascimento, telefone, endereco });

    }

return (
    
    <div className="container">
        <form onSubmit={cadastrar}>
        <p>Cadastrar Pessoa</p>
        <div className="input-field-nome">
        <input
        type="text"
        placeholder="Nome"
        required
        value={nome}
        onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="input-field-dataNascimento">
        <input
        type="date"
        placeholder="Data Nascimento"
        required
        value={dataNascimento}
        onChange={(e) => setDataNascimento(e.target.value)} />
        </div>

        <div className="input-field-Telefone">
        <input
        type="text"
        placeholder="Telefone"
        required
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)} />
        </div>

        <div className="input-field-endereco">
        <input
        type="text"
        placeholder="Endereco"
        required
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)} />
        </div>

        <div>
            <button type="submit">Cadastrar</button>
        </div>

    </form>
    </div>

);

}

export default CadastroPessoa;