import "./Form.css"
import TextField from "../TextField"
import DropDownList from "../DropDownList"
import Button from "../Button"
import { useState } from "react"

const Form = (props) => {

    const teams = [
        "Programação",
        "Front-End",
        "Data Science",
        "UX e Design",
        "Devops",
        "Mobile",
        "Inovação e Gestão"
    ]
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    const onSave = (event) => {
        event.preventDefault()
        props.onRegisteredCollaborator({
            name: name,
            position: position,
            image: image,
            team: team
        })
    }

    return (
        <section className="formContainer">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    value={name} 
                    onChangedValue={value => setName(value)} />
                <TextField 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    value={position} 
                    onChangedValue={value => setPosition(value)} />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    value={image} 
                    onChangedValue={value => setImage(value)} />
                <DropDownList 
                    required={true} 
                    label="Time" 
                    items={teams} 
                    value={team} 
                    onChangedValue={value => setTeam(value)} />
                <Button text="Criar Card" />
            </form>
        </section>
    )
}

export default Form