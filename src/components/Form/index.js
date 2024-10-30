import "./Form.css"
import TextField from "../TextField"
import DropDownList from "../DropDownList"
import Button from "../Button"

const Form = () => {

    const teams = [
        "Programação",
        "Front-End",
        "Data Science",
        "UX e Design",
        "Devops",
        "Mobile",
        "Inovação e Gestão"
    ]
    
    const onSave = (event) => { 
        event.preventDefault() 
        console.log("Form foi submetido") 
    }

    return (
        <section className="formContainer">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField required={true} label="Nome" placeholder="Digite seu nome" />
                <TextField required={true} label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropDownList required={true} label="Time" items={teams} />
                <Button text="Criar Card"/>
            </form>
        </section>
    )
}

export default Form