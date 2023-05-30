import { useState , useEffect } from "react";

const atividadeInicial = {
  id: 0,
  titulo: "",
  descricao: "",
  prioridade: 0,
};

export default function AtividadeForm(props) {
  const [atividade, setAtividade] = useState(atividadeAtual());

  useEffect(() => {
    if (props.atividadeSelecionada.id !== 0)
      setAtividade(props.atividadeSelecionada);
  }, [props.atividadeSelecionada]);

  const inputTextHandler = (e) => {
    const { name, value } = e.target;
    setAtividade({ ...atividade, [name]: value });
  };

  const handleCancelar = (e) => {
    e.preventDefault();
    // cancelarAtividade();
    setAtividade(atividadeInicial);
  }

  function atividadeAtual() {
    if (props.atividadeSelecionada.id !== 0) {
      return props.atividadeSelecionada;
    } else {
      return atividadeInicial;
    }
  }

  return (
    <>
    <h1>Atividade {atividade.id !== 0 ? atividade.id : ''} </h1>
    <form className="row g-3">
      <div className="col-md-6">
        <label className="form-label">Título</label>
        <input
          id="titulo"
          name="titulo"
          value={atividade.titulo}
          onChange={inputTextHandler}
          type="text"
          className="form-control"
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">Prioridade</label>
        <select
          name="prioridade"
          value={atividade.prioridade}
          onChange={inputTextHandler}
          id="prioridade"
          className="form-select"
        >
          <option defaltvalue="0">Selecione...</option>
          <option value="1">Baixa</option>
          <option value="2">Normal</option>
          <option value="3">Alta</option>
        </select>
      </div>

      <div className="col-md-12">
        <label className="form-label">Descrição</label>
        <textarea
          id="descricao"
          name="descricao"
          value={atividade.descricao}
          onChange={inputTextHandler}
          type="text"
          className="form-control"
        />
      </div>
      <hr />

      <div className="col-12">
        {atividade.id === 0 ? (
          <button
            className="btn btn-outline-secondary"
            onClick={props.addAtividade}
          >
            <i className="fas fa-plus me-2"></i> Atividade
          </button>
        ) : (
          <>
            <button
              className="btn btn-outline-success me-2"
              type="submit"
            >
              <i className="fas fa-plus me-2"></i> Salvar
            </button>

            <button
              className="btn btn-outline-warning"
              onClick={handleCancelar}
            >
              <i className="fas fa-plus me-2"></i> Cancelar
            </button>
          </>
        )}
      </div>
    </form>
    </>
  );
}
