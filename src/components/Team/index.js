import Collaborator from "../Collaborator"
import "./Team.css"

const Team = (props) => {

    const backgroundColor = { backgroundColor: props.secondaryColor }
    const borderColor = { borderColor: props.primaryColor }

    return (
        (props.collaborators.length > 0) ? <section className="team" style={backgroundColor}>
            <h3 style={borderColor}>{props.name}</h3>
            <div className="collaborators">
                {props.collaborators.map(collaborator =>
                    <Collaborator
                        key={collaborator.nome}
                        name={collaborator.name}
                        position={collaborator.position}
                        image={collaborator.image}
                    />)}
            </div>
        </section>
        : ""
    )
}

export default Team
