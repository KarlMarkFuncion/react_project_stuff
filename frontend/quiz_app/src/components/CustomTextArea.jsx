const CustomTextArea = ({label, name, required=false}) => {
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
            <textarea 
                required={required}
                className="border py-2 px-3 rounded-md resize-none" 
                name={name} />
        </div>
    </>
}

export default CustomTextArea;