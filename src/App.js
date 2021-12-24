import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
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
   </>
  );
}

export default App;
