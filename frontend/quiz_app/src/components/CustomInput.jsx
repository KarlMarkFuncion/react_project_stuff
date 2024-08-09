import Button from "./Button"

const CustomInput = ({label, type, name, required = false, removable=false}) => {
    return <>
        <div className="flex flex-col gap-1 mb-2">
            <label className="text-gray-500">
                {label}
                {
                    required ?
                    <span className="text-red-500">
                    *
                    </span>
                    :
                    ""
                }
                
            </label>
            <input 
                required={required}
                className="border py-2 px-3 rounded-md" name={name} type={type} />
            
            {
                removable ? 
                <Button color="danger" name="remove answer" />
                :
                null
            }
        </div>
    </>
}

export default CustomInput