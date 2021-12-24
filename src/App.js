import React, { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {

  //Trabalhar com estado useState
  //Primeira posição do array é a variavel, segunda posição função responsavel por alterar dados.
  //tem que ser const
  const [counter, setCounter] = useState(0);
  const [stateButton, setStateButton] = useState(true);

  function adicionarValue() {
    setCounter(counter + 1);  
    stateButton = setStateButton(false);
  }

  function removerValue() {
    if (counter > 0) {
      setCounter(counter - 1);
    }

    if(counter - 1 == 0) {
      stateButton = setStateButton(true);
    }    
    
  }

  return (
    //jsx Javascript XML
    <>
      <Header title="AppClient (props)" subtitle="Passando propriedade! (props)" />
      <Content>
        Texto de teste para passar conteúdo para componente. (children)
      </Content>
      <Content>
        Mais um teste passando conteúdo para componente. (children)
      </Content>
      <div>
        Contador: {counter}
      </div>
      <button onClick={adicionarValue}>Adicionar</button>
      <button onClick={removerValue} disabled={stateButton} >Remover</button>
    </>
  );
}

export default App;
