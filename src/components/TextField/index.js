import "./TextField.css"

const TextField = (props) => {

    const onWritedValue = (event) => {
        props.onChangedValue(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input onChange={onWritedValue} required={props.required} placeholder={props.placeholder} />
        </div>
    )
}

export default TextField