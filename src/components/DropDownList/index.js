const DropDownList = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <select>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDownList