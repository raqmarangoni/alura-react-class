import Banner from "./components/Banner";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [collaborators, setCollaborators] = useState([])
  const onAddCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]) //agora temos um novo array, espalhamos os colaboradores antigos e adicionando um novo colaborador no final
  }

  return (
    <div className="App">
      <Banner/>
      <Form  onRegisteredCollaborator={collaborator => onAddCollaborator(collaborator)}/>
    </div>
  );
}

export default App;
