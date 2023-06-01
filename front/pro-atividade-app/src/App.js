import { useState , useEffect } from "react";
import "./App.css";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";



function App() {
  const [index, setIndex] = useState(0);
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({id:0});

  useEffect(() => {
    atividades.length <= 0 ? setIndex(1) : setIndex(Math.max.apply(Math,atividades.map((item) => item.id))+1);
  },[atividades])

  function addAtividade(ativ) {
    
    
    setAtividades([...atividades, { ...ativ , id: index }]);
  }

  function cancelarAtividade() {
    setAtividade({ id: 0 });
  } 

  function atualiarAtividade(ativ){
    setAtividades(atividades.map(item => item.id === ativ.id ? ativ : item))
    setAtividade({id:0})
  }

  function deletarAtividade(id){
     const atividadesFiltrada = atividades.filter((item) => item.id !== id);
      setAtividades([...atividadesFiltrada]);

  }

  function pegarAtividade(id){
    const atividade = atividades.filter((item) => item.id === id);
    //setAtividade([...atividade]);
    setAtividade(atividade[0]);
  }
  

  
  return (
    <>
      <AtividadeForm 
      addAtividade={addAtividade}
      cancelarAtividade={cancelarAtividade}
      atualiarAtividade={atualiarAtividade}
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
