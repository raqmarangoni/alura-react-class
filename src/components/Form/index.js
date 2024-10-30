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
    
    return (
        <section className="formContainer">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField label="Nome" placeholder="Digite seu nome" />
                <TextField label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropDownList label="Time" items={teams} />
                <Button text="Criar Card"/>
            </form>
        </section>
    )
}

export default Form