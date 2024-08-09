const CustomSelectInput = ({values, label, name}) => {
    return <>
        <div className="flex flex-col gap-1 mb-2">
        <label className="text-gray-500">
            {label}
        </label>
            <select name={name} className="px-3 py-2 border rounded-md w-full">
                {
                    values.map( (item, index) => (
                        <option key={index} value={item.value}>{item.value}</option>
                    ))
                }
            </select>
        </div>
    </>
}

export default CustomSelectInput;