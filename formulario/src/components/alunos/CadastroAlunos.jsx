import { useState } from "react";

const CadastradoAlunos = () => {
  const [nomeAluno, setNomeAluno] = useState("");
  const [matricula, setMatricula] = useState("");
  const [telefone, setTelefone] = useState("");
  const [curso, setCurso] = useState("");
  const [notas, setNotas] = useState("");

  const cadastrar = (event) => {
    event.preventDefault();

    // Exibir no console os dados cadastrados
    console.log({
      nomeAluno,
      matricula,
      telefone,
      curso,
      notas,
    });

    // Limpar formulário após cadastro
    setNomeAluno("");
    setMatricula("");
    setTelefone("");
    setCurso("");
    setNotas("");
  };

  return (
    <div className="container">
      <h2>Cadastrar Aluno</h2>
      <form onSubmit={cadastrar}>
        <div className="input-field">
          <input
            type="text"
            placeholder="Nome do Aluno"
            required
            value={nomeAluno}
            onChange={(e) => setNomeAluno(e.target.value)}
          />
        </div>

        <div className="input-field">
          <input
            type="text"
            placeholder="Matrícula"
            required
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
          />
        </div>

        <div className="input-field">
          <input
            type="tel"
            placeholder="Telefone de Contato"
            required
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>

        <div className="input-field">
          <input
            type="text"
            placeholder="Curso"
            required
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
          />
        </div>

        <div className="input-field">
          <input
            type="number"
            placeholder="Notas"
            required
            value={notas}
            onChange={(e) => setNotas(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default CadastradoAlunos;
