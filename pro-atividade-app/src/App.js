import { useState } from "react";
import "./App.css";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";

let initialState = [
  {
    id: 1,
    prioridade: '1',
    titulo: "Primeiro Titulo",
    descricao: "Primeira atividade",
  },
  {
    id: 2,
    prioridade: '2',
    titulo: "Segundo Titulo",
    descricao: "Segunda atividade",
  },
];

function App() {
  const [atividades, setAtividades] = useState(initialState);
  const [atividade, setAtividade] = useState({});

  function addAtividade(e) {
    e.preventDefault();

    const atividade = {
      id: document.getElementById("id").value,
      prioridade: document.getElementById("prioridade").value,
      titulo: document.getElementById("titulo").value,
      descricao: document.getElementById("descricao").value,
    };

    console.log(atividades);
    setAtividades([...atividades, { ...atividade }]);
  }

  function deletarAtividade(id){
     const atividadesFiltrada = atividades.filter((item) => item.id !== id);
      setAtividades([...atividadesFiltrada]);

  }

  function pegarAtividade(id){
    const atividade = atividades.filter((item) => item.id === id);
    setAtividade([...atividade]);
  }

  
  return (
    <>
      <AtividadeForm 
      addAtividade={addAtividade}
      atividadeSelecionada={atividade}
      atividades={atividades}
      />
      <AtividadeLista  
      atividades={atividades} 
      deletarAtividade={deletarAtividade}
      pegarAtividade={pegarAtividade}
      />
    </>
  );
}

export default App;
