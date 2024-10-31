import Banner from "./components/Banner";
import Form from "./components/Form";
import { useState } from "react";
import Team from "./components/Team";

function App() {
  const [collaborators, setCollaborators] = useState([])
  const onAddCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]) //agora temos um novo array, espalhamos os colaboradores antigos e adicionando um novo colaborador no final
  }

  return (
    <div className="App">
      <Banner/>
      <Form  onRegisteredCollaborator={collaborator => onAddCollaborator(collaborator)}/>
      <Team name="Programação" />
      <Team name="Front-End" />
      <Team name="Data Science" />
      <Team name="UX e Design" />
      <Team name="Devops" />
      <Team name="Mobile" />
      <Team name="Inovação e Gestão" />
    </div>
  );
}

export default App;
