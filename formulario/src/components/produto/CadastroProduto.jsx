import { useState } from "react";
import "./CadastroProduto.css";

const CadastroProduto = ()  => {

    const [nomeProduto, setName] = useState("");
    const [precoProduto, setPrecoProduto] = useState("");
    const [dataValidade, setDataValidade] = useState("");

    const cadastrar = (event) => {

    event.preventDefault();

    console.log("Produto Cadastrado: ", { nomeProduto, precoProduto, dataValidade });

    }

return (
    
    <div className="container">
        <form onSubmit={cadastrar}>
        <p>Cadastrar Produto</p>
        <div className="input-field-produto">
        <input
        type="text"
        placeholder="Nome Produto"
        required
        value={nomeProduto}
        onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="input-field-precoProduto">
        <input
        type="number"
        min = "0.00"
        step = "0.01"
        placeholder="Money"
        required
        value={precoProduto}
        onChange={(e) => setPrecoProduto(e.target.value)} />
        </div>

        <div className="input-field-dataVencimento">
        <input
        type="date"
        placeholder="Data Vencimento"
        required
        value={dataValidade}
        onChange={(e) => setDataValidade(e.target.value)} />
        </div>


        <div>
            <button type="submit">Cadastrar</button>
        </div>

    </form>
    </div>
);

}

export default CadastroProduto;