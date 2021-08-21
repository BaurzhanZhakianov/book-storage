import {ChangeEvent, FC} from "react";

type SelectProps = {
    label:string,
    options: string[],
    changeOption(option: string):void,
    value: string
}
const Select:FC<SelectProps> = ({label,options, changeOption, value}) => {
    const onChangeOption = (e:ChangeEvent<HTMLSelectElement>) => {
        changeOption(e.target.value)
    }
    return (
        <>
            <label htmlFor="exampleSelect1" className="form-label">{label}</label>
            <select className="form-select" id="exampleSelect1" onChange={onChangeOption} value={value}>
                {
                    options.map((option, index) => {
                        return <option key={index} value={option}>{option.charAt(0) + option.slice(1)}</option>
                    })
                }
            </select>
        </>
    )
}

export default Select;
